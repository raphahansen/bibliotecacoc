CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA extensions;

CREATE OR REPLACE FUNCTION public.f_unaccent(text)
RETURNS text
LANGUAGE sql
IMMUTABLE PARALLEL SAFE STRICT
SET search_path TO 'public', 'extensions'
AS $$ SELECT extensions.unaccent('extensions.unaccent', $1) $$;

REVOKE ALL ON FUNCTION public.f_unaccent(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.f_unaccent(text) TO authenticated, service_role;

CREATE INDEX IF NOT EXISTS books_title_unaccent_idx ON public.books (lower(public.f_unaccent(title)));
CREATE INDEX IF NOT EXISTS books_author_unaccent_idx ON public.books (lower(public.f_unaccent(author)));

CREATE OR REPLACE FUNCTION public.search_books(
  _term text DEFAULT '',
  _only_available boolean DEFAULT false,
  _limit integer DEFAULT 20,
  _offset integer DEFAULT 0
)
RETURNS TABLE(
  id uuid,
  title text,
  author text,
  total_copies integer,
  available_copies integer,
  total_count bigint
)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  WITH filtered AS (
    SELECT b.id, b.title, b.author, b.total_copies, b.available_copies
    FROM public.books b
    WHERE b.active
      AND (NOT _only_available OR b.available_copies > 0)
      AND (
        COALESCE(NULLIF(btrim(_term), ''), '') = ''
        OR lower(public.f_unaccent(b.title)) LIKE '%' || lower(public.f_unaccent(btrim(_term))) || '%'
        OR lower(public.f_unaccent(b.author)) LIKE '%' || lower(public.f_unaccent(btrim(_term))) || '%'
      )
  )
  SELECT f.id, f.title, f.author, f.total_copies, f.available_copies,
         (SELECT count(*) FROM filtered) AS total_count
  FROM filtered f
  ORDER BY f.title
  LIMIT GREATEST(COALESCE(_limit, 20), 1)
  OFFSET GREATEST(COALESCE(_offset, 0), 0);
$$;

REVOKE ALL ON FUNCTION public.search_books(text, boolean, integer, integer) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.search_books(text, boolean, integer, integer) TO authenticated, service_role;