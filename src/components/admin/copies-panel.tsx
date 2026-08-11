import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Search, Plus, Check, X, Barcode, Ban } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/admin/card";
import { Pagination } from "@/components/admin/pagination";
import { BookSelector, type SelectableBook } from "@/components/admin/book-selector";


const COPIES_PAGE_SIZE = 20;


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
  extraviado: "Extraviado",
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
  location: string;
  notes: string;
  books: { title: string; author: string } | null;
};

const copySelect = "id, book_id, asset_code, status, condition, location, notes, books(title, author)";

/* --------------------------- Formulário de criação -------------------------- */

type NewCopyState = {
  asset_code: string;
  autoCode: boolean;
  quantity: number;
  condition: string;
  location: string;
  notes: string;
};

const emptyNewCopy: NewCopyState = {
  asset_code: "",
  autoCode: true,
  quantity: 1,
  condition: "bom",
  location: "Biblioteca",
  notes: "",
};

function useAddCopies(onDone: () => void) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ bookId, state }: { bookId: string; state: NewCopyState }) => {
      if (!bookId) throw new Error("Selecione o livro");
      if (!state.autoCode && state.asset_code.trim().length < 2) {
        throw new Error("Informe o código BIB ou use a geração automática");
      }
      const { error } = await supabase.rpc("add_book_copies", {
        _book_id: bookId,
        _quantity: state.autoCode ? Math.max(1, Number(state.quantity) || 1) : 1,
        _condition: state.condition,
        _location: state.location.trim() || "Biblioteca",
        _notes: state.notes.trim(),
        ...(state.autoCode ? {} : { _asset_code: state.asset_code.trim() }),
      });
      if (error) {
        throw new Error(
          /duplicate|já existe/i.test(error.message)
            ? "Já existe um exemplar com esse código."
            : error.message,
        );
      }
    },
    onSuccess: () => {
      toast.success("Exemplar(es) cadastrado(s).");
      onDone();
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-book-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
      void qc.invalidateQueries({ queryKey: ["admin-copy-counts"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível cadastrar."),
  });
}

function NewCopyForm({
  bookId,
  onCancel,
  bookPicker,
}: {
  bookId: string;
  onCancel: () => void;
  bookPicker?: React.ReactNode;
}) {
  const [state, setState] = useState<NewCopyState>(emptyNewCopy);
  const add = useAddCopies(() => {
    setState(emptyNewCopy);
    onCancel();
  });

  return (
    <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-background p-4 md:grid-cols-2">
      {bookPicker}
      <label className="flex items-center gap-2 text-sm text-foreground md:col-span-2">
        <input
          type="checkbox"
          checked={state.autoCode}
          onChange={(e) => setState({ ...state, autoCode: e.target.checked })}
        />
        Gerar código BIB automaticamente
      </label>
      {state.autoCode ? (
        <label className="flex flex-col gap-1 text-sm text-foreground md:col-span-2">
          <span className="font-medium">Quantos exemplares criar?</span>
          <input
            type="number"
            min={1}
            max={100}
            value={state.quantity}
            onChange={(e) => setState({ ...state, quantity: Number(e.target.value) })}
            placeholder="Quantidade de exemplares"
            className={input}
          />
          <span className="text-xs text-muted-foreground">
            Serão criados {state.quantity || 1} exemplar(es) com códigos sequenciais gerados automaticamente (ex.: BIB-000001).
          </span>
        </label>
      ) : (
        <input
          value={state.asset_code}
          onChange={(e) => setState({ ...state, asset_code: e.target.value })}
          placeholder="Código BIB (ex.: BIB-001234)"
          className={input}
        />
      )}
      <select
        value={state.condition}
        onChange={(e) => setState({ ...state, condition: e.target.value })}
        className={input}
      >
        {Object.entries(copyConditionLabels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <input
        value={state.location}
        onChange={(e) => setState({ ...state, location: e.target.value })}
        placeholder="Localização"
        className={input}
      />
      <input
        value={state.notes}
        onChange={(e) => setState({ ...state, notes: e.target.value })}
        placeholder="Observações (opcional)"
        className={input}
      />
      <div className="flex gap-2 md:col-span-2">
        <button
          className={primaryBtn}
          disabled={add.isPending}
          onClick={() => add.mutate({ bookId, state })}
        >
          {add.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
          Salvar exemplar
        </button>
        <button className={ghostBtn} onClick={onCancel}>
          <X className="size-3.5" /> Cancelar
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ Linha/edição ------------------------------- */

type EditState = { asset_code: string; status: string; condition: string; location: string; notes: string };

function CopyRowItem({
  copy,
  showBook,
}: {
  copy: CopyRow;
  showBook: boolean;
}) {
  const qc = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [edit, setEdit] = useState<EditState>({
    asset_code: copy.asset_code,
    status: copy.status,
    condition: copy.condition,
    location: copy.location,
    notes: copy.notes,
  });

  const invalidate = () => {
    void qc.invalidateQueries({ queryKey: ["admin-copies"] });
    void qc.invalidateQueries({ queryKey: ["admin-book-copies"] });
    void qc.invalidateQueries({ queryKey: ["admin-books"] });
    void qc.invalidateQueries({ queryKey: ["admin-copy-counts"] });
  };

  const save = useMutation({
    mutationFn: async () => {
      const body = {
        asset_code: edit.asset_code.trim(),
        condition: edit.condition,
        location: edit.location.trim() || "Biblioteca",
        notes: edit.notes.trim(),
      };
      if (body.asset_code.length < 2) throw new Error("Código inválido");
      const { error } = await supabase.from("book_copies").update(body).eq("id", copy.id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Exemplar atualizado.");
      setEditing(false);
      invalidate();
    },
    onError: (e: Error) =>
      toast.error(
        e.message.includes("duplicate") ? "Já existe um exemplar com esse código." : "Não foi possível salvar.",
      ),
  });

  const writeOff = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.rpc("write_off_copy", { _copy_id: copy.id });
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toast.success("Exemplar baixado.");
      setEditing(false);
      invalidate();
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível dar baixa."),
  });

  const locked = copy.status === "emprestado";

  if (editing) {
    return (
      <div className="grid gap-3 rounded-2xl border border-primary-soft bg-background p-4 md:grid-cols-2">
        <input
          value={edit.asset_code}
          onChange={(e) => setEdit({ ...edit, asset_code: e.target.value })}
          placeholder="Código BIB"
          className={input}
        />
        <div className={`${input} flex items-center justify-between gap-2 text-muted-foreground`}>
          <span>Situação: {copyStatusLabels[copy.status] ?? copy.status}</span>
          <span className="text-xs">definida por retirada/devolução</span>
        </div>
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
          value={edit.location}
          onChange={(e) => setEdit({ ...edit, location: e.target.value })}
          placeholder="Localização"
          className={input}
        />
        <input
          value={edit.notes}
          onChange={(e) => setEdit({ ...edit, notes: e.target.value })}
          placeholder="Observações"
          className={`${input} md:col-span-2`}
        />
        <div className="flex flex-wrap gap-2 md:col-span-2">
          <button className={primaryBtn} disabled={save.isPending} onClick={() => save.mutate()}>
            {save.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
            Salvar
          </button>
          <button className={ghostBtn} onClick={() => setEditing(false)}>
            <X className="size-3.5" /> Cancelar
          </button>
          {copy.status !== "baixado" && !locked && (
            <button
              className={`${ghostBtn} text-destructive`}
              disabled={writeOff.isPending}
              onClick={() => {
                if (confirm("Dar baixa neste exemplar? Ele deixará de ser emprestável, mas o histórico é preservado."))
                  writeOff.mutate();
              }}
            >
              <Ban className="size-3.5" /> Dar baixa
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3">
      <div className="min-w-0">
        <p className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
          <Barcode className="size-4" /> {copy.asset_code}
        </p>
        {showBook && <p className="truncate text-sm text-foreground">{copy.books?.title ?? "Livro removido"}</p>}
        <p className="truncate text-xs text-muted-foreground">
          {showBook && copy.books?.author ? `${copy.books.author} · ` : ""}
          {copyConditionLabels[copy.condition] ?? copy.condition} · {copy.location}
          {copy.notes ? ` · ${copy.notes}` : ""}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
          {copyStatusLabels[copy.status] ?? copy.status}
        </span>
        <button className={ghostBtn} onClick={() => setEditing(true)}>
          {locked ? "Ver" : "Editar"}
        </button>
      </div>
    </div>
  );
}

/* ---------------------- Gerenciar exemplares de um livro -------------------- */

export function useCopyCounts(bookIds: string[]) {
  return useQuery({
    queryKey: ["admin-copy-counts", bookIds.join(",")],
    enabled: bookIds.length > 0,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("book_copies")
        .select("book_id, status")
        .in("book_id", bookIds);
      if (error) throw error;
      const map: Record<string, Record<string, number>> = {};
      for (const row of (data ?? []) as { book_id: string; status: string }[]) {
        map[row.book_id] ??= {};
        const bucket = map[row.book_id]!;
        bucket["total"] = (bucket["total"] ?? 0) + 1;
        bucket[row.status] = (bucket[row.status] ?? 0) + 1;
      }
      return map;
    },
  });
}

export function BookCopiesManager({ bookId, title }: { bookId: string; title: string }) {
  const [creating, setCreating] = useState(false);

  const copies = useQuery({
    queryKey: ["admin-book-copies", bookId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("book_copies")
        .select(copySelect)
        .eq("book_id", bookId)
        .order("asset_code");
      if (error) throw error;
      return (data ?? []) as unknown as CopyRow[];
    },
  });

  const rows = copies.data ?? [];
  const count = (s: string) => rows.filter((r) => r.status === s).length;

  return (
    <div className="mt-3 rounded-2xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">Gerenciar exemplares · {title}</p>
          <p className="text-xs text-muted-foreground">
            Total: {rows.length} · Disponíveis: {count("disponivel")} · Emprestados: {count("emprestado")} ·
            Manutenção: {count("manutencao")} · Baixados: {count("baixado") + count("perdido") + count("extraviado")}
          </p>
        </div>
        <button className={primaryBtn} onClick={() => setCreating((v) => !v)}>
          <Plus className="size-4" /> Adicionar exemplar
        </button>
      </div>

      {creating && <NewCopyForm bookId={bookId} onCancel={() => setCreating(false)} />}

      <div className="mt-4 grid gap-2">
        {copies.isLoading && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Carregando exemplares…
          </p>
        )}
        {!copies.isLoading && rows.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Nenhum exemplar físico cadastrado. Use “Adicionar exemplar”.
          </p>
        )}
        {rows.map((copy) => (
          <CopyRowItem key={copy.id} copy={copy} showBook={false} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Painel geral ------------------------------- */

export function CopiesAdmin() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("asset_code");
  const [page, setPage] = useState(0);
  const [creating, setCreating] = useState(false);
  const [book, setBook] = useState<SelectableBook | null>(null);
  const bookId = book?.id ?? "";


  useEffect(() => {
    setPage(0);
  }, [q, status]);

  const copies = useQuery({
    queryKey: ["admin-copies", q, status, sort, page],
    queryFn: async () => {
      const term = q.trim().replace(/[,%()]/g, " ");
      let bookIds: string[] = [];
      if (term) {
        const { data: books } = await supabase
          .from("books")
          .select("id")
          .or(`title.ilike.%${term}%,author.ilike.%${term}%`)
          .limit(200);
        bookIds = (books ?? []).map((b) => b.id);
      }

      let query = supabase.from("book_copies").select(copySelect, { count: "exact" });

      if (status) query = query.eq("status", status);
      if (term) {
        const filters = [`asset_code.ilike.%${term}%`];
        if (bookIds.length) filters.push(`book_id.in.(${bookIds.join(",")})`);
        query = query.or(filters.join(","));
      }

      if (sort === "recent") query = query.order("created_at", { ascending: false });
      else if (sort === "status") query = query.order("status").order("asset_code");
      else query = query.order("asset_code");

      const { data, error, count } = await query.range(
        page * COPIES_PAGE_SIZE,
        page * COPIES_PAGE_SIZE + COPIES_PAGE_SIZE - 1,
      );
      if (error) throw error;
      return { total: count ?? 0, rows: (data ?? []) as unknown as CopyRow[] };
    },
  });


  return (
    <Card title="Inventário de exemplares">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por código BIB, título ou autor"
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
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={input}>
          <option value="asset_code">Ordenar por código BIB</option>
          <option value="status">Ordenar por situação</option>
          <option value="recent">Mais recentes</option>
        </select>
        <button className={primaryBtn} onClick={() => setCreating((v) => !v)}>
          <Plus className="size-4" /> Novo exemplar
        </button>
      </div>

      {creating && (
        <NewCopyForm
          bookId={bookId}
          onCancel={() => setCreating(false)}
          bookPicker={
            <div className="md:col-span-2">
              <BookSelector value={book} onChange={setBook} label="Livro" />
            </div>
          }
        />
      )}


      <div className="mt-4 grid gap-2">
        {copies.isLoading && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Carregando exemplares…
          </p>
        )}
        {!copies.isLoading && (copies.data?.rows ?? []).length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhum exemplar encontrado.</p>
        )}
        {(copies.data?.rows ?? []).map((copy) => (
          <CopyRowItem key={copy.id} copy={copy} showBook />
        ))}
      </div>

      <Pagination
        page={page}
        pageSize={COPIES_PAGE_SIZE}
        total={copies.data?.total ?? 0}
        onPage={setPage}
        unitLabel="exemplares"
      />
    </Card>

  );
}
