import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Serif na velké nadpisy — klid a rituál, nekonkuruje logu.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

// UI a delší texty. Yoshida (brandový font níže) má výrazné „k“ a v malých
// velikostech se mu slévají háčky — na mobilu, odkud chodí většina
// návštěvníků, by to zhoršilo čitelnost, proto tělo textu sází Inter.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Yoshida Sans = font z klientova loga. Drží se pro displejové momenty
// (velká čísla, odznaky), kde jeho charakter vynikne a čitelnost netrpí.
const yoshida = localFont({
  variable: "--font-yoshida",
  display: "swap",
  src: [
    { path: "../../public/fonts/yoshida-sans-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/yoshida-sans-bold.otf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kousekbali.cz"),
  title: {
    default: "Kousek Bali — ceremoniální kakao přímo z Bali",
    template: "%s | Kousek Bali",
  },
  description:
    "Ceremoniální kakao z Bali — čisté, ručně zpracované, přímo od balijských farmářů. Pro každého, kdo chce zpomalit a vychutnat si okamžik.",
  keywords: [
    "kakao",
    "ceremoniální kakao",
    "rituální kakao",
    "balijské kakao",
    "indonéské kakao",
    "Bali",
    "Indonésie",
    "kakao z Bali",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Kousek Bali",
    title: "Kousek Bali — ceremoniální kakao přímo z Bali",
    description:
      "Čisté ceremoniální kakao od balijských farmářů. Ze srdce do srdce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${inter.variable} ${yoshida.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night-950 font-sans text-cream">
        {children}
      </body>
    </html>
  );
}
