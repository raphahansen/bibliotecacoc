import { useState } from "react";
import { BookOpenText, Search, LogIn, UserRound, Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Categorias", href: "#categorias" },
  { label: "Destaques", href: "#destaques" },
  { label: "Novidades", href: "#novidades" },
  { label: "Mais Avaliados", href: "#avaliados" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <BookOpenText className="size-5" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-primary">
              Biblioteca COC
            </span>
            <span className="block truncate text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Novomundo
            </span>
          </span>
        </a>

        <div className="hidden lg:block">
          <label className="group flex items-center gap-3 rounded-full border border-border bg-secondary/70 px-5 py-2.5 transition-colors focus-within:border-primary-soft focus-within:bg-card">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar por título, autor ou categoria…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary sm:inline-flex">
            <LogIn className="size-4" /> Entrar
          </button>
          <button
            aria-label="Perfil"
            className="grid size-10 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            <UserRound className="size-5" />
          </button>
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
          <label className="mb-4 flex items-center gap-3 rounded-full border border-border bg-secondary/70 px-4 py-2.5">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar livros…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
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
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              <LogIn className="size-4" /> Entrar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
