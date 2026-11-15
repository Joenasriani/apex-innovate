import Link from "next/link";

const navigation = [
  { label: "Projects", href: "/#projects" },
  { label: "Company", href: "/#company" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="apx-header">
      <div className="apx-shell apx-header-inner">
        <Link href="/" className="apx-brand" aria-label="Apex Innovate homepage">
          <span className="apx-mark" aria-hidden="true">
            <span>{"</"}</span><span className="apx-mark-ai">ai</span><span>{">"}</span>
          </span>
          <span className="apx-wordmark">apex innovate</span>
        </Link>
        <nav className="apx-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
