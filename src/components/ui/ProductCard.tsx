import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { featured } = product;

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
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />

        {/*
          Místo hvězdiček hmotnost balení — e-shop zatím nemá skutečné
          recenze a vymyšlené hodnocení by zákazníka klamalo.
          Až budou reálné recenze, přijde sem hvězdičkové hodnocení.
        */}
        <span className="absolute left-3.5 top-3.5 rounded-full bg-night-950/80 px-3 py-1.5 text-xs font-bold text-cream backdrop-blur">
          {formatWeight(product.weightGrams)}
        </span>

        {featured && (
          <span className="tracked-label absolute right-3.5 top-3.5 rounded-full bg-turquoise px-3 py-1.5 text-[0.6rem] font-bold text-night-950">
            Doporučeno
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl leading-snug text-cream">
          <Link href={`/eshop/${product.slug}`} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-cream-muted">{product.description}</p>

        {product.note && (
          <p className="mt-3 text-sm leading-relaxed text-cream-muted">
            {product.note}
          </p>
        )}

        {/* mt-auto drží cenu u spodní hrany, takže ceny všech karet lícují */}
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <span className="font-serif text-2xl text-turquoise">
            {product.price.toLocaleString("cs-CZ")} Kč
          </span>

          {/* Přidání do košíku napojíme, až bude hotová logika objednávky. */}
          <button
            type="button"
            aria-label={`Přidat ${product.name} do košíku`}
            className="relative z-10 flex size-11 items-center justify-center rounded-full bg-turquoise text-night-950 transition-colors hover:bg-turquoise-light"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
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
