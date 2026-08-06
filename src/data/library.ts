export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  year: number;
  tone: string;
};

export const categories = [
  { name: "Teatro", icon: "Drama", count: 42 },
  { name: "Africanidades", icon: "Globe2", count: 38 },
  { name: "Contos", icon: "BookOpen", count: 96 },
  { name: "Literatura Brasileira", icon: "BookMarked", count: 154 },
  { name: "Fotos e Arte", icon: "Camera", count: 61 },
  { name: "Povos Originários", icon: "Feather", count: 27 },
  { name: "Poesia", icon: "PenLine", count: 84 },
  { name: "Literatura Estrangeira", icon: "Languages", count: 119 },
  { name: "Juvenil", icon: "Backpack", count: 143 },
  { name: "Fantasia para crianças", icon: "Wand2", count: 77 },
  { name: "Cordéis e Fábulas", icon: "Scroll", count: 45 },
  { name: "Infantil", icon: "Baby", count: 168 },
  { name: "Aventura e Ação", icon: "Compass", count: 92 },
  { name: "Cartas", icon: "Mail", count: 19 },
  { name: "Política", icon: "Landmark", count: 53 },
  { name: "Filosofia", icon: "Brain", count: 66 },
  { name: "Biografias", icon: "UserRound", count: 71 },
  { name: "Autoajuda", icon: "Sparkles", count: 48 },
  { name: "Guerra", icon: "Shield", count: 34 },
  { name: "História", icon: "Hourglass", count: 128 },
  { name: "Diários", icon: "NotebookPen", count: 23 },
  { name: "Estudos", icon: "GraduationCap", count: 187 },
  { name: "Turismo", icon: "Plane", count: 31 },
  { name: "Terror e Suspense", icon: "Ghost", count: 58 },
  { name: "YouTube", icon: "Youtube", count: 16 },
  { name: "Sensíveis", icon: "HeartHandshake", count: 22 },
  { name: "Quadrinhos", icon: "Zap", count: 103 },
  { name: "Sustentabilidade", icon: "Leaf", count: 40 },
] as const;

const tones = [
  "oklch(0.32 0.098 262)",
  "oklch(0.42 0.12 254)",
  "oklch(0.38 0.09 200)",
  "oklch(0.45 0.13 30)",
  "oklch(0.4 0.1 150)",
  "oklch(0.35 0.11 300)",
  "oklch(0.5 0.14 70)",
  "oklch(0.3 0.07 240)",
];

const make = (
  list: Array<[string, string, string, number, number]>,
): Book[] =>
  list.map(([title, author, category, rating, year], i) => ({
    id: `${title}-${i}`,
    title,
    author,
    category,
    rating,
    year,
    tone: tones[i % tones.length]!,
  }));

export const featured = make([
  ["Vidas Secas", "Graciliano Ramos", "Literatura Brasileira", 4.8, 1938],
  ["O Cortiço", "Aluísio Azevedo", "Literatura Brasileira", 4.5, 1890],
  ["Quarto de Despejo", "Carolina Maria de Jesus", "Diários", 4.9, 1960],
  ["Torto Arado", "Itamar Vieira Junior", "Literatura Brasileira", 4.9, 2019],
  ["A Cor Púrpura", "Alice Walker", "Literatura Estrangeira", 4.7, 1982],
  ["Auto da Compadecida", "Ariano Suassuna", "Teatro", 4.8, 1955],
  ["Ponciá Vicêncio", "Conceição Evaristo", "Africanidades", 4.7, 2003],
  ["A Metamorfose", "Franz Kafka", "Literatura Estrangeira", 4.6, 1915],
]);

export const novelties = make([
  ["O Avesso da Pele", "Jeferson Tenório", "Literatura Brasileira", 4.8, 2020],
  ["Marte Um", "Gabriel Martins", "Juvenil", 4.4, 2023],
  ["Ideias para Adiar o Fim do Mundo", "Ailton Krenak", "Povos Originários", 4.9, 2019],
  ["Pequeno Manual Antirracista", "Djamila Ribeiro", "Estudos", 4.7, 2019],
  ["A Vegetariana", "Han Kang", "Literatura Estrangeira", 4.3, 2007],
  ["Cordel do Sertão Vivo", "Maria de Fátima", "Cordéis e Fábulas", 4.5, 2024],
  ["Cartas a um Jovem Poeta", "Rainer Maria Rilke", "Cartas", 4.8, 1929],
  ["O Mundo Assombrado", "Carl Sagan", "Estudos", 4.9, 1995],
]);

export const topRated = make([
  ["Dom Casmurro", "Machado de Assis", "Literatura Brasileira", 5.0, 1899],
  ["O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Infantil", 5.0, 1943],
  ["Grande Sertão: Veredas", "João Guimarães Rosa", "Literatura Brasileira", 4.9, 1956],
  ["O Diário de Anne Frank", "Anne Frank", "Diários", 4.9, 1947],
  ["Harry Potter e a Pedra Filosofal", "J. K. Rowling", "Fantasia para crianças", 4.9, 1997],
  ["A Hora da Estrela", "Clarice Lispector", "Literatura Brasileira", 4.8, 1977],
  ["Turma da Mônica: Laços", "Mauricio de Sousa", "Quadrinhos", 4.8, 2013],
  ["O Alienista", "Machado de Assis", "Contos", 4.8, 1882],
]);
