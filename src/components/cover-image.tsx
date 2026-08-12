import { useCoverUrls, coverKey } from "@/lib/covers";

/** Mostra a capa enviada; sem imagem, renderiza o conteúdo alternativo. */
export function CoverImage({
  path,
  alt,
  className = "",
  fallback,
}: {
  path?: string | null | undefined;
  alt: string;
  className?: string | undefined;
  fallback?: React.ReactNode | undefined;
}) {
  const urls = useCoverUrls([path]);
  const url = path ? urls.data?.[coverKey(path)] : undefined;

  if (!path || !url) return <>{fallback ?? null}</>;
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      className={`size-full object-cover ${className}`}
    />
  );
}
