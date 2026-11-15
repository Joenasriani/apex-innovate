import Link from "next/link";

export function Footer() {
  return (
    <footer className="apx-footer">
      <div className="apx-shell">
        <div className="apx-footer-top">
          <p className="apx-kicker">Apex Innovate FZE LLC</p>
          <Link className="apx-footer-contact" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          <p className="apx-footer-summary">Independent digital ventures · United Arab Emirates</p>
        </div>
        <div className="apx-footer-bottom">
          <span>Apex Innovate FZE LLC · Ajman NuVentures Centre Free Zone, United Arab Emirates</span>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
