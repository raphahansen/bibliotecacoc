UPDATE public.book_copies SET asset_code = 'BIB-' || substring(asset_code from 5), updated_at = now() WHERE asset_code LIKE 'PAT-%';

CREATE OR REPLACE FUNCTION public.next_asset_code()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
DECLARE code text;
BEGIN
  LOOP
    code := 'BIB-' || lpad(nextval('public.book_copy_pat_seq')::text, 6, '0');
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.book_copies WHERE asset_code = code);
  END LOOP;
  RETURN code;
END; $function$;