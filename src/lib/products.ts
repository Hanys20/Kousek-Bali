import type { Product } from "./types";

/*
 * Placeholder katalog — nahradit daty ze Supabase, až bude napojená databáze.
 * Ceny odpovídají zadání od klienta. Fotky jsou zatím atmosférické snímky
 * od klienta; finální verze potřebuje packshoty tyrkysových obalů.
 */
export const products: Product[] = [
  {
    slug: "ceremonialni-kakao-05kg",
    name: "Ceremoniální kakao 0,5 kg",
    price: 1100,
    weightGrams: 500,
    description: "Pro pravidelný rituál doma.",
    image: "/images/salek-kakaa.webp",
    imagePosition: "left center",
  },
  {
    slug: "ceremonialni-kakao-1kg",
    name: "Ceremoniální kakao 1 kg",
    price: 2000,
    weightGrams: 1000,
    description: "Pro rodinu, přátele nebo kavárnu.",
    note: "Nejvýhodnější balení pro každodenní kakaové chvíle.",
    featured: true,
    image: "/images/hero-jungle.webp",
    imagePosition: "72% center",
  },
  {
    slug: "kakaove-boby",
    name: "Balijské kakaové boby",
    price: 350,
    weightGrams: 250,
    description: "Na ochutnávku i experimenty.",
    image: "/images/z-farmy-k-vam.webp",
    imagePosition: "center",
  },
];
