import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/studio", destination: "/#projects", permanent: false },
      { source: "/software", destination: "/#projects", permanent: false },
      { source: "/academy", destination: "/#projects", permanent: false },
      { source: "/vr", destination: "/#projects", permanent: false },
      { source: "/robomarket", destination: "/#projects", permanent: false },
    ];
  },
};

export default nextConfig;
