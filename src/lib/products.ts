import { supabase } from "./supabase";
import type { Product } from "./types";
import type { ProductRow } from "./database.types";

function toProduct(row: ProductRow): Product {
  return {
    slug: row.slug,
    name: row.name,
    price: row.price_czk,
    weightGrams: row.weight_grams,
    description: row.description ?? "",
    note: row.note ?? undefined,
    featured: row.featured,
    image: row.image ?? "",
    imagePosition: row.image_position ?? undefined,
  };
}

/*
 * Web se sestavuje staticky (Cloudflare Pages), takže se katalog načte
 * při buildu. Po změně cen nebo produktů je potřeba spustit nový deploy —
 * na to slouží deploy hook v Cloudflare.
 */
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Nepodařilo se načíst produkty ze Supabase: ${error.message}`);
  }

  return (data ?? []).map(toProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    throw new Error(`Nepodařilo se načíst produkt ${slug}: ${error.message}`);
  }

  return data ? toProduct(data) : null;
}
