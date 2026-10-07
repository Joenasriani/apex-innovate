import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/studio", destination: "/#areas", permanent: false },
      { source: "/software", destination: "/#areas", permanent: false },
      { source: "/academy", destination: "/#areas", permanent: false },
      { source: "/vr", destination: "/#areas", permanent: false },
      { source: "/robomarket", destination: "/#projects", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
