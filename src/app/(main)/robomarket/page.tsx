import type { Metadata } from "next";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { SectionHeader } from "@/components/section-header";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Robomarket.ae",
  description:
    "Related venture: a GCC-focused B2B robotics marketplace for curated listings, use-case-driven browsing, and procurement support.",
};

const features = [
  "Curated listings and vendor discovery",
  "Use-case-driven browsing (hospitality, logistics, retail, events, facilities)",
  "Practical decision support for procurement and pilots",
];

export default function RobomarketPage() {
  return (
    <ContentPanel sectionId="robomarket" title="RELATED VENTURE // ROBOMARKET.AE">
      <div className="space-y-6">
        <HeroImage
          src="/images/robomarket.jpg"
          alt="Robomarket"
          height="h-64"
        />

        <SectionHeader
          label="Related Venture / Robotics Marketplace"
          title=""
          description="RoboMarket.ae is a separate GCC-focused B2B robotics marketplace associated with the APEX founder. It helps organizations evaluate and source service and humanoid robots through curated categories and deployment-oriented information. It is presented here as a related venture, not as an APEX service line."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="p-3 border border-white/5 bg-white/5 flex gap-3 items-start"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
              <p className="text-[10px] text-gray-400 font-mono leading-tight tracking-tighter uppercase">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={companyConfig.links.robomarketLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-[9px] uppercase font-mono transition-all"
          >
            <Linkedin className="w-4 h-4 text-emerald-500" /> LinkedIn
          </a>
          <a
            href={companyConfig.links.robomarketX}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-[9px] uppercase font-mono transition-all"
          >
            <Twitter className="w-4 h-4 text-emerald-500" /> X / Twitter
          </a>
        </div>

        <a
          href={companyConfig.links.robomarket}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 flex justify-center items-center gap-2 border border-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-black transition-all"
        >
          <ExternalLink className="w-4 h-4" /> Visit Robomarket.ae
        </a>
      </div>
    </ContentPanel>
  );
}
