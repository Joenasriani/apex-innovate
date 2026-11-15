import type { NavSection } from "@/types";

/**
 * LEGACY NAVIGATION DATA. Retained for historical components only.
 * The approved public site uses its own three-link corporate header
 * in src/components/layout/header.tsx (or the homepage route renderer).
 * /studio, /software, /academy, /vr and /robomarket now redirect to /#projects.
 * Do not treat this export as the public navigation source of truth.
 */

export const navSections: NavSection[] = [
  {
    id: "company",
    title: "COMPANY",
    icon: "ShieldCheck",
    description: "Creative technology, digital experiences and innovation capabilities.",
    href: "/",
  },
  {
    id: "studio",
    title: "AI MEDIA PRODUCTION",
    icon: "Video",
    description: "Commercial media production with AI-assisted creative workflows.",
    href: "/studio",
  },
  {
    id: "software",
    title: "SOFTWARE & AUTOMATION",
    icon: "Code2",
    description: "Custom applications, interactive systems and workflow automation.",
    href: "/software",
  },
  {
    id: "academy",
    title: "PROFESSIONAL TRAINING",
    icon: "BookOpen",
    description: "AI, creative technology, media and spatial-computing training.",
    href: "/academy",
  },
  {
    id: "vr",
    title: "XR & IMMERSIVE",
    icon: "Eye",
    description: "VR, AR, immersive media and interactive spatial experiences.",
    href: "/vr",
  },
  {
    id: "robomarket",
    title: "ROBOMARKET.AE",
    icon: "ShoppingCart",
    description: "Related GCC-focused B2B robotics venture.",
    href: "/robomarket",
  },
  {
    id: "contact",
    title: "CONTACT",
    icon: "Info",
    description: "Business inquiries, partnerships and project discussions.",
    href: "/contact",
  },
];
