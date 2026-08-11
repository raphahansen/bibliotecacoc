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
  const counts = new Map<string, number>();
  const pageSize = 1000;
  for (let page = 0; ; page += 1) {
    const { data, error } = await supabase
      .from("books")
      .select("category_id")
      .eq("active", true)
      .range(page * pageSize, page * pageSize + pageSize - 1);
    if (error) throw error;
    const rows = (data ?? []) as { category_id: string | null }[];
    for (const row of rows) {
      if (!row.category_id) continue;
      counts.set(row.category_id, (counts.get(row.category_id) ?? 0) + 1);
    }
    if (rows.length < pageSize) break;
  }
  return counts;
}

export async function fetchLibraryStats() {
  const [books, loans, categories] = await Promise.all([
    supabase
      .from("books")
      .select("id", { count: "exact", head: true })
      .eq("active", true),
    supabase.from("loans").select("id", { count: "exact", head: true }),
    supabase
      .from("categories")
      .select("id", { count: "exact", head: true })
      .eq("active", true),
  ]);
  return {
    books: books.count ?? 0,
    loans: loans.count ?? 0,
    categories: categories.count ?? 0,
  };
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
  const { data, error } = await supabase.from("reviews_public").select("book_id, rating");
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
  book_id: string;
  rating: number;
  comment: string;
  created_at: string;
};

export async function fetchBookReviews(bookId: string) {
  const { data, error } = await supabase
    .from("reviews_public")
    .select("id, book_id, rating, comment, created_at")
    .eq("book_id", bookId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ReviewRow[];
}

export async function fetchLatestReviews(limit = 6) {
  const { data, error } = await supabase
    .from("reviews_public")
    .select("id, book_id, rating, comment, created_at")
    .neq("comment", "")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as ReviewRow[];
}

export const levelOptions: { value: string; label: string }[] = [
  { value: "LIVRE", label: "Livre" },
  { value: "EF01 - ENSINO FUNDAMENTAL I", label: "Fundamental I" },
  { value: "EF02 - 6º-7º - ENSINO FUNDAMENTAL II", label: "Fundamental II · 6º-7º" },
  { value: "EF02 - 8º-9º - ENSINO FUNDAMENTAL II", label: "Fundamental II · 8º-9º" },
  { value: "EM - Ensino Médio", label: "Ensino Médio" },
];

export const levelLabel = (value: string) =>
  levelOptions.find((l) => l.value === value)?.label ?? value;

export async function fetchCategoryBySlug(slug: string) {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, icon, active")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return (data as DbCategory | null) ?? null;
}

export type MyReservation = {
  id: string;
  book_id: string;
  status: ReservationStatus;
  queue_position: number | null;
  created_at: string;
};

export async function fetchMyReservations(userId: string) {
  const { data, error } = await supabase
    .from("reservations")
    .select("id, book_id, status, queue_position, created_at")
    .eq("user_id", userId)
    .in("status", ["pendente", "aprovada", "disponivel"]);
  if (error) throw error;
  return (data ?? []) as MyReservation[];
}

/** Cria uma reserva evitando duplicidade para o mesmo leitor/livro.
 *  Se não houver exemplar disponível, entra na fila com queue_position. */
export async function createReservation(userId: string, bookId: string) {
  const { data: existing, error: checkError } = await supabase
    .from("reservations")
    .select("id")
    .eq("user_id", userId)
    .eq("book_id", bookId)
    .in("status", ["pendente", "aprovada", "disponivel"])
    .maybeSingle();
  if (checkError) throw checkError;
  if (existing) throw new Error("Você já tem uma reserva ativa para este título.");

  const { data: book, error: bookError } = await supabase
    .from("books")
    .select("available_copies")
    .eq("id", bookId)
    .single();
  if (bookError) throw bookError;

  const available = (book as { available_copies: number }).available_copies;

  if (available > 0) {
    const { error } = await supabase
      .from("reservations")
      .insert({ user_id: userId, book_id: bookId, status: "pendente" });
    if (error) throw error;
    return;
  }

  const { count, error: countError } = await supabase
    .from("reservations")
    .select("id", { count: "exact", head: true })
    .eq("book_id", bookId)
    .in("status", ["pendente", "aprovada"]);
  if (countError) throw countError;

  const position = (count ?? 0) + 1;
  const { error } = await supabase.from("reservations").insert({
    user_id: userId,
    book_id: bookId,
    status: "pendente",
    queue_position: position,
  });
  if (error) throw error;
}

export async function upsertReview(
  userId: string,
  bookId: string,
  rating: number,
  comment: string,
) {
  const { data: existing, error: checkError } = await supabase
    .from("reviews")
    .select("id")
    .eq("user_id", userId)
    .eq("book_id", bookId)
    .maybeSingle();
  if (checkError) throw checkError;

  if (existing) {
    const { error } = await supabase
      .from("reviews")
      .update({ rating, comment })
      .eq("id", existing.id);
    if (error) throw error;
    return;
  }
  const { error } = await supabase
    .from("reviews")
    .insert({ user_id: userId, book_id: bookId, rating, comment });
  if (error) throw error;
}

export type LatestReview = ReviewRow & {
  books: { id: string; title: string; author: string; available_copies: number } | null;
};

export async function fetchLatestReviewsWithBooks(limit = 6) {
  const { data, error } = await supabase
    .from("reviews_public")
    .select("id, book_id, rating, comment, created_at")
    .neq("comment", "")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  const rows = (data ?? []) as ReviewRow[];
  const books = await fetchBooksByIds([...new Set(rows.map((r) => r.book_id))]);
  const byId = new Map(books.map((b) => [b.id, b]));
  return rows.map((r) => {
    const b = byId.get(r.book_id);
    return {
      ...r,
      books: b
        ? {
            id: b.id,
            title: b.title,
            author: b.author,
            available_copies: b.available_copies,
          }
        : null,
    };
  }) as LatestReview[];
}

export type ReaderOfMonth = {
  user_id: string;
  full_name: string;
  grade: string | null;
  books_read: number;
  month: string;
};

export async function fetchReaderOfMonth(): Promise<ReaderOfMonth | null> {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);
  const { data, error } = await supabase
    .from("loans")
    .select("user_id, profiles(full_name, grade)")
    .gte("loan_date", start.toISOString())
    .in("status", ["devolvido", "ativo", "atrasado"]);
  if (error) throw error;

  const counts = new Map<string, { count: number; full_name: string; grade: string | null }>();
  for (const row of (data ?? []) as unknown as {
    user_id: string;
    profiles: { full_name: string; grade: string | null } | null;
  }[]) {
    const current = counts.get(row.user_id) ?? {
      count: 0,
      full_name: row.profiles?.full_name || "Leitor(a)",
      grade: row.profiles?.grade ?? null,
    };
    current.count += 1;
    counts.set(row.user_id, current);
  }

  let best: ReaderOfMonth | null = null;
  counts.forEach((value, user_id) => {
    if (!best || value.count > best.books_read) {
      best = {
        user_id,
        full_name: value.full_name,
        grade: value.grade,
        books_read: value.count,
        month: start.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }),
      };
    }
  });
  return best;
}
