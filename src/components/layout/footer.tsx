import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-[#eee9df]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:px-12 xl:px-16">
        <div>
          <p className="text-sm font-black uppercase tracking-[-0.02em]">
            APEX INNOVATE
          </p>
          <p className="mt-2 text-xs text-white/55">
            Apex Innovate FZE LLC · United Arab Emirates
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs md:justify-end">
          <Link href="/privacy" className="text-white/55 hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="text-white/55 hover:text-white">
            Terms
          </Link>
          <Link href="/#contact" className="text-white/55 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
