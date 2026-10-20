import type { Metadata } from "next";
import Image from "next/image";
import { companyConfig } from "@/data/config";

const description = "Apex Innovate FZE LLC is a UAE company associated with RoboMarket and work in digital products, immersive technology and creative media.";
export const metadata: Metadata = {
  title: { absolute: "Apex Innovate FZE LLC | Company & Projects" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Apex Innovate FZE LLC | Company & Projects", description, url: "https://apexinnovate.ae/", type: "website" },
};

const projects = [
  { id: "01", name: "RoboMarket", type: "Robotics marketplace", relation: "A venture under Apex Innovate FZE LLC", image: "/images/robomarket.jpg", href: companyConfig.links.robomarket, detail: "Robotics marketplace for the UAE and regional market." },
  { id: "02", name: "QuestRequest VR", type: "VR media", relation: "Related project", image: "/images/vr.webp", href: companyConfig.links.questRequest, detail: "Videos and first impressions covering virtual reality experiences." },
];

const disciplines = ["Digital products", "Immersive technology", "Creative direction & media"];

export default function CompanyPage() {
  return <main className="bg-[#f5f4f0] text-[#212722]">
    <section id="company" className="border-b border-[#aaa99f]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[190px_minmax(0,1fr)]">
        <aside className="hidden border-r border-[#aaa99f] px-7 py-12 lg:block">
          <p className="apex-code">ENTITY / 001</p>
          <p className="mt-4 text-sm leading-6 text-[#595d54]">Company record</p>
        </aside>
        <div className="px-5 pb-20 pt-14 sm:px-10 md:pb-28 md:pt-20 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="apex-code">AJMAN · UNITED ARAB EMIRATES</span>
            <span className="apex-code">FZE LLC</span>
          </div>
          <h1 className="mt-14 max-w-5xl font-semibold leading-[.9] tracking-[-.085em] text-[clamp(3.7rem,10vw,9.6rem)]">Apex<br/>Innovate<span className="text-[#8c9086]">.</span></h1>
          <div className="mt-14 grid gap-7 border-t border-[#aaa99f] pt-7 md:grid-cols-[1fr_1fr]">
            <p className="text-xl font-medium leading-8 sm:text-2xl">Apex Innovate FZE LLC</p>
            <p className="max-w-lg text-base leading-7 text-[#54594f]">A UAE company developing and supporting selected digital products and creative-technology projects. The projects below provide direct examples.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid border-b border-[#aaa99f] lg:grid-cols-[190px_minmax(0,1fr)]">
          <div className="hidden border-r border-[#aaa99f] px-7 py-9 lg:block"><span className="apex-code">INDEX / 002</span></div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 px-5 py-9 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Projects</h2>
            <span className="apex-code">SELECTED / 02</span>
          </div>
        </div>
        {projects.map((p) => <article key={p.id} className="grid border-b border-[#aaa99f] transition-colors hover:bg-[#eeeee8] lg:grid-cols-[190px_minmax(0,1fr)]">
          <div className="hidden border-r border-[#aaa99f] px-7 py-10 lg:block"><span className="apex-code">REF / {p.id}</span></div>
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="grid gap-8 px-5 py-10 sm:px-10 md:grid-cols-[minmax(0,1fr)_minmax(220px,40%)] md:items-center lg:px-16">
            <div>
              <div className="flex items-center gap-4"><span className="apex-code">{p.id} / {p.type}</span><span aria-hidden="true" className="text-xl">↗</span></div>
              <h3 className="mt-7 text-[clamp(2.5rem,5.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-.07em]">{p.name}</h3>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#555b51]">{p.detail}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[.08em] text-[#555b51]">{p.relation}</p>
              <p className="mt-8 text-sm font-semibold underline underline-offset-4">Open project ↗</p>
            </div>
            <div className="relative aspect-[5/3] overflow-hidden border border-[#c5c6bc] bg-[#e4e3da]"><Image src={p.image} alt={p.name + " project image"} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" /></div>
          </a>
        </article>)}
      </div>
    </section>

    <section id="work" className="scroll-mt-24 border-b border-[#aaa99f]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[190px_minmax(0,1fr)]">
        <div className="hidden border-r border-[#aaa99f] px-7 py-10 lg:block"><span className="apex-code">SCOPE / 003</span></div>
        <div className="grid gap-8 px-5 py-14 sm:px-10 md:grid-cols-[1fr_1.5fr] lg:px-16">
          <h2 className="text-3xl font-semibold tracking-[-.05em]">Areas of work</h2>
          <ol className="divide-y divide-[#b5b6ac] border-y border-[#b5b6ac]">{disciplines.map((d,i)=><li key={d} className="flex items-baseline gap-7 py-5"><span className="apex-code">0{i+1}</span><span className="text-lg font-medium">{d}</span></li>)}</ol>
        </div>
      </div>
    </section>

    <section id="contact" className="scroll-mt-24 bg-[#dcded6]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[190px_minmax(0,1fr)]">
        <div className="hidden border-r border-[#aaafa5] px-7 py-12 lg:block"><span className="apex-code">CONTACT / 004</span></div>
        <div className="flex flex-wrap items-end justify-between gap-10 px-5 py-16 sm:px-10 lg:px-16">
          <div><p className="apex-code">BUSINESS ENQUIRIES</p><h2 className="mt-5 text-[clamp(2.1rem,5vw,4.8rem)] font-semibold tracking-[-.07em] leading-tight">Discuss a project.</h2></div>
          <a href={companyConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="border-b-2 border-[#212722] pb-2 text-lg font-semibold">Contact Apex Innovate ↗</a>
        </div>
      </div>
    </section>
  </main>;
}
