import { ChevronLeft, ChevronRight } from "lucide-react";

const btn =
  "inline-flex min-w-9 items-center justify-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-45";
const active =
  "inline-flex min-w-9 items-center justify-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground";

function pageNumbers(page: number, totalPages: number): (number | "…")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
  const set = new Set<number>([0, totalPages - 1, page, page - 1, page + 1]);
  const list = [...set].filter((p) => p >= 0 && p < totalPages).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  let prev: number | null = null;
  for (const p of list) {
    if (prev !== null && p - prev > 1) out.push("…");
    out.push(p);
    prev = p;
  }
  return out;
}

export function Pagination({
  page,
  pageSize,
  total,
  onPage,
  unitLabel,
}: {
  page: number;
  pageSize: number;
  total: number;
  onPage: (page: number) => void;
  unitLabel: string;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : page * pageSize + 1;
  const to = Math.min(total, (page + 1) * pageSize);

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
      <p className="text-xs text-muted-foreground">
        Página {page + 1} de {totalPages} · Mostrando {from}–{to} de {total} {unitLabel}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        <button className={btn} disabled={page === 0} onClick={() => onPage(page - 1)}>
          <ChevronLeft className="size-3" /> Anterior
        </button>
        {pageNumbers(page, totalPages).map((p, i) =>
          p === "…" ? (
            <span key={`gap-${i}`} className="px-1 text-xs text-muted-foreground">
              …
            </span>
          ) : (
            <button
              key={p}
              className={p === page ? active : btn}
              onClick={() => onPage(p)}
              aria-current={p === page ? "page" : undefined}
            >
              {p + 1}
            </button>
          ),
        )}
        <button
          className={btn}
          disabled={page >= totalPages - 1}
          onClick={() => onPage(page + 1)}
        >
          Próximo <ChevronRight className="size-3" />
        </button>
      </div>
    </div>
  );
}
