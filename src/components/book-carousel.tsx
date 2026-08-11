import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { BookCard } from "./book-card";
import { BookDetailDialog } from "./book-detail-dialog";
import type { DbBook, RatingStat } from "@/lib/library";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  books: DbBook[];
  categoryNames?: Map<string, string> | undefined;
  stats?: Map<string, RatingStat> | undefined;
  loading?: boolean | undefined;
};

export function BookCarousel({
  id,
  eyebrow,
  title,
  description,
  books,
  categoryNames,
  stats,
  loading,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<DbBook | null>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-display text-2xl text-primary sm:text-3xl">{title}</h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-primary shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-primary shadow-[var(--shadow-soft)] transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="mt-10 flex justify-center text-muted-foreground">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : books.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Nenhum título nesta seção por enquanto.
        </p>
      ) : (
        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {books.map((b) => (
            <div key={b.id} className="snap-start">
              <BookCard
                book={b}
                categoryName={
                  (b.category_id && categoryNames?.get(b.category_id)) || undefined
                }
                stat={stats?.get(b.id)}
                onOpen={setSelected}
              />
            </div>
          ))}
        </div>
      )}

      {selected && (
        <BookDetailDialog book={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
