-- 1. Histórico preservável: user_id pode ficar nulo
ALTER TABLE public.loans ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.reservations ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.reviews ALTER COLUMN user_id DROP NOT NULL;

ALTER TABLE public.loans DROP CONSTRAINT IF EXISTS loans_user_id_fkey;
ALTER TABLE public.loans ADD CONSTRAINT loans_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.loans DROP CONSTRAINT IF EXISTS loans_registered_by_fkey;
ALTER TABLE public.loans ADD CONSTRAINT loans_registered_by_fkey
  FOREIGN KEY (registered_by) REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.reservations DROP CONSTRAINT IF EXISTS reservations_user_id_fkey;
ALTER TABLE public.reservations ADD CONSTRAINT reservations_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.reviews DROP CONSTRAINT IF EXISTS reviews_user_id_fkey;
ALTER TABLE public.reviews ADD CONSTRAINT reviews_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;

-- 2. Ligações com profiles (necessárias para os joins do painel)
ALTER TABLE public.loans DROP CONSTRAINT IF EXISTS loans_user_id_profiles_fkey;
ALTER TABLE public.loans ADD CONSTRAINT loans_user_id_profiles_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE SET NULL;
ALTER TABLE public.reservations DROP CONSTRAINT IF EXISTS reservations_user_id_profiles_fkey;
ALTER TABLE public.reservations ADD CONSTRAINT reservations_user_id_profiles_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE SET NULL;
ALTER TABLE public.reviews DROP CONSTRAINT IF EXISTS reviews_user_id_profiles_fkey;
ALTER TABLE public.reviews ADD CONSTRAINT reviews_user_id_profiles_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE SET NULL;

-- 3. Exemplares: campo de ativação separado da situação física
ALTER TABLE public.book_copies ADD COLUMN IF NOT EXISTS active boolean NOT NULL DEFAULT true;

CREATE OR REPLACE FUNCTION public.sync_book_availability(_book_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE v_total int; v_free int;
BEGIN
  SELECT count(*)::int, count(*) FILTER (WHERE status = 'disponivel' AND active)::int
    INTO v_total, v_free
  FROM public.book_copies WHERE book_id = _book_id;

  UPDATE public.books
  SET total_copies = COALESCE(v_total, 0),
      available_copies = COALESCE(v_free, 0)
  WHERE id = _book_id
    AND (total_copies IS DISTINCT FROM COALESCE(v_total, 0)
      OR available_copies IS DISTINCT FROM COALESCE(v_free, 0));
END; $function$;

CREATE OR REPLACE FUNCTION public.books_derive_counts()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE t int; f int;
BEGIN
  SELECT count(*)::int, count(*) FILTER (WHERE status = 'disponivel' AND active)::int
    INTO t, f FROM public.book_copies WHERE book_id = NEW.id;
  NEW.total_copies := COALESCE(t, 0);
  NEW.available_copies := COALESCE(f, 0);
  RETURN NEW;
END; $function$;

-- Desativar/reativar livro reflete nos exemplares (sem tocar na situação física)
CREATE OR REPLACE FUNCTION public.books_propagate_active()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  IF NEW.active IS DISTINCT FROM OLD.active THEN
    UPDATE public.book_copies SET active = NEW.active WHERE book_id = NEW.id;
    PERFORM public.sync_book_availability(NEW.id);
  END IF;
  RETURN NEW;
END; $function$;

DROP TRIGGER IF EXISTS books_propagate_active_trg ON public.books;
CREATE TRIGGER books_propagate_active_trg
AFTER UPDATE ON public.books
FOR EACH ROW EXECUTE FUNCTION public.books_propagate_active();

UPDATE public.book_copies c SET active = b.active
FROM public.books b WHERE b.id = c.book_id AND c.active IS DISTINCT FROM b.active;

-- 4. Categoria de sistema "Sem Categoria"
ALTER TABLE public.categories ADD COLUMN IF NOT EXISTS is_system boolean NOT NULL DEFAULT false;

INSERT INTO public.categories (name, slug, icon, active, is_system)
VALUES ('Sem Categoria', 'sem-categoria', 'BookOpen', true, true)
ON CONFLICT (slug) DO UPDATE SET is_system = true;

CREATE OR REPLACE FUNCTION public.protect_system_category()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
BEGIN
  IF TG_OP = 'DELETE' THEN
    IF OLD.is_system THEN
      RAISE EXCEPTION 'A categoria de sistema não pode ser excluída.';
    END IF;
    RETURN OLD;
  END IF;
  IF OLD.is_system AND (NEW.is_system = false OR NEW.slug <> OLD.slug) THEN
    RAISE EXCEPTION 'A categoria de sistema não pode ser renomeada nem desmarcada.';
  END IF;
  RETURN NEW;
END; $function$;

DROP TRIGGER IF EXISTS categories_protect_system ON public.categories;
CREATE TRIGGER categories_protect_system
BEFORE UPDATE OR DELETE ON public.categories
FOR EACH ROW EXECUTE FUNCTION public.protect_system_category();

CREATE OR REPLACE FUNCTION public.delete_category_reassign(_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE v_fallback uuid;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode gerenciar categorias.';
  END IF;
  SELECT id INTO v_fallback FROM public.categories WHERE slug = 'sem-categoria';
  IF v_fallback IS NULL THEN
    RAISE EXCEPTION 'Categoria "Sem Categoria" não encontrada.';
  END IF;
  IF _id = v_fallback THEN
    RAISE EXCEPTION 'A categoria "Sem Categoria" não pode ser excluída.';
  END IF;
  UPDATE public.books SET category_id = v_fallback WHERE category_id = _id;
  DELETE FROM public.categories WHERE id = _id;
END; $function$;

REVOKE ALL ON FUNCTION public.delete_category_reassign(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.delete_category_reassign(uuid) TO authenticated;

-- Todo livro precisa de categoria
UPDATE public.books SET category_id = (SELECT id FROM public.categories WHERE slug = 'sem-categoria')
WHERE category_id IS NULL;

-- 5. Perfil: aluno/professor não editam os próprios dados
DROP POLICY IF EXISTS profiles_update_own ON public.profiles;
CREATE POLICY profiles_update_staff ON public.profiles
FOR UPDATE TO authenticated
USING (public.is_staff(auth.uid()))
WITH CHECK (public.is_staff(auth.uid()));

-- 6. Bloquear reserva de livro desativado
CREATE OR REPLACE FUNCTION public.guard_reservation_active_book()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.books WHERE id = NEW.book_id AND active) THEN
    RAISE EXCEPTION 'Este título está indisponível para reservas.';
  END IF;
  RETURN NEW;
END; $function$;

DROP TRIGGER IF EXISTS reservations_guard_active ON public.reservations;
CREATE TRIGGER reservations_guard_active
BEFORE INSERT ON public.reservations
FOR EACH ROW EXECUTE FUNCTION public.guard_reservation_active_book();

-- 7. Retirada bloqueada para livro/exemplar desativado
CREATE OR REPLACE FUNCTION public.register_checkout(_user_id uuid, _copy_id uuid, _reservation_id uuid DEFAULT NULL::uuid)
 RETURNS uuid
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_copy public.book_copies%ROWTYPE;
  v_days integer;
  v_loan_id uuid;
  v_res_book uuid;
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
  IF NOT v_copy.active OR NOT EXISTS (SELECT 1 FROM public.books WHERE id = v_copy.book_id AND active) THEN
    RAISE EXCEPTION 'Este título está desativado; reative-o antes de emprestar.';
  END IF;
  IF v_copy.status <> 'disponivel' THEN
    RAISE EXCEPTION 'Exemplar não está disponível (situação atual: %).', v_copy.status;
  END IF;
  IF EXISTS (SELECT 1 FROM public.loans WHERE copy_id = _copy_id AND returned_at IS NULL) THEN
    RAISE EXCEPTION 'Este exemplar já possui um empréstimo ativo.';
  END IF;

  IF _reservation_id IS NOT NULL THEN
    SELECT book_id INTO v_res_book FROM public.reservations WHERE id = _reservation_id;
    IF v_res_book IS NULL THEN
      RAISE EXCEPTION 'Reserva não encontrada.';
    END IF;
    IF v_res_book <> v_copy.book_id THEN
      RAISE EXCEPTION 'O exemplar selecionado não pertence ao livro reservado.';
    END IF;
  END IF;

  SELECT COALESCE(NULLIF(value,'')::integer, 15) INTO v_days
  FROM public.system_settings WHERE key = 'loan_days';
  IF v_days IS NULL THEN v_days := 15; END IF;

  PERFORM set_config('app.copy_status_op', 'on', true);
  UPDATE public.book_copies SET status = 'emprestado' WHERE id = _copy_id;
  PERFORM set_config('app.copy_status_op', 'off', true);

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
END; $function$;

-- 8. Recalcular disponibilidade com a nova regra
DO $$
DECLARE r record;
BEGIN
  FOR r IN SELECT id FROM public.books LOOP
    PERFORM public.sync_book_availability(r.id);
  END LOOP;
END $$;