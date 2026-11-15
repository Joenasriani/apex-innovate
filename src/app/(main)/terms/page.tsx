import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = {
  title: "Website Terms | Apex Innovate",
  description: "Terms governing use of the Apex Innovate corporate website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <ContentPanel sectionId="terms" title="Website Terms">
      <div className="apx-legal">
        <p>Last updated: 25 October 2026</p>
        <section>
          <h2 className="legal-heading">Company and scope</h2>
          <p className="mt-2">This corporate website is presented by <strong>Apex Innovate FZE LLC</strong>, a free-zone entity incorporated in Ajman, United Arab Emirates, under <strong>Ajman NuVentures Centre Free Zone</strong>. This page governs use of the Apex Innovate corporate website only. It does not replace the terms, privacy notices, contracts, or policies of any separate product or project website.</p>
        </section>
        <section>
          <h2 className="legal-heading">About the projects</h2>
          <p className="mt-2">The projects featured on this website represent selected ventures and initiatives. Their services, availability and commercial arrangements may differ and are subject to information and terms published on their respective platforms.</p>
          <p className="mt-2"><strong>RoboMarket</strong> concerns an online robotics marketplace and related digital initiatives. Product availability, seller obligations, purchase conditions, warranties, returns, and payments — where applicable — are governed by the relevant marketplace terms and transaction documents.</p>
          <p className="mt-2"><strong>IdeaVent</strong> concerns digital event ideation and planning. Information about event concepts and planning does not replace any necessary professional approvals, permits, insurance or agreements with event service providers.</p>
          <p className="mt-2"><strong>Visual Framework</strong> concerns visual structures for organizing concepts and information. Its content does not constitute regulated professional advice, certification, or a guarantee of any particular result.</p>
          <p className="mt-2">References to projects or third parties do not, by themselves, establish a corporate affiliation, partnership or contractual relationship.</p>
        </section>
        <section>
          <h2 className="legal-heading">Licensing and regulatory scope</h2>
          <p className="mt-2">Apex Innovate operates subject to its applicable UAE free-zone licence and relevant regulatory requirements. Information on this website does not constitute proof of licensing or regulatory approval for any activity requiring separate authorization.</p>
        </section>
        <section>
          <h2 className="legal-heading">Informational content, no offer</h2>
          <p className="mt-2">The information presented on this website is for general reference and may change. It does not constitute a binding offer, quotation or commitment to supply a product or service. Any commercial arrangement requires separate agreement.</p>
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
          <p className="mt-2">For enquiries concerning Apex Innovate or this website, please use our Contact page. For a particular project or platform, please use its published contact or support channels.</p>
        </section>
      </div>
    </ContentPanel>
  );
}
