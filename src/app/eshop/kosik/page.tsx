import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function KosikPage() {
  return (
    <>
      <Header />
      <ComingSoon
        label="Košík"
        title="Košík a checkout"
        description="Checkout s výběrem dopravy a QR platbou přijde po napojení Supabase a e-shopu."
      />
      <Footer />
    </>
  );
}
