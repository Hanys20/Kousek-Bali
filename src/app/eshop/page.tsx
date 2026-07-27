import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function EshopPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Kakao"
        title="Výpis produktů"
        description="Plný e-shop s výpisem a detailem produktů stavíme jako další krok po schválení homepage."
      />
      <Footer />
    </>
  );
}
