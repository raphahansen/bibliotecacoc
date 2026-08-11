REVOKE EXECUTE ON FUNCTION public.promote_next_reservation() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.promote_next_reservation() FROM anon;
REVOKE EXECUTE ON FUNCTION public.promote_next_reservation() FROM authenticated;

REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM anon;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM authenticated;

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM authenticated;

REVOKE EXECUTE ON FUNCTION public.library_maintenance() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.library_maintenance() FROM anon;
REVOKE EXECUTE ON FUNCTION public.library_maintenance() FROM authenticated;