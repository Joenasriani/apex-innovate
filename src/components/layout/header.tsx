import Link from "next/link";

const links = [
  { label: "Company", href: "/#company" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
];
export function Header() {
  return <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08131c]/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-12">
      <Link href="/" aria-label="Apex Innovate FZE LLC home" className="flex min-w-0 items-center gap-3">
        <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#6de3df] font-black text-[#08131c]">A</span>
        <span className="text-sm font-extrabold tracking-[.06em] text-white">APEX <span className="text-[#6de3df]">INNOVATE</span><span className="block text-[10px] font-medium tracking-[.18em] text-[#adc1ca]">FZE LLC</span></span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {links.map(link=><Link key={link.label} href={link.href} className="text-sm text-[#c5d6dd] transition-colors hover:text-[#6de3df]">{link.label}</Link>)}
      </nav>
      <Link href="/#contact" className="shrink-0 rounded-full border border-[#6de3df]/65 px-4 py-2.5 text-xs font-semibold text-[#6de3df] transition-colors hover:bg-[#6de3df] hover:text-[#08131c]">Get in touch ↗</Link>
    </div>
    <nav aria-label="Mobile section navigation" className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-2.5 md:hidden">
      {links.map(link=><Link key={link.label} href={link.href} className="shrink-0 text-xs text-[#c5d6dd]">{link.label}</Link>)}
    </nav>
  </header>;
}
