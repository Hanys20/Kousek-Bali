import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // dočasné fotky z fotobanky (Pexels) — nahradit klientovými fotkami později
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
