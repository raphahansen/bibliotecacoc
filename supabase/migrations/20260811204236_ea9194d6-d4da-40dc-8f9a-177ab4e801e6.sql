-- 1) sync_book_availability zera quando não há exemplares
CREATE OR REPLACE FUNCTION public.sync_book_availability(_book_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE v_total int; v_free int;
BEGIN
  SELECT count(*)::int, count(*) FILTER (WHERE status = 'disponivel')::int
    INTO v_total, v_free
  FROM public.book_copies WHERE book_id = _book_id;

  UPDATE public.books
  SET total_copies = COALESCE(v_total, 0),
      available_copies = COALESCE(v_free, 0)
  WHERE id = _book_id
    AND (total_copies IS DISTINCT FROM COALESCE(v_total, 0)
      OR available_copies IS DISTINCT FROM COALESCE(v_free, 0));
END; $$;

-- 2) somente um empréstimo ativo por exemplar
CREATE UNIQUE INDEX IF NOT EXISTS loans_one_active_per_copy
  ON public.loans (copy_id) WHERE returned_at IS NULL;

-- 3) trava de mudança manual de situação do exemplar
CREATE OR REPLACE FUNCTION public.guard_copy_status_change()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    IF COALESCE(current_setting('app.copy_status_op', true), '') <> 'on' THEN
      RAISE EXCEPTION 'A situação do exemplar só pode ser alterada por retirada, devolução ou baixa.';
    END IF;
    IF OLD.status = 'emprestado'
       AND EXISTS (SELECT 1 FROM public.loans WHERE copy_id = NEW.id AND returned_at IS NULL) THEN
      RAISE EXCEPTION 'Este exemplar possui um empréstimo ativo; registre a devolução primeiro.';
    END IF;
    IF NEW.status <> 'emprestado'
       AND EXISTS (SELECT 1 FROM public.loans WHERE copy_id = NEW.id AND returned_at IS NULL) THEN
      RAISE EXCEPTION 'Este exemplar possui um empréstimo ativo.';
    END IF;
  END IF;
  RETURN NEW;
END; $$;

DROP TRIGGER IF EXISTS book_copies_guard_status ON public.book_copies;
CREATE TRIGGER book_copies_guard_status
  BEFORE UPDATE ON public.book_copies
  FOR EACH ROW EXECUTE FUNCTION public.guard_copy_status_change();

-- 4) empréstimo ativo exige exemplar em situação 'emprestado'
CREATE OR REPLACE FUNCTION public.guard_loan_copy_consistency()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE v_status text; v_book uuid;
BEGIN
  IF NEW.returned_at IS NULL THEN
    IF NEW.copy_id IS NULL THEN
      RAISE EXCEPTION 'Todo empréstimo ativo precisa de um exemplar físico.';
    END IF;
    SELECT status, book_id INTO v_status, v_book FROM public.book_copies WHERE id = NEW.copy_id;
    IF v_status IS NULL THEN
      RAISE EXCEPTION 'Exemplar não encontrado.';
    END IF;
    IF v_book <> NEW.book_id THEN
      RAISE EXCEPTION 'O exemplar não pertence ao livro informado.';
    END IF;
    IF v_status <> 'emprestado' THEN
      RAISE EXCEPTION 'O exemplar precisa estar marcado como emprestado.';
    END IF;
  END IF;
  RETURN NEW;
END; $$;

DROP TRIGGER IF EXISTS loans_guard_copy ON public.loans;
CREATE TRIGGER loans_guard_copy
  BEFORE INSERT OR UPDATE ON public.loans
  FOR EACH ROW EXECUTE FUNCTION public.guard_loan_copy_consistency();

-- 5) operações oficiais liberam a trava
CREATE OR REPLACE FUNCTION public.register_checkout(_user_id uuid, _copy_id uuid, _reservation_id uuid DEFAULT NULL::uuid)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
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
END; $$;

CREATE OR REPLACE FUNCTION public.register_return(_loan_id uuid, _copy_status text DEFAULT 'disponivel')
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE v_loan public.loans%ROWTYPE;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode registrar devoluções.';
  END IF;
  IF _copy_status NOT IN ('disponivel','manutencao','perdido','extraviado') THEN
    RAISE EXCEPTION 'Situação inválida para o exemplar devolvido.';
  END IF;

  SELECT * INTO v_loan FROM public.loans WHERE id = _loan_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Empréstimo não encontrado.';
  END IF;
  IF v_loan.returned_at IS NOT NULL THEN
    RAISE EXCEPTION 'Empréstimo já devolvido.';
  END IF;

  UPDATE public.loans
  SET status = CASE WHEN _copy_status IN ('perdido','extraviado') THEN 'perdido'::loan_status ELSE 'devolvido'::loan_status END,
      returned_at = now()
  WHERE id = _loan_id;

  IF v_loan.copy_id IS NOT NULL THEN
    PERFORM set_config('app.copy_status_op', 'on', true);
    UPDATE public.book_copies SET status = _copy_status WHERE id = v_loan.copy_id;
    PERFORM set_config('app.copy_status_op', 'off', true);
  END IF;

  PERFORM public.sync_book_availability(v_loan.book_id);
END; $$;

-- 6) baixa lógica dedicada
CREATE OR REPLACE FUNCTION public.write_off_copy(_copy_id uuid, _notes text DEFAULT NULL)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE v_copy public.book_copies%ROWTYPE;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode dar baixa em exemplares.';
  END IF;

  SELECT * INTO v_copy FROM public.book_copies WHERE id = _copy_id FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Exemplar não encontrado.';
  END IF;
  IF EXISTS (SELECT 1 FROM public.loans WHERE copy_id = _copy_id AND returned_at IS NULL) THEN
    RAISE EXCEPTION 'Não é possível dar baixa em um exemplar emprestado.';
  END IF;
  IF v_copy.status = 'baixado' THEN
    RETURN;
  END IF;

  PERFORM set_config('app.copy_status_op', 'on', true);
  UPDATE public.book_copies
  SET status = 'baixado',
      notes = COALESCE(NULLIF(trim(_notes), ''), notes)
  WHERE id = _copy_id;
  PERFORM set_config('app.copy_status_op', 'off', true);

  PERFORM public.sync_book_availability(v_copy.book_id);
END; $$;

REVOKE ALL ON FUNCTION public.write_off_copy(uuid, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.write_off_copy(uuid, text) TO authenticated;
REVOKE ALL ON FUNCTION public.guard_copy_status_change() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.guard_loan_copy_consistency() FROM PUBLIC, anon, authenticated;