import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Website Terms | Apex Innovate",
  description: "Terms governing use of the Apex Innovate corporate website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <ContentPanel sectionId="terms" title="Website Terms">
      <div className="space-y-8 text-sm leading-7 text-[var(--muted-ink)]">
        <p>Last updated: 25 October 2026</p>
        <section>
          <h2 className="legal-heading">Company and scope</h2>
          <p className="mt-2">This corporate website is presented by <strong>Apex Innovate FZE LLC</strong>, a free-zone entity incorporated in Ajman, United Arab Emirates, under <strong>Ajman NuVentures Centre Free Zone</strong>. This page governs use of the Apex Innovate corporate website only. It does not replace the terms, privacy notices, contracts, or policies of any separate product or project website.</p>
        </section>
        <section>
          <h2 className="legal-heading">About the projects</h2>
          <p className="mt-2">Apex Innovate presents selected initiatives at different stages of development. A project appearing on this website should not be interpreted as a representation that every feature is currently launched, commercially available, individually incorporated, or separately licensed.</p>
          <p className="mt-2"><strong>RoboMarket</strong> concerns an online robotics marketplace and related digital initiatives. Product availability, seller obligations, purchase conditions, warranties, returns, and payments — where applicable — are governed by the relevant marketplace terms and transaction documents.</p>
          <p className="mt-2"><strong>IdeaVent</strong> concerns digital event ideation and planning. Conceptual outputs are not professional engineering, venue approval, safety certification, permits, insurance, procurement, or a commitment to physically deliver an event. Any physical event services require separate arrangements with appropriately authorized providers.</p>
          <p className="mt-2"><strong>Visual Framework</strong> concerns visual structures for organizing concepts and information. Its content does not constitute regulated professional advice, certification, or a guarantee of any particular result.</p>
          <p className="mt-2">Project-specific ownership, participation, partnerships, and contractual roles must be determined by the relevant project documentation; listing a project here does not establish those arrangements.</p>
        </section>
        <section>
          <h2 className="legal-heading">Licensing and regulatory scope</h2>
          <p className="mt-2">Apex Innovate operates subject to its applicable UAE free-zone licence and relevant regulatory requirements. A corporate project description does not establish authorization for a regulated activity or grant a visitor, supplier, or partner any regulatory approval. Where an activity requires an additional licence, permit, or specialist approval, it must be obtained from the competent authority before the activity is undertaken.</p>
        </section>
        <section>
          <h2 className="legal-heading">Informational content, no offer</h2>
          <p className="mt-2">Descriptions, concepts, illustrations, estimated capabilities, and project roadmaps are informational and may change. They do not create an offer, quotation, contract, commitment to deliver, or representation that a product is available for purchase. Binding commercial terms must be agreed separately.</p>
        </section>
        <section>
          <h2 className="legal-heading">Intellectual property</h2>
          <p className="mt-2">Company branding and original content are protected by applicable intellectual-property rights. Referenced third-party trademarks, logos, and material remain the property of their respective rights holders. No licence to reproduce or commercially exploit content is granted merely by viewing this website.</p>
        </section>
        <section>
          <h2 className="legal-heading">External sites and links</h2>
          <p className="mt-2">Links may lead to project platforms or external services with their own operators, terms, and data practices. Review those terms before registering, transacting, or submitting information. A link does not necessarily imply endorsement or a contractual relationship.</p>
        </section>
        <section>
          <h2 className="legal-heading">Liability and applicable rights</h2>
          <p className="mt-2">Although Apex Innovate aims to keep this site accurate, availability and content are not guaranteed to be uninterrupted or error-free. Nothing in these website terms excludes or restricts statutory consumer rights, liability, or obligations where the law does not permit such exclusion. Applicable UAE law and mandatory legal protections continue to apply.</p>
        </section>
        <section>
          <h2 className="legal-heading">Questions</h2>
          <p className="mt-2">For enquiries about this corporate website, the company, or an identified project, use the contact channel published on the Apex Innovate website. Project-specific commercial or privacy requests should be directed to the relevant project channel when one is provided.</p>
        </section>
      </div>
    </ContentPanel>
  );
}
