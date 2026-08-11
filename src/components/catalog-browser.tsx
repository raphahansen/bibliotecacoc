import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Loader2, Search, X } from "lucide-react";
import {
  bookTone,
  fetchCatalog,
  fetchCategories,
  fetchPublishers,
  levelLabel,
  levelOptions,
  type DbBook,
} from "@/lib/library";
import { BookDetailDialog } from "./book-detail-dialog";

type Props = {
  lockedCategoryId?: string | undefined;
  initialQuery?: string | undefined;
  initialLevel?: string | undefined;
};

const PAGE_SIZE = 24;

function BookTile({
  book,
  categoryName,
  onOpen,
}: {
  book: DbBook;
  categoryName: string;
  onOpen: () => void;
}) {
  const tone = bookTone(book.id);
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
            {categoryName}
          </span>
          <span className="font-display text-sm leading-tight text-primary-foreground line-clamp-4">
            {book.title}
          </span>
        </div>
        <span
          className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[0.6rem] font-semibold ${
            book.available_copies > 0
              ? "bg-[image:var(--gradient-gold)] text-accent-foreground"
              : "bg-black/45 text-white"
          }`}
        >
          {book.available_copies > 0 ? "Disponível" : "Emprestado"}
        </span>
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
  lockedCategoryId,
  initialQuery = "",
  initialLevel = "",
}: Props) {
  const [qInput, setQInput] = useState(initialQuery);
  const [q, setQ] = useState(initialQuery);
  const [categoryId, setCategoryId] = useState(lockedCategoryId ?? "");
  const [level, setLevel] = useState(initialLevel);
  const [publisher, setPublisher] = useState("");
  const [onlyCollection, setOnlyCollection] = useState(false);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState<"title" | "recent" | "author">("title");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<DbBook | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setQ(qInput);
      setPage(0);
    }, 300);
    return () => clearTimeout(t);
  }, [qInput]);

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const publishersQuery = useQuery({
    queryKey: ["publishers"],
    queryFn: fetchPublishers,
  });

  const filters = {
    q,
    categoryId: lockedCategoryId ?? categoryId,
    level,
    publisher,
    onlyCollection,
    onlyAvailable,
    sort,
    page,
    pageSize: PAGE_SIZE,
  };

  const catalogQuery = useQuery({
    queryKey: ["catalog", filters],
    queryFn: () => fetchCatalog(filters),
    placeholderData: keepPreviousData,
  });

  const categoryNames = new Map(
    (categoriesQuery.data ?? []).map((c) => [c.id, c.name]),
  );
  const books = catalogQuery.data?.books ?? [];
  const total = catalogQuery.data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const reset = () => {
    setQInput("");
    if (!lockedCategoryId) setCategoryId("");
    setLevel("");
    setPublisher("");
    setOnlyCollection(false);
    setOnlyAvailable(false);
    setSort("title");
    setPage(0);
  };

  const selectClass =
    "rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground outline-none";

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:p-6">
        <label className="flex items-center gap-3 rounded-full border border-border bg-secondary/60 px-5 py-3 focus-within:border-primary-soft focus-within:bg-card">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={qInput}
            onChange={(e) => setQInput(e.target.value)}
            type="search"
            placeholder="Buscar por título, autor ou editora…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {!lockedCategoryId && (
            <select
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
                setPage(0);
              }}
              className={selectClass}
            >
              <option value="">Todas as categorias</option>
              {(categoriesQuery.data ?? []).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          )}

          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              setPage(0);
            }}
            className={selectClass}
          >
            <option value="">Toda classificação indicativa</option>
            {levelOptions.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>

          <select
            value={publisher}
            onChange={(e) => {
              setPublisher(e.target.value);
              setPage(0);
            }}
            className={selectClass}
          >
            <option value="">Todas as editoras</option>
            {(publishersQuery.data ?? []).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as typeof sort);
              setPage(0);
            }}
            className={selectClass}
          >
            <option value="title">Ordenar por título</option>
            <option value="author">Ordenar por autor</option>
            <option value="recent">Mais recentes</option>
          </select>

          <button
            onClick={() => {
              setOnlyAvailable((v) => !v);
              setPage(0);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              onlyAvailable
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-primary hover:bg-secondary"
            }`}
          >
            Somente disponíveis
          </button>

          <button
            onClick={() => {
              setOnlyCollection((v) => !v);
              setPage(0);
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

          <span className="ml-auto inline-flex items-center gap-2 text-sm text-muted-foreground">
            {catalogQuery.isFetching && <Loader2 className="size-4 animate-spin" />}
            {total} {total === 1 ? "título" : "títulos"}
          </span>
        </div>
      </div>

      {catalogQuery.isError ? (
        <p className="mt-12 text-center text-sm text-destructive">
          Não foi possível carregar o acervo. Tente novamente.
        </p>
      ) : catalogQuery.isLoading ? (
        <div className="mt-12 flex justify-center text-muted-foreground">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : books.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Nenhum título encontrado com esses filtros.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {books.map((b) => (
            <BookTile
              key={b.id}
              book={b}
              categoryName={
                (b.category_id && categoryNames.get(b.category_id)) || "Acervo"
              }
              onOpen={() => setSelected(b)}
            />
          ))}
        </div>
      )}

      {total > PAGE_SIZE && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="rounded-full border border-border px-4 py-2 text-sm text-primary disabled:opacity-40"
          >
            Anterior
          </button>
          <span className="text-sm text-muted-foreground">
            Página {page + 1} de {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page + 1 >= totalPages}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}

      {selected && (
        <BookDetailDialog book={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
