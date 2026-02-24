import type { SocialLink } from "@/types";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLinkCardProps {
  link: SocialLink;
}

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Link;
}

export function SocialLinkCard({ link }: SocialLinkCardProps) {
  const Icon = getIcon(link.icon);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all text-white group"
    >
      <Icon className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase">{link.label}</span>
        <span className="text-[8px] font-mono text-gray-500">
          {link.sublabel}
        </span>
      </div>
    </a>
  );
}
