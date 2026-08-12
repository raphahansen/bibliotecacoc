/** Utilitários de CSV usados nas importações do painel administrativo. */

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  const clean = text.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");

  for (let i = 0; i < clean.length; i += 1) {
    const ch = clean[i]!;
    if (quoted) {
      if (ch === '"') {
        if (clean[i + 1] === '"') {
          field += '"';
          i += 1;
        } else quoted = false;
      } else field += ch;
      continue;
    }
    if (ch === '"') quoted = true;
    else if (ch === "," || ch === ";") {
      row.push(field.trim());
      field = "";
    } else if (ch === "\n") {
      row.push(field.trim());
      if (row.some((c) => c.length > 0)) rows.push(row);
      row = [];
      field = "";
    } else field += ch;
  }
  row.push(field.trim());
  if (row.some((c) => c.length > 0)) rows.push(row);
  return rows.filter((r) => !/^sep=/i.test(r[0] ?? ""));
}

/** Remove a linha de cabeçalho quando ela corresponde ao modelo esperado. */
export function stripHeader(rows: string[][], firstHeaderCell: string): string[][] {
  const first = rows[0]?.[0]?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (first && first === firstHeaderCell) return rows.slice(1);
  return rows;
}

export function downloadCsv(filename: string, content: string) {
  const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export const USERS_CSV_TEMPLATE = [
  "sep=;",
  "nome;email;senha;RM;Série;permissão",
  "Maria Silva;maria@escola.com;Senha123;20250001;8º Ano B;Aluno",
  "João Souza;joao@escola.com;Senha456;20250002;9º Ano A;Aluno",
].join("\r\n");

export const BOOKS_CSV_TEMPLATE = [
  "sep=;",
  "titulo;autor;editora;nivel;colecao;sinopse;quantidade_inicial",
  "O Pequeno Príncipe;Antoine de Saint-Exupéry;Agir;LIVRE;false;Uma história sobre amizade;5",
].join("\r\n");

export function normalizeRole(value: string): "aluno" | "professor" | "bibliotecario" | "admin" | null {
  const v = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (["aluno", "estudante"].includes(v)) return "aluno";
  if (["professor", "professora", "docente"].includes(v)) return "professor";
  if (["bibliotecario", "bibliotecaria"].includes(v)) return "bibliotecario";
  if (["admin", "administrador", "administradora"].includes(v)) return "admin";
  return null;
}
