import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, KeyRound } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Redefinir senha · Biblioteca COC Novomundo";
const description =
  "Crie uma nova senha para acessar sua conta da Biblioteca COC Novomundo.";

export const Route = createFileRoute("/redefinir-senha")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = z
      .string()
      .min(6, { message: "A senha precisa ter ao menos 6 caracteres" })
      .max(72)
      .safeParse(password);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Senha inválida");
      return;
    }
    if (password !== confirm) {
      setError("As senhas não são iguais");
      return;
    }
    setError("");
    setBusy(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (updateError) {
      toast.error(
        "Não foi possível redefinir a senha. Solicite um novo link de recuperação.",
      );
      return;
    }
    toast.success("Senha atualizada com sucesso!");
    void navigate({ to: "/perfil", replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-md px-4 pb-20 pt-32">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h1 className="font-display text-2xl text-primary">Criar nova senha</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Escolha uma senha com pelo menos 6 caracteres.
          </p>
          <form onSubmit={submit} className="mt-6 grid gap-4">
            {[
              { label: "Nova senha", value: password, set: setPassword },
              { label: "Confirmar senha", value: confirm, set: setConfirm },
            ].map((field) => (
              <label key={field.label} className="grid gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {field.label}
                </span>
                <span className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-2.5 focus-within:border-primary-soft">
                  <KeyRound className="size-4 shrink-0 text-muted-foreground" />
                  <input
                    type="password"
                    value={field.value}
                    autoComplete="new-password"
                    onChange={(e) => field.set(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </span>
              </label>
            ))}
            {error && <span className="text-xs text-destructive">{error}</span>}
            <button
              type="submit"
              disabled={busy}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {busy && <Loader2 className="size-4 animate-spin" />}
              Salvar nova senha
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
