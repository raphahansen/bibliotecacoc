import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookCard } from "./book-card";
import type { Book } from "@/data/library";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  books: Book[];
};

export function BookCarousel({ id, eyebrow, title, description, books }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

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

      <div
        ref={trackRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {books.map((b) => (
          <div key={b.id} className="snap-start">
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </section>
  );
}
