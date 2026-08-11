REVOKE ALL ON FUNCTION public.book_copies_sync_trigger() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.sync_book_availability(uuid) FROM PUBLIC, anon, authenticated;