import { useRef, useState } from "react";
import { Loader2, ImagePlus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { CoverImage } from "@/components/cover-image";
import { ACCEPTED_IMAGE_TYPES, MAX_COVER_BYTES } from "@/lib/covers";

const ghostBtn =
  "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:bg-secondary";

/** Campo de foto reutilizável (capa do livro ou foto do exemplar). */
export function CoverField({
  path,
  label,
  onUpload,
  onRemove,
}: {
  path?: string | null | undefined;
  label: string;
  onUpload: (file: File) => Promise<unknown>;
  onRemove: () => Promise<unknown>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    try {
      await fn();
      toast.success("Imagem atualizada.");
    } catch (e) {
      toast.error((e as Error).message || "Não foi possível salvar a imagem.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="grid h-24 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-secondary">
        <CoverImage
          path={path}
          alt={label}
          fallback={<ImagePlus className="size-5 text-muted-foreground" />}
        />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <button className={ghostBtn} disabled={busy} onClick={() => inputRef.current?.click()}>
            {busy ? <Loader2 className="size-3.5 animate-spin" /> : <ImagePlus className="size-3.5" />}
            {path ? "Substituir" : "Enviar foto"}
          </button>
          {path && (
            <button
              className={`${ghostBtn} text-destructive`}
              disabled={busy}
              onClick={() => void run(onRemove)}
            >
              <Trash2 className="size-3.5" /> Remover
            </button>
          )}
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">JPG, PNG ou WEBP até 5 MB.</p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_IMAGE_TYPES.join(",")}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
            toast.error("Formato não suportado. Use JPG, PNG ou WEBP.");
            return;
          }
          if (file.size > MAX_COVER_BYTES) {
            toast.error("Imagem maior que 5 MB.");
            return;
          }
          void run(() => onUpload(file));
        }}
      />
    </div>
  );
}
