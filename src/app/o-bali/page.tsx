import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "O Bali",
  description:
    "Odkud pochází naše balijské kakao — malé rodinné farmy, tradiční metody a příroda Indonésie.",
};

export default function OBaliPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="O Bali"
        title="Odkud naše kakao pochází"
        description="Povídání o Bali, malých rodinných farmách a tradičních metodách zpracování kakaa připravujeme."
      />
      <Footer />
    </>
  );
}
