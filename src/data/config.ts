import type { CompanyConfig } from "@/types";

/** Approved corporate copy shared by the homepage, SEO and handoff. Do not narrow the company to its current three showcased ventures. */
export const companyPositioning = {
  heroEyebrow: "AI · TECHNOLOGY · INNOVATION · UNITED ARAB EMIRATES",
  heroSubtitle: "AI development, software, digital content, marketing, e-commerce and consultancy.",
  description: "Apex Innovate FZE LLC is a UAE-based technology and innovation company specializing in AI development, software development, social media marketing, digital content, e-commerce and AI research and innovation consultancy.",
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
