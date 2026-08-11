import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type Role = "aluno" | "professor" | "bibliotecario" | "admin";

type Client = SupabaseClient<Database>;

/** Papel efetivo (mais alto) do usuário autenticado, lido com a sessão dele. */
export async function getActorRole(supabase: Client, userId: string): Promise<Role | null> {
  const { data, error } = await supabase.from("user_roles").select("role").eq("user_id", userId);
  if (error) return null;
  const order: Role[] = ["aluno", "professor", "bibliotecario", "admin"];
  const roles = (data ?? []).map((r) => r.role as Role);
  return roles.sort((a, b) => order.indexOf(b) - order.indexOf(a))[0] ?? null;
}

export function isStaffRole(role: Role | null): boolean {
  return role === "admin" || role === "bibliotecario";
}

/** Papéis que o ator pode criar/atribuir. */
export function assignableRoles(actor: Role | null): Role[] {
  if (actor === "admin") return ["aluno", "professor", "bibliotecario", "admin"];
  if (actor === "bibliotecario") return ["aluno", "professor"];
  return [];
}

/** Papel do usuário alvo, lido com privilégio de serviço. */
export async function getTargetRole(admin: Client, userId: string): Promise<Role> {
  const { data } = await admin.from("user_roles").select("role").eq("user_id", userId);
  const order: Role[] = ["aluno", "professor", "bibliotecario", "admin"];
  const roles = (data ?? []).map((r) => r.role as Role);
  return roles.sort((a, b) => order.indexOf(b) - order.indexOf(a))[0] ?? "aluno";
}

/** Regra: admin gere qualquer um; bibliotecário só aluno/professor. */
export function canManageTarget(actor: Role | null, target: Role): boolean {
  if (actor === "admin") return true;
  if (actor === "bibliotecario") return target === "aluno" || target === "professor";
  return false;
}
