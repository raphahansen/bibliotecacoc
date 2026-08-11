# Continuidade — Biblioteca COC Novomundo

Deixar o sistema realmente usável no dia a dia da escola, corrigindo os pontos que ainda desligam o frontend do backend e automatizando regras de negócio que hoje só existem no papel.

## Problemas encontrados no estado atual

- **Cabeçalho não reage à autenticação**: os botões "Entrar" e "Perfil" são `<button>` sem ação. Quem está logado não consegue ir para `/perfil`, e quem não está logado não consegue ir para `/auth` pelo header.
- **"Leitor do mês" ainda usa dados estáticos** (`src/data/library.ts`), enquanto todo o resto da home já lê do banco.
- **Reserva só funciona quando há exemplar disponível**: não existe fila de espera por título, prevista no planejamento.
- **Atrasos e expirações não são automáticos**: empréstimos vencidos não mudam para `atrasado` e reservas prontas para retirada não expiram.
- **Perfil é apenas leitura**: o usuário não pode corrigir nome, matrícula ou turma.
- **Painel admin de livros é limitado**: não permite editar título, autor, editora, categoria ou sinopse; só ativar/desativar e alterar quantidade de exemplares.
- **Não há empréstimo direto pelo balcão**: o bibliotecário só consegue registrar retirada a partir de uma reserva existente.
- **Não existe página pública de detalhes do livro**: o modal funciona, mas não gera um link compartilhável (`/livro/:id`).
- **Metadados raiz ainda são genéricos** (`Lovable App` em `src/routes/__root.tsx`).

## Etapas

### 1. Cabeçalho funcional
Conectar `SiteHeader` ao `useAuth`:
- Mostrar "Entrar" quando não houver sessão, com link para `/auth`.
- Mostrar avatar/botão de perfil com link para `/perfil` quando houver sessão.
- Adicionar menu suspenso simples (sair) no desktop e refletir o mesmo no menu mobile.

### 2. Leitor do mês baseado em dados reais
Substituir o conteúdo estático de `ReaderOfMonth` por uma consulta ao banco que destaque o leitor com mais empréstimos concluídos no mês corrente. Se não houver empréstimos ainda, mostrar um estado de chamada à ação ("Seja o próximo leitor do mês") em vez de dados fictícios.

### 3. Fila de reservas
Alterar `createReservation` e o modal de detalhes:
- Sempre permitir reservar, mesmo sem exemplar disponível.
- Registrar a posição na fila (`queue_position`) quando `available_copies = 0`.
- No modal, informar ao usuário se ele está reservando para fila ou para retirada imediata.
- Quando um exemplar é devolvido, promover automaticamente a reserva mais antiga daquele livro para `disponivel`.

### 4. Automação de atrasos e expirações
Criar uma função SQL ou server function periódica:
- Marcar empréstimos `ativo` com `due_date < hoje` como `atrasado`.
- Marcar reservas `disponivel` com mais de 3 dias (configurável em `system_settings.pickup_days`) como `expirada`.
- Expor um endpoint público seguro (`/api/public/cron/library-maintenance`) para ser chamado por agendador externo, com verificação por secret.

### 5. Edição de perfil
Na página `/perfil`, adicionar modo de edição para:
- Nome completo.
- Matrícula.
- Turma/ano.
Bloquear edição de e-mail e papel de acesso (somente admin altera via painel).

### 6. Melhorias no painel administrativo
- **Livros**: permitir editar todos os campos (título, autor, editora, categoria, classificação, sinopse) e não só exemplares/status.
- **Empréstimos**: adicionar formulário de retirada direta pelo balcão, buscando leitor e livro, sem precisar de reserva prévia.
- **Importação em massa**: validar e-mails duplicados antes de chamar `createUsers` para evitar falhas silenciosas.

### 7. Página pública de detalhes do livro
Criar rota `/livro/$id` que renderize:
- Capa, título, autor, sinopse, classificação, disponibilidade.
- Avaliações e média.
- Botão de reserva (com redirecionamento para `/auth` se não estiver logado).
- Metadados SEO com título e descrição do livro.

### 8. Metadados e SEO
Atualizar `src/routes/__root.tsx` para usar título, descrição, Open Graph e Twitter da Biblioteca COC Novomundo em português, removendo os textos genéricos do template.

## Critérios de entrega
- Usuário consegue entrar, sair e acessar perfil pelo header em qualquer página.
- Leitor do mês reflete leituras reais ou exibe estado vazio apropriado.
- Reserva funciona com e sem exemplar disponível (fila).
- Empréstimos atrasados e reservas expiradas são atualizados automaticamente.
- Perfil editável nos campos permitidos.
- Admin gerencia livros completamente e registra empréstimos pelo balcão.
- Cada livro tem URL pública compartilhável.
- Typecheck e build passam sem erros.
