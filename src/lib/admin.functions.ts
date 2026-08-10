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
 * Somente administradores autenticados podem executar.
 */
export const createUsers = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ users: z.array(newUserSchema).min(1).max(300) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (roleError || !isAdmin) throw new Error("Acesso negado");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const results: { email: string; ok: boolean; message?: string }[] = [];

    for (const u of data.users) {
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

/** Remove ou concede um papel de acesso. Somente administradores. */
export const setUserRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ userId: z.string().uuid(), role: roleEnum }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Acesso negado");
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
