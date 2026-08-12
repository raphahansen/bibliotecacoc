CREATE TABLE public.audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type text NOT NULL,
  entity_id uuid,
  entity_label text NOT NULL DEFAULT '',
  action text NOT NULL,
  changes jsonb NOT NULL DEFAULT '[]'::jsonb,
  actor_id uuid,
  actor_name text NOT NULL DEFAULT '',
  actor_email text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.audit_log TO authenticated;
GRANT ALL ON public.audit_log TO service_role;

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "audit_log_staff_read" ON public.audit_log
  FOR SELECT TO authenticated
  USING (public.is_staff(auth.uid()));

CREATE INDEX audit_log_created_at_idx ON public.audit_log (created_at DESC);
CREATE INDEX audit_log_entity_idx ON public.audit_log (entity_type, entity_id);

CREATE OR REPLACE FUNCTION public.write_audit(
  _entity_type text,
  _entity_id uuid,
  _entity_label text,
  _action text,
  _changes jsonb
) RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE v_name text := ''; v_email text := ''; v_uid uuid := auth.uid();
BEGIN
  IF v_uid IS NOT NULL THEN
    SELECT COALESCE(full_name,''), COALESCE(email,'') INTO v_name, v_email
    FROM public.profiles WHERE id = v_uid;
  END IF;
  INSERT INTO public.audit_log (entity_type, entity_id, entity_label, action, changes, actor_id, actor_name, actor_email)
  VALUES (_entity_type, _entity_id, COALESCE(_entity_label,''), _action, COALESCE(_changes,'[]'::jsonb), v_uid, COALESCE(v_name,''), COALESCE(v_email,''));
END; $$;

REVOKE ALL ON FUNCTION public.write_audit(text, uuid, text, text, jsonb) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.audit_books_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE ch jsonb := '[]'::jsonb;
BEGIN
  IF TG_OP = 'INSERT' THEN
    PERFORM public.write_audit('livro', NEW.id, NEW.title, 'criado', '[]'::jsonb);
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    PERFORM public.write_audit('livro', OLD.id, OLD.title, 'excluido', '[]'::jsonb);
    RETURN OLD;
  END IF;

  IF NEW.title IS DISTINCT FROM OLD.title THEN
    ch := ch || jsonb_build_object('field','titulo','from',OLD.title,'to',NEW.title);
  END IF;
  IF NEW.author IS DISTINCT FROM OLD.author THEN
    ch := ch || jsonb_build_object('field','autor','from',OLD.author,'to',NEW.author);
  END IF;
  IF NEW.publisher IS DISTINCT FROM OLD.publisher THEN
    ch := ch || jsonb_build_object('field','editora','from',OLD.publisher,'to',NEW.publisher);
  END IF;
  IF NEW.level IS DISTINCT FROM OLD.level THEN
    ch := ch || jsonb_build_object('field','classificacao','from',OLD.level,'to',NEW.level);
  END IF;
  IF NEW.category_id IS DISTINCT FROM OLD.category_id THEN
    ch := ch || jsonb_build_object(
      'field','categoria',
      'from',COALESCE((SELECT name FROM public.categories WHERE id = OLD.category_id),'—'),
      'to',COALESCE((SELECT name FROM public.categories WHERE id = NEW.category_id),'—'));
  END IF;
  IF NEW.synopsis IS DISTINCT FROM OLD.synopsis THEN
    ch := ch || jsonb_build_object('field','sinopse','from','(texto anterior)','to','(texto atualizado)');
  END IF;
  IF NEW.active IS DISTINCT FROM OLD.active THEN
    ch := ch || jsonb_build_object('field','situacao','from',CASE WHEN OLD.active THEN 'ativo' ELSE 'inativo' END,'to',CASE WHEN NEW.active THEN 'ativo' ELSE 'inativo' END);
  END IF;

  IF jsonb_array_length(ch) > 0 THEN
    PERFORM public.write_audit('livro', NEW.id, NEW.title, 'editado', ch);
  END IF;
  RETURN NEW;
END; $$;

CREATE OR REPLACE FUNCTION public.audit_book_copies_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE ch jsonb := '[]'::jsonb; v_label text;
BEGIN
  IF TG_OP = 'INSERT' THEN
    v_label := NEW.asset_code || ' · ' || COALESCE((SELECT title FROM public.books WHERE id = NEW.book_id),'');
    PERFORM public.write_audit('exemplar', NEW.id, v_label, 'criado', '[]'::jsonb);
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    v_label := OLD.asset_code || ' · ' || COALESCE((SELECT title FROM public.books WHERE id = OLD.book_id),'');
    PERFORM public.write_audit('exemplar', OLD.id, v_label, 'excluido', '[]'::jsonb);
    RETURN OLD;
  END IF;

  IF NEW.asset_code IS DISTINCT FROM OLD.asset_code THEN
    ch := ch || jsonb_build_object('field','codigo BIB','from',OLD.asset_code,'to',NEW.asset_code);
  END IF;
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    ch := ch || jsonb_build_object('field','situacao','from',OLD.status,'to',NEW.status);
  END IF;
  IF NEW.condition IS DISTINCT FROM OLD.condition THEN
    ch := ch || jsonb_build_object('field','condicao','from',OLD.condition,'to',NEW.condition);
  END IF;
  IF NEW.location IS DISTINCT FROM OLD.location THEN
    ch := ch || jsonb_build_object('field','localizacao','from',OLD.location,'to',NEW.location);
  END IF;
  IF NEW.notes IS DISTINCT FROM OLD.notes THEN
    ch := ch || jsonb_build_object('field','observacoes','from',COALESCE(OLD.notes,''),'to',COALESCE(NEW.notes,''));
  END IF;
  IF NEW.active IS DISTINCT FROM OLD.active THEN
    ch := ch || jsonb_build_object('field','disponibilidade','from',CASE WHEN OLD.active THEN 'ativo' ELSE 'inativo' END,'to',CASE WHEN NEW.active THEN 'ativo' ELSE 'inativo' END);
  END IF;

  IF jsonb_array_length(ch) > 0 THEN
    v_label := NEW.asset_code || ' · ' || COALESCE((SELECT title FROM public.books WHERE id = NEW.book_id),'');
    PERFORM public.write_audit('exemplar', NEW.id, v_label, 'editado', ch);
  END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER books_audit
  AFTER INSERT OR UPDATE OR DELETE ON public.books
  FOR EACH ROW EXECUTE FUNCTION public.audit_books_trigger();

CREATE TRIGGER book_copies_audit
  AFTER INSERT OR UPDATE OR DELETE ON public.book_copies
  FOR EACH ROW EXECUTE FUNCTION public.audit_book_copies_trigger();