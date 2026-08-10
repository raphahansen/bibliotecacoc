# Biblioteca COC Novomundo — Sistema real (Cloud)

Transformar o site atual em um sistema funcional de biblioteca, preservando integralmente a identidade visual, os componentes e as páginas existentes. Nada de reconstrução.

## Decisões confirmadas
- Contas criadas apenas por bibliotecário/administrador, com importação em massa (colar CSV) no painel.
- Login somente por e-mail e senha (matrícula é dado de perfil, usada em buscas do painel).
- Controle de exemplares: cada título tem quantidade total e disponível.
- Prazo padrão de empréstimo: 15 dias (configurável nas configurações do sistema).

## Etapas

### 1. Backend (Lovable Cloud)
Ativar o backend e criar o banco com: perfis, papéis de acesso, categorias, livros (com exemplares), reservas, empréstimos, avaliações e configurações. Segurança por linha (RLS) em todas as tabelas, com permissões conferidas no banco — não apenas na tela.

### 2. Migração do catálogo
Os 1.095 títulos de `src/data/catalog.ts` são importados para o banco em uma migração única, preservando título, autor, categoria, editora, classificação, coleção e sinopse. Sem duplicatas (chave única por título+autor). O arquivo estático permanece no projeto como fonte da importação.

### 3. Autenticação
Página `/auth` (login, "esqueci minha senha") e `/redefinir-senha`, no visual atual. Sessão persistente, validação de campos, mensagens de erro/sucesso em português, estados de carregamento, rotas protegidas e bloqueio real de áreas administrativas.

### 4. Acervo conectado
`/acervo` e `/categoria/:slug` passam a consultar o banco mantendo o mesmo layout: busca por título/autor, filtros por categoria, editora, classificação e coleção, ordenação, carregamento paginado e selo de disponibilidade. O modal de detalhes ganha nota média, número de avaliações, disponibilidade e botão "Reservar".

### 5. Reservas
Reservar pelo modal do livro. Estados: pendente, aprovada, disponível para retirada, concluída, cancelada, expirada. Fila por título quando não há exemplar livre. Bloqueio de reserva duplicada ativa do mesmo usuário para o mesmo livro.

### 6. Empréstimos
Registro de retirada (a partir de uma reserva ou direto pelo balcão), devolução prevista em 15 dias, devolução real, responsável pelo registro e status ativo/devolvido/atrasado/perdido. Atraso calculado automaticamente.

### 7. Avaliações
O "Club do COC Leitor" passa a exibir avaliações reais (1 a 5 estrelas + comentário), com edição e exclusão da própria avaliação e uma avaliação por usuário/livro. Média e contagem alimentam "Mais Bem Avaliados".

### 8. Perfil do usuário
Botão de perfil funcional → `/perfil` com dados pessoais, reservas, empréstimos ativos, histórico e avaliações. O usuário edita apenas dados permitidos; nunca o próprio nível de acesso.

### 9. Painel administrativo `/admin`
Restrito a bibliotecário e administrador. Painel com totais (livros, usuários, reservas pendentes, empréstimos ativos e atrasados, disponíveis/emprestados) e gestão de livros, usuários (incluindo importação em massa), reservas, empréstimos e categorias.

### 10. Página inicial
Mesmo design. Destaques, novidades e mais bem avaliados passam a vir do banco; "Club do COC Leitor" e "Leitor do mês" usam avaliações reais. A seção "PROGRAMAÇÃO / Agenda da sala de leitura" é removida por completo (seção, componente e dados), com o espaçamento ajustado.

### 11. Qualidade
Estados de carregamento, erro, lista vazia, indisponível, não autenticado e acesso negado em todas as telas. Responsividade verificada em desktop, tablet e celular. Verificação final de compilação, tipos, rotas e permissões.

## Detalhes técnicos
- Tabelas: `profiles`, `user_roles` (enum `app_role`: aluno, professor, bibliotecario, admin, em tabela separada com função `has_role` SECURITY DEFINER), `categories`, `books`, `book_copies` (ou contadores `total_copies`/`available_copies`), `reservations`, `loans`, `reviews`, `system_settings`.
- Índices para busca por título/autor (trigram), categoria, classificação e chaves estrangeiras.
- Leitura pública do acervo via política `TO anon` restrita a colunas seguras; dados pessoais só do próprio usuário ou de bibliotecário/admin.
- Acesso via server functions do TanStack Start (`createServerFn`), com middleware de autenticação; nada de chaves secretas no cliente.
- Rotas protegidas sob `_authenticated/` (perfil, admin); acervo e home continuam públicos e indexáveis.
- Componentes existentes (`catalog-browser`, `book-card`, `book-carousel`, `reader-club`, `site-header`) são adaptados para receber dados do banco, sem troca de layout.
