import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Website terms for Apex Innovate FZE LLC.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Website Terms | Apex Innovate",
    description: "Website terms for Apex Innovate FZE LLC.",
    url: "https://apexinnovate.ae/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <ContentPanel sectionId="terms" title="Website Terms">
      <div className="space-y-8 text-sm leading-7 text-[var(--muted-ink)]">
        <div>
          <p className="font-semibold text-[var(--ink)]">Apex Innovate FZE LLC</p>
          <p>Registered in Ajman, United Arab Emirates.</p>
        </div>

        <section>
          <h2 className="legal-heading">Website purpose</h2>
          <p className="mt-2">
            This website presents Apex Innovate FZE LLC and selected products,
            projects and company initiatives.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Information on this website</h2>
          <p className="mt-2">
            Website content may be updated as company activities and projects
            change. A description on this website does not by itself create a
            contract, final project scope, delivery commitment or technical
            specification.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Project information</h2>
          <p className="mt-2">
            Project descriptions are provided for general information. Product,
            platform and project availability, ownership, commercial terms and
            scope are determined by the relevant project documentation and
            agreements.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Intellectual property</h2>
          <p className="mt-2">
            Apex Innovate branding and original company material remain subject
            to the rights of Apex Innovate FZE LLC. Third-party software,
            trademarks, media, platforms and linked material remain subject to
            the rights and terms of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">External links</h2>
          <p className="mt-2">
            Links to external websites or platforms do not transfer
            responsibility for their content, availability or policies to Apex
            Innovate.
          </p>
        </section>
      </div>
    </ContentPanel>
  );
}
