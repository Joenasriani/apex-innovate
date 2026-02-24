import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaVariant = "solid" | "outline";

interface CtaButtonProps {
  href: string;
  icon?: string;
  label: string;
  variant?: CtaVariant;
  className?: string;
}

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.ArrowRight;
}

export function CtaButton({
  href,
  icon,
  label,
  variant = "solid",
  className,
}: CtaButtonProps) {
  const Icon = icon ? getIcon(icon) : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2",
        variant === "solid" &&
          "bg-emerald-500 text-black hover:bg-emerald-400",
        variant === "outline" &&
          "border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10 font-mono tracking-widest",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </a>
  );
}
