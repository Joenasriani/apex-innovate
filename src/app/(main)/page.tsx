import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { SectionHeader } from "@/components/section-header";
import { HeroImage } from "@/components/hero-image";

const description =
  "Apex Innovate FZE LLC is a UAE creative technology company delivering interactive digital experiences, XR solutions, AI assisted creative workflows, software development, media production and professional training.";

export const metadata: Metadata = {
  title: {
    absolute: "Apex Innovate FZE LLC | Creative Technology Company UAE",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Apex Innovate FZE LLC | Creative Technology Company UAE",
    description,
    url: "https://apexinnovate.ae/",
    type: "website",
  },
};

export default function CompanyPage() {
  return (
    <ContentPanel sectionId="company" title="COMPANY">
      <div className="space-y-6">
        <HeroImage
          src="/images/identity.avif"
          alt="Apex Innovate creative technology and immersive systems"
          height="h-64"
        />
        <SectionHeader
          label="Creative Technology / UAE"
          title="Interactive Experiences, XR, AI Workflows and Digital Production."
          description="Apex Innovate FZE LLC is a UAE creative technology company delivering interactive digital experiences, immersive XR solutions, AI assisted creative and marketing workflows, custom software, media production, and professional training for organizations, brands, and institutions."
        />
        <p className="font-mono text-xs leading-relaxed text-white/55">
          Registered in Ajman, United Arab Emirates · Incorporated 3 December 2025
        </p>
        <p className="font-mono text-xs leading-relaxed text-white/55">
          Founder: Joe Nasr · Creative Director · Digital Experiences · Interactive Prototyping ·{" "}
          <a
            href="https://joe-nasr-signals.vercel.app/"
            className="underline underline-offset-4 hover:text-white"
          >
            profile
          </a>
        </p>
      </div>
    </ContentPanel>
  );
}
