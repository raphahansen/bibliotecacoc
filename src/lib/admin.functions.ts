import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const roleEnum = z.enum(["aluno", "professor", "bibliotecario", "admin"]);

const newUserSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  password: z.string().min(6).max(72),
  matricula: z.string().trim().max(40).optional().nullable(),
  grade: z.string().trim().max(40).optional().nullable(),
  role: roleEnum,
});

export type NewUserInput = z.infer<typeof newUserSchema>;

/**
 * Cria contas de usuário (individual ou em massa).
 * Admin cria qualquer perfil; bibliotecário só aluno/professor.
 */
export const createUsers = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ users: z.array(newUserSchema).min(1).max(500) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { getActorRole, assignableRoles } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    const allowed = assignableRoles(actor);
    if (allowed.length === 0) throw new Error("Acesso negado");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const results: { email: string; ok: boolean; message?: string }[] = [];

    for (const u of data.users) {
      if (!allowed.includes(u.role)) {
        results.push({
          email: u.email,
          ok: false,
          message: "Seu nível de acesso não permite criar este perfil",
        });
        continue;
      }
      const { error } = await supabaseAdmin.auth.admin.createUser({
        email: u.email,
        password: u.password,
        email_confirm: true,
        user_metadata: {
          full_name: u.full_name,
          matricula: u.matricula ?? "",
          grade: u.grade ?? "",
          role: u.role,
        },
      });
      results.push({
        email: u.email,
        ok: !error,
        ...(error ? { message: error.message } : {}),
      });
    }

    return { results };
  });

/** Altera o papel de acesso. Somente administradores. */
export const setUserRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ userId: z.string().uuid(), role: roleEnum }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { getActorRole } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    if (actor !== "admin") throw new Error("Acesso negado");
    if (data.userId === context.userId) {
      throw new Error("Você não pode alterar o seu próprio nível de acesso");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("user_roles").delete().eq("user_id", data.userId);
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: data.userId, role: data.role });
    if (error) throw new Error("Não foi possível alterar o perfil de acesso");
    return { ok: true };
  });

/** Edita cadastro do leitor. Admin edita qualquer um; bibliotecário só aluno/professor. */
export const updateUserProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        userId: z.string().uuid(),
        full_name: z.string().trim().min(2).max(120),
        email: z.string().trim().email().max(160),
        matricula: z.string().trim().max(40).nullable().optional(),
        grade: z.string().trim().max(40).nullable().optional(),
        active: z.boolean(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { getActorRole, getTargetRole, canManageTarget } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const target = await getTargetRole(supabaseAdmin, data.userId);
    if (!canManageTarget(actor, target)) throw new Error("Acesso negado");

    const { data: current } = await supabaseAdmin
      .from("profiles")
      .select("email")
      .eq("id", data.userId)
      .maybeSingle();

    if (current && current.email !== data.email) {
      const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(data.userId, {
        email: data.email,
        email_confirm: true,
      });
      if (authError) throw new Error(`Não foi possível alterar o e-mail: ${authError.message}`);
    }

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({
        full_name: data.full_name,
        email: data.email,
        matricula: data.matricula || null,
        grade: data.grade || null,
        active: data.active,
      })
      .eq("id", data.userId);
    if (error) throw new Error("Não foi possível salvar o cadastro");
    return { ok: true };
  });

/** Define uma nova senha. Admin qualquer um; bibliotecário só aluno/professor. */
export const resetUserPassword = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({ userId: z.string().uuid(), password: z.string().min(6).max(72) })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { getActorRole, getTargetRole, canManageTarget } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const target = await getTargetRole(supabaseAdmin, data.userId);
    if (!canManageTarget(actor, target)) throw new Error("Acesso negado");

    const { error } = await supabaseAdmin.auth.admin.updateUserById(data.userId, {
      password: data.password,
    });
    if (error) throw new Error("Não foi possível redefinir a senha");
    return { ok: true };
  });

/** Exclui a conta preservando o histórico da biblioteca. Somente administradores. */
export const deleteUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ userId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { getActorRole } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    if (actor !== "admin") throw new Error("Acesso negado");
    if (data.userId === context.userId) {
      throw new Error("Você não pode excluir a sua própria conta");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count } = await supabaseAdmin
      .from("loans")
      .select("id", { count: "exact", head: true })
      .eq("user_id", data.userId)
      .is("returned_at", null);
    if ((count ?? 0) > 0) {
      throw new Error("Este leitor possui empréstimos em aberto. Registre as devoluções primeiro.");
    }

    const { error } = await supabaseAdmin.auth.admin.deleteUser(data.userId);
    if (error) throw new Error("Não foi possível excluir a conta");
    return { ok: true };
  });

/** Importa livros em massa e cria os exemplares físicos correspondentes. */
export const importBooks = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        categoryId: z.string().uuid(),
        books: z
          .array(
            z.object({
              title: z.string().trim().min(2).max(300),
              author: z.string().trim().max(200).default(""),
              publisher: z.string().trim().max(200).default(""),
              level: z.string().trim().max(80).default("LIVRE"),
              collection: z.boolean().default(false),
              synopsis: z.string().trim().max(4000).default(""),
              quantity: z.number().int().min(0).max(100).default(0),
            }),
          )
          .min(1)
          .max(500),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { getActorRole, isStaffRole } = await import("@/lib/admin.server");
    const actor = await getActorRole(context.supabase, context.userId);
    if (!isStaffRole(actor)) throw new Error("Acesso negado");

    let created = 0;
    let copies = 0;
    const errors: { title: string; message: string }[] = [];

    for (const b of data.books) {
      const { data: book, error } = await context.supabase
        .from("books")
        .insert({
          title: b.title,
          author: b.author,
          publisher: b.publisher,
          level: b.level,
          collection: b.collection,
          synopsis: b.synopsis,
          category_id: data.categoryId,
        })
        .select("id")
        .single();
      if (error || !book) {
        errors.push({ title: b.title, message: error?.message ?? "falha ao criar" });
        continue;
      }
      created += 1;
      if (b.quantity > 0) {
        const { error: copyError } = await context.supabase.rpc("add_book_copies", {
          _book_id: book.id,
          _quantity: b.quantity,
        });
        if (copyError) errors.push({ title: b.title, message: copyError.message });
        else copies += b.quantity;
      }
    }

    return { created, copies, errors };
  });
