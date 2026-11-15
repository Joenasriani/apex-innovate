import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact | Apex Innovate",
  description: "Contact Apex Innovate FZE LLC about digital ventures, business enquiries and project conversations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Apex Innovate",
    description: "Get in touch with Apex Innovate for business enquiries and project conversations.",
    url: "https://apexinnovate.ae/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <ContentPanel sectionId="contact" title="Get in touch.">
      <p className="apx-contact-intro">
        Have a business enquiry or a project to discuss? Connect with Apex Innovate through the published channels below.
      </p>
      <div className="apx-contact-grid">
        <a className="apx-contact-card" href={companyConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact Apex Innovate on WhatsApp in a new tab">
          <span className="apx-contact-label">Direct enquiries</span>
          <span className="apx-contact-name">WhatsApp</span>
          <span className="apx-contact-detail">+971 58 674 9577</span>
          <span className="apx-contact-action">Start a conversation <span aria-hidden="true">↗</span></span>
        </a>
        <a className="apx-contact-card" href={companyConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect through LinkedIn in a new tab">
          <span className="apx-contact-label">Professional contact</span>
          <span className="apx-contact-name">LinkedIn</span>
          <span className="apx-contact-detail">Connect through the published professional profile.</span>
          <span className="apx-contact-action">View profile <span aria-hidden="true">↗</span></span>
        </a>
      </div>
      <p className="apx-contact-note">
        This corporate website does not currently offer an on-site contact form. Separate venture platforms may provide their own support and enquiry channels.
      </p>
    </ContentPanel>
  );
}
