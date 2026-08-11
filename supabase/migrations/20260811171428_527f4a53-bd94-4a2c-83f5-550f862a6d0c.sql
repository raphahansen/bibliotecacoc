CREATE INDEX IF NOT EXISTS reservations_book_status_created_idx
  ON public.reservations (book_id, status, created_at);

CREATE INDEX IF NOT EXISTS loans_status_due_idx
  ON public.loans (status, due_date);

-- Promove a próxima reserva da fila quando um exemplar volta ao acervo
CREATE OR REPLACE FUNCTION public.promote_next_reservation()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  next_id uuid;
  free_copies integer;
BEGIN
  IF NEW.returned_at IS NOT NULL AND OLD.returned_at IS NULL THEN
    SELECT available_copies INTO free_copies FROM public.books WHERE id = NEW.book_id;
    IF COALESCE(free_copies, 0) > 0 THEN
      SELECT id INTO next_id
      FROM public.reservations
      WHERE book_id = NEW.book_id
        AND status IN ('pendente', 'aprovada')
      ORDER BY created_at ASC
      LIMIT 1;

      IF next_id IS NOT NULL THEN
        UPDATE public.reservations
        SET status = 'disponivel', queue_position = NULL
        WHERE id = next_id;
      END IF;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS loans_promote_reservation ON public.loans;
CREATE TRIGGER loans_promote_reservation
AFTER UPDATE ON public.loans
FOR EACH ROW EXECUTE FUNCTION public.promote_next_reservation();

-- Rotina de manutenção: atrasos e expirações
CREATE OR REPLACE FUNCTION public.library_maintenance()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  pickup_days integer;
  late_count integer := 0;
  expired_count integer := 0;
BEGIN
  SELECT COALESCE(NULLIF(value, '')::integer, 3) INTO pickup_days
  FROM public.system_settings WHERE key = 'pickup_days';
  IF pickup_days IS NULL THEN pickup_days := 3; END IF;

  WITH updated AS (
    UPDATE public.loans
    SET status = 'atrasado'
    WHERE status = 'ativo'
      AND returned_at IS NULL
      AND due_date < CURRENT_DATE
    RETURNING 1
  )
  SELECT count(*) INTO late_count FROM updated;

  WITH updated AS (
    UPDATE public.reservations
    SET status = 'expirada'
    WHERE status = 'disponivel'
      AND updated_at < now() - (pickup_days || ' days')::interval
    RETURNING 1
  )
  SELECT count(*) INTO expired_count FROM updated;

  RETURN jsonb_build_object('overdue', late_count, 'expired', expired_count);
END;
$$;

REVOKE ALL ON FUNCTION public.library_maintenance() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.library_maintenance() TO service_role;