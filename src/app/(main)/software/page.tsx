import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";
import { softwareServices } from "@/data/services";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "AI Software & Interactive Prototypes",
  description:
    "Interactive software, workflow automation, AI assistant prototypes, games, and project-dependent business-system integrations.",
  alternates: { canonical: "/software" },
  openGraph: {
    title: "AI Software & Interactive Prototypes | Apex Innovate",
    description:
      "Interactive software, workflow automation, AI assistant prototypes, games, and project-dependent integrations.",
    url: "https://apexinnovate.ae/software",
    type: "website",
  },
};

export default function SoftwarePage() {
  return (
    <ContentPanel sectionId="transformation" title="AI SOFTWARE APPS">
      <div className="space-y-6">
        <HeroImage src="/images/aisoft.avif" alt="AI Software and interactive prototypes" />
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
