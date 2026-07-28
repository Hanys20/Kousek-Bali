import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "O Bali",
  description:
    "Odkud pochází naše kakao — balijská čokoládovna Ubud Raw, tradiční zpracování bez pražení a příroda Indonésie.",
};

export default function OBaliPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="O Bali"
        title="Odkud naše kakao pochází"
        description="Podrobnosti o Bali a naší spolupráci s čokoládovnou Ubud Raw připravujeme. Zatím si je můžeš přečíst v sekci Náš příběh."
      />
      <Footer />
    </>
  );
}
