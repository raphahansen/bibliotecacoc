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
  const first = rows[0]?.[0]
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (first && first === firstHeaderCell) return rows.slice(1);
  return rows;
}

/**
 * Lê o arquivo respeitando a codificação: tenta UTF-8 estrito e, se o arquivo
 * tiver sido salvo pelo Excel em ANSI, decodifica como Windows-1252.
 * Também corrige textos já "mojibake" (ex.: HistÃ³ria → História).
 */
export async function readCsvFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  let text: string;
  try {
    text = new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    text = new TextDecoder("windows-1252").decode(buffer);
  }
  return fixMojibake(text);
}

/**
 * Reinterpreta sequências UTF-8 lidas como Latin-1/Windows-1252 (Ã©, Ã³, Â…).
 * A correção é feita trecho a trecho, então textos mistos (parte correta,
 * parte quebrada) também são recuperados.
 */
const WIN1252_EXTRA: Record<string, number> = {
  "\u20AC": 0x80,
  "\u201A": 0x82,
  "\u0192": 0x83,
  "\u201E": 0x84,
  "\u2026": 0x85,
  "\u2020": 0x86,
  "\u2021": 0x87,
  "\u02C6": 0x88,
  "\u2030": 0x89,
  "\u0160": 0x8a,
  "\u2039": 0x8b,
  "\u0152": 0x8c,
  "\u017D": 0x8e,
  "\u2018": 0x91,
  "\u2019": 0x92,
  "\u201C": 0x93,
  "\u201D": 0x94,
  "\u2022": 0x95,
  "\u2013": 0x96,
  "\u2014": 0x97,
  "\u02DC": 0x98,
  "\u2122": 0x99,
  "\u0161": 0x9a,
  "\u203A": 0x9b,
  "\u0153": 0x9c,
  "\u017E": 0x9e,
  "\u0178": 0x9f,
};

const MOJIBAKE_RE =
  /[\u00C2-\u00F4](?:[\u0080-\u00BF\u20AC\u201A\u0192\u201E\u2026\u2020\u2021\u02C6\u2030\u0160\u2039\u0152\u017D\u2018\u2019\u201C\u201D\u2022\u2013\u2014\u02DC\u2122\u0161\u203A\u0153\u017E\u0178]){1,3}/g;

function toByte(ch: string): number | null {
  const code = ch.charCodeAt(0);
  if (code <= 0xff) return code;
  return WIN1252_EXTRA[ch] ?? null;
}

export function fixMojibake(text: string): string {
  if (!MOJIBAKE_RE.test(text)) {
    MOJIBAKE_RE.lastIndex = 0;
    return text;
  }
  MOJIBAKE_RE.lastIndex = 0;
  return text.replace(MOJIBAKE_RE, (match) => {
    const bytes: number[] = [];
    for (const ch of match) {
      const byte = toByte(ch);
      if (byte === null) return match;
      bytes.push(byte);
    }
    try {
      return new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(bytes));
    } catch {
      return match;
    }
  });
}

/**
 * Repete a correção para recuperar também textos que foram corrompidos mais
 * de uma vez antes de chegarem ao sistema (ex.: HistÃƒÂ³ria → História).
 */
export function normalizeCsvText(value: unknown): string {
  let normalized = value === null || value === undefined ? "" : String(value);
  for (let pass = 0; pass < 3; pass += 1) {
    const repaired = fixMojibake(normalized);
    if (repaired === normalized) break;
    normalized = repaired;
  }
  return normalized;
}

export function downloadCsv(filename: string, content: string) {
  const bytes = new TextEncoder().encode(content);
  const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), bytes], {
    type: "text/csv;charset=utf-8",
  });
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

export function normalizeRole(
  value: string,
): "aluno" | "professor" | "bibliotecario" | "admin" | null {
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
