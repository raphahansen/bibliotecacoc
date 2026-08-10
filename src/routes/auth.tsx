import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, LogIn, Mail, KeyRound, ArrowLeft } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Entrar · Biblioteca COC Novomundo";
const description =
  "Acesse sua conta da Biblioteca COC Novomundo para reservar livros, acompanhar empréstimos e avaliar suas leituras.";

export const Route = createFileRoute("/auth")({
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
  component: AuthPage,
});

const loginSchema = z.object({
  email: z.string().trim().email({ message: "Informe um e-mail válido" }).max(160),
  password: z.string().min(6, { message: "A senha precisa ter ao menos 6 caracteres" }),
});

function AuthPage() {
  const [mode, setMode] = useState<"login" | "recover">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && session) void navigate({ to: "/perfil", replace: true });
  }, [loading, session, navigate]);

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setBusy(false);
    if (error) {
      toast.error(
        error.message.toLowerCase().includes("invalid")
          ? "E-mail ou senha incorretos."
          : "Não foi possível entrar agora. Tente novamente.",
      );
      return;
    }
    toast.success("Bem-vindo de volta!");
    void navigate({ to: "/perfil", replace: true });
  };

  const submitRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = z.string().trim().email().safeParse(email);
    if (!parsed.success) {
      setErrors({ email: "Informe um e-mail válido" });
      return;
    }
    setErrors({});
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data, {
      redirectTo: `${window.location.origin}/redefinir-senha`,
    });
    setBusy(false);
    if (error) {
      toast.error("Não foi possível enviar o e-mail de recuperação.");
      return;
    }
    toast.success("Enviamos um link de redefinição para o seu e-mail.");
    setMode("login");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto flex max-w-md flex-col px-4 pb-20 pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Voltar ao início
        </Link>

        <div className="mt-5 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h1 className="font-display text-2xl text-primary">
            {mode === "login" ? "Entrar na biblioteca" : "Recuperar senha"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "login"
              ? "Use o e-mail cadastrado pela equipe da sala de leitura."
              : "Informe seu e-mail e enviaremos um link para criar uma nova senha."}
          </p>

          <form
            onSubmit={mode === "login" ? submitLogin : submitRecover}
            className="mt-6 grid gap-4"
          >
            <label className="grid gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                E-mail
              </span>
              <span className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-2.5 focus-within:border-primary-soft">
                <Mail className="size-4 shrink-0 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@escola.com.br"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </span>
              {errors["email"] && (
                <span className="text-xs text-destructive">{errors["email"]}</span>
              )}
            </label>

            {mode === "login" && (
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Senha
                </span>
                <span className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-2.5 focus-within:border-primary-soft">
                  <KeyRound className="size-4 shrink-0 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </span>
                {errors["password"] && (
                  <span className="text-xs text-destructive">{errors["password"]}</span>
                )}
              </label>
            )}

            <button
              type="submit"
              disabled={busy}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {busy ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <LogIn className="size-4" />
              )}
              {mode === "login" ? "Entrar" : "Enviar link de recuperação"}
            </button>
          </form>

          <button
            onClick={() => {
              setErrors({});
              setMode((m) => (m === "login" ? "recover" : "login"));
            }}
            className="mt-4 w-full text-center text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {mode === "login" ? "Esqueci minha senha" : "Voltar para o login"}
          </button>

          <p className="mt-6 rounded-2xl bg-secondary/60 p-4 text-xs leading-relaxed text-muted-foreground">
            As contas são criadas pela equipe da biblioteca. Se você ainda não tem
            acesso, procure a sala de leitura para fazer seu cadastro.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
