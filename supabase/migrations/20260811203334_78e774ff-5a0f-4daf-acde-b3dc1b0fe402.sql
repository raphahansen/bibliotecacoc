-- 1) Novos campos/status nos exemplares
ALTER TABLE public.book_copies ADD COLUMN IF NOT EXISTS location text NOT NULL DEFAULT 'Biblioteca';
ALTER TABLE public.book_copies DROP CONSTRAINT IF EXISTS book_copies_status_check;
ALTER TABLE public.book_copies ADD CONSTRAINT book_copies_status_check
  CHECK (status = ANY (ARRAY['disponivel','emprestado','manutencao','perdido','baixado','extraviado']));

-- 2) Não apagar exemplares com histórico
CREATE OR REPLACE FUNCTION public.block_copy_delete_with_history()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.loans WHERE copy_id = OLD.id) THEN
    RAISE EXCEPTION 'Exemplar possui histórico de empréstimos. Use a baixa lógica (status "baixado").';
  END IF;
  RETURN OLD;
END; $$;

DROP TRIGGER IF EXISTS book_copies_block_delete ON public.book_copies;
CREATE TRIGGER book_copies_block_delete BEFORE DELETE ON public.book_copies
FOR EACH ROW EXECUTE FUNCTION public.block_copy_delete_with_history();

-- 3) Sequência segura de PAT (nunca reutiliza códigos)
DO $$
DECLARE start_at bigint;
BEGIN
  SELECT COALESCE(MAX((substring(asset_code from '^PAT-([0-9]+)$'))::bigint), 0) + 1
    INTO start_at FROM public.book_copies WHERE asset_code ~ '^PAT-[0-9]+$';
  IF to_regclass('public.book_copy_pat_seq') IS NULL THEN
    EXECUTE format('CREATE SEQUENCE public.book_copy_pat_seq START WITH %s', GREATEST(start_at, 1));
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.next_asset_code()
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE code text;
BEGIN
  LOOP
    code := 'PAT-' || lpad(nextval('public.book_copy_pat_seq')::text, 6, '0');
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.book_copies WHERE asset_code = code);
  END LOOP;
  RETURN code;
END; $$;

-- 4) Totais do livro sempre derivados dos exemplares
CREATE OR REPLACE FUNCTION public.sync_book_availability(_book_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  UPDATE public.books b
  SET total_copies = c.total,
      available_copies = c.free
  FROM (
    SELECT count(*)::int AS total,
           count(*) FILTER (WHERE status = 'disponivel')::int AS free
    FROM public.book_copies WHERE book_id = _book_id
  ) c
  WHERE b.id = _book_id
    AND (b.total_copies IS DISTINCT FROM c.total OR b.available_copies IS DISTINCT FROM c.free);
END; $$;

CREATE OR REPLACE FUNCTION public.books_derive_counts()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE t int; f int;
BEGIN
  SELECT count(*)::int, count(*) FILTER (WHERE status = 'disponivel')::int
    INTO t, f FROM public.book_copies WHERE book_id = NEW.id;
  NEW.total_copies := COALESCE(t, 0);
  NEW.available_copies := COALESCE(f, 0);
  RETURN NEW;
END; $$;

DROP TRIGGER IF EXISTS books_derive_counts_trg ON public.books;
CREATE TRIGGER books_derive_counts_trg BEFORE INSERT OR UPDATE ON public.books
FOR EACH ROW EXECUTE FUNCTION public.books_derive_counts();

ALTER TABLE public.books ALTER COLUMN total_copies SET DEFAULT 0;
ALTER TABLE public.books ALTER COLUMN available_copies SET DEFAULT 0;

-- Reconciliação: nenhum livro pode ter números diferentes dos exemplares reais
UPDATE public.books b
SET total_copies = c.total, available_copies = c.free
FROM (
  SELECT bk.id, count(cp.id)::int AS total,
         count(cp.id) FILTER (WHERE cp.status = 'disponivel')::int AS free
  FROM public.books bk LEFT JOIN public.book_copies cp ON cp.book_id = bk.id
  GROUP BY bk.id
) c
WHERE b.id = c.id AND (b.total_copies IS DISTINCT FROM c.total OR b.available_copies IS DISTINCT FROM c.free);

-- 5) Adicionar exemplares (equipe da biblioteca)
CREATE OR REPLACE FUNCTION public.add_book_copies(
  _book_id uuid,
  _quantity integer DEFAULT 1,
  _condition text DEFAULT 'bom',
  _location text DEFAULT 'Biblioteca',
  _notes text DEFAULT '',
  _asset_code text DEFAULT NULL
) RETURNS SETOF public.book_copies
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE i int; code text;
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode cadastrar exemplares.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.books WHERE id = _book_id) THEN
    RAISE EXCEPTION 'Livro não encontrado.';
  END IF;
  IF _asset_code IS NOT NULL AND _quantity > 1 THEN
    RAISE EXCEPTION 'Código manual só pode ser usado para um exemplar por vez.';
  END IF;
  IF _quantity < 1 OR _quantity > 100 THEN
    RAISE EXCEPTION 'Quantidade inválida.';
  END IF;

  FOR i IN 1.._quantity LOOP
    code := COALESCE(NULLIF(trim(_asset_code), ''), public.next_asset_code());
    IF EXISTS (SELECT 1 FROM public.book_copies WHERE asset_code = code) THEN
      RAISE EXCEPTION 'Já existe um exemplar com o código %.', code;
    END IF;
    RETURN QUERY
      INSERT INTO public.book_copies (book_id, asset_code, status, condition, location, notes)
      VALUES (_book_id, code, 'disponivel', COALESCE(_condition,'bom'), COALESCE(NULLIF(trim(_location),''),'Biblioteca'), COALESCE(_notes,''))
      RETURNING *;
  END LOOP;
END; $$;

REVOKE ALL ON FUNCTION public.add_book_copies(uuid, integer, text, text, text, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.add_book_copies(uuid, integer, text, text, text, text) TO authenticated;
REVOKE ALL ON FUNCTION public.next_asset_code() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.next_asset_code() TO authenticated;
GRANT USAGE ON SEQUENCE public.book_copy_pat_seq TO authenticated, service_role;

-- 6) Retirada transacional com validação de livro/exemplar
CREATE OR REPLACE FUNCTION public.register_checkout(
  _user_id uuid, _copy_id uuid, _reservation_id uuid DEFAULT NULL::uuid
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
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

-- 7) Devolução transacional com situação do exemplar
CREATE OR REPLACE FUNCTION public.register_return(_loan_id uuid, _copy_status text DEFAULT 'disponivel')
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
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

  IF v_loan.copy_id IS NOT NULL THEN
    UPDATE public.book_copies SET status = _copy_status WHERE id = v_loan.copy_id;
  END IF;

  UPDATE public.loans
  SET status = CASE WHEN _copy_status IN ('perdido','extraviado') THEN 'perdido'::loan_status ELSE 'devolvido'::loan_status END,
      returned_at = now()
  WHERE id = _loan_id;

  PERFORM public.sync_book_availability(v_loan.book_id);
END; $$;

REVOKE ALL ON FUNCTION public.register_return(uuid, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.register_return(uuid, text) TO authenticated;
DROP FUNCTION IF EXISTS public.register_return(uuid);