import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OriginStory } from "@/components/sections/OriginStory";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { RitualSteps } from "@/components/sections/RitualSteps";
import { Faq } from "@/components/sections/Faq";
import { Testimonial } from "@/components/sections/Testimonial";
import { NewsletterBand } from "@/components/sections/NewsletterBand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <OriginStory />
        <ProductGrid />
        <BenefitsBar />
        <RitualSteps />
        <Faq />
        <Testimonial />
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
