import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function NavodPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Jak připravit"
        title="Návod krok za krokem"
        description="Podrobný postup přípravy i video ukázku a tipy na ledové kakao nebo kakao s kořením přidáme spolu s e-shopem."
      />
      <Footer />
    </>
  );
}
