import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CatalogBrowser } from "@/components/catalog-browser";

const title = "Acervo completo · Biblioteca COC Novomundo";
const description =
  "Busque e filtre os títulos da Biblioteca COC Novomundo por categoria, classificação indicativa e coleções, com sinopses da planilha oficial do acervo.";

export const Route = createFileRoute("/acervo")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? search["q"] : "",
    nivel: typeof search["nivel"] === "string" ? search["nivel"] : "",
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bibliotecanovomundo.lovable.app/acervo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bibliotecanovomundo.lovable.app/acervo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Acervo completo",
          description,
          url: "https://bibliotecanovomundo.lovable.app/acervo",
          isPartOf: { "@id": "https://bibliotecanovomundo.lovable.app/#website" },
          about: { "@type": "Thing", name: "Livros da Biblioteca COC Novomundo" },
        }),
      },
    ],
  }),

  component: AcervoPage,
});

function AcervoPage() {
  const { q, nivel } = Route.useSearch();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Planilha oficial do acervo
          </span>
          <h1 className="mt-2 font-display text-3xl text-primary sm:text-4xl">
            Acervo completo
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Todos os títulos catalogados por prateleira, com sinopse, classificação
            indicativa e disponibilidade em tempo real. Use a busca e os filtros para
            encontrar sua próxima leitura.
          </p>
        </div>
        <CatalogBrowser key={q + nivel} initialQuery={q} initialLevel={nivel} />
      </main>
      <SiteFooter />
    </div>
  );
}
