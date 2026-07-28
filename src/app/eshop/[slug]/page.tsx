import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { getProducts, getProductBySlug } from "@/lib/products";

// Statický export potřebuje vědět dopředu, které detaily produktů vygenerovat.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: "Produkt nenalezen" };

  return {
    title: product.name,
    description: `${product.name} — ${product.description} Ceremoniální kakao z Bali za ${product.price.toLocaleString("cs-CZ")} Kč.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <Header />
      <ComingSoon
        label="Detail produktu"
        title={product.name}
        description={`${product.description} Cena ${product.price.toLocaleString("cs-CZ")} Kč za ${product.weightGrams} g. Plný detail se složením a doporučeným použitím připravujeme.`}
      />
      <Footer />
    </>
  );
}
