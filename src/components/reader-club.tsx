import { Star, BookMarked, CheckCircle2, Clock3 } from "lucide-react";
import { reviews } from "@/data/library";

export function ReaderClub() {
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

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.id}
            className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 text-primary">
              <BookMarked className="size-4" />
              <h3 className="font-display text-lg leading-tight">{r.book}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{r.author}</p>

            <div className="mt-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < r.rating ? "fill-gold text-gold" : "text-border"}`}
                />
              ))}
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
              “{r.text}”
            </p>
            <p className="mt-4 text-xs font-medium text-muted-foreground">{r.reader}</p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  r.available ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {r.available ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <Clock3 className="size-4" />
                )}
                {r.available ? "Disponível" : "Emprestado"}
              </span>
              <button
                disabled={!r.available}
                className="rounded-full bg-[image:var(--gradient-gold)] px-4 py-2 text-xs font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:scale-100"
              >
                {r.available ? "Reservar" : "Entrar na fila"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
