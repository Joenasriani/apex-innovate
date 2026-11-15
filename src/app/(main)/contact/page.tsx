import type { Metadata } from "next";
import { ContentPanel } from "@/components/layout/content-panel";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact | Apex Innovate",
  description: "Contact Apex Innovate FZE LLC for business enquiries, partnerships and new ventures via WhatsApp in the UAE or Lebanon.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Apex Innovate",
    description: "Contact Apex Innovate FZE LLC for business enquiries, partnerships and new ventures.",
    url: "https://apexinnovate.ae/contact",
    type: "website",
  },
};

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
            aria-label={`Message Apex Innovate in ${contact.location} on WhatsApp (opens in a new tab)`}
          >
            <span className="apx-contact-label">{contact.location}</span>
            <span className="apx-contact-name">WhatsApp</span>
            <span className="apx-contact-detail">{contact.number}</span>
            <span className="apx-contact-action">
              Send a message <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
    </ContentPanel>
  );
}
