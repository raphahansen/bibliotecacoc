# Exemplar visível no balcão + exclusão de avaliações

## 1. Deixar o exemplar claro no empréstimo no balcão

Hoje o formulário de balcão já obriga escolher o exemplar, mas a lista mostra o código de patrimônio apenas como texto pequeno junto da data, o que dificulta identificar qual cópia física saiu quando há livros repetidos.

Ajustes (somente apresentação, em `src/components/admin/panels.tsx` → `LoansAdmin`):
- No seletor de exemplar, mostrar `PAT-000123 · estado · localização` em vez de só o código, para o bibliotecário conferir o livro na mão.
- Na lista de empréstimos, exibir o código de patrimônio como etiqueta destacada ao lado do título (mesmo estilo das etiquetas de status), mantendo o restante da linha igual.
- Quando o empréstimo antigo não tiver exemplar vinculado, mostrar "sem exemplar registrado" em vez de esconder a informação.

## 2. Excluir avaliações (bibliotecário e admin)

O banco já permite que a equipe apague avaliações (a regra atual libera exclusão para o próprio autor ou para a equipe), então falta apenas a interface.

- Nova aba "Avaliações" no painel administrativo (`src/routes/_authenticated/admin.tsx`), com painel em `src/components/admin/panels.tsx`:
  - Lista das avaliações mais recentes com livro, leitor, nota, comentário e data.
  - Busca por título do livro ou nome/e-mail do leitor.
  - Botão "Excluir" com confirmação inline, seguido de atualização da lista e das notas médias da home.
- Na tela pública do livro (`src/components/book-detail-dialog.tsx`), quando o usuário for bibliotecário ou admin, mostrar um botão discreto de excluir em cada comentário.

## Detalhes técnicos

- Leitura das avaliações no painel via `supabase.from("reviews").select(...)` com junções de `books` e `profiles` (a equipe já enxerga esses dados pelas políticas atuais); a view pública `reviews_public` continua sendo usada nas telas públicas.
- Exclusão por `supabase.from("reviews").delete().eq("id", id)`; invalidar as consultas `book-reviews`, `latest-reviews`, `home-sections` e `admin-stats`.
- Sem migração de banco e sem alteração do design/paleta.
