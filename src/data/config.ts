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
  name: "Joseph Ribal Nasr",
  company: "Apex Innovate FZE LLC",
  role: "Creative Director | Digital Experiences | Interactive Prototyping",
  links: {
    linkedin: "https://www.linkedin.com/in/joenasrprofile/",
    github: "https://github.com/Joenasriani",
    whatsapp: "https://wa.me/971586749577",
    whatsappLebanon: "https://wa.me/96176713497",
    robomarket: "https://robomarket.ae",
    robomarketLinkedin: "https://www.linkedin.com/company/robomarket-uae/",
    robomarketX: "https://x.com/robomarketAE",
    apex: "https://apexinnovate.ae",
    questRequest: "https://linktr.ee/questrequestvr",
    questLinkedinGroup: "https://www.linkedin.com/groups/9802744/",
    questYoutube: "https://www.youtube.com/@questrequestvr",
    questTiktok: "https://www.tiktok.com/@questrequestvr",
    questBlog: "https://questrequestvr.blogspot.com",
    tiktok: "https://www.tiktok.com/@joenasr",
    youtube: "https://youtube.com/@joenasr",
  },
};
