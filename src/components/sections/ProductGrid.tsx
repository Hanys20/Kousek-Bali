import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionLabel>Naše kakao</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl text-cream">Vyberte si svůj rituál</h2>
        <p className="mt-4 text-cream-muted">
          Ceremoniální kakao ve dvou velikostech a k tomu syrové boby na
          ochutnávku — vše z jedné balijské farmy.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/eshop" variant="secondary">
          Zobrazit celou nabídku
        </Button>
      </div>
    </section>
  );
}
