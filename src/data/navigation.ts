import type { NavSection } from "@/types";

/** Legacy navigation data for retained non-public layout components.
 * Only the currently approved corporate routes are linked.
 */
export const navSections: NavSection[] = [
  {
    id: "company",
    title: "COMPANY",
    icon: "ShieldCheck",
    description: "Apex Innovate FZE LLC corporate homepage.",
    href: "/",
  },
  {
    id: "contact",
    title: "CONTACT",
    icon: "Info",
    description: "Business enquiries and project discussions.",
    href: "/contact",
  },
];
