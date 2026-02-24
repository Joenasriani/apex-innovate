import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";
import { softwareServices } from "@/data/services";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "AI Software Apps",
  description:
    "Custom AI applications and automation tools — interactive games, workflow automation, smart chat systems, and enterprise integration.",
};

export default function SoftwarePage() {
  return (
    <ContentPanel sectionId="transformation" title="AI SOFTWARE APPS">
      <div className="space-y-6">
        <HeroImage src="/images/aisoft.avif" alt="AI Software" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softwareServices.map((service) => (
            <ServiceCard key={service.type} service={service} />
          ))}
        </div>

        <CtaButton
          href={companyConfig.links.whatsapp}
          icon="Terminal"
          label="Get a Technical Quote"
          variant="outline"
        />
      </div>
    </ContentPanel>
  );
}
