ALTER VIEW public.reviews_public SET (security_invoker = on);

CREATE POLICY reviews_anon_read ON public.reviews
  FOR SELECT TO anon USING (true);

REVOKE SELECT ON public.reviews FROM anon;
GRANT SELECT (id, book_id, rating, comment, created_at) ON public.reviews TO anon;