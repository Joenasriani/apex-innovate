import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { SectionHeader } from "@/components/section-header";
import { HeroImage } from "@/components/hero-image";

const description =
  "Apex Innovate FZE LLC is a UAE-based creative-technology company focused on interactive digital experiences, XR, AI-assisted creative workflows, rapid prototyping, media production and professional training.";

export const metadata: Metadata = {
  title: {
    absolute: "Apex Innovate FZE LLC | Creative Technology & XR",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Apex Innovate FZE LLC | Creative Technology & XR",
    description,
    url: "https://apexinnovate.ae/",
    type: "website",
  },
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
          description="Apex Innovate FZE LLC is a UAE-based creative-technology company focused on interactive digital experiences, immersive XR, AI-assisted creative and marketing workflows, rapid software prototyping, media production, and professional training. Public work is described according to its actual status—production work, prototype, research concept, or experiment—rather than treating every concept as a deployed enterprise system."
        />
        <p className="font-mono text-xs leading-relaxed text-white/55">
          Founder: Joe Nasr · Creative Director · Digital Experiences · Interactive Prototyping ·{" "}
          <a
            href="https://joe-nasr-signals.vercel.app/"
            className="underline underline-offset-4 hover:text-white"
          >
            identity
          </a>
        </p>
      </div>
    </ContentPanel>
  );
}
