import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-3 pb-24 md:px-8 lg:pb-8">
      <div className="border-t border-white/10 pt-4 flex flex-col gap-2 text-[9px] font-mono uppercase tracking-widest text-gray-600">
        <p>Apex Innovate FZE LLC</p>
        <p>Registered in Ajman, United Arab Emirates</p>
        <p>© 2026 Apex Innovate FZE LLC</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
