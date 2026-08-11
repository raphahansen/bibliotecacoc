import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CatalogBrowser } from "@/components/catalog-browser";
import { fetchCategoryBySlug } from "@/lib/library";

export const Route = createFileRoute("/categoria/$slug")({
  loader: async ({ params }) => {
    const category = await fetchCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Categoria não encontrada · Biblioteca COC Novomundo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.category.name} · Biblioteca COC Novomundo`;
    const description = `Títulos da prateleira ${loaderData.category.name} na Biblioteca COC Novomundo, com sinopses, classificação indicativa e disponibilidade para reserva.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: CategoriaErro,
  notFoundComponent: CategoriaNaoEncontrada,
  component: CategoriaPage,
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-40 text-center">{children}</main>
      <SiteFooter />
    </div>
  );
}

function CategoriaErro() {
  return (
    <Shell>
      <h1 className="font-display text-3xl text-primary">
        Não foi possível carregar esta categoria
      </h1>
      <Link
        to="/"
        className="mt-4 inline-block text-sm text-primary underline"
      >
        Voltar para o início
      </Link>
    </Shell>
  );
}

function CategoriaNaoEncontrada() {
  return (
    <Shell>
      <h1 className="font-display text-3xl text-primary">Categoria não encontrada</h1>
      <Link to="/" className="mt-4 inline-block text-sm text-primary underline">
        Voltar para o início
      </Link>
    </Shell>
  );
}

function CategoriaPage() {
  const { category } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            to="/"
            hash="categorias"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Todas as categorias
          </Link>
          <h1 className="mt-3 font-display text-3xl text-primary sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Títulos desta prateleira do acervo, com sinopse, disponibilidade e reserva.
          </p>
        </div>
        <CatalogBrowser lockedCategoryId={category.id} />
      </main>
      <SiteFooter />
    </div>
  );
}
