import type { Metadata } from "next";

export { default } from "./layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://kousekbali.cz"),
  title: "Kousek Bali — náš kakaový web se připravuje",
  description:
    "Připravujeme pro vás náš šťavnatý kakaový web. Než bude hotový, dopřejte si kousek Bali v hrnku: jednoduchý návod na přípravu kakaa v pěti krocích.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Kousek Bali",
    title: "Něco šťavnatého se chystá. Kousek Bali.",
    description:
      "Náš kakaový web ještě zraje. Mezitím si s námi připravte kakao a dopřejte si chvíli pro sebe.",
    images: [{ url: "/images/salek-kakaa.webp", width: 1915, height: 821, alt: "Šálek kakaa Kousek Bali" }],
  },
};
