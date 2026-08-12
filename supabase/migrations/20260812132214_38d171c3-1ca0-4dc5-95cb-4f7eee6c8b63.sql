ALTER TABLE public.books ADD COLUMN IF NOT EXISTS cover_url text;
ALTER TABLE public.book_copies ADD COLUMN IF NOT EXISTS photo_url text;