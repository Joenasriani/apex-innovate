"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/navigation";

function getIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>;
  return icons[name] ?? LucideIcons.Circle;
}

export function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const currentSection = navSections.find((s) => isActive(s.href));

  return (
    <>
      {/* Mobile Menu Button - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 safe-area-bottom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {currentSection && (
              <>
                {(() => {
                  const Icon = getIcon(currentSection.icon);
                  return <Icon className="w-5 h-5 text-emerald-500" />;
                })()}
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {currentSection.title}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-gray-500 uppercase">
              Menu
            </span>
            {isOpen ? (
              <X className="w-5 h-5 text-emerald-500" />
            ) : (
              <Menu className="w-5 h-5 text-emerald-500" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/98 backdrop-blur-xl overflow-y-auto"
          >
            <div className="p-4 pt-20 pb-24 space-y-2">
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
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-left p-4 transition-all relative overflow-hidden group border rounded-sm block ${
                      active
                        ? "bg-emerald-500/10 border-emerald-500/40"
                        : "bg-white/5 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <Icon
                        className={`w-6 h-6 ${
                          active ? "text-emerald-500" : "text-gray-600"
                        }`}
                      />
                      <div>
                        <h3
                          className={`text-sm font-bold uppercase tracking-widest ${
                            active ? "text-white" : "text-gray-500"
                          }`}
                        >
                          {section.title}
                        </h3>
                        <p className="text-[10px] text-gray-600 mt-1">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    {active && (
                      <motion.div
                        layoutId="mobile-nav-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
