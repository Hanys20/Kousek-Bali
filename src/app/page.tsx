import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OriginStory } from "@/components/sections/OriginStory";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BenefitsBar } from "@/components/sections/BenefitsBar";
import { RitualSteps } from "@/components/sections/RitualSteps";
import { Testimonial } from "@/components/sections/Testimonial";
import { StatsBar } from "@/components/sections/StatsBar";

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
        <Testimonial />
        <StatsBar />
      </main>
      <Footer />
    </>
  );
}
