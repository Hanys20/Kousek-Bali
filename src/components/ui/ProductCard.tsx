import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { featured } = product;
  // Hover fotka (kakao rozbalené) dodržuje stejný název jako hlavní fotka
  // + příponu -hover — žádné nové pole v databázi není potřeba.
  const hoverImage = product.image.replace(/\.webp$/, "-hover.webp");

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-card border transition-colors ${
        featured
          ? "border-turquoise/40 bg-night-850"
          : "border-cream/10 bg-night-900 hover:border-cream/20"
      }`}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          style={{ objectPosition: product.imagePosition }}
          className="object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        {/* Hover: kakao rozbalené z obalu — plynulý prolínavý přechod, ne tvrdý střih. */}
        <Image
          src={hoverImage}
          alt={`${product.name} — rozbalené kakao`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          style={{ objectPosition: product.imagePosition }}
          className="scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />

        {/*
          Místo hvězdiček hmotnost balení — e-shop zatím nemá skutečné
          recenze a vymyšlené hodnocení by zákazníka klamalo. Světlý podklad
          + tmavý text pro větší důraz, stejná velikost jako badge Doporučeno.
        */}
        <span className="absolute left-3.5 top-3.5 rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold text-night-950">
          {formatWeight(product.weightGrams)}
        </span>

        {featured && (
          <span className="tracked-label absolute right-3.5 top-3.5 rounded-full bg-turquoise px-3.5 py-1.5 text-xs font-bold text-night-950">
            Doporučeno
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-brand text-lg font-bold uppercase leading-snug text-cream">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-cream-muted">{product.description}</p>

        {product.note && (
          <p className="mt-3 text-sm leading-relaxed text-cream-muted">
            {product.note}
          </p>
        )}

        {/* mt-auto drží cenu u spodní hrany, takže ceny všech karet lícují */}
        <div className="mt-auto pt-6">
          <span className="font-serif text-2xl text-turquoise">
            {product.price.toLocaleString("cs-CZ")} Kč
          </span>

          {/* Přidání do košíku napojíme, až bude hotová logika objednávky. */}
          <button
            type="button"
            aria-label={`Přidat ${product.name} do košíku`}
            className="relative z-10 mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-turquoise px-5 py-3 text-sm font-bold text-night-950 transition-colors hover:bg-turquoise-light"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
            Přidat do košíku
          </button>
        </div>
      </div>
    </article>
  );
}

function formatWeight(grams: number) {
  return grams >= 1000
    ? `${(grams / 1000).toLocaleString("cs-CZ")} kg`
    : `${grams} g`;
}
