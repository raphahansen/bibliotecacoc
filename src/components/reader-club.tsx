import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Star, BookMarked, CheckCircle2, Clock3, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  fetchBooksByIds,
  fetchLatestReviewsWithBooks,
  type DbBook,
} from "@/lib/library";
import { BookDetailDialog } from "./book-detail-dialog";

export function ReaderClub() {
  const [selected, setSelected] = useState<DbBook | null>(null);

  const reviewsQuery = useQuery({
    queryKey: ["latest-reviews"],
    queryFn: () => fetchLatestReviewsWithBooks(6),
  });

  const reviews = (reviewsQuery.data ?? []).filter((r) => r.books);

  const booksQuery = useQuery({
    queryKey: ["latest-review-books", reviews.map((r) => r.book_id)],
    queryFn: () => fetchBooksByIds(reviews.map((r) => r.book_id)),
    enabled: reviews.length > 0,
  });

  const openBook = (bookId: string) => {
    const book = (booksQuery.data ?? []).find((b) => b.id === bookId);
    if (book) setSelected(book);
  };

  return (
    <section id="clube" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          Club do COC Leitor
        </p>
        <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">
          Avalie, comente e reserve
        </h2>
        <p className="mt-3 text-muted-foreground">
          Além de consultar o acervo, cada estudante pode dar uma nota ao livro,
          escrever a sua opinião sobre a leitura e reservar o exemplar disponível.
        </p>
      </div>

      {reviewsQuery.isLoading ? (
        <div className="mt-9 flex justify-center text-muted-foreground">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : reviews.length === 0 ? (
        <div className="mt-9 rounded-3xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Nenhuma avaliação publicada ainda. Seja o primeiro a comentar um livro do
            acervo.
          </p>
          <Link
            to="/acervo"
            search={{ q: "", nivel: "" }}
            className="mt-4 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Escolher um livro
          </Link>
        </div>
      ) : (
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => {
            const available = (r.books?.available_copies ?? 0) > 0;
            return (
              <article
                key={r.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-primary">
                  <BookMarked className="size-4 shrink-0" />
                  <h3 className="font-display text-lg leading-tight">
                    {r.books?.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground">{r.books?.author}</p>

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${i < r.rating ? "fill-gold text-gold" : "text-border"}`}
                    />
                  ))}
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{r.comment}”
                </p>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Leitor da Biblioteca ·{" "}
                  {new Date(r.created_at).toLocaleDateString("pt-BR")}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      available ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {available ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      <Clock3 className="size-4" />
                    )}
                    {available ? "Disponível" : "Emprestado"}
                  </span>
                  <button
                    onClick={() => openBook(r.book_id)}
                    className="rounded-full bg-[image:var(--gradient-gold)] px-4 py-2 text-xs font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
                  >
                    Ver livro
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {selected && (
        <BookDetailDialog book={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
