import { useMemo, useState } from "react";
import { Search, X, BookOpen, Library } from "lucide-react";
import {
  catalog,
  levels,
  levelLabel,
  bookCategories,
  type LibraryBook,
} from "@/data/catalog";

type Props = {
  lockedCategory?: string;
  initialQuery?: string;
  initialLevel?: string;
};

const PAGE = 24;

const tones = [
  "oklch(0.42 0.075 42)",
  "oklch(0.47 0.09 30)",
  "oklch(0.38 0.06 60)",
  "oklch(0.5 0.08 20)",
  "oklch(0.44 0.07 80)",
  "oklch(0.36 0.05 40)",
];

function BookTile({ book, onOpen }: { book: LibraryBook; onOpen: () => void }) {
  const tone = tones[book.id.length % tones.length]!;
  return (
    <button
      onClick={onOpen}
      className="group flex flex-col rounded-2xl border border-border bg-card p-3 text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div
        className="relative aspect-[2/3] w-full overflow-hidden rounded-xl"
        style={{
          background: `linear-gradient(150deg, ${tone}, color-mix(in oklab, ${tone} 55%, black))`,
        }}
      >
        <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />
        <div className="flex h-full flex-col justify-between p-3 pl-5">
          <span className="text-[0.55rem] uppercase tracking-[0.18em] text-primary-foreground/70">
            {book.category}
          </span>
          <span className="font-display text-sm leading-tight text-primary-foreground line-clamp-4">
            {book.title}
          </span>
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-sm font-semibold text-foreground">
        {book.title}
      </p>
      <p className="truncate text-xs text-muted-foreground">{book.author}</p>
      <span className="mt-2 inline-flex w-fit rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-medium text-primary">
        {levelLabel(book.level)}
      </span>
    </button>
  );
}

export function CatalogBrowser({
  lockedCategory,
  initialQuery = "",
  initialLevel = "",
}: Props) {
  const [q, setQ] = useState(initialQuery);
  const [category, setCategory] = useState(lockedCategory ?? "");
  const [level, setLevel] = useState(initialLevel);
  const [onlyCollection, setOnlyCollection] = useState(false);
  const [visible, setVisible] = useState(PAGE);
  const [selected, setSelected] = useState<LibraryBook | null>(null);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return catalog.filter((b) => {
      if (lockedCategory ? b.category !== lockedCategory : category && b.category !== category)
        return false;
      if (level && b.level !== level) return false;
      if (onlyCollection && !b.collection) return false;
      if (!term) return true;
      return (
        b.title.toLowerCase().includes(term) ||
        b.author.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term) ||
        b.publisher.toLowerCase().includes(term)
      );
    });
  }, [q, category, level, onlyCollection, lockedCategory]);

  const reset = () => {
    setQ("");
    if (!lockedCategory) setCategory("");
    setLevel("");
    setOnlyCollection(false);
    setVisible(PAGE);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:p-6">
        <label className="flex items-center gap-3 rounded-full border border-border bg-secondary/60 px-5 py-3 focus-within:border-primary-soft focus-within:bg-card">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setVisible(PAGE);
            }}
            type="search"
            placeholder="Buscar por título, autor, categoria ou editora…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {!lockedCategory && (
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setVisible(PAGE);
              }}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground outline-none"
            >
              <option value="">Todas as categorias</option>
              {bookCategories.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name} ({c.count})
                </option>
              ))}
            </select>
          )}

          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              setVisible(PAGE);
            }}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground outline-none"
          >
            <option value="">Toda classificação indicativa</option>
            {levels.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setOnlyCollection((v) => !v);
              setVisible(PAGE);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              onlyCollection
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-primary hover:bg-secondary"
            }`}
          >
            Somente coleções
          </button>

          <button
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-primary"
          >
            <X className="size-4" /> Limpar filtros
          </button>

          <span className="ml-auto text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "título" : "títulos"}
          </span>
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Nenhum título encontrado com esses filtros.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {results.slice(0, visible).map((b) => (
            <BookTile key={b.id} book={b} onOpen={() => setSelected(b)} />
          ))}
        </div>
      )}

      {visible < results.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE * 2)}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            Carregar mais títulos
          </button>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {selected.category}
                </p>
                <h3 className="mt-1 font-display text-2xl text-primary">
                  {selected.title}
                </h3>
                <p className="text-sm text-muted-foreground">{selected.author}</p>
              </div>
              <button
                aria-label="Fechar"
                onClick={() => setSelected(null)}
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-primary hover:bg-secondary"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-primary">
                <BookOpen className="size-3.5" /> {levelLabel(selected.level)}
              </span>
              {selected.publisher && (
                <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                  {selected.publisher}
                </span>
              )}
              {selected.collection && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 font-medium text-accent-foreground">
                  <Library className="size-3.5" /> Coleção
                </span>
              )}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-foreground/85">
              {selected.synopsis || "Sinopse não informada na planilha do acervo."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
