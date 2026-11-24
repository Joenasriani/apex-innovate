import type { NextConfig } from "next";

/**
 * Content Security Policy tuned to what the site actually loads:
 *  - Next.js inline hydration scripts and the homepage's inline <style> need 'unsafe-inline'
 *    (nonces would force fully dynamic rendering of every page; not worth it for a static corporate site).
 *  - Oxanium is loaded from Google Fonts (CSS from fonts.googleapis.com, files from fonts.gstatic.com);
 *    Inter / JetBrains Mono are self-hosted by next/font under /_next/static.
 *  - Images are same-origin (/apex-art/*, /apex-og.jpg); data: is allowed for inline SVG/data URIs.
 *  - No forms, no third-party scripts, no embeds: framing, plugins, base-URI changes and form posts are locked down.
 * Strict-Transport-Security is already sent by Vercel for this domain and is intentionally not set here:
 * `includeSubDomains` / `preload` are an owner decision (they affect every subdomain and are hard to undo).
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Retired page artwork is still reachable but must not be indexed as current content.
      { source: "/images/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
};

export default nextConfig;
