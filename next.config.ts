import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
