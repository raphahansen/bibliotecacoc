-- 1) system_settings: no public/anon read
DROP POLICY IF EXISTS settings_read ON public.system_settings;
CREATE POLICY settings_read_authenticated ON public.system_settings
  FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.system_settings FROM anon;

-- 2) reviews: remove anon access to raw rows (which include user_id)
DROP POLICY IF EXISTS reviews_public_read ON public.reviews;
CREATE POLICY reviews_authenticated_read ON public.reviews
  FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.reviews FROM anon;

-- Public, anonymized projection of reviews (no user_id)
CREATE OR REPLACE VIEW public.reviews_public AS
  SELECT id, book_id, rating, comment, created_at
  FROM public.reviews;

ALTER VIEW public.reviews_public SET (security_invoker = off);
GRANT SELECT ON public.reviews_public TO anon, authenticated;