CREATE POLICY "tmp_seed_books" ON public.books FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "tmp_seed_categories" ON public.categories FOR INSERT TO anon WITH CHECK (true);
GRANT INSERT ON public.books TO anon;
GRANT INSERT ON public.categories TO anon;