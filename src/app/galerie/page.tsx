import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function GaleriePage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Galerie"
        title="Kousky Bali v obrazech"
        description="Fotky z farem, sklizně a přípravy kakaa doplníme, jakmile budeme mít od klienta finální snímky."
      />
      <Footer />
    </>
  );
}
