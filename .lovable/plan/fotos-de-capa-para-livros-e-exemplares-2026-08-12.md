# Fotos de capa para livros e exemplares

Adicionar imagem de capa aos títulos e fotos individuais por exemplar, com envio unitário e em massa (vários arquivos ou ZIP), nomeando cada foto pelo código BIB do exemplar. Admin e bibliotecário podem gerenciar.

## Como vai funcionar

- Cada **título** ganha uma capa oficial.
- Cada **exemplar** pode ter foto própria; quando não tiver, mostra a capa do título.
- Onde os livros aparecem (home, acervo, detalhe do livro, painel admin), a capa real substitui a capa gerada por CSS; sem imagem, mantém o visual atual.
- No formulário de editar livro: campo de capa com prévia, enviar/substituir/remover.
- No inventário de exemplares: mesma opção de foto por exemplar.

### Envio em massa

Nova aba/seção "Capas em massa" no painel admin:

1. Seleciona várias imagens (JPG/PNG/WEBP) ou envia um arquivo .ZIP com as imagens dentro.
2. O nome do arquivo é casado com o código do exemplar: `BIB-000001.jpg` → exemplar BIB-000001.
3. A foto é salva como foto daquele exemplar e, se o título ainda não tiver capa, também vira a capa do título.
4. Relatório ao final: enviadas, ignoradas (BIB não encontrado), com erro — igual ao padrão das importações CSV existentes.

Limites: até ~5 MB por imagem, redimensionamento no navegador antes do envio para economizar espaço.

## Detalhes técnicos

- Bucket de storage **público** `book-covers` com políticas: leitura pública; escrita/atualização/remoção somente para equipe (`is_staff(auth.uid())`).
- Migração: `books.cover_url text` e `book_copies.photo_url text` (ambos nulos por padrão); triggers de auditoria existentes passam a registrar essas mudanças.
- Caminhos: `books/{book_id}.{ext}` e `copies/{asset_code}.{ext}`, com cache-busting por timestamp na URL.
- Novo `src/lib/covers.ts`: upload/remoção, redimensionamento via canvas, casamento por BIB e leitura de ZIP (biblioteca `fflate`).
- Novo `src/components/admin/covers-bulk.tsx` para o envio em massa; ajustes em `panels.tsx` (editar livro), `copies-panel.tsx` (foto do exemplar), `book-card.tsx` e `book-detail-dialog.tsx` (exibição).
- Exportações CSV de livros e exemplares ganham a coluna com a URL da imagem.
