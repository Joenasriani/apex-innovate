import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Apex Innovate FZE LLC website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | Apex Innovate",
    description: "Privacy information for the Apex Innovate FZE LLC website.",
    url: "https://apexinnovate.ae/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <ContentPanel sectionId="privacy" title="Privacy">
      <div className="space-y-8 text-sm leading-7 text-[var(--muted-ink)]">
        <div>
          <p className="font-semibold text-[var(--ink)]">Apex Innovate FZE LLC</p>
          <p>Registered in Ajman, United Arab Emirates.</p>
        </div>

        <section>
          <h2 className="legal-heading">Information submitted directly</h2>
          <p className="mt-2">
            This website does not currently provide user accounts or a contact
            form. If you contact Apex Innovate through WhatsApp, LinkedIn or
            another linked service, the information you send is handled through
            that service and through the resulting communication with Apex
            Innovate.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Website analytics and advertising</h2>
          <p className="mt-2">
            Apex Innovate does not currently use advertising trackers or
            analytics scripts in this website application.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Cookies and technical data</h2>
          <p className="mt-2">
            The current website does not intentionally set advertising or
            analytics cookies. Technical request information may be processed by
            hosting and delivery infrastructure required to serve the website.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Use of information</h2>
          <p className="mt-2">
            Information you voluntarily provide to Apex Innovate is used to
            respond to your inquiry and provide the business communication you
            requested.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">External services</h2>
          <p className="mt-2">
            This website links to external services and project websites. Those
            services operate under their own privacy terms and practices.
          </p>
        </section>

        <section>
          <h2 className="legal-heading">Privacy requests</h2>
          <p className="mt-2">
            You may contact Apex Innovate through the contact methods published
            on this website regarding personal information that you have
            directly provided to the company.
          </p>
        </section>
      </div>
    </ContentPanel>
  );
}
