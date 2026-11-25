import type { Metadata } from "next";
import { capabilities } from "@/data/capabilities";
import { companyPositioning } from "@/data/config";
import { ventures, type VentureId } from "@/data/ventures";

/**
 * Shared SEO constants and builders. The homepage HTML route and the React pages
 * both import from here so titles, social metadata and JSON-LD stay consistent.
 */
export const SITE_URL = "https://apexinnovate.ae";
export const SITE_NAME = "Apex Innovate";

/** Approved homepage title and meta description (do not diverge between meta, Open Graph and Twitter). */
export const HOME_TITLE = "Apex Innovate | AI, Technology & Digital Ventures UAE";
export const HOME_DESCRIPTION =
  companyPositioning.description;

/** Branded sharing card: 1200x630, composed from the approved hero artwork and the Oxanium wordmark. */
export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/apex-og.jpg`,
  width: 1200,
  height: 630,
  alt: "apex innovate wordmark beside the copper architectural sculpture, with the line Ideas with forward intent.",
} as const;

/** Metadata for a secondary page: own title, description, canonical, Open Graph and Twitter. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: SOCIAL_IMAGE.url, alt: SOCIAL_IMAGE.alt }],
    },
  };
}

/* ---------- Structured data (one definition, reused everywhere) ---------- */

export const organizationNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Apex Innovate FZE LLC",
  url: `${SITE_URL}/`,
  description: companyPositioning.description,
  address: { "@type": "PostalAddress", addressLocality: "Ajman", addressCountry: "AE" },
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Place", name: "Gulf Cooperation Council" },
  ],
  knowsAbout: [...capabilities.map(c => c.title), "Digital ventures"],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/** Venture ItemList for the homepage, in the order the ventures are displayed. */
export function venturesNode(order: VentureId[]) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#projects`,
    name: "Selected digital ventures",
    itemListElement: order.map((id, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: ventures[id].name,
      description: ventures[id].detail,
      url: ventures[id].url,
    })),
  };
}

/** Serialise a JSON-LD graph safely for inline <script> embedding. */
export function jsonLd(graph: object[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
