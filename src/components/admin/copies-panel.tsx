import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Search, Plus, Check, X, Trash2, Barcode } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/admin/panels";

const input =
  "rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary-soft";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60";
const ghostBtn =
  "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:bg-secondary";

export const copyStatusLabels: Record<string, string> = {
  disponivel: "Disponível",
  emprestado: "Emprestado",
  manutencao: "Em manutenção",
  perdido: "Perdido",
  baixado: "Baixado",
};

export const copyConditionLabels: Record<string, string> = {
  novo: "Novo",
  bom: "Bom",
  regular: "Regular",
  ruim: "Ruim",
};

type CopyRow = {
  id: string;
  book_id: string;
  asset_code: string;
  status: string;
  condition: string;
  notes: string;
  books: { title: string; author: string } | null;
};

export function CopiesAdmin() {
  const qc = useQueryClient();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [edit, setEdit] = useState({ asset_code: "", status: "disponivel", condition: "bom", notes: "" });
  const [creating, setCreating] = useState(false);
  const [newCopy, setNewCopy] = useState({ book_id: "", asset_code: "", condition: "bom", notes: "" });
  const [bookQuery, setBookQuery] = useState("");

  const copies = useQuery({
    queryKey: ["admin-copies", q, status],
    queryFn: async () => {
      const term = q.trim().replace(/[,%()]/g, " ");
      let bookIds: string[] = [];
      if (term) {
        const { data: books } = await supabase
          .from("books")
          .select("id")
          .or(`title.ilike.%${term}%,author.ilike.%${term}%`)
          .limit(60);
        bookIds = (books ?? []).map((b) => b.id);
      }

      let query = supabase
        .from("book_copies")
        .select("id, book_id, asset_code, status, condition, notes, books(title, author)")
        .order("asset_code")
        .limit(60);

      if (status) query = query.eq("status", status);
      if (term) {
        const filters = [`asset_code.ilike.%${term}%`];
        if (bookIds.length) filters.push(`book_id.in.(${bookIds.join(",")})`);
        query = query.or(filters.join(","));
      }

      const { data, error } = await query;
      if (error) throw error;
      return (data ?? []) as unknown as CopyRow[];
    },
  });

  const bookOptions = useQuery({
    queryKey: ["admin-copies-books", bookQuery],
    enabled: creating,
    queryFn: async () => {
      const term = bookQuery.trim().replace(/[,%()]/g, " ");
      let query = supabase.from("books").select("id, title, author").order("title").limit(20);
      if (term) query = query.or(`title.ilike.%${term}%,author.ilike.%${term}%`);
      const { data, error } = await query;
      if (error) throw error;
      return (data ?? []) as { id: string; title: string; author: string }[];
    },
  });

  const save = useMutation({
    mutationFn: async () => {
      if (!editingId) return;
      if (edit.asset_code.trim().length < 2) throw new Error("Código inválido");
      const { error } = await supabase
        .from("book_copies")
        .update({
          asset_code: edit.asset_code.trim(),
          status: edit.status,
          condition: edit.condition,
          notes: edit.notes.trim(),
        })
        .eq("id", editingId);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Exemplar atualizado.");
      setEditingId(null);
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
    },
    onError: (e: Error) =>
      toast.error(
        e.message.includes("duplicate") ? "Já existe um exemplar com esse código." : "Não foi possível salvar.",
      ),
  });

  const create = useMutation({
    mutationFn: async () => {
      if (!newCopy.book_id) throw new Error("Selecione o livro");
      if (newCopy.asset_code.trim().length < 2) throw new Error("Informe o código de patrimônio");
      const { error } = await supabase.from("book_copies").insert({
        book_id: newCopy.book_id,
        asset_code: newCopy.asset_code.trim(),
        condition: newCopy.condition,
        notes: newCopy.notes.trim(),
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Exemplar cadastrado.");
      setCreating(false);
      setNewCopy({ book_id: "", asset_code: "", condition: "bom", notes: "" });
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível cadastrar."),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("book_copies").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Exemplar removido.");
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
    },
    onError: () => toast.error("Não foi possível remover."),
  });

  return (
    <Card title="Exemplares e patrimônio">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por código, título ou autor"
            className={`${input} w-full pl-9`}
          />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={input}>
          <option value="">Todas as situações</option>
          {Object.entries(copyStatusLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button className={primaryBtn} onClick={() => setCreating((v) => !v)}>
          <Plus className="size-4" /> Novo exemplar
        </button>
      </div>

      {creating && (
        <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-background p-4 md:grid-cols-2">
          <input
            value={bookQuery}
            onChange={(e) => setBookQuery(e.target.value)}
            placeholder="Buscar livro…"
            className={input}
          />
          <select
            value={newCopy.book_id}
            onChange={(e) => setNewCopy({ ...newCopy, book_id: e.target.value })}
            className={input}
          >
            <option value="">Selecione o livro</option>
            {(bookOptions.data ?? []).map((b) => (
              <option key={b.id} value={b.id}>
                {b.title} — {b.author}
              </option>
            ))}
          </select>
          <input
            value={newCopy.asset_code}
            onChange={(e) => setNewCopy({ ...newCopy, asset_code: e.target.value })}
            placeholder="Código de patrimônio (ex.: PAT-001234)"
            className={input}
          />
          <select
            value={newCopy.condition}
            onChange={(e) => setNewCopy({ ...newCopy, condition: e.target.value })}
            className={input}
          >
            {Object.entries(copyConditionLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <input
            value={newCopy.notes}
            onChange={(e) => setNewCopy({ ...newCopy, notes: e.target.value })}
            placeholder="Observações (opcional)"
            className={`${input} md:col-span-2`}
          />
          <div className="flex gap-2 md:col-span-2">
            <button className={primaryBtn} disabled={create.isPending} onClick={() => create.mutate()}>
              {create.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
              Salvar exemplar
            </button>
            <button className={ghostBtn} onClick={() => setCreating(false)}>
              <X className="size-3.5" /> Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 grid gap-2">
        {copies.isLoading && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Carregando exemplares…
          </p>
        )}
        {!copies.isLoading && (copies.data ?? []).length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhum exemplar encontrado.</p>
        )}
        {(copies.data ?? []).map((copy) =>
          editingId === copy.id ? (
            <div key={copy.id} className="grid gap-3 rounded-2xl border border-primary-soft bg-background p-4 md:grid-cols-2">
              <input
                value={edit.asset_code}
                onChange={(e) => setEdit({ ...edit, asset_code: e.target.value })}
                placeholder="Código de patrimônio"
                className={input}
              />
              <select value={edit.status} onChange={(e) => setEdit({ ...edit, status: e.target.value })} className={input}>
                {Object.entries(copyStatusLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <select
                value={edit.condition}
                onChange={(e) => setEdit({ ...edit, condition: e.target.value })}
                className={input}
              >
                {Object.entries(copyConditionLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <input
                value={edit.notes}
                onChange={(e) => setEdit({ ...edit, notes: e.target.value })}
                placeholder="Observações"
                className={input}
              />
              <div className="flex flex-wrap gap-2 md:col-span-2">
                <button className={primaryBtn} disabled={save.isPending} onClick={() => save.mutate()}>
                  {save.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
                  Salvar
                </button>
                <button className={ghostBtn} onClick={() => setEditingId(null)}>
                  <X className="size-3.5" /> Cancelar
                </button>
                <button
                  className={`${ghostBtn} text-destructive`}
                  onClick={() => {
                    if (confirm("Remover este exemplar?")) remove.mutate(copy.id);
                  }}
                >
                  <Trash2 className="size-3.5" /> Remover
                </button>
              </div>
            </div>
          ) : (
            <div
              key={copy.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
            >
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
                  <Barcode className="size-4" /> {copy.asset_code}
                </p>
                <p className="truncate text-sm text-foreground">{copy.books?.title ?? "Livro removido"}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {copy.books?.author} · {copyConditionLabels[copy.condition] ?? copy.condition}
                  {copy.notes ? ` · ${copy.notes}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                  {copyStatusLabels[copy.status] ?? copy.status}
                </span>
                <button
                  className={ghostBtn}
                  onClick={() => {
                    setEditingId(copy.id);
                    setEdit({
                      asset_code: copy.asset_code,
                      status: copy.status,
                      condition: copy.condition,
                      notes: copy.notes,
                    });
                  }}
                >
                  Editar
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </Card>
  );
}
