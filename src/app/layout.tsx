import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Kousek Bali — ceremoniální kakao přímo z Bali",
  description:
    "Kousek Bali prodává ceremoniální a rituální kakao z Bali (Indonésie) — čisté, ručně zpracované, přímo od balijských farmářů. Objednejte si kousek klidu do svého rituálu.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-950 text-cream">
        {children}
      </body>
    </html>
  );
}
