import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContentPanel } from "@/components/layout/content-panel";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms",
  description: "Read the terms governing the Apex Innovate FZE LLC corporate website, including its content, linked projects and use of information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPanel sectionId="terms" title="Website Terms">
      <div className="apx-legal">
        <p>Last updated: 25 November 2026</p>
        <section>
          <h2 className="legal-heading">Company and scope</h2>
          <p className="mt-2">This corporate website is presented by <strong>Apex Innovate FZE LLC</strong>, a free-zone entity incorporated in Ajman, United Arab Emirates, under <strong>Ajman NuVentures Centre Free Zone</strong>. These terms govern use of the Apex Innovate corporate website. Each separate product or project website is governed by its own applicable terms, privacy notices, contracts and policies.</p>
        </section>
        <section>
          <h2 className="legal-heading">About the projects</h2>
          <p className="mt-2">The projects featured on this website represent selected ventures and initiatives. Their services, availability and commercial arrangements may differ and are subject to information and terms published on their respective platforms.</p>
          <p className="mt-2"><strong>RoboMarket</strong> is a UAE-first robotics marketplace connecting manufacturers and authorized suppliers with businesses and consumers through a curated robotics store, industry news and a classifieds platform. Product availability, seller obligations, purchase conditions, warranties, returns, and payments — where applicable — are governed by the relevant marketplace terms and transaction documents.</p>
          <p className="mt-2"><strong>IdeaVent</strong> supports event concept development, experience planning and production organization. Event delivery remains subject to necessary professional approvals, permits, insurance and service-provider agreements.</p>
          <p className="mt-2"><strong>Visual Framework</strong> supports academic psychology and behavioral analysis through visual organization of concepts, relationships and behavioral patterns. It is an informational tool rather than a substitute for regulated professional advice or certification, and individual outcomes vary.</p>
          <p className="mt-2">Corporate affiliations, partnerships and contractual relationships are established by their respective agreements, rather than by references on this website.</p>
        </section>
        <section>
          <h2 className="legal-heading">Licensing and regulatory scope</h2>
          <p className="mt-2">Apex Innovate operates subject to its applicable UAE free-zone licence and relevant regulatory requirements. Activities requiring separate authorization are subject to the relevant licensing and regulatory approval requirements; authorization is established by the applicable official records.</p>
        </section>
        <section>
          <h2 className="legal-heading">Commercial arrangements</h2>
          <p className="mt-2">Website information is provided for general reference and may be updated. Binding offers, quotations and commitments to supply products or services are established through separate commercial agreements.</p>
        </section>
        <section>
          <h2 className="legal-heading">Intellectual property</h2>
          <p className="mt-2">Company branding and original content are protected by applicable intellectual-property rights. Referenced third-party trademarks, logos, and material remain the property of their respective rights holders. No licence to reproduce or commercially exploit content is granted merely by viewing this website.</p>
        </section>
        <section>
          <h2 className="legal-heading">External sites and links</h2>
          <p className="mt-2">Links may lead to project platforms or external services with their own operators, terms, and data practices. Review those terms before registering, transacting, or submitting information. Endorsements and contractual relationships are established separately from website links.</p>
        </section>
        <section>
          <h2 className="legal-heading">Liability and applicable rights</h2>
          <p className="mt-2">Apex Innovate aims to maintain accurate, reliable and accessible website content. Availability and accuracy may be affected by technical or operational circumstances; uninterrupted or error-free service is not guaranteed. Nothing in these website terms excludes or restricts statutory consumer rights, liability, or obligations where the law does not permit such exclusion. Applicable UAE law and mandatory legal protections continue to apply.</p>
        </section>
        <section>
          <h2 className="legal-heading">Questions</h2>
          <p className="mt-2">For enquiries concerning Apex Innovate or this website, please use our Contact page. For a particular project or platform, please use its published contact or support channels.</p>
        </section>
      </div>
    </ContentPanel>
  );
}
