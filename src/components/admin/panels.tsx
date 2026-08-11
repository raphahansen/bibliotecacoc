import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Loader2,
  Search,
  Plus,
  Check,
  X,
  RotateCcw,
  BookOpen,
  UserRound,
  Layers,
  Star,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  deleteReview,
  loanLabels,
  reservationLabels,
  roleLabels,
  type AppRole,
  type LoanStatus,
  type ReservationStatus,
} from "@/lib/library";
import { createUsers, setUserRole } from "@/lib/admin.functions";
import { Card } from "@/components/admin/card";
import { BookCopiesManager, useCopyCounts } from "@/components/admin/copies-panel";

const input =
  "rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary-soft";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60";
const ghostBtn =
  "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:bg-secondary";

export { Card };

function Empty({ text }: { text: string }) {
  return <p className="text-sm text-muted-foreground">{text}</p>;
}

/* ---------------------------------- Livros --------------------------------- */

type BookRow = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  level: string;
  total_copies: number;
  available_copies: number;
  active: boolean;
  category_id: string | null;
  synopsis: string;
};

export function BooksAdmin() {
  const qc = useQueryClient();
  const [q, setQ] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [managingId, setManagingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    level: "livre",
    category_id: "",
    initial_copies: 0,
    synopsis: "",
  });

  const categories = useQuery({
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name")
        .order("name");
      if (error) throw error;
      return (data ?? []) as { id: string; name: string }[];
    },
  });

  const books = useQuery({
    queryKey: ["admin-books", q],
    queryFn: async () => {
      let query = supabase
        .from("books")
        .select(
          "id, title, author, publisher, level, total_copies, available_copies, active, category_id, synopsis",
        )
        .order("title")
        .limit(40);
      const term = q.trim().replace(/[,%()]/g, " ");
      if (term) query = query.or(`title.ilike.%${term}%,author.ilike.%${term}%`);
      const { data, error } = await query;
      if (error) throw error;
      return (data ?? []) as BookRow[];
    },
  });

  const update = useMutation({
    mutationFn: async ({
      id,
      patch,
    }: {
      id: string;
      patch: Partial<BookRow>;
    }) => {
      const { error } = await supabase.from("books").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Livro atualizado.");
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
    },
    onError: () => toast.error("Não foi possível atualizar o livro."),
  });

  const create = useMutation({
    mutationFn: async () => {
      if (form.title.trim().length < 2 || form.author.trim().length < 2) {
        throw new Error("Preencha título e autor");
      }
      const { data, error } = await supabase
        .from("books")
        .insert({
          title: form.title.trim(),
          author: form.author.trim(),
          publisher: form.publisher.trim(),
          level: form.level,
          category_id: form.category_id || null,
          synopsis: form.synopsis.trim(),
        })
        .select("id")
        .single();
      if (error) throw error;

      const quantity = Math.max(0, Number(form.initial_copies) || 0);
      if (quantity > 0 && data) {
        const { error: copyError } = await supabase.rpc("add_book_copies", {
          _book_id: data.id,
          _quantity: quantity,
        });
        if (copyError) throw new Error(`Livro criado, mas os exemplares falharam: ${copyError.message}`);
      }
    },
    onSuccess: () => {
      toast.success("Livro cadastrado.");
      setCreating(false);
      setForm({
        title: "",
        author: "",
        publisher: "",
        level: "livre",
        category_id: "",
        initial_copies: 0,
        synopsis: "",
      });
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
      void qc.invalidateQueries({ queryKey: ["admin-copy-counts"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível cadastrar."),
  });

  const startEdit = (b: BookRow) => {
    setEditingId(b.id);
    setForm({
      title: b.title,
      author: b.author,
      publisher: b.publisher,
      level: b.level,
      category_id: b.category_id || "",
      initial_copies: 0,
      synopsis: b.synopsis,
    });
  };

  const saveEdit = () => {
    if (!editingId) return;
    update.mutate(
      {
        id: editingId,
        patch: {
          title: form.title.trim(),
          author: form.author.trim(),
          publisher: form.publisher.trim(),
          level: form.level,
          category_id: form.category_id || null,
          synopsis: form.synopsis.trim(),
        },
      },
      {
        onSuccess: () => setEditingId(null),
      },
    );
  };

  const counts = useCopyCounts((books.data ?? []).map((b) => b.id));

  return (
    <Card title="Livros">
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex flex-1 items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título ou autor"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <button onClick={() => setCreating((v) => !v)} className={primaryBtn}>
          <Plus className="size-4" /> Novo livro
        </button>
      </div>

      {creating && (
        <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-background p-4 sm:grid-cols-2">
          <input
            className={input}
            placeholder="Título"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            className={input}
            placeholder="Autor"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          <input
            className={input}
            placeholder="Editora"
            value={form.publisher}
            onChange={(e) => setForm({ ...form, publisher: e.target.value })}
          />
          <select
            className={input}
            value={form.category_id}
            onChange={(e) => setForm({ ...form, category_id: e.target.value })}
          >
            <option value="">Sem categoria</option>
            {categories.data?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            className={input}
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value })}
          >
            <option value="livre">Livre</option>
            <option value="fundamental1">Fundamental I</option>
            <option value="fundamental2">Fundamental II</option>
            <option value="medio">Ensino Médio</option>
          </select>
          <input
            className={input}
            type="number"
            min={0}
            max={100}
            placeholder="Exemplares iniciais (opcional)"
            value={form.initial_copies}
            onChange={(e) => setForm({ ...form, initial_copies: Number(e.target.value) })}
          />
          <textarea
            className={`${input} sm:col-span-2`}
            rows={3}
            placeholder="Sinopse"
            value={form.synopsis}
            onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
          />
          <button
            onClick={() => create.mutate()}
            disabled={create.isPending}
            className={`${primaryBtn} sm:col-span-2`}
          >
            {create.isPending && <Loader2 className="size-4 animate-spin" />} Salvar livro
          </button>
        </div>
      )}

      <div className="mt-4 grid gap-2">
        {books.isLoading && <Loader2 className="size-5 animate-spin text-muted-foreground" />}
        {books.data?.map((b) => (
          <div
            key={b.id}
            className="rounded-2xl border border-border bg-background px-4 py-3"
          >
            {editingId === b.id ? (
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className={input}
                  placeholder="Título"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <input
                  className={input}
                  placeholder="Autor"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                />
                <input
                  className={input}
                  placeholder="Editora"
                  value={form.publisher}
                  onChange={(e) => setForm({ ...form, publisher: e.target.value })}
                />
                <select
                  className={input}
                  value={form.category_id}
                  onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                >
                  <option value="">Sem categoria</option>
                  {categories.data?.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <select
                  className={input}
                  value={form.level}
                  onChange={(e) => setForm({ ...form, level: e.target.value })}
                >
                  <option value="livre">Livre</option>
                  <option value="fundamental1">Fundamental I</option>
                  <option value="fundamental2">Fundamental II</option>
                  <option value="medio">Ensino Médio</option>
                </select>
                <p className="self-center text-xs text-muted-foreground">
                  A quantidade de exemplares é definida em “Gerenciar exemplares”.
                </p>
                <textarea
                  className={`${input} sm:col-span-2`}
                  rows={3}
                  placeholder="Sinopse"
                  value={form.synopsis}
                  onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
                />
                <div className="flex gap-2 sm:col-span-2">
                  <button
                    onClick={saveEdit}
                    disabled={update.isPending}
                    className={primaryBtn}
                  >
                    {update.isPending && <Loader2 className="size-4 animate-spin" />} Salvar
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className={ghostBtn}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{b.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{b.author}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {(counts.data?.[b.id]?.["total"] ?? 0)} exemplares ·{" "}
                      {(counts.data?.[b.id]?.["disponivel"] ?? 0)} disponíveis ·{" "}
                      {(counts.data?.[b.id]?.["emprestado"] ?? 0)} emprestados ·{" "}
                      {(counts.data?.[b.id]?.["manutencao"] ?? 0)} manutenção
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      className={ghostBtn}
                      onClick={() => setManagingId(managingId === b.id ? null : b.id)}
                    >
                      <Layers className="size-3" /> Gerenciar exemplares
                    </button>
                    <button className={ghostBtn} onClick={() => startEdit(b)}>
                      Editar
                    </button>
                    <button
                      className={ghostBtn}
                      onClick={() => update.mutate({ id: b.id, patch: { active: !b.active } })}
                    >
                      {b.active ? "Desativar" : "Ativar"}
                    </button>
                  </div>
                </div>
                {managingId === b.id && <BookCopiesManager bookId={b.id} title={b.title} />}
              </>
            )}
          </div>
        ))}
        {books.data?.length === 0 && <Empty text="Nenhum livro encontrado." />}
      </div>
    </Card>
  );
}

/* --------------------------------- Reservas -------------------------------- */

export function ReservationsAdmin() {
  const qc = useQueryClient();
  const reservations = useQuery({
    queryKey: ["admin-reservations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select(
          "id, status, created_at, user_id, book_id, books(title, available_copies), profiles(full_name, email)",
        )
        .order("created_at", { ascending: false })
        .limit(60);
      if (error) throw error;
      return (data ?? []) as unknown as {
        id: string;
        status: ReservationStatus;
        created_at: string;
        user_id: string;
        book_id: string;
        books: { title: string; available_copies: number } | null;
        profiles: { full_name: string; email: string } | null;
      }[];
    },
  });

  const [checkoutFor, setCheckoutFor] = useState<{
    id: string;
    user_id: string;
    book_id: string;
  } | null>(null);
  const [copyId, setCopyId] = useState("");

  const copies = useQuery({
    queryKey: ["admin-reservation-copies", checkoutFor?.book_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("book_copies")
        .select("id, asset_code")
        .eq("book_id", checkoutFor!.book_id)
        .eq("status", "disponivel")
        .order("asset_code");
      if (error) throw error;
      return (data ?? []) as { id: string; asset_code: string }[];
    },
    enabled: !!checkoutFor,
  });

  const setStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: ReservationStatus }) => {
      const { error } = await supabase.from("reservations").update({ status }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Reserva atualizada.");
      void qc.invalidateQueries({ queryKey: ["admin-reservations"] });
    },
    onError: () => toast.error("Não foi possível atualizar a reserva."),
  });

  const toLoan = useMutation({
    mutationFn: async () => {
      if (!checkoutFor || !copyId) throw new Error("Selecione o exemplar");
      const { error } = await supabase.rpc("register_checkout", {
        _user_id: checkoutFor.user_id,
        _copy_id: copyId,
        _reservation_id: checkoutFor.id,
      });
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toast.success("Empréstimo registrado.");
      setCheckoutFor(null);
      setCopyId("");
      void qc.invalidateQueries({ queryKey: ["admin-reservations"] });
      void qc.invalidateQueries({ queryKey: ["admin-loans"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível registrar."),
  });


  return (
    <Card title="Reservas">
      {reservations.isLoading && (
        <Loader2 className="size-5 animate-spin text-muted-foreground" />
      )}
      <div className="grid gap-2">
        {reservations.data?.map((r) => (
          <div
            key={r.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {r.books?.title ?? "—"}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {r.profiles?.full_name || r.profiles?.email} ·{" "}
                {new Date(r.created_at).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                {reservationLabels[r.status]}
              </span>
              {r.status === "pendente" && (
                <button
                  className={ghostBtn}
                  onClick={() => setStatus.mutate({ id: r.id, status: "aprovada" })}
                >
                  <Check className="size-3" /> Aprovar
                </button>
              )}
              {(r.status === "aprovada" || r.status === "pendente") && (
                <button
                  className={ghostBtn}
                  onClick={() => setStatus.mutate({ id: r.id, status: "disponivel" })}
                >
                  Pronta p/ retirada
                </button>
              )}
              {r.status !== "concluida" && r.status !== "cancelada" && (
                <>
                  <button
                    className={ghostBtn}
                    onClick={() => {
                      setCopyId("");
                      setCheckoutFor({
                        id: r.id,
                        user_id: r.user_id,
                        book_id: r.book_id,
                      });
                    }}
                  >
                    Registrar retirada
                  </button>
                  <button
                    className={ghostBtn}
                    onClick={() => setStatus.mutate({ id: r.id, status: "cancelada" })}
                  >
                    <X className="size-3" /> Cancelar
                  </button>
                </>
              )}
            </div>
            {checkoutFor?.id === r.id && (
              <div className="flex w-full min-w-0 flex-wrap items-end gap-2 border-t border-border pt-3">
                <div className="min-w-0 flex-1">
                  <label className="text-xs font-medium text-muted-foreground">
                    Exemplar (código de patrimônio)
                  </label>
                  <select
                    className={`${input} w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap`}
                    value={copyId}
                    onChange={(e) => setCopyId(e.target.value)}
                  >
                    <option value="">Selecione o exemplar</option>
                    {copies.data?.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.asset_code}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className={primaryBtn}
                  disabled={toLoan.isPending}
                  onClick={() => toLoan.mutate()}
                >
                  {toLoan.isPending && <Loader2 className="size-4 animate-spin" />} Confirmar
                </button>
                <button className={ghostBtn} onClick={() => setCheckoutFor(null)}>
                  Cancelar
                </button>
              </div>
            )}
          </div>

        ))}
        {reservations.data?.length === 0 && <Empty text="Nenhuma reserva registrada." />}
      </div>
    </Card>
  );
}

/* ------------------------------- Empréstimos ------------------------------- */

export function LoansAdmin() {
  const qc = useQueryClient();
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ user_id: "", book_id: "", copy_id: "" });

  const loans = useQuery({
    queryKey: ["admin-loans"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("loans")
        .select(
          "id, status, loan_date, due_date, returned_at, book_id, copy_id, books(title, available_copies), book_copies(asset_code), profiles(full_name, email)",
        )
        .order("loan_date", { ascending: false })
        .limit(60);
      if (error) throw error;
      return (data ?? []) as unknown as {
        id: string;
        status: LoanStatus;
        loan_date: string;
        due_date: string;
        returned_at: string | null;
        book_id: string;
        copy_id: string | null;
        books: { title: string; available_copies: number } | null;
        book_copies: { asset_code: string } | null;
        profiles: { full_name: string; email: string } | null;
      }[];
    },
  });

  const users = useQuery({
    queryKey: ["admin-loan-users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, email")
        .eq("active", true)
        .order("full_name")
        .limit(300);
      if (error) throw error;
      return (data ?? []) as { id: string; full_name: string; email: string }[];
    },
    enabled: creating,
  });

  const books = useQuery({
    queryKey: ["admin-loan-books"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("books")
        .select("id, title, author, available_copies")
        .eq("active", true)
        .gt("available_copies", 0)
        .order("title")
        .limit(300);
      if (error) throw error;
      return (data ?? []) as { id: string; title: string; author: string; available_copies: number }[];
    },
    enabled: creating,
  });

  const copies = useQuery({
    queryKey: ["admin-loan-copies", form.book_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("book_copies")
        .select("id, asset_code, condition, location")
        .eq("book_id", form.book_id)
        .eq("status", "disponivel")
        .order("asset_code");
      if (error) throw error;
      return (data ?? []) as {
        id: string;
        asset_code: string;
        condition: string;
        location: string;
      }[];
    },
    enabled: creating && !!form.book_id,
  });

  const create = useMutation({
    mutationFn: async () => {
      if (!form.user_id || !form.book_id) throw new Error("Selecione leitor e livro");
      if (!form.copy_id) throw new Error("Selecione o exemplar");
      const { error } = await supabase.rpc("register_checkout", {
        _user_id: form.user_id,
        _copy_id: form.copy_id,
      });
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toast.success("Empréstimo registrado no balcão.");
      setCreating(false);
      setForm({ user_id: "", book_id: "", copy_id: "" });
      void qc.invalidateQueries({ queryKey: ["admin-loans"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },

    onError: (e: Error) => toast.error(e.message || "Não foi possível registrar o empréstimo."),
  });

  const [returningId, setReturningId] = useState<string | null>(null);
  const [returnStatus, setReturnStatus] = useState("disponivel");

  const giveBack = useMutation({
    mutationFn: async (l: { id: string; copyStatus: string }) => {
      const { error } = await supabase.rpc("register_return", {
        _loan_id: l.id,
        _copy_status: l.copyStatus,
      });
      if (error) throw new Error(error.message);
    },

    onSuccess: () => {
      toast.success("Devolução registrada.");
      setReturningId(null);
      setReturnStatus("disponivel");
      void qc.invalidateQueries({ queryKey: ["admin-loans"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-book-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-copy-counts"] });
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível registrar a devolução."),
  });

  const today = new Date(new Date().toDateString());

  return (
    <Card title="Empréstimos">
      <button onClick={() => setCreating((v) => !v)} className={primaryBtn}>
        <Plus className="size-4" /> Empréstimo no balcão
      </button>

      {creating && (
        <div className="mt-4 grid gap-3 rounded-2xl border border-border bg-background p-4 sm:grid-cols-2">
          <div className="min-w-0">
            <label className="text-xs font-medium text-muted-foreground">Leitor</label>
            <select
              className={`${input} w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap`}
              value={form.user_id}
              onChange={(e) => setForm({ ...form, user_id: e.target.value })}
            >
              <option value="">Selecione um leitor</option>
              {users.data?.map((u) => {
                const label = u.full_name || u.email;
                const short = label.length > 50 ? label.slice(0, 50) + "…" : label;
                return (
                  <option key={u.id} value={u.id}>
                    {short}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="min-w-0">
            <label className="text-xs font-medium text-muted-foreground">Livro disponível</label>
            <select
              className={`${input} w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap`}
              value={form.book_id}
              onChange={(e) => setForm({ ...form, book_id: e.target.value, copy_id: "" })}
            >
              <option value="">Selecione um livro</option>
              {books.data?.map((b) => {
                const title = b.title.length > 40 ? b.title.slice(0, 40) + "…" : b.title;
                const author = b.author.length > 22 ? b.author.slice(0, 22) + "…" : b.author;
                return (
                  <option key={b.id} value={b.id}>
                    {title} — {author} ({b.available_copies} disp.)
                  </option>
                );
              })}
            </select>
          </div>
          <div className="min-w-0 sm:col-span-2">
            <label className="text-xs font-medium text-muted-foreground">
              Exemplar (código de patrimônio)
            </label>
            <select
              className={`${input} w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap`}
              value={form.copy_id}
              disabled={!form.book_id}
              onChange={(e) => setForm({ ...form, copy_id: e.target.value })}
            >
              <option value="">
                {form.book_id ? "Selecione o exemplar" : "Escolha um livro primeiro"}
              </option>
              {copies.data?.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.asset_code} · {c.condition} · {c.location}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 sm:col-span-2">
            <button
              onClick={() => create.mutate()}
              disabled={create.isPending}
              className={primaryBtn}
            >
              {create.isPending && <Loader2 className="size-4 animate-spin" />} Registrar retirada
            </button>
            <button onClick={() => setCreating(false)} className={ghostBtn}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 grid gap-2">
        {loans.isLoading && <Loader2 className="size-5 animate-spin text-muted-foreground" />}
        {loans.data?.map((l) => {
          const late = !l.returned_at && new Date(l.due_date) < today;
          return (
            <div
              key={l.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {l.books?.title ?? "—"}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      l.book_copies?.asset_code
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {l.book_copies?.asset_code ?? "sem exemplar registrado"}
                  </span>
                </div>
                <p className="truncate text-xs text-muted-foreground">
                  {l.profiles?.full_name || l.profiles?.email} · devolver até{" "}
                  {new Date(l.due_date).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    late ? "bg-destructive/15 text-destructive" : "bg-secondary text-primary"
                  }`}
                >
                  {late ? "Atrasado" : loanLabels[l.status]}
                </span>
                {!l.returned_at && returningId !== l.id && (
                  <button
                    className={ghostBtn}
                    onClick={() => {
                      setReturnStatus("disponivel");
                      setReturningId(l.id);
                    }}
                  >
                    <RotateCcw className="size-3" /> Devolver
                  </button>
                )}
                {!l.returned_at && returningId === l.id && (
                  <>
                    <select
                      className={`${input} py-1.5 text-xs`}
                      value={returnStatus}
                      onChange={(e) => setReturnStatus(e.target.value)}
                    >
                      <option value="disponivel">Devolver como disponível</option>
                      <option value="manutencao">Enviar para manutenção</option>
                      <option value="perdido">Registrar como perdido</option>
                      <option value="extraviado">Registrar como extraviado</option>
                    </select>
                    <button
                      className={ghostBtn}
                      disabled={giveBack.isPending}
                      onClick={() => giveBack.mutate({ id: l.id, copyStatus: returnStatus })}
                    >
                      {giveBack.isPending ? (
                        <Loader2 className="size-3 animate-spin" />
                      ) : (
                        <Check className="size-3" />
                      )}
                      Confirmar
                    </button>
                    <button className={ghostBtn} onClick={() => setReturningId(null)}>
                      <X className="size-3" /> Cancelar
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
        {loans.data?.length === 0 && <Empty text="Nenhum empréstimo registrado." />}
      </div>
    </Card>
  );
}

/* --------------------------------- Usuários -------------------------------- */

export function UsersAdmin({ isAdmin }: { isAdmin: boolean }) {
  const qc = useQueryClient();
  const [bulk, setBulk] = useState("");
  const [sending, setSending] = useState(false);

  const users = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const [profilesRes, rolesRes] = await Promise.all([
        supabase
          .from("profiles")
          .select("id, full_name, email, matricula, grade, active, created_at")
          .order("full_name")
          .limit(200),
        supabase.from("user_roles").select("user_id, role"),
      ]);
      if (profilesRes.error) throw profilesRes.error;
      const roles = new Map<string, AppRole>();
      for (const r of (rolesRes.data ?? []) as { user_id: string; role: AppRole }[]) {
        roles.set(r.user_id, r.role);
      }
      return (profilesRes.data ?? []).map((p) => ({
        ...(p as {
          id: string;
          full_name: string;
          email: string;
          matricula: string | null;
          grade: string | null;
          active: boolean;
        }),
        role: roles.get((p as { id: string }).id) ?? ("aluno" as AppRole),
      }));
    },
  });

  const toggleActive = useMutation({
    mutationFn: async ({ id, active }: { id: string; active: boolean }) => {
      const { error } = await supabase.from("profiles").update({ active }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Cadastro atualizado.");
      void qc.invalidateQueries({ queryKey: ["admin-users"] });
    },
    onError: () => toast.error("Não foi possível atualizar o cadastro."),
  });

  const importUsers = async () => {
    const rows = bulk
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.toLowerCase().startsWith("nome"));
    if (rows.length === 0) {
      toast.error("Cole ao menos uma linha no formato indicado.");
      return;
    }
    const parsed = rows.map((line) => {
      const [full_name = "", email = "", password = "", matricula = "", grade = "", role = "aluno"] =
        line.split(/[;,]/).map((c) => c.trim());
      return {
        full_name,
        email,
        password: password || "biblioteca123",
        matricula,
        grade,
        role: (["aluno", "professor", "bibliotecario", "admin"].includes(role)
          ? role
          : "aluno") as AppRole,
      };
    });
    setSending(true);
    try {
      const res = await createUsers({ data: { users: parsed } });
      const ok = res.results.filter((r) => r.ok).length;
      const failed = res.results.filter((r) => !r.ok);
      toast.success(`${ok} conta(s) criada(s).`);
      if (failed.length) toast.error(`${failed.length} falharam: ${failed[0]?.message}`);
      setBulk("");
      void qc.invalidateQueries({ queryKey: ["admin-users"] });
    } catch {
      toast.error("Não foi possível importar os usuários.");
    } finally {
      setSending(false);
    }
  };

  const changeRole = async (userId: string, role: AppRole) => {
    try {
      await setUserRole({ data: { userId, role } });
      toast.success("Perfil de acesso alterado.");
      void qc.invalidateQueries({ queryKey: ["admin-users"] });
    } catch {
      toast.error("Não foi possível alterar o perfil de acesso.");
    }
  };

  return (
    <Card title="Usuários">
      {isAdmin && (
        <div className="mb-5 rounded-2xl border border-border bg-background p-4">
          <p className="text-sm font-semibold text-foreground">Importação em massa</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Uma linha por pessoa: nome; e-mail; senha; matrícula; turma; perfil
            (aluno/professor/bibliotecario/admin).
          </p>
          <textarea
            rows={4}
            value={bulk}
            onChange={(e) => setBulk(e.target.value)}
            placeholder="Maria Silva; maria@escola.com; senha123; 20250012; 8º ano B; aluno"
            className={`${input} mt-3 w-full`}
          />
          <button onClick={importUsers} disabled={sending} className={`${primaryBtn} mt-3`}>
            {sending && <Loader2 className="size-4 animate-spin" />} Criar contas
          </button>
        </div>
      )}

      {users.isLoading && <Loader2 className="size-5 animate-spin text-muted-foreground" />}
      <div className="grid gap-2">
        {users.data?.map((u) => (
          <div
            key={u.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {u.full_name || "Sem nome"}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {u.email}
                {u.matricula ? ` · matrícula ${u.matricula}` : ""}
                {u.grade ? ` · ${u.grade}` : ""}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isAdmin ? (
                <select
                  value={u.role}
                  onChange={(e) => changeRole(u.id, e.target.value as AppRole)}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-primary"
                >
                  {(Object.keys(roleLabels) as AppRole[]).map((r) => (
                    <option key={r} value={r}>
                      {roleLabels[r]}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-primary">
                  {roleLabels[u.role]}
                </span>
              )}
              <button
                className={ghostBtn}
                onClick={() => toggleActive.mutate({ id: u.id, active: !u.active })}
              >
                {u.active ? "Inativar" : "Ativar"}
              </button>
            </div>
          </div>
        ))}
        {users.data?.length === 0 && <Empty text="Nenhum usuário cadastrado." />}
      </div>
    </Card>
  );
}

/* -------------------------------- Categorias ------------------------------- */

export function CategoriesAdmin() {
  const qc = useQueryClient();
  const [name, setName] = useState("");

  const categories = useQuery({
    queryKey: ["admin-categories-full"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name, slug, active")
        .order("name");
      if (error) throw error;
      return (data ?? []) as { id: string; name: string; slug: string; active: boolean }[];
    },
  });

  const create = useMutation({
    mutationFn: async () => {
      const trimmed = name.trim();
      if (trimmed.length < 2) throw new Error("Informe um nome válido");
      const slug = trimmed
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      const { error } = await supabase
        .from("categories")
        .insert({ name: trimmed, slug, icon: "BookOpen" });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Categoria criada.");
      setName("");
      void qc.invalidateQueries({ queryKey: ["admin-categories-full"] });
      void qc.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível criar a categoria."),
  });

  return (
    <Card title="Categorias">
      <div className="flex flex-wrap gap-3">
        <input
          className={`${input} flex-1`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nova categoria"
        />
        <button onClick={() => create.mutate()} className={primaryBtn}>
          <Plus className="size-4" /> Adicionar
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.data?.map((c) => (
          <span
            key={c.id}
            className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-primary"
          >
            {c.name}
          </span>
        ))}
      </div>
    </Card>
  );
}

/* --------------------------------- Dashboard ------------------------------- */

export function DashboardAdmin() {
  const stats = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [books, users, reservations, loans, reviews] = await Promise.all([
        supabase.from("books").select("id", { count: "exact", head: true }).eq("active", true),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
        supabase
          .from("reservations")
          .select("id", { count: "exact", head: true })
          .in("status", ["pendente", "aprovada", "disponivel"]),
        supabase
          .from("loans")
          .select("id", { count: "exact", head: true })
          .is("returned_at", null),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
      ]);
      return {
        books: books.count ?? 0,
        users: users.count ?? 0,
        reservations: reservations.count ?? 0,
        loans: loans.count ?? 0,
        reviews: reviews.count ?? 0,
      };
    },
  });

  const items = useMemo(
    () => [
      { label: "Títulos ativos", value: stats.data?.books },
      { label: "Leitores cadastrados", value: stats.data?.users },
      { label: "Reservas em aberto", value: stats.data?.reservations },
      { label: "Empréstimos ativos", value: stats.data?.loans },
      { label: "Avaliações", value: stats.data?.reviews },
    ],
    [stats.data],
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
        >
          <p className="font-display text-3xl text-primary">
            {stats.isLoading ? "—" : (item.value ?? 0)}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------- Avaliações ------------------------------- */

type AdminReviewRow = {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  books: { title: string; author: string } | null;
  profiles: { full_name: string; email: string } | null;
};

export function ReviewsAdmin() {
  const qc = useQueryClient();
  const [term, setTerm] = useState("");
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const reviews = useQuery({
    queryKey: ["admin-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, rating, comment, created_at, books(title, author), profiles(full_name, email)")
        .order("created_at", { ascending: false })
        .limit(300);
      if (error) throw error;
      return (data ?? []) as unknown as AdminReviewRow[];
    },
  });

  const remove = useMutation({
    mutationFn: (id: string) => deleteReview(id),
    onSuccess: () => {
      toast.success("Avaliação excluída.");
      setConfirmId(null);
      void qc.invalidateQueries({ queryKey: ["admin-reviews"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
      void qc.invalidateQueries({ queryKey: ["book-reviews"] });
      void qc.invalidateQueries({ queryKey: ["latest-reviews"] });
      void qc.invalidateQueries({ queryKey: ["home-sections"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível excluir a avaliação."),
  });

  const filtered = useMemo(() => {
    const q = term.trim().toLowerCase();
    const rows = reviews.data ?? [];
    if (!q) return rows;
    return rows.filter((r) =>
      [r.books?.title, r.books?.author, r.profiles?.full_name, r.profiles?.email]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q)),
    );
  }, [reviews.data, term]);

  return (
    <Card title="Avaliações">
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-background px-3">
        <Search className="size-4 text-muted-foreground" />
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Buscar por livro ou leitor"
          className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none"
        />
      </div>

      <div className="mt-4 grid gap-2">
        {reviews.isLoading && <Loader2 className="size-5 animate-spin text-muted-foreground" />}
        {!reviews.isLoading && filtered.length === 0 && (
          <Empty text="Nenhuma avaliação encontrada." />
        )}
        {filtered.map((r) => (
          <div key={r.id} className="rounded-2xl border border-border bg-background px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {r.books?.title ?? "—"}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {r.profiles?.full_name || r.profiles?.email || "Leitor"} ·{" "}
                  {new Date(r.created_at).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                  <Star className="size-3 fill-gold text-gold" /> {r.rating}
                </span>
                {confirmId === r.id ? (
                  <>
                    <button
                      className={ghostBtn}
                      disabled={remove.isPending}
                      onClick={() => remove.mutate(r.id)}
                    >
                      {remove.isPending ? (
                        <Loader2 className="size-3 animate-spin" />
                      ) : (
                        <Check className="size-3" />
                      )}
                      Confirmar exclusão
                    </button>
                    <button className={ghostBtn} onClick={() => setConfirmId(null)}>
                      <X className="size-3" /> Cancelar
                    </button>
                  </>
                ) : (
                  <button className={ghostBtn} onClick={() => setConfirmId(r.id)}>
                    <Trash2 className="size-3" /> Excluir
                  </button>
                )}
              </div>
            </div>
            {r.comment && (
              <p className="mt-2 text-sm text-foreground/85">“{r.comment}”</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
