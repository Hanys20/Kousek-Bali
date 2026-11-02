import type { Metadata } from "next";

export { default } from "./layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousekbali.cz"),
  title: "Kousek Bali — náš kakaový web se připravuje",
  description:
    "Připravujeme pro vás web plný kakaových dobrot. Mezitím se podívejte, jak si připravit kakao.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Kousek Bali",
    title: "Připravujeme pro vás web plný kakaových dobrot | Kousek Bali",
    description:
      "Mezitím se podívejte, jak si připravit kakao.",
    images: [{ url: "/images/pripravujeme-fotka.webp", width: 1200, height: 1600, alt: "Společná fotografie u moře" }],
  },
};
