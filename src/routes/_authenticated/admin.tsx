import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shield } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  BooksAdmin,
  CategoriesAdmin,
  DashboardAdmin,
  LoansAdmin,
  ReservationsAdmin,
  ReviewsAdmin,
  UsersAdmin,
} from "@/components/admin/panels";
import { CopiesAdmin } from "@/components/admin/copies-panel";
import { AuditAdmin } from "@/components/admin/audit-panel";
import { CoversAdmin } from "@/components/admin/covers-bulk";


export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Painel administrativo · Biblioteca COC Novomundo" },
      {
        name: "description",
        content:
          "Gestão de livros, usuários, reservas e empréstimos da Biblioteca COC Novomundo.",
      },
      { property: "og:title", content: "Painel administrativo · Biblioteca COC Novomundo" },
      { property: "og:description", content: "Gestão do acervo e dos empréstimos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const tabs = [
  "Visão geral",
  "Livros",
  "Inventário de exemplares",
  "Capas e fotos",
  "Reservas",
  "Empréstimos",
  "Avaliações",
  "Usuários",
  "Categorias",
  "Histórico",

] as const;

function AdminPage() {
  const { isStaff, isAdmin, loading } = useAuth();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Visão geral");

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <p className="pt-40 text-center text-sm text-muted-foreground">Carregando…</p>
      </div>
    );
  }

  if (!isStaff) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-md px-4 pb-20 pt-40 text-center">
          <Shield className="mx-auto size-8 text-muted-foreground" />
          <h1 className="mt-3 font-display text-2xl text-primary">Acesso restrito</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Esta área é exclusiva da equipe da biblioteca.
          </p>
          <Link
            to="/perfil"
            className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Voltar ao meu perfil
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-36 lg:px-8">
        <h1 className="font-display text-3xl text-primary">Painel administrativo</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Catalogação, empréstimos, devoluções e cadastro de leitores.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-primary hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5">
          {tab === "Visão geral" && <DashboardAdmin />}
          {tab === "Livros" && <BooksAdmin />}
          {tab === "Inventário de exemplares" && <CopiesAdmin />}
          {tab === "Capas e fotos" && <CoversAdmin />}
          {tab === "Reservas" && <ReservationsAdmin />}
          {tab === "Empréstimos" && <LoansAdmin />}
          {tab === "Avaliações" && <ReviewsAdmin />}
          {tab === "Usuários" && <UsersAdmin isAdmin={isAdmin} />}
          {tab === "Categorias" && <CategoriesAdmin />}
          {tab === "Histórico" && <AuditAdmin />}

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
