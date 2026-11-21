import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Learn how Apex Innovate FZE LLC handles enquiries, technical information and privacy on its corporate website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <ContentPanel sectionId="privacy" title="Privacy Notice">
      <div className="apx-legal">
        <p>Last updated: 15 November 2026</p>
        <section>
          <h2 className="legal-heading">Who operates this website</h2>
          <p className="mt-2">This notice describes the corporate website operated by <strong>Apex Innovate FZE LLC</strong>, incorporated in Ajman, UAE, under Ajman NuVentures Centre Free Zone. Separate linked project platforms may process information under their own privacy notices.</p>
        </section>
        <section>
          <h2 className="legal-heading">Information you provide</h2>
          <p className="mt-2">When you contact Apex Innovate through WhatsApp or another communication channel, we may receive your name, phone number and the information you include in your message. We use this information to respond to enquiries and manage business correspondence. WhatsApp processes messages and related information under its own privacy terms.</p>
        </section>
        <section>
          <h2 className="legal-heading">Website technology</h2>
          <p className="mt-2">Our hosting and delivery providers may process technical information, including IP addresses, browser details, request times and diagnostic logs, to operate, maintain and secure the website. Fonts are loaded from an external provider, which may receive technical request information.</p>
        </section>
        <section>
          <h2 className="legal-heading">Analytics and marketing</h2>
          <p className="mt-2">The Apex Innovate website does not currently use advertising or behavioural-tracking tools. Hosting providers may maintain operational logs, while external sites and communication services follow their own privacy practices.</p>
        </section>
        <section>
          <h2 className="legal-heading">Purposes and sharing</h2>
          <p className="mt-2">Information may be handled as necessary to respond to enquiries, maintain and protect the website, keep business records and meet applicable legal obligations. Relevant service providers may process information when supplying hosting or communications facilities. Information may also be disclosed where required by law.</p>
        </section>
        <section>
          <h2 className="legal-heading">Retention, security, and requests</h2>
          <p className="mt-2">We retain correspondence and technical records only as reasonably necessary for business purposes and applicable legal obligations. We take appropriate measures to protect information, although no online service can guarantee complete security. To enquire about personal information you have shared with Apex Innovate, or to request correction or deletion where applicable, please contact us through our published contact channels.</p>
        </section>
        <section>
          <h2 className="legal-heading">Linked project websites</h2>
          <p className="mt-2">RoboMarket, IdeaVent and Visual Framework have their own websites and may follow different privacy practices. Please review the applicable privacy notice of each platform before sharing information with it.</p>
        </section>
        <section>
          <h2 className="legal-heading">Updates</h2>
          <p className="mt-2">We may update this notice to reflect changes in our website, services or legal requirements. The latest version will be published here.</p>
        </section>
      </div>
    </ContentPanel>
  );
}
