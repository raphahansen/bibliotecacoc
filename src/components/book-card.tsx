import { Star } from "lucide-react";
import { bookTone, type DbBook, type RatingStat } from "@/lib/library";

export function BookCard({
  book,
  categoryName,
  stat,
  onOpen,
}: {
  book: DbBook;
  categoryName?: string | undefined;
  stat?: RatingStat | undefined;
  onOpen?: ((book: DbBook) => void) | undefined;
}) {
  const tone = bookTone(book.id);
  return (
    <article className="group w-[172px] shrink-0 sm:w-[200px]">
      <button
        onClick={() => onOpen?.(book)}
        className="block w-full text-left"
        aria-label={`Ver detalhes de ${book.title}`}
      >
        <div
          className="relative aspect-[2/3] overflow-hidden rounded-2xl shadow-[var(--shadow-card)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[var(--shadow-lift)]"
          style={{
            background: `linear-gradient(150deg, ${tone}, color-mix(in oklab, ${tone} 60%, black))`,
          }}
        >
          <div className="absolute inset-y-0 left-0 w-2.5 bg-black/25" />
          <div className="flex h-full flex-col justify-between p-4 pl-6">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground/70">
              {categoryName ?? "Acervo"}
            </span>
            <div>
              <h3 className="font-display text-lg leading-tight text-primary-foreground line-clamp-4">
                {book.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-xs text-primary-foreground/75">
                {book.author}
              </p>
            </div>
          </div>
          {stat && stat.count > 0 ? (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-2 py-0.5 text-[0.7rem] font-semibold text-accent-foreground">
              <Star className="size-3 fill-current" />
              {stat.avg.toFixed(1)}
            </span>
          ) : (
            <span
              className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold ${
                book.available_copies > 0
                  ? "bg-[image:var(--gradient-gold)] text-accent-foreground"
                  : "bg-black/45 text-white"
              }`}
            >
              {book.available_copies > 0 ? "Disponível" : "Emprestado"}
            </span>
          )}
        </div>
        <div className="mt-3 px-0.5">
          <p className="truncate text-sm font-semibold text-foreground">{book.title}</p>
          <p className="truncate text-xs text-muted-foreground">{book.author}</p>
        </div>
      </button>
    </article>
  );
}
