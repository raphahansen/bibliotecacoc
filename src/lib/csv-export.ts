/** Geração e download de arquivos CSV do painel administrativo. */

function escapeCell(value: unknown): string {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",;\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function buildCsv(headers: string[], rows: unknown[][]): string {
  return [headers, ...rows].map((r) => r.map(escapeCell).join(",")).join("\n");
}

export function downloadCsvFile(filename: string, content: string) {
  const blob = new Blob(["\uFEFF" + content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function timestampedName(prefix: string): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${prefix}-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.csv`;
}

/**
 * Percorre todas as páginas de uma consulta paginada, mantendo os mesmos
 * filtros e a mesma ordenação usados na tela.
 */
export async function fetchAllPages<T>(
  fetchPage: (from: number, to: number) => Promise<{ rows: T[]; total: number }>,
  batchSize = 1000,
  maxRows = 20000,
): Promise<T[]> {
  const all: T[] = [];
  let from = 0;
  let total = Infinity;
  while (from < total && all.length < maxRows) {
    const { rows, total: count } = await fetchPage(from, from + batchSize - 1);
    total = count;
    if (rows.length === 0) break;
    all.push(...rows);
    from += batchSize;
  }
  return all;
}
