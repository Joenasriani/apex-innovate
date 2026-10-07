import Link from "next/link";

const links = [
  { label: "Company", href: "/#company" },
  { label: "Areas", href: "/#areas" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(244,241,234,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className="text-sm font-black uppercase tracking-[-0.025em] text-[var(--ink)]"
          aria-label="Apex Innovate home"
        >
          APEX INNOVATE
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 sm:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[var(--muted-ink)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="sm:hidden text-xs font-medium text-[var(--accent)]"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
