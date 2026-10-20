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
 <section id="company" className="apex-orbit relative isolate overflow-hidden">
  <div className="apex-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true"/>
  <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-12">
   <div><p className="eyebrow">United Arab Emirates · Innovation company</p>
    <h1 className="mt-7 max-w-3xl text-[clamp(2.8rem,6.4vw,5.6rem)] font-bold leading-[1.03] tracking-[-.055em] text-white">Building at the intersection of <span className="text-[#6de3df]">technology</span> and creativity.</h1>
    <p className="mt-7 max-w-xl text-lg leading-8 text-[#c4d7df]">Apex Innovate FZE LLC develops and supports selected digital products, immersive experiences and creative-technology initiatives.</p>
    <div className="mt-9 flex flex-wrap gap-3"><a href="#ventures" className="rounded-full bg-[#6de3df] px-6 py-3.5 text-sm font-bold text-[#061219] transition-colors hover:bg-white">Explore our work ↗</a><a href="#contact" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:border-[#6de3df]">Business enquiries</a></div>
   </div>
   <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center" aria-label="Abstract technology-inspired geometric illustration" role="img">
    <div className="absolute inset-[8%] rounded-full border border-[#6de3df]/35"/>
    <div className="absolute inset-[18%] rounded-full border border-[#6de3df]/50"/>
    <div className="absolute inset-[30%] rotate-45 rounded-[24%] border-2 border-[#6de3df]/70 bg-[#6de3df]/10 shadow-[0_0_110px_rgba(109,227,223,.19)]"/>
    <div className="relative grid h-[38%] w-[38%] place-items-center rounded-[28%] bg-[#6de3df] text-[clamp(4rem,13vw,9rem)] font-black text-[#08131c] shadow-[0_0_90px_rgba(109,227,223,.35)]">A</div>
    <span className="absolute bottom-[8%] rounded-full border border-white/20 bg-[#10222e] px-4 py-2 font-mono text-[10px] tracking-[.15em] text-[#cee2e8]">APEX / INNOVATE / UAE</span>
   </div>
  </div>
 </section>
 <section className="bg-[#f0f5f5] px-5 py-20 text-[#0b2531] sm:px-8 lg:px-12" aria-labelledby="company-heading">
  <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.36fr_1fr]"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#247478]">01 / Company</p><div><h2 id="company-heading" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">A company defined by the work it can show.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-[#435c66]">Apex Innovate FZE LLC provides a company structure for selected digital ventures and creative-technology initiatives. Each project is linked to its own source, with relationships presented according to the evidence available.</p></div></div>
 </section>
 <section id="ventures" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-24 sm:px-8 lg:px-12">
  <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">02 / Selected work</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Ventures & projects</h2></div><p className="max-w-xs text-sm leading-6 text-[#adc1ca]">Explore each initiative at its own public destination.</p></div>
  <div className="grid gap-6 md:grid-cols-2">{ventures.map(v=><article key={v.name} className="overflow-hidden rounded-3xl border border-white/10 bg-[#112734]">
   <a href={v.href} target="_blank" rel="noopener noreferrer" className="group block">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#1a3845]"><Image src={v.image} alt={v.name+" project preview"} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute left-5 top-5 rounded-full bg-[#08131c]/90 px-4 py-2 text-xs font-semibold text-[#6de3df]">{v.category}</span></div>
    <div className="p-7"><div className="flex items-center justify-between gap-4"><h3 className="text-2xl font-semibold text-white">{v.name}</h3><span aria-hidden="true" className="text-2xl text-[#6de3df]">↗</span></div><p className="mt-3 min-h-18 text-sm leading-7 text-[#c1d3db]">{v.summary}</p><span className="mt-5 inline-block text-sm font-semibold text-[#6de3df]">{v.label} →</span></div>
   </a></article>)}</div>
 </section>
 <section id="capabilities" className="scroll-mt-32 bg-[#102530] px-5 py-24 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl"><p className="eyebrow">03 / Focus areas</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Where ideas become tangible experiences.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{capabilities.map(c=><div key={c.no} className="rounded-2xl border border-[#385664] bg-[#16313e] p-7"><p className="font-mono text-sm text-[#6de3df]">{c.no}</p><h3 className="mt-10 text-xl font-semibold">{c.name}</h3><p className="mt-4 text-sm leading-7 text-[#bfd0d7]">{c.detail}</p></div>)}</div></div>
 </section>
 <section id="contact" className="scroll-mt-32 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl bg-[#6de3df] p-8 text-[#0a2530] md:flex-row md:items-end md:justify-between md:p-14"><div><p className="text-xs font-bold uppercase tracking-[.2em]">04 / Contact</p><h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">Have a project or partnership in mind?</h2><p className="mt-5 max-w-lg text-sm leading-7">For business enquiries and project conversations with Apex Innovate FZE LLC.</p></div><a href={companyConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="w-fit shrink-0 rounded-full bg-[#08131c] px-7 py-4 text-sm font-bold text-white hover:bg-[#16434b]">Start a conversation ↗</a></div></section>
 </main>;
}
