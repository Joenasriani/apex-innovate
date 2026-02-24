"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navSections } from "@/data/navigation";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Circle;
}

/** Shorter labels for the bottom tab bar */
const shortLabels: Record<string, string> = {
  identity: "Identity",
  studio: "Media",
  software: "Software",
  academy: "Academy",
  vr: "VR/AR",
  robomarket: "Robomarket",
  contact: "Contact",
};

export function MobileNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Auto-scroll active tab into view
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const scrollLeft =
        el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 safe-area-bottom">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {navSections.map((section) => {
          const Icon = getIcon(section.icon);
          const active = isActive(section.href);
          const label = shortLabels[section.id] ?? section.title;

          return (
            <Link
              key={section.id}
              ref={active ? activeRef : undefined}
              href={section.href}
              className={`relative flex flex-col items-center justify-center gap-1 min-w-[72px] px-3 py-3 transition-colors ${
                active ? "text-emerald-500" : "text-gray-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span
                className={`text-[9px] font-mono uppercase tracking-tight whitespace-nowrap ${
                  active ? "text-emerald-500 font-bold" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
