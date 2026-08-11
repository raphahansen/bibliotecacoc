-- 1. first user no longer becomes admin
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
DECLARE
  desired public.app_role;
BEGIN
  INSERT INTO public.profiles (id, full_name, email, matricula, grade)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name',''),
    COALESCE(NEW.email,''),
    NULLIF(NEW.raw_user_meta_data->>'matricula',''),
    NULLIF(NEW.raw_user_meta_data->>'grade','')
  ) ON CONFLICT (id) DO NOTHING;

  desired := COALESCE(NULLIF(NEW.raw_user_meta_data->>'role','')::public.app_role, 'aluno');

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, desired)
  ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $function$;

-- 2. link loans to physical copies
ALTER TABLE public.loans
  ADD COLUMN IF NOT EXISTS copy_id uuid REFERENCES public.book_copies(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS loans_copy_id_idx ON public.loans(copy_id);
CREATE UNIQUE INDEX IF NOT EXISTS loans_active_copy_unique
  ON public.loans(copy_id) WHERE returned_at IS NULL AND copy_id IS NOT NULL;

-- 5. keep available_copies in sync with real copies
CREATE OR REPLACE FUNCTION public.sync_book_availability(_book_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  UPDATE public.books b
  SET total_copies = GREATEST(c.total, 0),
      available_copies = GREATEST(c.free, 0)
  FROM (
    SELECT count(*) AS total,
           count(*) FILTER (WHERE status = 'disponivel') AS free
    FROM public.book_copies WHERE book_id = _book_id
  ) c
  WHERE b.id = _book_id AND c.total > 0;
END; $$;
REVOKE ALL ON FUNCTION public.sync_book_availability(uuid) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.book_copies_sync_trigger()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    PERFORM public.sync_book_availability(OLD.book_id);
    RETURN OLD;
  END IF;
  PERFORM public.sync_book_availability(NEW.book_id);
  IF TG_OP = 'UPDATE' AND NEW.book_id IS DISTINCT FROM OLD.book_id THEN
    PERFORM public.sync_book_availability(OLD.book_id);
  END IF;
  RETURN NEW;
END; $$;

DROP TRIGGER IF EXISTS book_copies_sync ON public.book_copies;
CREATE TRIGGER book_copies_sync
AFTER INSERT OR UPDATE OF status, book_id OR DELETE ON public.book_copies
FOR EACH ROW EXECUTE FUNCTION public.book_copies_sync_trigger();

-- 3. transactional checkout
CREATE OR REPLACE FUNCTION public.register_checkout(
  _user_id uuid,
  _copy_id uuid,
  _reservation_id uuid DEFAULT NULL
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  v_copy public.book_copies%ROWTYPE;
  v_days integer;
  v_loan_id uuid;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode registrar retiradas.';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = _user_id AND active) THEN
    RAISE EXCEPTION 'Leitor inválido ou inativo.';
  END IF;

  SELECT * INTO v_copy FROM public.book_copies WHERE id = _copy_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Exemplar não encontrado.';
  END IF;
  IF v_copy.status <> 'disponivel' THEN
    RAISE EXCEPTION 'Exemplar não está disponível.';
  END IF;

  SELECT COALESCE(NULLIF(value,'')::integer, 15) INTO v_days
  FROM public.system_settings WHERE key = 'loan_days';
  IF v_days IS NULL THEN v_days := 15; END IF;

  UPDATE public.book_copies SET status = 'emprestado' WHERE id = _copy_id;

  INSERT INTO public.loans (user_id, book_id, copy_id, reservation_id, due_date, registered_by, status)
  VALUES (_user_id, v_copy.book_id, _copy_id, _reservation_id,
          CURRENT_DATE + v_days, auth.uid(), 'ativo')
  RETURNING id INTO v_loan_id;

  PERFORM public.sync_book_availability(v_copy.book_id);

  IF _reservation_id IS NOT NULL THEN
    UPDATE public.reservations
    SET status = 'concluida', queue_position = NULL
    WHERE id = _reservation_id;
  END IF;

  RETURN v_loan_id;
END; $$;
REVOKE ALL ON FUNCTION public.register_checkout(uuid, uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.register_checkout(uuid, uuid, uuid) TO authenticated;

-- transactional return
CREATE OR REPLACE FUNCTION public.register_return(_loan_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  v_loan public.loans%ROWTYPE;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode registrar devoluções.';
  END IF;

  SELECT * INTO v_loan FROM public.loans WHERE id = _loan_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Empréstimo não encontrado.';
  END IF;
  IF v_loan.returned_at IS NOT NULL THEN
    RAISE EXCEPTION 'Empréstimo já devolvido.';
  END IF;

  IF v_loan.copy_id IS NOT NULL THEN
    UPDATE public.book_copies SET status = 'disponivel' WHERE id = v_loan.copy_id;
  END IF;

  UPDATE public.loans
  SET status = 'devolvido', returned_at = now()
  WHERE id = _loan_id;

  PERFORM public.sync_book_availability(v_loan.book_id);
END; $$;
REVOKE ALL ON FUNCTION public.register_return(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.register_return(uuid) TO authenticated;

-- initial sync for all books that have copies
UPDATE public.books b
SET total_copies = c.total, available_copies = c.free
FROM (
  SELECT book_id, count(*) AS total,
         count(*) FILTER (WHERE status = 'disponivel') AS free
  FROM public.book_copies GROUP BY book_id
) c
WHERE b.id = c.book_id;