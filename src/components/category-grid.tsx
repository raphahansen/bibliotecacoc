import * as Icons from "lucide-react";
import { Link } from "@tanstack/react-router";
import { bookCategories, catalog } from "@/data/catalog";

export function CategoryGrid() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Explore o acervo
          </span>
          <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">Categorias</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {catalog.length} títulos organizados pelas prateleiras da sala de leitura.
            Clique em uma categoria para ver todos os livros dela.
          </p>
        </div>
        <Link
          to="/acervo"
          search={{ q: "", nivel: "" }}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
        >
          Ver acervo completo
        </Link>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {bookCategories.map((c) => {
          const Icon =
            (Icons as unknown as Record<string, Icons.LucideIcon>)[c.icon] ?? Icons.Book;
          return (
            <Link
              key={c.slug}
              to="/categoria/$slug"
              params={{ slug: c.slug }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft/40 hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {c.name}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {c.count} títulos
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
