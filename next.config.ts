import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/studio", destination: "/#projects", permanent: true },
      { source: "/software", destination: "/#projects", permanent: true },
      { source: "/academy", destination: "/#projects", permanent: true },
      { source: "/vr", destination: "/#projects", permanent: true },
      { source: "/robomarket", destination: "/#projects", permanent: true },
    ];
  },
};

export default nextConfig;
