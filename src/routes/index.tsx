import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { BookCarousel } from "@/components/book-carousel";
import { SiteFooter } from "@/components/site-footer";
import { featured, novelties, topRated } from "@/data/library";

const title = "Biblioteca COC Novomundo · Acervo digital da escola";
const description =
  "Explore mais de 2.000 títulos da Biblioteca COC Novomundo: categorias, livros em destaque, novidades e os mais bem avaliados pelos estudantes.";

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
      </main>
      <SiteFooter />
    </div>
  );
}
