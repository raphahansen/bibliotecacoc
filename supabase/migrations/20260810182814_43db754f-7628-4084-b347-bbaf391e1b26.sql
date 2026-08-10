DROP POLICY "tmp_seed_books" ON public.books;
DROP POLICY "tmp_seed_categories" ON public.categories;
REVOKE INSERT ON public.books FROM anon;
REVOKE INSERT ON public.categories FROM anon;