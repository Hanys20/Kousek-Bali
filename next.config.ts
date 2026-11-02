import type { NextConfig } from "next";

// Veřejný build obsahuje jen soubory *.public.tsx. Rozpracovaný e-shop
// se do něj vůbec nedostane, ani při přímém otevření jeho staré adresy.
// Lokální vývoj zůstává kompletní; veřejnou stránku lze zkoušet zvlášť.
const publicOnly =
  process.env.SITE_MODE === "coming-soon" ||
  (process.env.NODE_ENV === "production" && process.env.SITE_MODE !== "full");

const nextConfig: NextConfig = {
  pageExtensions: publicOnly ? ["public.tsx"] : ["tsx", "ts", "jsx", "js"],
  distDir: publicOnly && process.env.NODE_ENV === "development" ? ".next-public" : ".next",

  /*
   * Cloudflare Pages je statický hosting, takže se web vyexportuje
   * do složky `out/`. Vše, co potřebuje server (objednávky, kontrola
   * plateb, e-maily), běží v Supabase edge funkcích.
   *
   * Nastavení v Cloudflare Pages:
   *   Build command:      npm run build
   *   Build output dir:   out
   */
  output: "export",

  images: {
    // Statický export nemá běžící server, který by obrázky převáděl.
    // Fotky jsou proto předem zmenšené do WebP (viz public/images).
    unoptimized: true,
  },
};

export default nextConfig;
