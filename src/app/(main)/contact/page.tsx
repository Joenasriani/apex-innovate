import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContentPanel } from "@/components/layout/content-panel";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact Apex Innovate FZE LLC for business enquiries, partnerships and new ventures via WhatsApp in the UAE or Lebanon.",
  path: "/contact",
});

const contacts = [
  {
    location: "United Arab Emirates",
    number: "+971 58 674 9577",
    href: companyConfig.links.whatsapp,
  },
  {
    location: "Lebanon",
    number: "+961 76 713 497",
    href: companyConfig.links.whatsappLebanon,
  },
];

export default function ContactPage() {
  return (
    <ContentPanel sectionId="contact" title="Get in touch.">
      <p className="apx-contact-intro">
        For business enquiries, partnerships and project discussions, contact Apex Innovate directly via WhatsApp.
      </p>
      <div className="apx-contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.location}
            className="apx-contact-card"
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="apx-contact-label">{contact.location}</span>
            <span className="apx-contact-name">WhatsApp</span>
            <span className="apx-contact-detail">{contact.number}</span>
            <span className="apx-contact-action">
              Send a message <span aria-hidden="true">↗</span>
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </ContentPanel>
  );
}
