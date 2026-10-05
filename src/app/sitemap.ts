import type { MetadataRoute } from "next";

const baseUrl = "https://apexinnovate.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/studio", priority: 0.9 },
    { path: "/software", priority: 0.9 },
    { path: "/academy", priority: 0.9 },
    { path: "/vr", priority: 0.9 },
    { path: "/robomarket", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
