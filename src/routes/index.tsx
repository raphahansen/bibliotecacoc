import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { BookCarousel } from "@/components/book-carousel";
import { ReaderClub } from "@/components/reader-club";
import { ReaderOfMonth } from "@/components/reader-of-month";
import { AgendaSection } from "@/components/agenda-section";
import { SiteFooter } from "@/components/site-footer";
import { featured, novelties, topRated } from "@/data/library";

const title = "Biblioteca COC Novomundo · Profª Vera Massis";
const description =
  "Acervo, avaliações e reservas da Biblioteca COC Novomundo: categorias, destaques, novidades, Club do COC Leitor, leitor do mês e agenda da sala de leitura.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
          description="Escolhas dos bibliotecários para este mês, com clássicos e leituras contemporâneas."
          books={featured}
        />
        <div className="bg-secondary/50 py-2">
          <BookCarousel
            id="novidades"
            eyebrow="Chegaram agora"
            title="Novidades"
            description="Os títulos mais recentes que entraram no acervo e já estão disponíveis para empréstimo."
            books={novelties}
          />
        </div>
        <BookCarousel
          id="avaliados"
          eyebrow="Escolha dos leitores"
          title="Mais Bem Avaliados"
          description="Os livros com as melhores notas dadas pelos estudantes da escola."
          books={topRated}
        />
        <ReaderClub />
        <ReaderOfMonth />
        <AgendaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

