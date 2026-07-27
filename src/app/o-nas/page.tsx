import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function ONasPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Náš příběh"
        title="Kdo stojí za Kousek Bali"
        description="Připravujeme celý příběh značky — hodnoty, cestu na Bali a proč jsme se rozhodli přinést tohle kakao domů. Zatím na homepage najdete zkrácenou verzi."
      />
      <Footer />
    </>
  );
}
