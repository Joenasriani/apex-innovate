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
    <ContentPanel sectionId="terms" title="WEBSITE TERMS">
      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <div className="space-y-2">
          <p className="font-semibold text-white">Apex Innovate FZE LLC</p>
          <p>Registered in Ajman, United Arab Emirates.</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Website purpose
          </h2>
          <p>
            This website presents Apex Innovate, its current services, professional training
            and related initiatives.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Information on this website
          </h2>
          <p>
            Website content may be updated as services, training and company activities
            change. A description on this website does not by itself create a contract,
            final project scope, delivery commitment or technical specification.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Training prices
          </h2>
          <p>
            Prices shown on the website are the listed prices for the described training
            offerings. Availability, scheduling, delivery format and any specific
            requirements are confirmed before engagement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Intellectual property
          </h2>
          <p>
            Apex Innovate branding and original company material remain subject to the rights
            of Apex Innovate FZE LLC. Third party software, trademarks, media, platforms and
            linked material remain subject to the rights and terms of their respective
            owners.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            External links
          </h2>
          <p>
            Links to external websites or platforms do not make those services part of Apex
            Innovate and do not transfer responsibility for their content, availability or
            policies to Apex Innovate.
          </p>
        </section>
      </div>
    </ContentPanel>
  );
}
