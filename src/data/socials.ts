import type { SocialLink } from "@/types";
import { companyConfig } from "./config";

const l = companyConfig.links;

export const questEcosystemLinks: SocialLink[] = [
  {
    href: l.questLinkedinGroup,
    icon: "Linkedin",
    label: "LinkedIn Community",
    sublabel: "Connect with XR Pros",
  },
  {
    href: l.questYoutube,
    icon: "Youtube",
    label: "YouTube Channel",
    sublabel: "XR Reviews & Guides",
  },
  {
    href: l.questTiktok,
    icon: "Music2",
    label: "TikTok Feed",
    sublabel: "Short-form XR Content",
  },
  {
    href: l.questBlog,
    icon: "FileText",
    label: "Technical Blog",
    sublabel: "Deep Dives & Insights",
  },
];
