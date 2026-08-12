import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Images, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/admin/card";
import {
  bulkUploadCovers,
  readFilesFromInput,
  type BulkFile,
  type BulkResult,
} from "@/lib/covers";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60";

export function CoversAdmin() {
  const qc = useQueryClient();
  const [files, setFiles] = useState<BulkFile[]>([]);
  const [reading, setReading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [result, setResult] = useState<BulkResult | null>(null);

  const pick = async (list: FileList | null) => {
    if (!list) return;
    setReading(true);
    setResult(null);
    try {
      const parsed = await readFilesFromInput(Array.from(list));
      setFiles(parsed);
      if (parsed.length === 0) toast.error("Nenhuma imagem encontrada nos arquivos enviados.");
    } catch {
      toast.error("Não foi possível ler os arquivos.");
    } finally {
      setReading(false);
    }
  };

  const send = async () => {
    setProgress({ done: 0, total: files.length });
    try {
      const res = await bulkUploadCovers(files, (done, total) => setProgress({ done, total }));
      setResult(res);
      setFiles([]);
      toast.success(`${res.uploaded.length} foto(s) enviada(s).`);
      void qc.invalidateQueries({ queryKey: ["admin-books"] });
      void qc.invalidateQueries({ queryKey: ["admin-copies"] });
      void qc.invalidateQueries({ queryKey: ["admin-book-copies"] });
      void qc.invalidateQueries({ queryKey: ["cover-urls"] });
    } catch (e) {
      toast.error((e as Error).message || "Falha no envio em massa.");
    } finally {
      setProgress(null);
    }
  };

  return (
    <Card title="Capas e fotos em massa">
      <p className="text-sm text-muted-foreground">
        Selecione várias imagens ou um arquivo <strong>.ZIP</strong>. O nome de cada arquivo deve ser
        o código BIB do exemplar — por exemplo <code className="font-mono">BIB-000001.jpg</code>. A
        foto é salva no exemplar e, quando o título ainda não tem capa, também vira a capa do livro.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className={`${primaryBtn} cursor-pointer`}>
          {reading ? <Loader2 className="size-4 animate-spin" /> : <Images className="size-4" />}
          Escolher imagens ou ZIP
          <input
            type="file"
            multiple
            accept=".zip,image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => void pick(e.target.files)}
          />
        </label>
        <button
          className={primaryBtn}
          disabled={files.length === 0 || !!progress}
          onClick={() => void send()}
        >
          {progress ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
          {progress
            ? `Enviando ${progress.done}/${progress.total}…`
            : `Enviar ${files.length} foto(s)`}
        </button>
      </div>

      {files.length > 0 && !progress && (
        <p className="mt-3 text-xs text-muted-foreground">
          Prontos para envio: {files.slice(0, 6).map((f) => f.name).join(", ")}
          {files.length > 6 ? ` e mais ${files.length - 6}…` : ""}
        </p>
      )}

      {result && (
        <div className="mt-4 grid gap-2 rounded-2xl border border-border bg-background p-4 text-sm">
          <p className="text-foreground">
            <strong>{result.uploaded.length}</strong> enviada(s) ·{" "}
            <strong>{result.notFound.length}</strong> sem exemplar correspondente ·{" "}
            <strong>{result.failed.length}</strong> com erro
          </p>
          {result.notFound.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Código BIB não encontrado: {result.notFound.slice(0, 20).join(", ")}
              {result.notFound.length > 20 ? "…" : ""}
            </p>
          )}
          {result.failed.length > 0 && (
            <ul className="text-xs text-destructive">
              {result.failed.slice(0, 20).map((f) => (
                <li key={f.name}>
                  {f.name}: {f.reason}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Card>
  );
}
