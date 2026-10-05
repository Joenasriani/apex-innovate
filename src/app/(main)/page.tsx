import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ContentPanel } from "@/components/layout/content-panel";
import { SectionHeader } from "@/components/section-header";
import { HeroImage } from "@/components/hero-image";
import { companyConfig } from "@/data/config";

const description =
  "Apex Innovate is a UAE creative technology company delivering interactive digital experiences, XR solutions, AI assisted creative workflows, software development, media production and professional training.";

export const metadata: Metadata = {
  title: {
    absolute: "Apex Innovate | Creative Technology Company UAE",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Apex Innovate | Creative Technology Company UAE",
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
          description="Apex Innovate is a UAE creative technology company delivering interactive digital experiences, immersive XR solutions, AI assisted creative and marketing workflows, custom software, media production, and professional training for organizations, brands, and institutions."
        />
        <p className="font-mono text-xs leading-relaxed text-white/55">
          Legal entity: Apex Innovate FZE LLC · Registered in Ajman, United Arab Emirates · Incorporated 3 December 2025
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

        <div className="border border-white/10 bg-white/5 p-5 md:p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-500">
              ROBOMARKET.AE
            </p>
            <h2 className="text-lg md:text-xl font-bold text-white">
              B2B Robotics Marketplace
            </h2>
            <p className="text-sm leading-relaxed text-white/60">
              RoboMarket.ae is a GCC focused marketplace for service and humanoid robots, operated through Apex Innovate FZE LLC.
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Browse robots, compare use cases and explore vendor options for commercial deployment.
            </p>
          </div>
          <a
            href={companyConfig.links.robomarket}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 hover:text-white transition-colors"
          >
            Visit RoboMarket.ae <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </ContentPanel>
  );
}
