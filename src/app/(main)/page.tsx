import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { SectionHeader } from "@/components/section-header";
import { HeroImage } from "@/components/hero-image";

export const metadata: Metadata = {
  title: "Identity",
  description:
    "APEX INNOVATE LLC — UAE-Based AI Systems for Enterprise Transformation and Creative Operations.",
};

export default function IdentityPage() {
  return (
    <ContentPanel sectionId="core" title="IDENTITY">
      <div className="space-y-6">
        <HeroImage
          src="/images/identity.avif"
          alt="Identity"
          height="h-64"
        />
        <SectionHeader
          label="Enterprise Operations"
          title="UAE-Based AI Systems for Enterprise Transformation and Creative Operations."
          description="Based in the United Arab Emirates, APEX INNOVATE LLC develops AI automation systems, immersive XR experiences, and intelligent software platforms that enable enterprises and production studios to scale through data-driven operations and AI-augmented creative workflows. We design technology infrastructure that transforms manual processes into automated, measurable assets—unlocking faster execution, greater experimentation, and sustained operational advantage."
        />
      </div>
    </ContentPanel>
  );
}
