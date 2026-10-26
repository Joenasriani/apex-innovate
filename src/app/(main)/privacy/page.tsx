import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Privacy Notice | Apex Innovate",
  description: "How the Apex Innovate corporate website handles information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <ContentPanel sectionId="privacy" title="Privacy Notice">
      <div className="space-y-8 text-sm leading-7 text-[var(--muted-ink)]">
        <p>Last updated: 25 October 2026</p>
        <section>
          <h2 className="legal-heading">Who operates this website</h2>
          <p className="mt-2">This notice describes the corporate website operated by <strong>Apex Innovate FZE LLC</strong>, incorporated in Ajman, UAE, under Ajman NuVentures Centre Free Zone. Separate linked project platforms may process information under their own privacy notices.</p>
        </section>
        <section>
          <h2 className="legal-heading">Information you provide</h2>
          <p className="mt-2">The corporate website does not currently offer an on-site account registration or contact form. When you contact the company through an email, messaging platform, or other published channel, the information you send, such as your name, contact details and enquiry, may be used to respond to and manage that correspondence. The external service also processes information according to its own privacy practices.</p>
        </section>
        <section>
          <h2 className="legal-heading">Technical information and preferences</h2>
          <p className="mt-2">Hosting and delivery providers may process technical request information such as IP addresses, request times, browser data and diagnostic logs to serve, maintain and secure the site. The appearance switch stores a light/dark preference in your browser's local storage under the key <code>apex-review-theme</code>; it is not an advertising cookie.</p>
        </section>
        <section>
          <h2 className="legal-heading">Analytics and marketing</h2>
          <p className="mt-2">The current corporate website implementation has no intentionally configured advertising or behavioural-tracking functionality in the reviewed site code. Infrastructure-level logging and any practices of external websites or communications services are separate. This statement should be reassessed if new analytics, contact forms, embedded media, or marketing tools are introduced.</p>
        </section>
        <section>
          <h2 className="legal-heading">Purposes and sharing</h2>
          <p className="mt-2">Information may be handled as necessary to respond to enquiries, maintain and protect the website, keep business records and meet applicable legal obligations. Relevant service providers may process information when supplying hosting or communications facilities. Information may also be disclosed where required by law.</p>
        </section>
        <section>
          <h2 className="legal-heading">Retention, security, and requests</h2>
          <p className="mt-2">Correspondence and technical records should be retained only for periods reasonably required for their purposes and applicable obligations. Appropriate safeguards should be used, although no internet service can guarantee absolute security. You may use the published company contact channels to ask about personal information provided directly to Apex Innovate or request correction or deletion, subject to applicable law and retention requirements.</p>
        </section>
        <section>
          <h2 className="legal-heading">Linked project websites</h2>
          <p className="mt-2">RoboMarket, IdeaVent, and Visual Framework may have different functions, operators, user accounts, payment arrangements, and data practices. This corporate-site notice does not replace their own applicable privacy disclosures. Check each project website before providing data or using a commercial feature.</p>
        </section>
        <section>
          <h2 className="legal-heading">Updates</h2>
          <p className="mt-2">This notice may be revised as the site or its data practices change. Any material new data collection should be documented before the relevant feature goes live.</p>
        </section>
      </div>
    </ContentPanel>
  );
}
