import type { Metadata } from "next";
import Image from "next/image";
import { companyConfig } from "@/data/config";

const description = "Apex Innovate FZE LLC is a UAE company working across digital products, immersive technology and creative media.";
export const metadata: Metadata = {
  title: { absolute: "Apex Innovate FZE LLC | Digital Products & Immersive Technology" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Apex Innovate FZE LLC | Digital Products & Immersive Technology", description, url: "https://apexinnovate.ae/", type: "website" }
};
const ventures = [
 { name:"RoboMarket", category:"Robotics marketplace", image:"/images/robomarket.jpg", href:companyConfig.links.robomarket, summary:"A UAE robotics marketplace venture associated with Apex Innovate. Explore the project's current offering directly.", label:"Explore RoboMarket" },
 { name:"QuestRequest VR", category:"Related immersive-media project", image:"/images/vr.webp", href:companyConfig.links.questRequest, summary:"VR media, discovery and experimentation. Listed as a related project; no corporate ownership claim is implied.", label:"View project" }
];
const capabilities = [
 { no:"01", name:"Digital Products", detail:"Focused platforms and interactive product concepts." },
 { no:"02", name:"Immersive Technology", detail:"VR, spatial experiences and experimental interactive work." },
 { no:"03", name:"Creative Technology", detail:"Creative direction and emerging-media production." }
];
export default function CompanyPage(){
return <main>
 <section id="company" className="bg-[#f7f7f5] border-b border-[#d8dbd9]">

  <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-12">
   <div><p className="eyebrow">United Arab Emirates · Innovation company</p>
    <h1 className="mt-7 max-w-3xl text-[clamp(2.8rem,6.4vw,5.6rem)] font-bold leading-[1.03] tracking-[-.055em] text-[#17191a]">Digital ventures. <span className="text-[#555b5e]">Immersive experiences.</span> Creative technology.</h1>
    <p className="mt-7 max-w-xl text-lg leading-8 text-[#51595d]">Apex Innovate FZE LLC develops and supports selected digital products, immersive experiences and creative-technology initiatives.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="#ventures" className="rounded-md bg-[#202628] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white">Explore our work ↗</a><a href="#contact" className="rounded-md border border-[#b4bbbc] px-6 py-3.5 text-sm font-semibold text-[#202628] hover:border-[#202628]">Business enquiries</a></div>
   </div>
   <div className="relative mx-auto flex min-h-[360px] w-full max-w-[490px] items-center justify-center overflow-hidden rounded-lg border border-[#d4d8d7] bg-[#e9ecea] p-8">
    <div className="relative w-full"><div className="mb-7 h-1 w-14 bg-[#33383a]"/><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#6b7376]">Apex Innovate</p><p className="mt-5 text-[clamp(3rem,7vw,5.4rem)] font-bold leading-[.98] tracking-[-.065em] text-[#202527]">Applied<br/>Ideas.</p><div className="mt-10 border-t border-[#bdc5c6] pt-5 text-sm font-medium text-[#515b5e]">Digital products / Immersive technology / Creative media</div></div>
   </div>
  </div>
 </section>
 <section className="bg-white px-5 py-20 text-[#17191a] sm:px-8 lg:px-12" aria-labelledby="company-heading">
  <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.36fr_1fr]"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#565e61]">01 / Company</p><div><h2 id="company-heading" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">A company defined by the work it can show.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-[#535b5e]">Apex Innovate FZE LLC provides a company structure for selected digital ventures and creative-technology initiatives. Each project is linked to its own source, with relationships presented according to the evidence available.</p></div></div>
 </section>
 <section id="ventures" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-24 sm:px-8 lg:px-12">
  <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">02 / Selected work</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Ventures & projects</h2></div><p className="max-w-xs text-sm leading-6 text-[#586165]">Explore each initiative at its own public destination.</p></div>
  <div className="grid gap-6 md:grid-cols-2">{ventures.map(v=><article key={v.name} className="overflow-hidden rounded-lg border border-[#d8dcda] bg-white">
   <a href={v.href} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e8e7]"><Image src={v.image} alt={v.name+" project preview"} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#30383b]">{v.category}</span></div>
    <div className="p-7"><div className="flex items-center justify-between gap-4"><h3 className="text-2xl font-semibold text-[#151a1c]">{v.name}</h3><span aria-hidden="true" className="text-2xl text-[#30383b]">↗</span></div><p className="mt-3 min-h-18 text-sm leading-7 text-[#596266]">{v.summary}</p><span className="mt-5 inline-block text-sm font-semibold text-[#30383b]">{v.label} →</span></div>
   </a></article>)}</div>
 </section>
 <section id="capabilities" className="scroll-mt-32 bg-[#ecefed] px-5 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl"><p className="eyebrow">03 / Focus areas</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Where ideas become tangible experiences.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{capabilities.map(c=><div key={c.no} className="rounded-lg border border-[#d1d7d5] bg-white p-7"><p className="font-mono text-sm text-[#30383b]">{c.no}</p><h3 className="mt-10 text-xl font-semibold">{c.name}</h3><p className="mt-4 text-sm leading-7 text-[#566064]">{c.detail}</p></div>)}</div></div>
 </section>
 <section id="contact" className="scroll-mt-32 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-lg bg-[#202628] p-8 text-white md:flex-row md:items-end md:justify-between md:p-14"><div><p className="text-xs font-bold uppercase tracking-[.2em]">04 / Contact</p><h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">Have a project or partnership in mind?</h2><p className="mt-5 max-w-lg text-sm leading-7">For business enquiries and project conversations with Apex Innovate FZE LLC.</p></div><a href={companyConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="w-fit shrink-0 rounded-full bg-[#08131c] px-7 py-4 text-sm font-bold text-white hover:bg-[#3d484b]">Start a conversation ↗</a></div></section>
 </main>;
}
