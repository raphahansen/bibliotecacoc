import { Search, Library, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

export function Hero() {
  return (
    <section id="inicio" className="px-4 pt-28 lg:px-8 lg:pt-36">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
        <img
          src={heroImage}
          alt="Interior da biblioteca escolar com estantes de madeira e luz dourada"
          width={1600}
          height={912}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="relative flex flex-col justify-end gap-6 p-7 pt-24 sm:p-12 sm:pt-40 lg:p-16 lg:pt-56">
          <span className="animate-rise inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-gold" /> Acervo digital e físico da escola
          </span>
          <h1 className="animate-rise max-w-3xl font-display text-3xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Cada página aberta é um mundo novo esperando por você.
          </h1>
          <p className="animate-rise max-w-xl text-sm text-primary-foreground/80 sm:text-base">
            Descubra mais de 2.000 títulos organizados por categoria, leia avaliações de
            outros estudantes e monte sua própria estante de leitura.
          </p>

          <div className="animate-rise flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 items-center gap-3 rounded-full bg-card px-5 py-3.5 shadow-[var(--shadow-card)]">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="search"
                placeholder="O que você quer ler hoje?"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-[1.03]">
              <Library className="size-4" /> Explorar acervo
            </button>
          </div>

          <dl className="animate-rise mt-2 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["2.147", "Títulos no acervo"],
              ["28", "Categorias"],
              ["1.860", "Empréstimos em 2026"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-gold-soft">{value}</dt>
                <dd className="text-xs uppercase tracking-[0.16em] text-primary-foreground/65">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
