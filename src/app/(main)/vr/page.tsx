import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { ServiceCard } from "@/components/service-card";
import { SocialLinkCard } from "@/components/social-link-card";
import { CtaButton } from "@/components/cta-button";
import { vrServices } from "@/data/services";
import { questEcosystemLinks } from "@/data/socials";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "VR & AR Solutions",
  description:
    "Immersive experiences for Meta Quest and beyond — corporate training, digital twins, 360 video, branded experiences.",
};

export default function VrPage() {
  return (
    <ContentPanel sectionId="questvr" title="VR & AR SOLUTIONS">
      <div className="space-y-6">
        <HeroImage src="/images/vr.webp" alt="VR Solutions" />

        <div className="border-l-2 border-emerald-500 pl-4 py-2 bg-emerald-500/5 mb-6">
          <h3 className="text-white font-bold uppercase text-xs mb-1">
            CORE VR / XR SERVICES
          </h3>
          <p className="text-[10px] text-gray-400 font-mono tracking-tighter uppercase">
            Immersive Solutions for Training and Marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vrServices.map((service) => (
            <ServiceCard key={service.type} service={service} />
          ))}
        </div>

        <div className="pt-6 space-y-3">
          <p className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.3em]">
            Quest Request Ecosystem
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questEcosystemLinks.map((link) => (
              <SocialLinkCard key={link.label} link={link} />
            ))}
          </div>
        </div>

        <CtaButton
          href={companyConfig.links.whatsapp}
          icon="Eye"
          label="Design Your VR Experience"
          variant="outline"
          className="border-emerald-500/30 bg-emerald-500/5 text-emerald-500 hover:bg-emerald-500 hover:text-black"
        />
      </div>
    </ContentPanel>
  );
}
