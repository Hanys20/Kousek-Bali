import type { Product } from "@/lib/types";
import { PlaceholderPhoto } from "./PlaceholderPhoto";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 ${
        product.featured
          ? "border-turquoise/50 bg-forest-800"
          : "border-cream/10 bg-forest-900"
      }`}
    >
      {product.featured && (
        <span className="tracked-label mb-3 self-start rounded-full bg-turquoise/15 px-3 py-1 text-[10px] font-semibold text-turquoise">
          Doporučeno
        </span>
      )}

      <PlaceholderPhoto
        label={product.name}
        src={product.image || undefined}
        className="aspect-square w-full"
      />

      <div className="mt-4 flex items-center gap-1 text-xs text-terracotta-light">
        {"★".repeat(Math.round(product.rating))}
        {"☆".repeat(5 - Math.round(product.rating))}
      </div>

      <h3 className="mt-2 font-serif text-xl text-cream">{product.name}</h3>
      <p className="mt-1 text-sm text-cream-muted">{product.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-serif text-lg text-cream">
          {product.price.toLocaleString("cs-CZ")} Kč
        </span>
        <button
          aria-label={`Přidat ${product.name} do košíku`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-turquoise text-lg leading-none text-forest-950 transition-colors hover:bg-turquoise-light"
        >
          +
        </button>
      </div>
    </div>
  );
}
