import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Jak Kousek Bali pracuje se soubory cookies.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Právní"
        title="Zásady používání cookies"
        description="Znění doplníme před spuštěním e-shopu spolu s cookies lištou — je povinné kvůli Google Analytics."
      />
      <Footer />
    </>
  );
}
