import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Download, Upload, Check, X } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { importBooks, createUsers } from "@/lib/admin.functions";
import {
  BOOKS_CSV_TEMPLATE,
  USERS_CSV_TEMPLATE,
  downloadCsv,
  normalizeRole,
  parseCsv,
  stripHeader,
} from "@/lib/csv";
import type { AppRole } from "@/lib/library";

const input =
  "rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary-soft";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60";
const ghostBtn =
  "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:bg-secondary";

/* ------------------------------ Importar livros ----------------------------- */

type BookLine = {
  line: number;
  title: string;
  author: string;
  publisher: string;
  level: string;
  collection: boolean;
  synopsis: string;
  quantity: number;
  error?: string;
  duplicate?: boolean;
};

export function BooksImport({ onDone }: { onDone: () => void }) {
  const qc = useQueryClient();
  const [categoryId, setCategoryId] = useState("");
  const [rows, setRows] = useState<BookLine[] | null>(null);
  const [fileName, setFileName] = useState("");

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

  const handleFile = async (file: File) => {
    setFileName(file.name);
    const text = await file.text();
    const parsed = stripHeader(parseCsv(text), "titulo");
    const lines: BookLine[] = parsed.map((cells, i) => {
      const [title = "", author = "", publisher = "", level = "", collection = "", synopsis = "", quantity = "0"] =
        cells;
      const qty = Number(quantity || 0);
      const row: BookLine = {
        line: i + 2,
        title: title.trim(),
        author: author.trim(),
        publisher: publisher.trim(),
        level: level.trim() || "LIVRE",
        collection: /^(true|sim|1)$/i.test(collection.trim()),
        synopsis: synopsis.trim(),
        quantity: Number.isFinite(qty) ? Math.max(0, Math.min(100, Math.trunc(qty))) : 0,
      };
      if (row.title.length < 2) row.error = "Título obrigatório";
      else if (!Number.isFinite(qty)) row.error = "Quantidade inválida";
      return row;
    });

    const titles = lines.filter((l) => !l.error).map((l) => l.title);
    if (titles.length) {
      const { data } = await supabase
        .from("books")
        .select("title, author")
        .in("title", titles.slice(0, 300));
      const existing = new Set(
        ((data ?? []) as { title: string; author: string }[]).map(
          (b) => `${b.title.toLowerCase()}|${b.author.toLowerCase()}`,
        ),
      );
      for (const l of lines) {
        if (existing.has(`${l.title.toLowerCase()}|${l.author.toLowerCase()}`)) l.duplicate = true;
      }
    }
    setRows(lines);
  };

  const valid = useMemo(() => (rows ?? []).filter((r) => !r.error), [rows]);
  const invalid = useMemo(() => (rows ?? []).filter((r) => r.error), [rows]);
  const duplicates = valid.filter((r) => r.duplicate).length;
  const totalCopies = valid.reduce((sum, r) => sum + r.quantity, 0);

  const run = useMutation({
    mutationFn: async () => {
      if (!categoryId) throw new Error("Selecione a categoria/prateleira");
      if (valid.length === 0) throw new Error("Nenhuma linha válida para importar");
      return importBooks({
        data: {
          categoryId,
          books: valid.map((r) => ({
            title: r.title,
            author: r.author,
            publisher: r.publisher,
            level: r.level,
            collection: r.collection,
            synopsis: r.synopsis,
            quantity: r.quantity,
          })),
        },
      });
    },
    onSuccess: (res) => {
      toast.success(`${res.created} livro(s) e ${res.copies} exemplar(es) criados.`);
      if (res.errors.length) toast.error(`${res.errors.length} linha(s) com erro: ${res.errors[0]?.message}`);
      setRows(null);
      setFileName("");
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-copy-counts"] });
      void qc.invalidateQueries({ queryKey: ["admin-categories-full"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
      onDone();
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível importar."),
  });

  return (
    <div className="mt-4 rounded-2xl border border-border bg-background p-4">
      <p className="text-sm font-semibold text-foreground">Importar livros em massa</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Colunas: titulo, autor, editora, nivel, colecao, sinopse, quantidade_inicial. Cada unidade em
        “quantidade_inicial” vira um exemplar físico com código BIB próprio.
      </p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <select className={input} value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option value="">Categoria / Prateleira dos livros importados</option>
          {categories.data?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap items-center gap-2">
          <button
            className={ghostBtn}
            onClick={() => downloadCsv("modelo-livros.csv", BOOKS_CSV_TEMPLATE)}
          >
            <Download className="size-3" /> Baixar modelo CSV
          </button>
          <label className={`${ghostBtn} cursor-pointer`}>
            <Upload className="size-3" /> Selecionar arquivo CSV
            <input
              type="file"
              accept=".csv,text/csv"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void handleFile(file);
              }}
            />
          </label>
          {fileName && <span className="text-xs text-muted-foreground">{fileName}</span>}
        </div>
      </div>

      {rows && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-foreground">
            {valid.length} linha(s) válida(s) · {invalid.length} inválida(s) · {duplicates} possível(is)
            duplicado(s) · {totalCopies} exemplar(es) serão criados
          </p>
          <div className="mt-3 max-h-56 overflow-auto text-xs">
            {rows.slice(0, 60).map((r) => (
              <p
                key={r.line}
                className={`truncate py-0.5 ${r.error ? "text-destructive" : "text-muted-foreground"}`}
              >
                Linha {r.line}: {r.title || "(sem título)"} — {r.author || "sem autor"} ·{" "}
                {r.quantity} exemplar(es)
                {r.error ? ` · ${r.error}` : r.duplicate ? " · já existe no acervo" : ""}
              </p>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className={primaryBtn} disabled={run.isPending} onClick={() => run.mutate()}>
              {run.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
              Importar {valid.length} livro(s)
            </button>
            <button className={ghostBtn} onClick={() => setRows(null)}>
              <X className="size-3" /> Descartar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Importar usuários ---------------------------- */

type UserLine = {
  line: number;
  full_name: string;
  email: string;
  password: string;
  matricula: string;
  grade: string;
  role: AppRole;
  error?: string;
};

export function UsersImport({ allowedRoles }: { allowedRoles: AppRole[] }) {
  const qc = useQueryClient();
  const [rows, setRows] = useState<UserLine[] | null>(null);
  const [fileName, setFileName] = useState("");
  const [report, setReport] = useState<{ email: string; ok: boolean; message?: string }[] | null>(
    null,
  );

  const handleFile = async (file: File) => {
    setFileName(file.name);
    setReport(null);
    const text = await file.text();
    const parsed = stripHeader(parseCsv(text), "nome");
    const lines: UserLine[] = parsed.map((cells, i) => {
      const [full_name = "", email = "", password = "", matricula = "", grade = "", role = "aluno"] = cells;
      const normalized = normalizeRole(role);
      const row: UserLine = {
        line: i + 2,
        full_name: full_name.trim(),
        email: email.trim(),
        password: password.trim(),
        matricula: matricula.trim(),
        grade: grade.trim(),
        role: (normalized ?? "aluno") as AppRole,
      };
      if (row.full_name.length < 2) row.error = "Nome obrigatório";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) row.error = "E-mail inválido";
      else if (row.password.length < 6) row.error = "Senha com mínimo de 6 caracteres";
      else if (!normalized) row.error = "Permissão inválida";
      else if (!allowedRoles.includes(normalized)) row.error = "Permissão acima do seu nível de acesso";
      return row;
    });
    setRows(lines);
  };

  const valid = useMemo(() => (rows ?? []).filter((r) => !r.error), [rows]);
  const invalid = useMemo(() => (rows ?? []).filter((r) => r.error), [rows]);

  const run = useMutation({
    mutationFn: async () => {
      if (valid.length === 0) throw new Error("Nenhuma linha válida para importar");
      return createUsers({
        data: {
          users: valid.map((r) => ({
            full_name: r.full_name,
            email: r.email,
            password: r.password,
            matricula: r.matricula,
            grade: r.grade,
            role: r.role,
          })),
        },
      });
    },
    onSuccess: (res) => {
      const ok = res.results.filter((r) => r.ok).length;
      toast.success(`${ok} conta(s) criada(s).`);
      setReport(res.results);
      setRows(null);
      setFileName("");
      void qc.invalidateQueries({ queryKey: ["admin-users"] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
    onError: (e: Error) => toast.error(e.message || "Não foi possível importar as contas."),
  });

  return (
    <div className="mb-5 rounded-2xl border border-border bg-background p-4">
      <p className="text-sm font-semibold text-foreground">Importação de usuários por CSV</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Colunas: nome, email, senha, RM, Série, permissão. Permissões aceitas:{" "}
        {allowedRoles.join(", ")}. As senhas não são exibidas depois da importação.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button className={ghostBtn} onClick={() => downloadCsv("modelo-usuarios.csv", USERS_CSV_TEMPLATE)}>
          <Download className="size-3" /> Baixar modelo CSV
        </button>
        <label className={`${ghostBtn} cursor-pointer`}>
          <Upload className="size-3" /> Selecionar arquivo CSV
          <input
            type="file"
            accept=".csv,text/csv"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void handleFile(file);
            }}
          />
        </label>
        {fileName && <span className="text-xs text-muted-foreground">{fileName}</span>}
      </div>

      {rows && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-foreground">
            {valid.length} linha(s) válida(s) · {invalid.length} com erro
          </p>
          <div className="mt-3 max-h-56 overflow-auto text-xs">
            {rows.slice(0, 100).map((r) => (
              <p
                key={r.line}
                className={`truncate py-0.5 ${r.error ? "text-destructive" : "text-muted-foreground"}`}
              >
                Linha {r.line}: {r.full_name || "(sem nome)"} · {r.email} · {r.role}
                {r.error ? ` · ${r.error}` : ""}
              </p>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className={primaryBtn} disabled={run.isPending} onClick={() => run.mutate()}>
              {run.isPending ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
              Criar {valid.length} conta(s)
            </button>
            <button className={ghostBtn} onClick={() => setRows(null)}>
              <X className="size-3" /> Descartar
            </button>
          </div>
        </div>
      )}

      {report && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-4 text-xs">
          <p className="text-sm font-semibold text-foreground">Relatório da importação</p>
          <p className="mt-1 text-muted-foreground">
            {report.filter((r) => r.ok).length} criada(s) · {report.filter((r) => !r.ok).length} falharam
          </p>
          <div className="mt-2 max-h-40 overflow-auto">
            {report
              .filter((r) => !r.ok)
              .map((r) => (
                <p key={r.email} className="truncate py-0.5 text-destructive">
                  {r.email} · {r.message}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
