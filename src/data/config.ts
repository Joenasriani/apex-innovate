import type { CompanyConfig } from "@/types";

/** Approved corporate copy shared by the homepage, SEO and handoff. Do not narrow the company to its current three showcased ventures. */
export const companyPositioning = {
  heroEyebrow: "E-COMMERCE & MARKETING MANAGEMENT · UNITED ARAB EMIRATES",
  heroSubtitle: "Developing and managing businesses, digital platforms, and new ventures.",
  description: "Apex Innovate FZE LLC is a UAE-registered company working in e-commerce and marketing management while developing and managing businesses, digital platforms, and new ventures.",
} as const;

export const siteConfig = {
  title: "Apex Innovate",
  titleTemplate: "%s | Apex Innovate",
  description:
    companyPositioning.description,
  url: "https://apexinnovate.ae",
} as const;

export const companyConfig: CompanyConfig = {
  company: "Apex Innovate FZE LLC",
  links: {
    whatsapp: "https://wa.me/971586749577",
    whatsappLebanon: "https://wa.me/96176713497",
  },
};
