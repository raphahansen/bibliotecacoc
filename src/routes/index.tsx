import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { BookCarousel } from "@/components/book-carousel";
import { ReaderClub } from "@/components/reader-club";
import { ReaderOfMonth } from "@/components/reader-of-month";
import { SiteFooter } from "@/components/site-footer";
import { fetchCategories, fetchHomeSections } from "@/lib/library";

const title = "Biblioteca COC Novomundo · Profª Vera Massis";
const description =
  "Acervo, avaliações e reservas da Biblioteca COC Novomundo: categorias, destaques, novidades, Club do COC Leitor e leitor do mês.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bibliotecanovomundo.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://bibliotecanovomundo.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Library",
          name: "Biblioteca COC Novomundo",
          alternateName: "Biblioteca Profª Vera Massis",
          url: "https://bibliotecanovomundo.lovable.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Mal. Mallet, 392 - Canto do Forte",
            addressLocality: "Praia Grande",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:30",
              closes: "10:50",
            },
          ],
          sameAs: ["https://www.instagram.com/cocnovomundo/"],
        }),
      },
    ],
  }),
  component: Index,
});


function Index() {
  const homeQuery = useQuery({
    queryKey: ["home-sections"],
    queryFn: fetchHomeSections,
  });
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const categoryNames = new Map(
    (categoriesQuery.data ?? []).map((c) => [c.id, c.name]),
  );
  const loading = homeQuery.isLoading;
  const data = homeQuery.data;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CategoryGrid />
        <BookCarousel
          id="destaques"
          eyebrow="Seleção da equipe"
          title="Livros em Destaque"
          description="Coleções e escolhas dos bibliotecários, com clássicos e leituras contemporâneas."
          books={data?.featured ?? []}
          categoryNames={categoryNames}
          stats={data?.stats}
          loading={loading}
        />
        <div className="bg-secondary/50 py-2">
          <BookCarousel
            id="novidades"
            eyebrow="Chegaram agora"
            title="Novidades"
            description="Os títulos mais recentes que entraram no acervo e já estão disponíveis para empréstimo."
            books={data?.novelties ?? []}
            categoryNames={categoryNames}
            stats={data?.stats}
            loading={loading}
          />
        </div>
        <BookCarousel
          id="avaliados"
          eyebrow="Escolha dos leitores"
          title="Mais Bem Avaliados"
          description="Os livros com as melhores notas dadas pelos estudantes da escola."
          books={data?.topRated ?? []}
          categoryNames={categoryNames}
          stats={data?.stats}
          loading={loading}
        />
        <ReaderClub />
        <ReaderOfMonth />
      </main>
      <SiteFooter />
    </div>
  );
}
