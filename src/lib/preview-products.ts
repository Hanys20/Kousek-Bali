import type { Product } from "./types";

// Pouze lokální náhled při nedostupné databázi. Ceny a balení vycházejí
// ze zadání projektu; produkční e-shop vždy vyžaduje živá data Supabase.
export const previewProducts: Product[] = [
  {
    slug: "kakao-500g-preview",
    name: "Ceremoniální kakao 500 g",
    price: 1100,
    weightGrams: 500,
    description: "Lokální ukázka produktu pro vývoj při nedostupné databázi.",
    image: "/images/produkt-500g.webp",
  },
  {
    slug: "kakao-1000g-preview",
    name: "Ceremoniální kakao 1 kg",
    price: 2000,
    weightGrams: 1000,
    description: "Lokální ukázka produktu pro vývoj při nedostupné databázi.",
    image: "/images/produkt-1000g.webp",
    featured: true,
  },
];
