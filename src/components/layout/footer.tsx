import Link from "next/link";
export function Footer() {
  return <footer className="border-t border-white/10 bg-[#15191b] text-[#cbd0d1]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
    <div><p className="text-sm font-extrabold tracking-wide text-white">APEX INNOVATE FZE LLC</p><p className="mt-2 text-xs text-[#c1c7c9]">UAE · Digital products, immersive technology and creative media</p></div>
    <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-xs"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link><Link href="/#contact" className="hover:text-white">Contact</Link></nav>
  </div></footer>;
}
