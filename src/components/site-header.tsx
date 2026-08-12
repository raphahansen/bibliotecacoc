import { useState } from "react";
import { Search, LogIn, UserRound, Menu, X, LogOut, Shield } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import logo from "@/assets/logo-novomundo-coc.png.asset.json";
import { useAuth } from "@/hooks/use-auth";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Acervo", href: "/acervo" },
  { label: "Categorias", href: "/#categorias" },
  { label: "Destaques", href: "/#destaques" },
  { label: "Clube Leitor", href: "/#clube" },
  { label: "Leitor do Mês", href: "/#leitor-do-mes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const { user, isStaff, signOut } = useAuth();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    navigate({ to: "/acervo", search: { q: term.trim(), nivel: "" } });
  };

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
    void navigate({ to: "/", replace: true });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
        <a href="/#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Colégio Novomundo · Plataforma de Educação COC"
            className="h-12 w-auto shrink-0 sm:h-14"
          />
          <span className="hidden min-w-0 border-l border-border pl-3 leading-tight sm:block">
            <span className="block truncate font-display text-base font-semibold text-primary">
              Biblioteca COC Novomundo
            </span>
            <span className="block truncate text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Profª Vera Massis
            </span>
          </span>
        </a>

        <form onSubmit={submit} className="hidden lg:block">
          <label className="group flex items-center gap-3 rounded-full border border-border bg-secondary/70 px-5 py-2.5 transition-colors focus-within:border-primary-soft focus-within:bg-card">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Buscar por título, autor ou categoria…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </label>
        </form>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link
                to="/perfil"
                className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary sm:inline-flex"
              >
                <UserRound className="size-4" /> Perfil
              </Link>
              {isStaff && (
                <Link
                  to="/admin"
                  className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] sm:inline-flex"
                >
                  <Shield className="size-4" /> Admin
                </Link>
              )}
              <button
                onClick={handleSignOut}
                aria-label="Sair"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <LogOut className="size-4" />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth"
                className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:inline-flex"
              >
                <LogIn className="size-4" /> Entrar
              </Link>
              <Link
                to="/auth"
                aria-label="Entrar"
                className="grid size-10 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 sm:hidden"
              >
                <UserRound className="size-5" />
              </Link>
            </>
          )}
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav className="col-span-full hidden gap-7 pb-1 lg:flex lg:justify-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 pb-5 pt-4 lg:hidden">
          <form onSubmit={submit}>
            <label className="mb-4 flex items-center gap-3 rounded-full border border-border bg-secondary/70 px-4 py-2.5">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Buscar livros…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
          </form>
          <nav className="grid gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            {user ? (
              <>
                <Link
                  to="/perfil"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Meu perfil
                </Link>
                {isStaff && (
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    Painel administrativo
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  <LogOut className="size-4" /> Sair
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <LogIn className="size-4" /> Entrar
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
