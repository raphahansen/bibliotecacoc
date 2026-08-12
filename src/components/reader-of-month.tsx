import { Award, Star, BookOpen, Instagram, Loader2, Trophy } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchReaderRanking } from "@/lib/library";

export function ReaderOfMonth() {
  const readerQuery = useQuery({
    queryKey: ["reader-ranking"],
    queryFn: () => fetchReaderRanking(10),
  });

  const ranking = readerQuery.data ?? [];
  const reader = ranking[0];
  const others = ranking.slice(1);
  const month = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });


  return (
    <section id="leitor-do-mes" className="bg-secondary/60 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
            Reconhecimento
          </p>
          <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">
            Leitor do mês
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            O aluno que mais ler no mês tem a sua foto publicada nas redes sociais
            da escola, incentivando mais estudantes a mergulharem na leitura.
          </p>
          <a
            href="https://www.instagram.com/cocnovomundo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            <Instagram className="size-4" /> Ver no perfil da escola
          </a>
        </div>

        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-lift)]">
          <span className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-accent-foreground">
            <Award className="size-6" />
          </span>

          {readerQuery.isLoading ? (
            <div className="flex items-center gap-3 py-8 text-muted-foreground">
              <Loader2 className="size-5 animate-spin" /> Carregando…
            </div>
          ) : reader ? (
            <>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {month}
              </p>
              <h3 className="mt-1 font-display text-2xl text-primary">
                {reader.full_name}
              </h3>
              {reader.grade && (
                <p className="text-sm text-muted-foreground">{reader.grade}</p>
              )}

              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary/70 p-4">
                  <p className="font-display text-2xl text-primary">
                    {reader.books_read}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    livros lidos em {month}
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/70 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <BookOpen className="size-4" /> Leitor destaque
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {reader.on_time} devolução(ões) no prazo
                  </p>
                </div>
              </div>

              {others.length > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Trophy className="size-4" /> Ranking de leitores
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {others.map((r) => (
                      <li
                        key={r.user_id}
                        className="flex items-center gap-3 rounded-xl bg-secondary/50 px-3 py-2"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {r.position}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-sm text-foreground/90">
                          {r.full_name}
                          {r.grade ? (
                            <span className="text-muted-foreground"> · {r.grade}</span>
                          ) : null}
                        </span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {r.books_read} livro{r.books_read === 1 ? "" : "s"}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Empates são decididos por devoluções no prazo e, persistindo, por
                    quem começou a ler primeiro no mês.
                  </p>
                </div>
              )}

            </>
          ) : (
            <div className="py-6 text-center">
              <p className="text-sm text-muted-foreground">
                Ainda não há leituras registradas neste mês.
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                Seja o próximo leitor do mês!
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
