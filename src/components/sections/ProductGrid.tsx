import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button, ArrowRight } from "@/components/ui/Button";
import { getProducts } from "@/lib/products";

export async function ProductGrid() {
  const products = await getProducts();

  return (
    <section id="kakao" className="bg-night-900/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Naše kakao</SectionLabel>
          <h2 className="mt-5 font-brand text-3xl uppercase leading-tight text-cream sm:text-5xl">
            <span className="font-bold">Vyber si svůj</span>{" "}
            <span className="font-light">kousek Bali</span>
          </h2>
          <p className="mt-5 leading-relaxed text-cream-muted">
            Ceremoniální kakao ve dvou velikostech a k tomu syrové boby na
            ochutnávku — od balijské čokoládovny Ubud Raw.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/eshop" variant="secondary" size="lg">
            Zobrazit celou nabídku
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
