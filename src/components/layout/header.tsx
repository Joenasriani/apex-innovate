import Link from "next/link";

const links = [
  { label: "Company", href: "/#company" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
];
export function Header() {
  return <header className="sticky top-0 z-40 border-b border-[#e0e2e1] bg-[#ffffff]/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-12">
      <Link href="/" aria-label="Apex Innovate FZE LLC home" className="flex min-w-0 items-center gap-3">
        <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#252a2c] font-black text-[#ffffff]">A</span>
        <span className="text-sm font-extrabold tracking-[.06em] text-white">APEX <span className="text-[#252a2c]">INNOVATE</span><span className="block text-[10px] font-medium tracking-[.18em] text-[#596265]">FZE LLC</span></span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {links.map(link=><Link key={link.label} href={link.href} className="text-sm text-[#454b4d] transition-colors hover:text-[#252a2c]">{link.label}</Link>)}
      </nav>
      <Link href="/#contact" className="shrink-0 rounded-md border border-[#252a2c]/65 px-4 py-2.5 text-xs font-semibold text-[#252a2c] transition-colors hover:bg-[#252a2c] hover:text-[#ffffff]">Get in touch ↗</Link>
    </div>
    <nav aria-label="Mobile section navigation" className="flex gap-5 overflow-x-auto border-t border-[#e0e2e1] px-5 py-2.5 md:hidden">
      {links.map(link=><Link key={link.label} href={link.href} className="shrink-0 text-xs text-[#454b4d]">{link.label}</Link>)}
    </nav>
  </header>;
}
