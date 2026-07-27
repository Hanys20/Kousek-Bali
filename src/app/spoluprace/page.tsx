import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function SpolupracePage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Spolupráce"
        title="Kakao pro kavárny a prodejny"
        description="Poptávkový formulář pro kavárny a prodejny, které chtějí nabízet Kousek Bali, doplníme spolu s e-shopem."
      />
      <Footer />
    </>
  );
}
