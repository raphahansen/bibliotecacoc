import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { BookOpen, Library, Loader2, Star, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";
import {
  createReservation,
  deleteReview,
  fetchBookReviews,
  fetchMyReservations,
  levelLabel,
  reservationLabels,
  upsertReview,
  type DbBook,
} from "@/lib/library";

function Stars({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(n)}
          aria-label={`${n} estrela${n > 1 ? "s" : ""}`}
          className={onChange ? "transition-transform hover:scale-110" : "cursor-default"}
        >
          <Star
            className={`size-5 ${n <= value ? "fill-gold text-gold" : "text-border"}`}
          />
        </button>
      ))}
    </div>
  );
}

export function BookDetailDialog({
  book,
  onClose,
}: {
  book: DbBook;
  onClose: () => void;
}) {
  const { user, isStaff } = useAuth();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const removeReview = useMutation({
    mutationFn: (id: string) => deleteReview(id),
    onSuccess: () => {
      toast.success("Avaliação excluída.");
      queryClient.invalidateQueries({ queryKey: ["book-reviews", book.id] });
      queryClient.invalidateQueries({ queryKey: ["latest-reviews"] });
      queryClient.invalidateQueries({ queryKey: ["home-sections"] });
      queryClient.invalidateQueries({ queryKey: ["admin-reviews"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const reviewsQuery = useQuery({
    queryKey: ["book-reviews", book.id],
    queryFn: () => fetchBookReviews(book.id),
  });

  const myReservationsQuery = useQuery({
    queryKey: ["my-reservations", user?.id, book.id],
    enabled: !!user,
    queryFn: async () => {
      if (!user) return [];
      const all = await fetchMyReservations(user.id);
      return all.filter((r) => r.book_id === book.id);
    },
  });

  const reserve = useMutation({
    mutationFn: () => createReservation(user!.id, book.id),
    onSuccess: () => {
      toast.success("Reserva registrada! Acompanhe em Meu perfil.");
      queryClient.invalidateQueries({ queryKey: ["my-reservations"] });
      void myReservationsQuery.refetch();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const review = useMutation({
    mutationFn: () => upsertReview(user!.id, book.id, rating, comment.trim()),
    onSuccess: () => {
      toast.success("Avaliação enviada. Obrigado por comentar!");
      setComment("");
      queryClient.invalidateQueries({ queryKey: ["book-reviews", book.id] });
      queryClient.invalidateQueries({ queryKey: ["home-sections"] });
      queryClient.invalidateQueries({ queryKey: ["latest-reviews"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const reviews = reviewsQuery.data ?? [];
  const avg =
    reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : null;
  const available = book.available_copies > 0;
  const myActiveReservation = (myReservationsQuery.data ?? [])[0];

  const reserveLabel = myActiveReservation
    ? `Você já reservou este título (${reservationLabels[myActiveReservation.status]})`
    : available
      ? "Reservar este livro"
      : "Entrar na fila de espera";

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-lift)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-primary">{book.title}</h3>
            <p className="text-sm text-muted-foreground">{book.author}</p>
          </div>
          <button
            aria-label="Fechar"
            onClick={onClose}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-primary hover:bg-secondary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-primary">
            <BookOpen className="size-3.5" /> {levelLabel(book.level)}
          </span>
          {book.publisher && (
            <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
              {book.publisher}
            </span>
          )}
          {book.collection && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 font-medium text-accent-foreground">
              <Library className="size-3.5" /> Coleção
            </span>
          )}
          <span
            className={`rounded-full px-3 py-1 font-medium ${
              available
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {available
              ? `${book.available_copies} de ${book.total_copies} disponível(is)`
              : "Todos os exemplares emprestados"}
          </span>
          {avg !== null && (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-primary">
              <Star className="size-3.5 fill-gold text-gold" /> {avg.toFixed(1)} (
              {reviews.length})
            </span>
          )}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-foreground/85">
          {book.synopsis || "Sinopse não informada na planilha do acervo."}
        </p>

        <div className="mt-6 border-t border-border pt-5">
          {user ? (
            <div className="space-y-5">
              <button
                onClick={() => reserve.mutate()}
                disabled={reserve.isPending || !!myActiveReservation}
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {reserve.isPending && <Loader2 className="size-4 animate-spin" />}
                {reserveLabel}
              </button>
              {!available && !myActiveReservation && (
                <p className="text-xs text-muted-foreground">
                  Quando um exemplar for devolvido, você será avisado por ordem de chegada.
                </p>
              )}

              <div>
                <p className="text-sm font-semibold text-primary">Sua avaliação</p>
                <div className="mt-2">
                  <Stars value={rating} onChange={setRating} />
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={600}
                  rows={3}
                  placeholder="Conte o que achou da leitura…"
                  className="mt-3 w-full rounded-2xl border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-primary-soft"
                />
                <button
                  onClick={() => review.mutate()}
                  disabled={review.isPending}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  {review.isPending && <Loader2 className="size-4 animate-spin" />}
                  Enviar avaliação
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              <Link to="/auth" className="font-semibold text-primary underline">
                Entre na sua conta
              </Link>{" "}
              para reservar e avaliar este título.
            </p>
          )}
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <p className="text-sm font-semibold text-primary">
            Comentários dos leitores
          </p>
          {reviewsQuery.isLoading ? (
            <p className="mt-3 text-sm text-muted-foreground">Carregando…</p>
          ) : reviews.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Ainda não há avaliações para este livro.
            </p>
          ) : (
            <ul className="mt-3 space-y-3">
              {reviews.map((r) => (
                <li key={r.id} className="rounded-2xl bg-secondary/60 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <Stars value={r.rating} />
                    {isStaff && (
                      <button
                        onClick={() => removeReview.mutate(r.id)}
                        disabled={removeReview.isPending}
                        aria-label="Excluir avaliação"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-destructive disabled:opacity-60"
                      >
                        <Trash2 className="size-3" /> Excluir
                      </button>
                    )}
                  </div>
                  {r.comment && (
                    <p className="mt-2 text-sm text-foreground/85">“{r.comment}”</p>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground">
                    {new Date(r.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
