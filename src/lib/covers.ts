import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const COVERS_BUCKET = "book-covers";
const SIGNED_TTL = 60 * 60; // 1h
export const MAX_COVER_BYTES = 5 * 1024 * 1024;

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

/** Redimensiona a imagem no navegador para economizar espaço. */
export async function resizeImage(file: File | Blob, max = { w: 900, h: 1350 }) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, max.w / bitmap.width, max.h / bitmap.height);
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.85),
  );
  return blob ?? file;
}

async function upload(path: string, file: File | Blob) {
  const body = await resizeImage(file);
  const { error } = await supabase.storage
    .from(COVERS_BUCKET)
    .upload(path, body, { upsert: true, contentType: "image/jpeg", cacheControl: "3600" });
  if (error) throw new Error(error.message);
  return path;
}

export async function uploadBookCover(bookId: string, file: File | Blob) {
  const path = `books/${bookId}.jpg`;
  await upload(path, file);
  const { error } = await supabase
    .from("books")
    .update({ cover_url: `${path}?v=${Date.now()}` })
    .eq("id", bookId);
  if (error) throw new Error(error.message);
  return path;
}

export async function removeBookCover(bookId: string) {
  await supabase.storage.from(COVERS_BUCKET).remove([`books/${bookId}.jpg`]);
  const { error } = await supabase.from("books").update({ cover_url: null }).eq("id", bookId);
  if (error) throw new Error(error.message);
}

export async function uploadCopyPhoto(copyId: string, assetCode: string, file: File | Blob) {
  const path = `copies/${assetCode}.jpg`;
  await upload(path, file);
  const { error } = await supabase
    .from("book_copies")
    .update({ photo_url: `${path}?v=${Date.now()}` })
    .eq("id", copyId);
  if (error) throw new Error(error.message);
  return path;
}

export async function removeCopyPhoto(copyId: string, assetCode: string) {
  await supabase.storage.from(COVERS_BUCKET).remove([`copies/${assetCode}.jpg`]);
  const { error } = await supabase
    .from("book_copies")
    .update({ photo_url: null })
    .eq("id", copyId);
  if (error) throw new Error(error.message);
}

/* ------------------------------ Leitura/URLs ------------------------------- */

const stripVersion = (path: string) => path.split("?")[0]!;

export async function signCovers(paths: string[]) {
  const map: Record<string, string> = {};
  const unique = [...new Set(paths.filter(Boolean).map(stripVersion))];
  if (unique.length === 0) return map;
  const { data, error } = await supabase.storage
    .from(COVERS_BUCKET)
    .createSignedUrls(unique, SIGNED_TTL);
  if (error) return map;
  for (const item of data ?? []) {
    if (item.signedUrl && item.path) map[item.path] = item.signedUrl;
  }
  return map;
}

/** Resolve as URLs assinadas de uma lista de caminhos de imagem. */
export function useCoverUrls(paths: (string | null | undefined)[]) {
  const clean = [...new Set(paths.filter(Boolean).map((p) => stripVersion(p as string)))].sort();
  return useQuery({
    queryKey: ["cover-urls", clean.join("|")],
    enabled: clean.length > 0,
    staleTime: 1000 * 60 * 30,
    queryFn: () => signCovers(clean),
  });
}

export function coverKey(path: string | null | undefined) {
  return path ? stripVersion(path) : "";
}

/* ------------------------------ Envio em massa ------------------------------ */

export type BulkFile = { name: string; blob: Blob };

export type BulkResult = {
  uploaded: string[];
  notFound: string[];
  failed: { name: string; reason: string }[];
};

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Extrai o código BIB do nome do arquivo (BIB-000001.jpg → BIB-000001). */
export function assetCodeFromFilename(name: string) {
  const base = name.split("/").pop() ?? name;
  const withoutExt = base.replace(IMAGE_EXT, "").trim();
  return withoutExt.toUpperCase();
}

export async function readFilesFromInput(files: File[]): Promise<BulkFile[]> {
  const out: BulkFile[] = [];
  for (const file of files) {
    if (/\.zip$/i.test(file.name)) {
      const { unzipSync } = await import("fflate");
      const buffer = new Uint8Array(await file.arrayBuffer());
      const entries = unzipSync(buffer);
      for (const [name, bytes] of Object.entries(entries)) {
        if (!IMAGE_EXT.test(name) || name.startsWith("__MACOSX")) continue;
        out.push({ name, blob: new Blob([(bytes as Uint8Array).slice().buffer]) });
      }
    } else if (IMAGE_EXT.test(file.name)) {
      out.push({ name: file.name, blob: file });
    }
  }
  return out;
}

/** Envia as fotos casando o nome do arquivo com o código BIB do exemplar. */
export async function bulkUploadCovers(
  files: BulkFile[],
  onProgress?: (done: number, total: number) => void,
): Promise<BulkResult> {
  const result: BulkResult = { uploaded: [], notFound: [], failed: [] };
  const codes = files.map((f) => assetCodeFromFilename(f.name));

  const copyByCode = new Map<string, { id: string; book_id: string }>();
  for (let i = 0; i < codes.length; i += 200) {
    const chunk = codes.slice(i, i + 200);
    const { data, error } = await supabase
      .from("book_copies")
      .select("id, asset_code, book_id")
      .in("asset_code", chunk);
    if (error) throw new Error(error.message);
    for (const row of data ?? []) {
      copyByCode.set(row.asset_code.toUpperCase(), { id: row.id, book_id: row.book_id });
    }
  }

  const bookIds = [...new Set([...copyByCode.values()].map((c) => c.book_id))];
  const booksWithoutCover = new Set<string>();
  for (let i = 0; i < bookIds.length; i += 200) {
    const { data } = await supabase
      .from("books")
      .select("id, cover_url")
      .in("id", bookIds.slice(i, i + 200));
    for (const row of data ?? []) if (!row.cover_url) booksWithoutCover.add(row.id);
  }

  let done = 0;
  for (const file of files) {
    const code = assetCodeFromFilename(file.name);
    const copy = copyByCode.get(code);
    done += 1;
    if (!copy) {
      result.notFound.push(file.name);
      onProgress?.(done, files.length);
      continue;
    }
    try {
      if (file.blob.size > MAX_COVER_BYTES) throw new Error("Imagem maior que 5 MB");
      await uploadCopyPhoto(copy.id, code, file.blob);
      if (booksWithoutCover.has(copy.book_id)) {
        await uploadBookCover(copy.book_id, file.blob);
        booksWithoutCover.delete(copy.book_id);
      }
      result.uploaded.push(file.name);
    } catch (e) {
      result.failed.push({ name: file.name, reason: (e as Error).message });
    }
    onProgress?.(done, files.length);
  }
  return result;
}
