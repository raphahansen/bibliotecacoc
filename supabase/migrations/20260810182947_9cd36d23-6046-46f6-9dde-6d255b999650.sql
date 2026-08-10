CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  desired public.app_role;
  is_first boolean;
BEGIN
  INSERT INTO public.profiles (id, full_name, email, matricula, grade)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name',''),
    COALESCE(NEW.email,''),
    NULLIF(NEW.raw_user_meta_data->>'matricula',''),
    NULLIF(NEW.raw_user_meta_data->>'grade','')
  ) ON CONFLICT (id) DO NOTHING;

  SELECT NOT EXISTS (SELECT 1 FROM public.user_roles) INTO is_first;
  desired := COALESCE(NULLIF(NEW.raw_user_meta_data->>'role','')::public.app_role, 'aluno');
  IF is_first THEN desired := 'admin'; END IF;

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, desired)
  ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $$;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;