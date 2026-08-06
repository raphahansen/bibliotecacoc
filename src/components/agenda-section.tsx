import { Megaphone, Repeat2, Mic, Library, ArrowLeftRight, Users, CalendarDays } from "lucide-react";
import { agenda, adminHighlights } from "@/data/library";

const icons = { Megaphone, Repeat2, Mic, Library, ArrowLeftRight, Users } as const;

function Icon({ name, className }: { name: string; className?: string }) {
  const C = icons[name as keyof typeof icons] ?? CalendarDays;
  return <C className={className} />;
}

export function AgendaSection() {
  return (
    <section id="agenda" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          Programação
        </p>
        <h2 className="mt-2 font-display text-3xl text-primary sm:text-4xl">
          Agenda da sala de leitura
        </h2>
        <p className="mt-3 text-muted-foreground">
          Ações e eventos que acontecem no espaço da biblioteca ao longo do semestre.
        </p>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {agenda.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
              <Icon name={item.icon} className="size-5" />
            </span>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
              {item.month}
            </p>
            <h3 className="mt-1 font-display text-lg text-primary">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-lift)] lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
              Área administrativa
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl">
              Todo o controle da biblioteca em um só lugar
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/75">
              O caderno fica só para os momentos em que a auxiliar não estiver presente —
              todos os registros são transferidos para o site.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {adminHighlights.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur-sm"
              >
                <Icon name={a.icon} className="size-5 text-gold" />
                <p className="mt-3 font-semibold">{a.title}</p>
                <p className="mt-1 text-xs text-primary-foreground/70">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
