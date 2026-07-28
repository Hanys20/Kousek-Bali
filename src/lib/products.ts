import type { Product } from "./types";
import { stockPhotos } from "./stock-photos";

// Placeholder katalog — nahradit daty ze Supabase, až bude napojená databáze.
export const products: Product[] = [
  {
    slug: "ceremonialni-kakao-05kg",
    name: "Ceremoniální kakao 0,5 kg",
    price: 1100,
    weightGrams: 500,
    description: "Čisté balijské kakao pro pravidelný rituál doma.",
    rating: 5,
    image: stockPhotos.productBloc05,
  },
  {
    slug: "ceremonialni-kakao-1kg",
    name: "Ceremoniální kakao 1 kg",
    price: 2000,
    weightGrams: 1000,
    description: "Větší balení pro rodinu, přátele nebo kavárnu.",
    rating: 5,
    featured: true,
    image: stockPhotos.productBloc1,
  },
  {
    slug: "kakaove-boby",
    name: "Balijské kakaové boby",
    price: 350,
    weightGrams: 250,
    description: "Syrové boby přímo z farmy — na ochutnávku i experimenty.",
    rating: 4,
    image: stockPhotos.productBeans,
  },
];
