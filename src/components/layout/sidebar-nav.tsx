"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navSections } from "@/data/navigation";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Circle;
}

export function SidebarNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden lg:block lg:col-span-4 space-y-2">
      <p className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.4em] mb-4 px-4">
        INDEX_MAP
      </p>
      {navSections.map((section) => {
        const Icon = getIcon(section.icon);
        const active = isActive(section.href);

        return (
          <Link
            key={section.id}
            href={section.href}
            className={`w-full text-left p-4 transition-all relative overflow-hidden group border rounded-sm block ${
              active
                ? "bg-emerald-500/10 border-emerald-500/40"
                : "bg-white/5 border-transparent hover:border-white/10"
            }`}
          >
            <div className="flex items-center gap-4 relative z-10">
              <Icon
                className={`w-5 h-5 ${
                  active ? "text-emerald-500" : "text-gray-600"
                }`}
              />
              <h3
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  active ? "text-white" : "text-gray-500"
                }`}
              >
                {section.title}
              </h3>
            </div>
            {active && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
