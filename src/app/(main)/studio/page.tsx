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
    "Commercial media production with AI-assisted localization, post-production, animation, 3D visualization and digital production workflows.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "AI Media Production | Apex Innovate",
    description:
      "Commercial media production with AI-assisted localization, post-production, animation, 3D visualization and digital production workflows.",
    url: "https://apexinnovate.ae/studio",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": mediaServices.map((service) => ({
    "@type": "Service",
    name: service.type,
    description: service.desc,
    provider: {
      "@id": "https://apexinnovate.ae/#organization",
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Place", name: "Gulf Cooperation Council" },
    ],
    url: "https://apexinnovate.ae/studio",
  })),
};

export default function StudioPage() {
  return (
    <ContentPanel sectionId="studio" title="AI MEDIA PRODUCTION">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="space-y-6">
        <HeroImage src="/images/aimedia.jpg" alt="AI media production" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediaServices.map((service) => (
            <ServiceCard key={service.type} service={service} />
          ))}
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
