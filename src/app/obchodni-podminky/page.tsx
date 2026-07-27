import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function ObchodniPodminkyPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Právní"
        title="Obchodní podmínky"
        description="Znění obchodních podmínek doplníme před spuštěním e-shopu — jsou povinné pro prodej online."
      />
      <Footer />
    </>
  );
}
