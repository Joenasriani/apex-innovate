import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { SectionHeader } from "@/components/section-header";
import { HeroImage } from "@/components/hero-image";

export const metadata: Metadata = {
  title: "Identity",
  description:
    "Apex Innovate is a UAE-based creative-technology company founded by Joe Nasr, working across XR, AI-assisted creative workflows, interactive products, ecommerce interfaces, media production and technical education.",
};

export default function IdentityPage() {
  return (
    <ContentPanel sectionId="core" title="IDENTITY">
      <div className="space-y-6">
        <HeroImage
          src="/images/identity.avif"
          alt="Apex Innovate creative technology and immersive systems"
          height="h-64"
        />
        <SectionHeader
          label="Creative Technology / UAE"
          title="XR, AI-Assisted Workflows and Interactive Digital Experiences."
          description="Apex Innovate FZE LLC is a UAE-based creative-technology company founded by Joe Nasr. The studio develops and prototypes immersive XR experiences, interactive web and ecommerce interfaces, AI-assisted creative and marketing workflows, media-production systems, and technical learning experiences. Public work is described according to its actual status—production work, prototype, research concept, or experiment—rather than treating every concept as a deployed enterprise system."
        />
        <p className="font-mono text-xs leading-relaxed text-white/55">
          Founder: Joe Nasr · Creative Technologist · XR, AI & Interactive Systems ·{" "}
          <a
            href="https://joe-nasr-signals.vercel.app/v2/"
            className="underline underline-offset-4 hover:text-white"
          >
            identity
          </a>
        </p>
      </div>
    </ContentPanel>
  );
}
