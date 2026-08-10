import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BookOpen, CalendarClock, Star, LogOut, Loader2, Shield } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  loanLabels,
  reservationLabels,
  roleLabels,
  type LoanStatus,
  type ReservationStatus,
} from "@/lib/library";

export const Route = createFileRoute("/_authenticated/perfil")({
  head: () => ({
    meta: [
      { title: "Meu perfil · Biblioteca COC Novomundo" },
      {
        name: "description",
        content:
          "Acompanhe suas reservas, empréstimos e avaliações na Biblioteca COC Novomundo.",
      },
      { property: "og:title", content: "Meu perfil · Biblioteca COC Novomundo" },
      {
        property: "og:description",
        content: "Reservas, empréstimos e avaliações do leitor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProfilePage,
});

type BookRef = { title: string; author: string } | null;

function Panel({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <h2 className="flex items-center gap-2 font-display text-lg text-primary">
        <Icon className="size-4" /> {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ProfilePage() {
  const { profile, user, role, isStaff, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userId = user?.id;

  const reservations = useQuery({
    queryKey: ["my-reservations", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select("id, status, created_at, books(title, author)")
        .eq("user_id", userId!)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as {
        id: string;
        status: ReservationStatus;
        created_at: string;
        books: BookRef;
      }[];
    },
  });

  const loans = useQuery({
    queryKey: ["my-loans", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("loans")
        .select("id, status, loan_date, due_date, returned_at, books(title, author)")
        .eq("user_id", userId!)
        .order("loan_date", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as {
        id: string;
        status: LoanStatus;
        loan_date: string;
        due_date: string;
        returned_at: string | null;
        books: BookRef;
      }[];
    },
  });

  const reviews = useQuery({
    queryKey: ["my-reviews", userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, rating, comment, created_at, books(title, author)")
        .eq("user_id", userId!)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as unknown as {
        id: string;
        rating: number;
        comment: string;
        created_at: string;
        books: BookRef;
      }[];
    },
  });

  const cancel = async (id: string) => {
    const { error } = await supabase
      .from("reservations")
      .update({ status: "cancelada" })
      .eq("id", id);
    if (error) {
      toast.error("Não foi possível cancelar a reserva.");
      return;
    }
    toast.success("Reserva cancelada.");
    void queryClient.invalidateQueries({ queryKey: ["my-reservations"] });
  };

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await signOut();
    void navigate({ to: "/auth", replace: true });
  };

  const fmt = (value: string | null) =>
    value ? new Date(value).toLocaleDateString("pt-BR") : "—";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-28 lg:px-8">
        <header className="rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-6 shadow-[var(--shadow-card)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Minha conta
          </p>
          <h1 className="mt-1 font-display text-3xl text-primary">
            {profile?.full_name || "Leitor(a)"}
          </h1>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-secondary px-3 py-1 text-primary">
              {role ? roleLabels[role] : "Aluno"}
            </span>
            {profile?.matricula && (
              <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                Matrícula {profile.matricula}
              </span>
            )}
            {profile?.grade && (
              <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                {profile.grade}
              </span>
            )}
            <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
              {profile?.email || user?.email}
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/acervo"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Explorar o acervo
            </Link>
            {isStaff && (
              <Link
                to="/admin"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary"
              >
                <Shield className="size-4" /> Painel administrativo
              </Link>
            )}
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground hover:text-primary"
            >
              <LogOut className="size-4" /> Sair
            </button>
          </div>
        </header>

        <div className="mt-6 grid gap-5">
          <Panel icon={CalendarClock} title="Minhas reservas">
            {reservations.isLoading ? (
              <Loader2 className="size-5 animate-spin text-muted-foreground" />
            ) : reservations.data?.length ? (
              <ul className="grid gap-3">
                {reservations.data.map((r) => (
                  <li
                    key={r.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {r.books?.title ?? "Título removido"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Solicitada em {fmt(r.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                        {reservationLabels[r.status]}
                      </span>
                      {(r.status === "pendente" ||
                        r.status === "aprovada" ||
                        r.status === "disponivel") && (
                        <button
                          onClick={() => cancel(r.id)}
                          className="text-xs text-muted-foreground underline-offset-4 hover:text-destructive hover:underline"
                        >
                          Cancelar
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Você ainda não fez nenhuma reserva.
              </p>
            )}
          </Panel>

          <Panel icon={BookOpen} title="Meus empréstimos">
            {loans.isLoading ? (
              <Loader2 className="size-5 animate-spin text-muted-foreground" />
            ) : loans.data?.length ? (
              <ul className="grid gap-3">
                {loans.data.map((l) => {
                  const late =
                    !l.returned_at && new Date(l.due_date) < new Date(new Date().toDateString());
                  return (
                    <li
                      key={l.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {l.books?.title ?? "Título removido"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Retirado em {fmt(l.loan_date)} · Devolver até {fmt(l.due_date)}
                          {l.returned_at ? ` · Devolvido em ${fmt(l.returned_at)}` : ""}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          late || l.status === "atrasado"
                            ? "bg-destructive/15 text-destructive"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        {late && l.status === "ativo" ? "Atrasado" : loanLabels[l.status]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhum empréstimo registrado até agora.
              </p>
            )}
          </Panel>

          <Panel icon={Star} title="Minhas avaliações">
            {reviews.isLoading ? (
              <Loader2 className="size-5 animate-spin text-muted-foreground" />
            ) : reviews.data?.length ? (
              <ul className="grid gap-3">
                {reviews.data.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-2xl border border-border bg-background px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground">
                        {r.books?.title ?? "Título removido"}
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                        <Star className="size-3 fill-current" /> {r.rating}
                      </span>
                    </div>
                    {r.comment && (
                      <p className="mt-1 text-sm text-muted-foreground">{r.comment}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Avalie um livro do acervo para ver suas resenhas aqui.
              </p>
            )}
          </Panel>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
