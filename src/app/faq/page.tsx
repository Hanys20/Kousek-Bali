import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function FaqPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="FAQ"
        title="Časté otázky"
        description="Jak kakao připravit, jaký má efekt na tělo, co je v něm složené a jak probíhá sklizeň a výroba — odpovědi doplníme v dalším kroku."
      />
      <Footer />
    </>
  );
}
