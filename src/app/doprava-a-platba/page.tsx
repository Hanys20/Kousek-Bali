import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Doprava a platba",
  description:
    "Zásilkovna, Balíkovna nebo osobní předání v Opavě. Platba QR kódem s variabilním symbolem.",
};

export default function DopravaAPlatbaPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Doprava a platba"
        title="Jak k vám kakao dorazí"
        description="Zásilkovna, Balíkovna nebo osobní předání v Opavě. Podrobnosti k dopravě a platbě QR kódem doplníme spolu s e-shopem."
      />
      <Footer />
    </>
  );
}
