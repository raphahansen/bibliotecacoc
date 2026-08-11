-- 1. Reviews: remove anon access to base table; expose only the safe view
DROP POLICY IF EXISTS reviews_anon_read ON public.reviews;
REVOKE ALL ON public.reviews FROM anon;

CREATE OR REPLACE VIEW public.reviews_public
WITH (security_invoker = off) AS
  SELECT id, book_id, rating, comment, created_at FROM public.reviews;

GRANT SELECT ON public.reviews_public TO anon, authenticated;

-- 2. Book copies: internal inventory data only for staff
DROP POLICY IF EXISTS book_copies_read ON public.book_copies;
CREATE POLICY book_copies_staff_read ON public.book_copies
  FOR SELECT TO authenticated
  USING (public.is_staff(auth.uid()));

-- 3. Revoke execute on SECURITY DEFINER trigger functions from public/anon
REVOKE ALL ON FUNCTION public.books_derive_counts() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.guard_reservation_active_book() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.books_propagate_active() FROM PUBLIC, anon, authenticated;
