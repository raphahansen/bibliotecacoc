-- 1) reviews: hide user_id from general readers via column-level grants
DROP POLICY IF EXISTS reviews_authenticated_read ON public.reviews;

CREATE POLICY reviews_public_columns_read
  ON public.reviews FOR SELECT
  TO anon, authenticated
  USING (true);

REVOKE SELECT ON public.reviews FROM anon, authenticated;
GRANT SELECT (id, book_id, rating, comment, created_at) ON public.reviews TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

-- 2) reviews_public view runs as the querying user
ALTER VIEW public.reviews_public SET (security_invoker = on);
GRANT SELECT ON public.reviews_public TO anon, authenticated;

-- 3) controlled access to identity-bearing review data
CREATE OR REPLACE FUNCTION public.list_my_reviews()
RETURNS TABLE (
  id uuid,
  book_id uuid,
  rating smallint,
  comment text,
  created_at timestamptz,
  book_title text,
  book_author text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT r.id, r.book_id, r.rating, r.comment, r.created_at, b.title, b.author
  FROM public.reviews r
  JOIN public.books b ON b.id = r.book_id
  WHERE r.user_id = auth.uid()
  ORDER BY r.created_at DESC;
$$;

REVOKE ALL ON FUNCTION public.list_my_reviews() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.list_my_reviews() TO authenticated;

CREATE OR REPLACE FUNCTION public.get_my_review_id(_book_id uuid)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT r.id FROM public.reviews r
  WHERE r.user_id = auth.uid() AND r.book_id = _book_id
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_my_review_id(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_review_id(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_list_reviews(_limit integer DEFAULT 300)
RETURNS TABLE (
  id uuid,
  rating smallint,
  comment text,
  created_at timestamptz,
  book_title text,
  book_author text,
  reviewer_name text,
  reviewer_email text
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_staff(auth.uid()) THEN
    RAISE EXCEPTION 'Apenas a equipe da biblioteca pode listar avaliações.';
  END IF;
  RETURN QUERY
  SELECT r.id, r.rating, r.comment, r.created_at, b.title, b.author,
         COALESCE(p.full_name, ''), COALESCE(p.email, '')
  FROM public.reviews r
  JOIN public.books b ON b.id = r.book_id
  LEFT JOIN public.profiles p ON p.id = r.user_id
  ORDER BY r.created_at DESC
  LIMIT COALESCE(_limit, 300);
END;
$$;

REVOKE ALL ON FUNCTION public.admin_list_reviews(integer) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_list_reviews(integer) TO authenticated;

-- 4) system_settings readable only by staff
DROP POLICY IF EXISTS settings_read_authenticated ON public.system_settings;
CREATE POLICY settings_read_staff
  ON public.system_settings FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()));