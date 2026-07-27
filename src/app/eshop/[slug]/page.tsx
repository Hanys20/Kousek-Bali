import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function ProductDetailPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Detail produktu"
        title="Detail produktu"
        description="Popis, složení a doporučené použití doplníme spolu s výpisem produktů."
      />
      <Footer />
    </>
  );
}
