import type { Metadata } from "next";
import { MessageSquare, Linkedin } from "lucide-react";
import { ContentPanel } from "@/components/layout/content-panel";
import { companyConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Let\u2019s Talk",
  description:
    "Get in touch with APEX INNOVATE LLC for partnerships, projects, and inquiries.",
};

export default function ContactPage() {
  return (
    <ContentPanel sectionId="about" title="LET&apos;S TALK">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={companyConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all flex flex-col items-center gap-3"
          >
            <MessageSquare className="text-emerald-500 w-6 h-6" />
            <div className="text-center">
              <p className="text-xs font-bold text-white uppercase">
                Direct WhatsApp
              </p>
              <p className="text-[9px] font-mono text-gray-500 tracking-widest">
                +971 58 674 9577
              </p>
            </div>
          </a>
          <a
            href={companyConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex flex-col items-center gap-3"
          >
            <Linkedin className="text-white w-6 h-6" />
            <div className="text-center">
              <p className="text-xs font-bold text-white uppercase">LinkedIn</p>
              <p className="text-[9px] font-mono text-gray-500 tracking-widest">
                Connect with our MD
              </p>
            </div>
          </a>
        </div>
      </div>
    </ContentPanel>
  );
}
