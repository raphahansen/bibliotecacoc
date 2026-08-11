export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <h2 className="font-display text-lg text-primary">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
