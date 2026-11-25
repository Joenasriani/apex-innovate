"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isContact = pathname === "/contact" || pathname === "/contact/";
  return (
    <footer className="apx-footer">
      <div className="apx-shell">
        <div className="apx-footer-top">
          <p className="apx-kicker">Apex Innovate FZE LLC</p>
          {isContact ? (
            <Link className="apx-footer-contact" href="/#projects">Explore our projects <span aria-hidden="true">↗</span></Link>
          ) : (
            <Link className="apx-footer-contact" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          )}
          <p className="apx-footer-summary">AI · Technology · Innovation · United Arab Emirates</p>
        </div>
        <div className="apx-footer-bottom">
          <span>Apex Innovate FZE LLC · Ajman NuVentures Centre Free Zone, United Arab Emirates</span>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            {!isContact && <Link href="/contact">Contact</Link>}
          </nav>
        </div>
      </div>
    </footer>
  );
}
