import type { Metadata } from "next";
import Image from "next/image";
import { companyConfig } from "@/data/config";

const description =
  "Apex Innovate FZE LLC is a UAE innovation company developing focused digital products, immersive technology projects and creative direction across emerging media.";

export const metadata: Metadata = {
  title: {
    absolute: "Apex Innovate FZE LLC | UAE Innovation Company",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Apex Innovate FZE LLC | UAE Innovation Company",
    description,
    url: "https://apexinnovate.ae/",
    type: "website",
  },
};

const areas = [
  {
    number: "01",
    title: "Products & Projects",
    description:
      "Focused digital products and platforms developed through APEX, including RoboMarket.ae.",
  },
  {
    number: "02",
    title: "Immersive & AI",
    description:
      "VR, spatial computing and AI-enabled experimentation, including QuestRequest VR.",
  },
  {
    number: "03",
    title: "Creative Direction & Emerging Media",
    description:
      "Creative direction and production across evolving visual, interactive and technology-driven media.",
  },
];

const projects = [
  {
    name: "RoboMarket.ae",
    category: "Robotics / Digital Product",
    description:
      "A GCC-focused B2B robotics marketplace supporting vendor discovery, use-case evaluation and procurement research.",
    href: companyConfig.links.robomarket,
    image: "/images/robomarket.jpg",
    alt: "RoboMarket robotics marketplace",
  },
  {
    name: "QuestRequest VR",
    category: "VR / Immersive Media",
    description:
      "An immersive-media project focused on VR, spatial experiences and new production workflows across emerging technology.",
    href: companyConfig.links.questRequest,
    image: "/images/vr.webp",
    alt: "QuestRequest VR immersive media",
  },
];

export default function CompanyPage() {
  return (
    <main>
      <section
        id="company"
        className="mx-auto grid min-h-[76vh] max-w-[1500px] grid-cols-1 content-between px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24 lg:grid-cols-12 lg:px-12 xl:px-16"
      >
        <div className="lg:col-span-8">
          <p className="eyebrow">APEX INNOVATE FZE LLC · UNITED ARAB EMIRATES</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(4.1rem,11vw,10.5rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-[var(--ink)]">
            Apex
            <br />
            Innovate
          </h1>
        </div>

        <div className="mt-16 border-t border-[var(--line)] pt-6 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
          <p className="max-w-xl text-xl font-medium leading-snug tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">
            An independent innovation company developing focused products,
            immersive experiences and emerging media.
          </p>
          <p className="mt-5 max-w-lg text-sm leading-6 text-[var(--muted-ink)]">
            Based in the UAE, APEX INNOVATE develops and supports selected
            technology initiatives across robotics, immersive technology and
            creative media.
          </p>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-2)]">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12 lg:px-12 xl:px-16">
          <div className="lg:col-span-3">
            <p className="eyebrow">Company</p>
          </div>
          <div className="mt-8 lg:col-span-7 lg:col-start-5 lg:mt-0">
            <p className="text-[clamp(1.7rem,3.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--ink)]">
              APEX INNOVATE is the company behind selected products, projects
              and creative-technology initiatives.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted-ink)]">
              The company provides a focused structure for developing,
              operating and presenting work across digital products, immersive
              technology and emerging media.
            </p>
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Areas</p>
          </div>
          <div className="mt-10 lg:col-span-9 lg:mt-0">
            {areas.map((area) => (
              <div
                key={area.number}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[var(--line)] py-7 md:grid-cols-12 md:gap-6 md:py-9"
              >
                <p className="font-mono text-xs text-[var(--accent)] md:col-span-1">
                  {area.number}
                </p>
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-[var(--ink)] md:col-span-5 md:text-3xl">
                  {area.title}
                </h2>
                <p className="col-start-2 mt-3 max-w-xl text-sm leading-6 text-[var(--muted-ink)] md:col-span-5 md:col-start-auto md:mt-0">
                  {area.description}
                </p>
              </div>
            ))}
            <div className="border-t border-[var(--line)]" />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-[var(--line)] bg-[var(--paper-2)]"
      >
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">Selected Projects</p>
            </div>
            <div className="mt-10 grid gap-14 lg:col-span-9 lg:mt-0 lg:grid-cols-2 lg:gap-8">
              {projects.map((project) => (
                <article key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd8cd]">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 38vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-6 border-t border-[var(--line)] pt-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
                          {project.category}
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[var(--ink)]">
                          {project.name}
                        </h2>
                      </div>
                      <span
                        aria-hidden="true"
                        className="text-xl text-[var(--accent)] transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted-ink)]">
                      {project.description}
                    </p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>
          <div className="mt-10 lg:col-span-9 lg:mt-0">
            <p className="max-w-3xl text-[clamp(2rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--ink)]">
              Business enquiries, partnerships and project conversations.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
              <a
                href={companyConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                LinkedIn ↗
              </a>
              <a
                href={companyConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                WhatsApp ↗
              </a>
            </div>
            <p className="mt-14 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-[var(--muted-ink)]">
              Apex Innovate FZE LLC · Registered in Ajman, United Arab Emirates
              · Incorporated 3 December 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
