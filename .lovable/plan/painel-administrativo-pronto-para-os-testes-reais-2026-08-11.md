# Painel administrativo pronto para os testes reais

Esta etapa arruma o painel, deixa clara a hierarquia Livro → Exemplar → PAT, corrige o bug das reservas e adiciona importação por CSV, gestão de categorias e gestão de usuários com permissões reais.

## Diagnóstico já confirmado (bug das reservas)

As reservas **existem no banco** (4 registros, 3 pendentes). A aba "Reservas" quebra porque a consulta pede `reservations → profiles`, e o banco não tem essa ligação declarada (a reserva aponta para a conta de login, não para a tabela de perfis). O banco responde com erro e a lista fica vazia.

O mesmo problema afeta `loans → profiles` (usado em Empréstimos e no "Leitor do mês"), confirmado com a mesma verificação.

Correção: criar as ligações `reservations.user_id → profiles.id` e `loans.user_id → profiles.id` no banco, mantendo as ligações atuais com a conta de login. Nada de dados é apagado. Depois disso as telas passam a exibir aluno, livro, data, status e posição na fila.

## Livros: navegação e hierarquia

- Listagem paginada real no banco (20 por página), sem precisar pesquisar: "Página 1 de 8 · Mostrando 1–20 de 157 livros", com Anterior/Próximo e números.
- Pesquisa, filtros (categoria, nível, status) e ordenação continuam e funcionam junto com a paginação; qualquer mudança de busca/filtro volta para a página 1 e a ordenação é preservada.
- Cada linha mostra: título, autor, categoria/prateleira, status do livro e os contadores derivados dos exemplares reais: total · disponíveis · emprestados · manutenção.
- Ação "Gerenciar exemplares" em cada livro abre um painel com os PATs daquele título (reaproveitando o componente atual), com cabeçalho do livro visível para deixar claro que os PATs são filhos dele, e botão "+ Adicionar exemplar".
- Cadastro/edição de livro reorganizado em "Dados da obra" e "Exemplares físicos", com o campo renomeado para "Exemplares iniciais a cadastrar" e a explicação de que cada um vira uma unidade física com código próprio.

## Inventário de exemplares

- Aba renomeada para "Inventário de exemplares".
- Paginação real no banco, navegável sem pesquisar, com total de exemplares, busca por PAT/livro, filtro por situação e ordenação; filtro/busca voltam para a página 1.
- Cada linha continua mostrando o livro ao qual o exemplar pertence. Nada de cadastrar livro por aqui.

## Desativar livro desativa os exemplares

- Novo campo `active` em `book_copies` (separado da situação física).
- Ao desativar o livro, todos os exemplares ficam indisponíveis para reserva e empréstimo; ao reativar, cada exemplar volta conforme sua situação física real (emprestado continua emprestado, baixado continua baixado).
- Os bloqueios ficam nas funções de reserva/retirada do banco, não só na tela. Histórico de empréstimos e reservas é preservado.

## Categorias = prateleiras

- Criação da categoria de sistema "Sem Categoria", que não pode ser excluída.
- Excluir uma categoria com livros move os livros para "Sem Categoria" e só então remove a categoria — validado no banco, não só na tela.
- Aba Categorias: criar, editar nome/slug, excluir e ver a quantidade de livros de cada uma. Um livro continua com uma única categoria.
- Na listagem de livros o rótulo passa a ser "Categoria / Prateleira".

## Usuários

- Importação por **arquivo CSV** (substituindo o texto colado), com "Baixar modelo CSV" no formato `nome,email,senha,RM,Série,permissão`, prévia, validação linha a linha, contagem de linhas válidas, confirmação e relatório final (criadas / falharam / motivo). Senhas nunca são reexibidas.
- Bibliotecário passa a poder criar usuários, apenas Aluno e Professor; Admin cria qualquer perfil. Regra validada no servidor.
- "Editar usuário": nome, e-mail, RM, série/turma e ativo/inativo. Admin edita qualquer um; bibliotecário só aluno/professor.
- "Redefinir senha" com nova senha + confirmação (mínimo 6 caracteres). Admin redefine qualquer um; bibliotecário só aluno/professor. Validado no servidor.
- "Excluir usuário" (somente admin, com confirmação, sem poder excluir a própria conta). Para não perder o histórico, empréstimos, reservas e avaliações passam a aceitar autor anônimo e o perfil guarda o nome registrado, de modo que o histórico da biblioteca permanece legível após a exclusão da conta.

## Perfil do aluno

- Aluno e professor apenas visualizam os próprios dados; o botão "Editar perfil" sai da tela e a regra também é aplicada no banco (nome, matrícula e série passam a ser alteráveis somente pela equipe).

## Avaliações e métricas

- Excluir uma avaliação atualiza na hora média e quantidade do livro, "Mais Bem Avaliados", Clube do COC Leitor e a tela de detalhes, via invalidação das consultas relacionadas; o ranking continua calculado a partir das avaliações reais.

## Importar livros em massa (CSV)

- Fluxo: Livros → Importar livros → escolher categoria/prateleira → baixar modelo → enviar CSV → prévia → validar → importar.
- Campos: `titulo,autor,editora,nivel,colecao,sinopse,quantidade_inicial`.
- A prévia mostra linhas válidas, linhas inválidas, possíveis duplicados (título+autor já existentes) e quantos exemplares serão criados.
- Na importação, `quantidade_inicial` cria exemplares reais em `book_copies` com PATs automáticos (nunca só um número).
- Relatório final: livros criados, exemplares criados, linhas ignoradas e erros.

## Atualização das listagens

Após criar/editar/desativar livro, criar/editar/baixar exemplar, alterar ou excluir categoria, importar livros ou usuários e excluir avaliação, as listagens e contadores afetados são recarregados automaticamente — sem reload manual.

## Detalhes técnicos

- Migração única: FKs `reservations.user_id → profiles.id` e `loans.user_id → profiles.id`; `book_copies.active boolean not null default true`; categoria `sem-categoria` protegida por trigger; função `delete_category_reassign(_id)`; `create_user`/`reset_password`/`delete_user` via server functions com verificação de papel; ajustes de RLS em `profiles` (aluno/professor sem update dos próprios campos) e nas RPCs `register_checkout`/`create reservation` para bloquear livro/exemplar inativo; nulificação de `user_id` no histórico ao excluir conta.
- Paginação server-side com `.range()` + `count: "exact"` nas consultas de livros e exemplares; contadores por situação obtidos por agregação no banco, não no navegador.
- Server functions em `src/lib/admin.functions.ts` (papéis verificados via `has_role`/`is_staff` antes de qualquer operação privilegiada).
- Parsing de CSV no cliente com validação por schema; criação de contas/livros em lote via server function.
- Ao final: verificação de TypeScript e build, e teste do fluxo de reserva com conta de aluno e de bibliotecário.
