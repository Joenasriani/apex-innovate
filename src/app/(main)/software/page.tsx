import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { ServiceCard } from "@/components/service-card";
import { CtaButton } from "@/components/cta-button";
import { softwareServices } from "@/data/services";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Software & Automation",
  description:
    "Custom applications, workflow automation, AI assistants, interactive systems, business integrations and digital experiences from Apex Innovate.",
  alternates: { canonical: "/software" },
  openGraph: {
    title: "Software & Automation | Apex Innovate",
    description:
      "Custom applications, workflow automation, AI assistants, interactive systems and business integrations.",
    url: "https://apexinnovate.ae/software",
    type: "website",
  },
};

export default function SoftwarePage() {
  return (
    <ContentPanel sectionId="software" title="SOFTWARE & AUTOMATION">
      <div className="space-y-6">
        <HeroImage src="/images/aisoft.avif" alt="Software and automation services" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softwareServices.map((service) => (
            <ServiceCard key={service.type} service={service} />
          ))}
        </div>
        <CtaButton
          href={companyConfig.links.whatsapp}
          icon="Terminal"
          label="Request a Technical Consultation"
          variant="outline"
        />
      </div>
    </ContentPanel>
  );
}
