import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function OchranaUdajuPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Právní"
        title="Ochrana osobních údajů"
        description="Zásady ochrany osobních údajů a cookies doplníme před spuštěním e-shopu — jsou povinné kvůli Google Analytics a zpracování objednávek."
      />
      <Footer />
    </>
  );
}
