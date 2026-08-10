import { supabase } from "@/integrations/supabase/client";

export type AppRole = "aluno" | "professor" | "bibliotecario" | "admin";

export const roleLabels: Record<AppRole, string> = {
  aluno: "Aluno",
  professor: "Professor",
  bibliotecario: "Bibliotecário",
  admin: "Administrador",
};

export type ReservationStatus =
  | "pendente"
  | "aprovada"
  | "disponivel"
  | "concluida"
  | "cancelada"
  | "expirada";

export const reservationLabels: Record<ReservationStatus, string> = {
  pendente: "Pendente",
  aprovada: "Aprovada",
  disponivel: "Disponível para retirada",
  concluida: "Concluída",
  cancelada: "Cancelada",
  expirada: "Expirada",
};

export type LoanStatus = "ativo" | "devolvido" | "atrasado" | "perdido";

export const loanLabels: Record<LoanStatus, string> = {
  ativo: "Ativo",
  devolvido: "Devolvido",
  atrasado: "Atrasado",
  perdido: "Perdido",
};

export type DbBook = {
  id: string;
  legacy_id: string | null;
  title: string;
  author: string;
  publisher: string;
  level: string;
  collection: boolean;
  synopsis: string;
  total_copies: number;
  available_copies: number;
  active: boolean;
  category_id: string | null;
  created_at: string;
};

export type DbCategory = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  active: boolean;
};

export type DbProfile = {
  id: string;
  full_name: string;
  email: string;
  matricula: string | null;
  grade: string | null;
  active: boolean;
  created_at: string;
};

const BOOK_FIELDS =
  "id, legacy_id, title, author, publisher, level, collection, synopsis, total_copies, available_copies, active, category_id, created_at";

/** Tom de cor determinístico usado nas capas geradas por CSS. */
const tones = [
  "oklch(0.42 0.075 42)",
  "oklch(0.47 0.09 30)",
  "oklch(0.38 0.06 60)",
  "oklch(0.5 0.08 20)",
  "oklch(0.44 0.07 80)",
  "oklch(0.36 0.05 40)",
];

export function bookTone(seed: string) {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return tones[sum % tones.length]!;
}

export async function fetchCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, icon, active")
    .order("name");
  if (error) throw error;
  return (data ?? []) as DbCategory[];
}

export async function fetchCategoryCounts() {
  const { data, error } = await supabase
    .from("books")
    .select("category_id")
    .eq("active", true);
  if (error) throw error;
  const counts = new Map<string, number>();
  for (const row of (data ?? []) as { category_id: string | null }[]) {
    if (!row.category_id) continue;
    counts.set(row.category_id, (counts.get(row.category_id) ?? 0) + 1);
  }
  return counts;
}

export type CatalogFilters = {
  q?: string;
  categoryId?: string;
  level?: string;
  publisher?: string;
  onlyCollection?: boolean;
  onlyAvailable?: boolean;
  sort?: "title" | "recent" | "author";
  page?: number;
  pageSize?: number;
};

export async function fetchCatalog(filters: CatalogFilters) {
  const page = filters.page ?? 0;
  const pageSize = filters.pageSize ?? 24;
  let query = supabase
    .from("books")
    .select(BOOK_FIELDS, { count: "exact" })
    .eq("active", true);

  const term = filters.q?.trim();
  if (term) {
    const safe = term.replace(/[,%()]/g, " ");
    query = query.or(
      `title.ilike.%${safe}%,author.ilike.%${safe}%,publisher.ilike.%${safe}%`,
    );
  }
  if (filters.categoryId) query = query.eq("category_id", filters.categoryId);
  if (filters.level) query = query.eq("level", filters.level);
  if (filters.publisher) query = query.eq("publisher", filters.publisher);
  if (filters.onlyCollection) query = query.eq("collection", true);
  if (filters.onlyAvailable) query = query.gt("available_copies", 0);

  if (filters.sort === "recent") query = query.order("created_at", { ascending: false });
  else if (filters.sort === "author") query = query.order("author");
  else query = query.order("title");

  const { data, error, count } = await query.range(
    page * pageSize,
    page * pageSize + pageSize - 1,
  );
  if (error) throw error;
  return { books: (data ?? []) as DbBook[], total: count ?? 0 };
}

export async function fetchPublishers() {
  const { data, error } = await supabase
    .from("books")
    .select("publisher")
    .eq("active", true);
  if (error) throw error;
  const set = new Set(
    ((data ?? []) as { publisher: string }[])
      .map((r) => r.publisher)
      .filter((p) => p && p.trim().length > 1),
  );
  return [...set].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export type RatingStat = { avg: number; count: number };

export async function fetchRatingStats() {
  const { data, error } = await supabase.from("reviews").select("book_id, rating");
  if (error) throw error;
  const acc = new Map<string, { sum: number; count: number }>();
  for (const row of (data ?? []) as { book_id: string; rating: number }[]) {
    const cur = acc.get(row.book_id) ?? { sum: 0, count: 0 };
    cur.sum += row.rating;
    cur.count += 1;
    acc.set(row.book_id, cur);
  }
  const stats = new Map<string, RatingStat>();
  acc.forEach((v, k) => stats.set(k, { avg: v.sum / v.count, count: v.count }));
  return stats;
}

export async function fetchBooksByIds(ids: string[]) {
  if (ids.length === 0) return [];
  const { data, error } = await supabase.from("books").select(BOOK_FIELDS).in("id", ids);
  if (error) throw error;
  return (data ?? []) as DbBook[];
}

export async function fetchHomeSections() {
  const [collection, recent, stats] = await Promise.all([
    supabase
      .from("books")
      .select(BOOK_FIELDS)
      .eq("active", true)
      .eq("collection", true)
      .order("title")
      .limit(14),
    supabase
      .from("books")
      .select(BOOK_FIELDS)
      .eq("active", true)
      .order("created_at", { ascending: false })
      .order("title")
      .limit(14),
    fetchRatingStats(),
  ]);
  if (collection.error) throw collection.error;
  if (recent.error) throw recent.error;

  const ranked = [...stats.entries()]
    .sort((a, b) => b[1].avg - a[1].avg || b[1].count - a[1].count)
    .slice(0, 14)
    .map(([id]) => id);
  const topBooks = await fetchBooksByIds(ranked);
  const order = new Map(ranked.map((id, i) => [id, i]));
  topBooks.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0));

  return {
    featured: (collection.data ?? []) as DbBook[],
    novelties: (recent.data ?? []) as DbBook[],
    topRated: topBooks,
    stats,
  };
}

export type ReviewRow = {
  id: string;
  user_id: string;
  book_id: string;
  rating: number;
  comment: string;
  created_at: string;
};

export async function fetchBookReviews(bookId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("id, user_id, book_id, rating, comment, created_at")
    .eq("book_id", bookId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ReviewRow[];
}

export async function fetchLatestReviews(limit = 6) {
  const { data, error } = await supabase
    .from("reviews")
    .select("id, user_id, book_id, rating, comment, created_at")
    .neq("comment", "")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as ReviewRow[];
}
