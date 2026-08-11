import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Search, X, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const PAGE_SIZE = 20;

export type SelectableBook = {
  id: string;
  title: string;
  author: string;
  total_copies: number;
  available_copies: number;
};

const input =
  "rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary-soft";

function useDebounced(value: string, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/**
 * Seletor de livros pesquisável com busca no banco, debounce e
 * carregamento incremental. Fonte de verdade: tabela `books`.
 */
export function BookSelector({
  value,
  onChange,
  onlyAvailable = false,
  label = "Livro",
  placeholder = "Pesquisar por título ou autor…",
}: {
  value: SelectableBook | null;
  onChange: (book: SelectableBook | null) => void;
  onlyAvailable?: boolean;
  label?: string;
  placeholder?: string;
}) {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState(1);
  const debounced = useDebounced(term);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPages(1);
  }, [debounced, onlyAvailable]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const results = useQuery({
    queryKey: ["book-selector", debounced, onlyAvailable, pages],
    enabled: open,
    queryFn: async () => {
      const safe = debounced.trim().replace(/[,%()]/g, " ");
      let query = supabase
        .from("books")
        .select("id, title, author, total_copies, available_copies", { count: "exact" })
        .eq("active", true);
      if (onlyAvailable) query = query.gt("available_copies", 0);
      if (safe) query = query.or(`title.ilike.%${safe}%,author.ilike.%${safe}%`);
      const { data, error, count } = await query
        .order("title")
        .range(0, pages * PAGE_SIZE - 1);
      if (error) throw error;
      return { rows: (data ?? []) as SelectableBook[], total: count ?? 0 };
    },
    placeholderData: (prev) => prev,
  });

  const rows = results.data?.rows ?? [];
  const total = results.data?.total ?? 0;

  return (
    <div className="min-w-0" ref={boxRef}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>

      {value ? (
        <div className="mt-1 flex items-start gap-2 rounded-2xl border border-border bg-card px-4 py-2.5">
          <BookOpen className="mt-0.5 size-4 shrink-0 text-primary" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{value.title}</p>
            <p className="truncate text-xs text-muted-foreground">
              {value.author || "Autor não informado"} · {value.total_copies} exemplar(es) ·{" "}
              {value.available_copies} disponível(is)
            </p>
          </div>
          <button
            type="button"
            className="rounded-full p-1 text-muted-foreground hover:bg-secondary"
            aria-label="Trocar livro"
            onClick={() => {
              onChange(null);
              setOpen(true);
            }}
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <div className="relative mt-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={term}
            onFocus={() => setOpen(true)}
            onChange={(e) => {
              setTerm(e.target.value);
              setOpen(true);
            }}
            placeholder={placeholder}
            className={`${input} w-full pl-9`}
          />
        </div>
      )}

      {open && !value && (
        <div className="mt-2 max-h-72 overflow-y-auto rounded-2xl border border-border bg-card p-1">
          {results.isFetching && rows.length === 0 && (
            <p className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Buscando livros…
            </p>
          )}
          {!results.isFetching && rows.length === 0 && (
            <p className="px-3 py-2 text-sm text-muted-foreground">
              Não encontramos nenhum livro com esse título ou autor.
            </p>
          )}
          {rows.map((b) => (
            <button
              key={b.id}
              type="button"
              className="block w-full rounded-xl px-3 py-2 text-left transition-colors hover:bg-secondary"
              onClick={() => {
                onChange(b);
                setOpen(false);
                setTerm("");
              }}
            >
              <span className="block truncate text-sm font-medium text-foreground">{b.title}</span>
              <span className="block truncate text-xs text-muted-foreground">
                {b.author || "Autor não informado"} · {b.total_copies} exemplar(es) ·{" "}
                {b.available_copies} disponível(is)
              </span>
            </button>
          ))}
          {rows.length < total && (
            <button
              type="button"
              className="mt-1 w-full rounded-xl border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-secondary"
              onClick={() => setPages((p) => p + 1)}
            >
              {results.isFetching ? "Carregando…" : `Carregar mais (${total - rows.length} restantes)`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
