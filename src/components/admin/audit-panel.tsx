import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2, Search, Download, History } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/admin/card";
import { Pagination } from "@/components/admin/pagination";
import { buildCsv, downloadCsvFile, fetchAllPages, timestampedName } from "@/lib/csv-export";
import { copyConditionLabels, copyStatusLabels } from "@/components/admin/copies-panel";

const input =
  "rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary-soft";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60";

const AUDIT_PAGE_SIZE = 25;

type Change = { field: string; from: string | null; to: string | null };

type AuditRow = {
  id: string;
  entity_type: string;
  entity_id: string | null;
  entity_label: string;
  action: string;
  changes: Change[];
  actor_name: string;
  actor_email: string;
  created_at: string;
};

const actionLabels: Record<string, string> = {
  criado: "Cadastro",
  editado: "Edição",
  excluido: "Exclusão",
};

const entityLabels: Record<string, string> = {
  livro: "Livro",
  exemplar: "Exemplar",
};

const fieldLabels: Record<string, string> = {
  titulo: "Título",
  autor: "Autor",
  editora: "Editora",
  classificacao: "Classificação",
  categoria: "Categoria / Prateleira",
  sinopse: "Sinopse",
  situacao: "Situação",
  "codigo BIB": "Código BIB",
  condicao: "Condição",
  localizacao: "Localização",
  observacoes: "Observações",
  disponibilidade: "Disponibilidade",
};

function prettyValue(field: string, value: string | null): string {
  if (value === null || value === "") return "—";
  if (field === "situacao") return copyStatusLabels[value] ?? value;
  if (field === "condicao") return copyConditionLabels[value] ?? value;
  return value;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

export function AuditAdmin() {
  const [q, setQ] = useState("");
  const [entity, setEntity] = useState("");
  const [action, setAction] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [q, entity, action]);

  const fetchPage = async (from: number, to: number) => {
    let query = supabase
      .from("audit_log")
      .select(
        "id, entity_type, entity_id, entity_label, action, changes, actor_name, actor_email, created_at",
        { count: "exact" },
      );
    const term = q.trim().replace(/[,%()]/g, " ");
    if (term) query = query.or(`entity_label.ilike.%${term}%,actor_name.ilike.%${term}%`);
    if (entity) query = query.eq("entity_type", entity);
    if (action) query = query.eq("action", action);
    query = query.order("created_at", { ascending: false }).order("id");

    const { data, error, count } = await query.range(from, to);
    if (error) throw error;
    return { total: count ?? 0, rows: (data ?? []) as unknown as AuditRow[] };
  };

  const logs = useQuery({
    queryKey: ["admin-audit", q, entity, action, page],
    queryFn: () => fetchPage(page * AUDIT_PAGE_SIZE, page * AUDIT_PAGE_SIZE + AUDIT_PAGE_SIZE - 1),
  });

  const exportLogs = useMutation({
    mutationFn: async () => {
      const rows = await fetchAllPages(fetchPage);
      const csv = buildCsv(
        ["data_hora", "tipo", "acao", "item", "alteracoes", "responsavel", "email"],
        rows.map((r) => [
          formatDate(r.created_at),
          entityLabels[r.entity_type] ?? r.entity_type,
          actionLabels[r.action] ?? r.action,
          r.entity_label,
          (r.changes ?? [])
            .map(
              (c) =>
                `${fieldLabels[c.field] ?? c.field}: ${prettyValue(c.field, c.from)} → ${prettyValue(c.field, c.to)}`,
            )
            .join(" | "),
          r.actor_name || "Sistema",
          r.actor_email,
        ]),
      );
      downloadCsvFile(timestampedName("historico"), csv);
      return rows.length;
    },
    onSuccess: (n) => toast.success(`${n} registro(s) exportado(s).`),
    onError: () => toast.error("Não foi possível exportar o histórico."),
  });

  const rows = logs.data?.rows ?? [];

  return (
    <Card title="Histórico de alterações">
      <p className="text-sm text-muted-foreground">
        Registro automático de cadastros, edições e mudanças de situação em livros e exemplares.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por livro, código BIB ou responsável"
            className={`${input} w-full pl-9`}
          />
        </div>
        <select value={entity} onChange={(e) => setEntity(e.target.value)} className={input}>
          <option value="">Livros e exemplares</option>
          <option value="livro">Somente livros</option>
          <option value="exemplar">Somente exemplares</option>
        </select>
        <select value={action} onChange={(e) => setAction(e.target.value)} className={input}>
          <option value="">Todas as ações</option>
          <option value="criado">Cadastro</option>
          <option value="editado">Edição</option>
          <option value="excluido">Exclusão</option>
        </select>
        <button
          className={primaryBtn}
          disabled={exportLogs.isPending}
          onClick={() => exportLogs.mutate()}
        >
          {exportLogs.isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Download className="size-4" />
          )}
          Exportar CSV
        </button>
      </div>

      <div className="mt-4 grid gap-2">
        {logs.isLoading && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Carregando histórico…
          </p>
        )}
        {!logs.isLoading && rows.length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhuma alteração registrada ainda.</p>
        )}
        {rows.map((r) => (
          <div key={r.id} className="rounded-2xl border border-border bg-background px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <History className="size-4 text-primary" />
                {entityLabels[r.entity_type] ?? r.entity_type} · {r.entity_label || "—"}
              </p>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                {actionLabels[r.action] ?? r.action}
              </span>
            </div>
            {(r.changes ?? []).length > 0 && (
              <ul className="mt-2 grid gap-1 text-xs text-muted-foreground">
                {r.changes.map((c, i) => (
                  <li key={`${r.id}-${i}`}>
                    <span className="font-medium text-foreground">
                      {fieldLabels[c.field] ?? c.field}:
                    </span>{" "}
                    {prettyValue(c.field, c.from)} → {prettyValue(c.field, c.to)}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              {r.actor_name || "Sistema"}
              {r.actor_email ? ` · ${r.actor_email}` : ""} · {formatDate(r.created_at)}
            </p>
          </div>
        ))}
      </div>

      <Pagination
        page={page}
        pageSize={AUDIT_PAGE_SIZE}
        total={logs.data?.total ?? 0}
        onPage={setPage}
        unitLabel="registros"
      />
    </Card>
  );
}
