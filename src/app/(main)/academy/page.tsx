import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { HeroImage } from "@/components/hero-image";
import { CourseCard } from "@/components/course-card";
import { CategoryDivider } from "@/components/category-divider";
import { CtaButton } from "@/components/cta-button";
import { courseCategories } from "@/data/courses";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Professional Training & AI Academy",
  description:
    "Apex Innovate's professional training division for AI, creative technology, spatial computing, media production, and digital workflows.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Professional Training & AI Academy | Apex Innovate",
    description:
      "Professional training in AI, creative technology, spatial computing, media production, and digital workflows.",
    url: "https://apexinnovate.ae/academy",
    type: "website",
  },
};

export default function AcademyPage() {
  const enrollUrl = `${companyConfig.links.whatsapp}?text=${encodeURIComponent(
    "I am interested in enrolling in the AI Academy courses."
  )}`;

  return (
    <ContentPanel sectionId="academy" title="AI ACADEMY">
      <div className="space-y-8">
        <HeroImage src="/images/aiacademy.avif" alt="Apex Innovate professional AI and creative technology training" />
        <p className="text-xs text-gray-400 leading-relaxed">
          The AI Academy is the professional training division of Apex Innovate, covering practical AI, creative technology, spatial computing, media production, and digital workflows.
        </p>
        {courseCategories.map((cat) => (
          <div key={cat.category} className="space-y-4">
            <CategoryDivider label={cat.category} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.courses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </div>
        ))}
        <CtaButton
          href={enrollUrl}
          icon="GraduationCap"
          label="Enroll in the Academy"
          variant="solid"
        />
      </div>
    </ContentPanel>
  );
}
