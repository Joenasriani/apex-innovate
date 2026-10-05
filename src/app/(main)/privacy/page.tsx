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
    <ContentPanel sectionId="privacy" title="PRIVACY">
      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <div className="space-y-2">
          <p className="font-semibold text-white">Apex Innovate FZE LLC</p>
          <p>Registered in Ajman, United Arab Emirates.</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Information submitted directly
          </h2>
          <p>
            This website does not currently provide user accounts or a contact form.
            If you contact Apex Innovate through WhatsApp, LinkedIn or another linked
            service, the information you send is handled through that service and through
            the resulting communication with Apex Innovate.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Website analytics and advertising
          </h2>
          <p>
            Apex Innovate does not currently use advertising trackers or analytics scripts
            in this website application.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Cookies and technical data
          </h2>
          <p>
            The current website does not intentionally set advertising or analytics cookies.
            Technical request information may be processed by hosting and delivery
            infrastructure required to serve the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Use of information
          </h2>
          <p>
            Information you voluntarily provide to Apex Innovate is used to respond to your
            inquiry, discuss requested work or provide the business communication you asked
            for.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            External services
          </h2>
          <p>
            This website links to external services and websites, including WhatsApp,
            LinkedIn and RoboMarket. Those services operate under their own privacy terms
            and practices.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white">
            Privacy requests
          </h2>
          <p>
            You may contact Apex Innovate through the contact methods published on this
            website regarding personal information that you have directly provided to the
            company.
          </p>
        </section>
      </div>
    </ContentPanel>
  );
}
