import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";
import { mediaServices } from "@/data/services";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "AI Media Production",
  description:
    "Infrastructure for AI-augmented cinematography — video localization, post-production automation, digital humans, and more.",
};

export default function StudioPage() {
  return (
    <ContentPanel sectionId="studio" title="AI MEDIA PRODUCTION">
      <div className="space-y-6">
        <HeroImage src="/images/aimedia.jpg" alt="AI Media" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediaServices.map((service) => (
            <ServiceCard key={service.type} service={service} />
          ))}
        </div>

        <div className="p-4 border border-emerald-500/20 bg-emerald-500/5">
          <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-tighter text-center">
            Pricing depends on video length, complexity, and the AI computing
            power required.
          </p>
        </div>

        <CtaButton
          href={companyConfig.links.whatsapp}
          icon="Waves"
          label="Start Your Production"
          variant="solid"
        />
      </div>
    </ContentPanel>
  );
}
