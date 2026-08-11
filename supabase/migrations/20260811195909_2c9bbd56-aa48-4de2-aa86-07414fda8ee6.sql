CREATE TABLE public.book_copies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
  asset_code text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'disponivel',
  condition text NOT NULL DEFAULT 'bom',
  notes text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT book_copies_status_check CHECK (status IN ('disponivel','emprestado','manutencao','perdido','baixado')),
  CONSTRAINT book_copies_condition_check CHECK (condition IN ('novo','bom','regular','ruim'))
);

CREATE INDEX book_copies_book_id_idx ON public.book_copies(book_id);
CREATE INDEX book_copies_status_idx ON public.book_copies(status);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.book_copies TO authenticated;
GRANT ALL ON public.book_copies TO service_role;

ALTER TABLE public.book_copies ENABLE ROW LEVEL SECURITY;

CREATE POLICY book_copies_read ON public.book_copies FOR SELECT TO authenticated USING (true);
CREATE POLICY book_copies_staff_write ON public.book_copies FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));

CREATE TRIGGER book_copies_updated BEFORE UPDATE ON public.book_copies FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.book_copies (book_id, asset_code, status)
SELECT s.book_id,
       'PAT-' || lpad(row_number() OVER (ORDER BY s.title, s.n)::text, 6, '0'),
       'disponivel'
FROM (
  SELECT b.id AS book_id, b.title, g.n
  FROM public.books b
  CROSS JOIN LATERAL generate_series(1, GREATEST(b.total_copies, 1)) AS g(n)
) s;