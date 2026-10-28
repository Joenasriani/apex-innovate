import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

type Banner = { cls: string; src: string; href: string; alt: string };
const descriptions: Record<string, { name: string; detail: string }> = {
  "robot-venture": { name: "RoboMarket", detail: "A publicly accessible robotics marketplace website for discovering robots, related products, and suppliers." },
  "event-venture": { name: "IdeaVent", detail: "A platform for developing event concepts, planning experiences, and organizing production requirements." },
  "framework-venture": { name: "Visual Framework", detail: "An interactive visual framework for academic psychology and behavioral analysis, supporting the organization of concepts, mapping of relationships, and exploration of behavioral patterns." },
};

/**
 * JoBranch-only reviewed presentation of the original Astra design.
 * Extracts the approved pixel-identical banner data from the October 25
 * HTML artifact and renders it directly inside the three project articles.
 * Main and the original review artifact remain unchanged.
 */
export async function GET() {
  const original = await readFile(join(process.cwd(), "public", "astra-preview.html"), "utf8");
  const match = original.match(/const banners=(\[[\s\S]*?\]);\s*function apply\(/);
  if (!match) {
    return new Response("Astra banner assets are missing", { status: 500, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  }

  let banners: Banner[];
  try {
    banners = JSON.parse(match[1]) as Banner[];
  } catch {
    return new Response("Invalid banner assets", { status: 500, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  }
  if (banners.length !== 3 || banners.some(b => !descriptions[b.cls] || !b.src.startsWith("data:image/"))) {
    return new Response("Incomplete project artwork", { status: 500, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  }

  let html = original
    .replace(/<style id="apex-curated-banners">[\s\S]*?<\/style>/, "")
    .replace(/<script id="apex-curated-banner-script">[\s\S]*?<\/script>/, "");

  for (const b of banners) {
    const project = descriptions[b.cls];
    const start = html.indexOf('<article class="venture ' + b.cls + '">');
    if (start < 0) return new Response("Missing project section", { status: 500, headers: { "X-Robots-Tag": "noindex, nofollow" } });
    const end = html.indexOf("</article>", start);
    if (end < 0) return new Response("Invalid project section", { status: 500, headers: { "X-Robots-Tag": "noindex, nofollow" } });
    const article = '<article class="venture ' + b.cls + ' reviewed-venture"><div class="reviewed-info"><div class="reviewed-copy"><h3>' + project.name + '</h3><p>' + project.detail + '</p></div><a class="reviewed-link" href="' + b.href + '" target="_blank" rel="noopener noreferrer" aria-label="Visit ' + project.name + ' (opens in new tab)">Visit project <span aria-hidden="true">↗</span></a></div><a class="reviewed-banner" href="' + b.href + '" target="_blank" rel="noopener noreferrer" aria-label="Explore ' + project.name + ' (opens in new tab)"><img src="' + b.src + '" alt="' + b.alt + '" loading="lazy" decoding="async" width="1536" height="512"/></a></article>';
    html = html.slice(0, start) + article + html.slice(end + "</article>".length);
  }

  // Keep legal navigation inside this review deployment; never send
  // reviewers to the older production policies.
  html = html
    .replace(/href="https:\/\/apexinnovate\.ae\/privacy"/g, 'href="/privacy"')
    .replace(/href="https:\/\/apexinnovate\.ae\/terms"/g, 'href="/terms"')
    .replace('Apex Innovate <small>FZE LLC</small><span>United Arab Emirates</span>', 'Apex Innovate <small>FZE LLC</small><span>Ajman NuVentures Centre Free Zone · United Arab Emirates</span>');
  // Replace out-of-date prose in the Astra source while retaining its composition.
  html = html.replace(
    'Apex Innovate supports selected digital ventures and creative technology initiatives. Our projects explore robotics, event creation and visual thinking.',
    'Apex Innovate FZE LLC is a UAE-registered company with licensed activities in e-commerce and marketing management. Alongside these activities, the company develops its own digital projects across robotics, event concepts, and visual thinking. Explore our projects below.'
  );
  // Typeface trial: render the logo with the same actual font as header and hero. Original vector assets remain unchanged.
  html = html.replace(
    '<span class="apex-symbol" aria-hidden="true">A<span>i</span></span>',
    '<span class="apx-type-logo" aria-hidden="true"><span class="apx-code">&lt;/</span><span class="apx-ai">ai</span><span class="apx-code">&gt;</span></span>'
  );
  // Load one real typeface for the monogram, header wordmark and hero.
  html = html.replace("</head>", '<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@600;700;800&display=swap" rel="stylesheet"/></head>');
  // Header-only wordmark treatment. Preserve legal name, metadata and hero.
  html = html.replace(
    /(<header[\s\S]*?<\/header>)/i,
    (header) => header.replace(/APEX\s+INNOVATE/g, "apex innovate")
  );
  // Server-rendered entity relationships; project links are references,
  // not claims of separate legal incorporation or launch status.
  const linkedData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apexinnovate.ae/#organization",
        "name": "Apex Innovate",
        "legalName": "Apex Innovate FZE LLC",
        "url": "https://apexinnovate.ae/",
        "address": {"@type": "PostalAddress", "addressLocality": "Ajman", "addressCountry": "AE"},
        "description": "A UAE-based company developing and managing digital projects across robotics, event planning, and visual technologies."
      },
      {
        "@type": "WebSite",
        "@id": "https://apexinnovate.ae/#website",
        "url": "https://apexinnovate.ae/",
        "name": "Apex Innovate",
        "publisher": {"@id": "https://apexinnovate.ae/#organization"}
      },
      {
        "@type": "ItemList",
        "@id": "https://apexinnovate.ae/#projects",
        "name": "Selected projects",
        "itemListElement": banners.map((b, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": descriptions[b.cls].name,
          "description": descriptions[b.cls].detail,
          "url": b.href
        }))
      }
    ]
  };
  html = html.replace("</head>",
    '<script type="application/ld+json">' + JSON.stringify(linkedData).replace(/</g, "\\u003c") + '</script></head>');
  // A private review preview must not compete with the public company site.
  html = html
    .replace(/<meta name="robots"[^>]*>/gi, "")
    .replace(/<meta name="googlebot"[^>]*>/gi, "")
    .replace(/<link rel="canonical"[^>]*>/gi, "");
  // The registered company name is the sole page-level heading.
  // Keep Astra's original phrase as a quieter editorial subtitle.
  html = html.replace(/<h1 id="hero-title">[\s\S]*?<\/h1>/, '<h1 id="hero-title">apex <span>innovate</span></h1><p class="reviewed-hero-line">Ideas with forward intent.</p>');
  html = html.replace(
    '<p>Business enquiries &amp; project conversations.</p>',
    '<p>Have an idea, concept, or project to discuss? Contact Apex Innovate to explore the possibilities.</p>'
  );
  // One layout scale and one surface system, shared by both appearances.
  const css = `<style id="apex-reviewed-layout">
    @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@600;700;800&display=swap');
    :root{--apx-bg:#f6f3ed;--apx-surface:#f6f3ed;--apx-fg:#272923;--apx-muted:#5c615a;--apx-accent:#966343;--apx-line:rgba(39,41,35,.16);--apx-content:1180px;--apx-gutter:clamp(20px,4vw,56px);--apx-space:clamp(64px,8vw,110px);color-scheme:light}
    *,*::before,*::after{box-sizing:border-box}
    html{background:var(--apx-bg)!important}
    body{margin:0;min-width:0;background:var(--apx-bg)!important;color:var(--apx-fg)!important;font-family:Inter,system-ui,sans-serif;overflow-x:clip}
    /* Ensure inherited dark surfaces cannot override the reviewed light presentation. */
    #main,.hero,.intro.page-width,#projects.page-width{background-color:var(--apx-bg)!important;color:var(--apx-fg)!important}
    .intro.page-width h2,.intro.page-width h2 span,#projects .section-heading h2,#projects .reviewed-copy h3{color:var(--apx-fg)!important}
    .intro.page-width div>p,#projects .reviewed-copy p,#projects .section-heading>span{color:var(--apx-muted)!important}
    #projects .reviewed-link{color:var(--apx-fg)!important}
    .intro.page-width .eyebrow{color:var(--apx-accent)!important}
    .page-width{width:min(var(--apx-content),calc(100% - 2 * var(--apx-gutter)));max-width:none;margin-inline:auto}
    .site-header{height:clamp(82px,9vw,108px);background:var(--apx-bg)!important;color:var(--apx-fg);position:relative;z-index:4}
    .site-header nav{align-items:center;gap:clamp(12px,2vw,30px)}
    .site-header a{color:inherit}
    .apx-type-logo{display:inline-flex;align-items:baseline;white-space:nowrap;font-family:"Oxanium",Inter,system-ui,sans-serif!important;font-size:clamp(29px,3.3vw,43px);font-weight:600;letter-spacing:-.075em;line-height:1;color:var(--apx-fg)}
    .apx-type-logo .apx-ai{color:var(--apx-accent);letter-spacing:-.075em}
    .apx-type-logo .apx-code{color:var(--apx-fg)}
    .site-header .brand-name,.site-header .brand-text,.site-header .wordmark,.site-header a:has(.apx-type-logo){font-family:"Oxanium",Inter,system-ui,sans-serif!important;font-weight:700;letter-spacing:-.045em;text-transform:none!important}
    .site-header .brand-name,.site-header .brand-text,.site-header .wordmark{font-family:"Oxanium",Inter,system-ui,sans-serif!important;font-weight:700;letter-spacing:-.045em;text-transform:none!important}
    .site-header a:has(.apx-type-logo){font-family:"Oxanium",Inter,system-ui,sans-serif!important;font-weight:700;letter-spacing:-.045em;text-transform:none!important}
    .apex-logo-mark{display:inline-flex;align-items:center;width:clamp(62px,8vw,90px);height:auto;flex:none}
    .apex-logo-mark img{display:block;width:100%;height:auto}
    .apex-logo-mark .apex-logo-light{display:block}
    .apex-logo-mark .apex-logo-dark{display:none}
    .hero{background:var(--apx-bg)!important;position:relative;color:var(--apx-fg)!important;min-height:clamp(500px,68vh,740px)}
    .hero-art{display:none!important}
    .hero-shade{display:none!important}
    .hero-content{padding-top:clamp(36px,6vw,70px)}
    .hero #hero-title{text-transform:none!important;font-family:"Oxanium",Inter,system-ui,sans-serif!important;max-width:1100px;font-size:clamp(3.4rem,10vw,9rem);font-weight:700;letter-spacing:-.045em;line-height:1.01;color:var(--apx-fg)}
    .hero #hero-title span{color:var(--apx-accent)}
    .hero .reviewed-hero-line{font-size:clamp(1rem,1.6vw,1.3rem);line-height:1.5;color:var(--apx-fg);margin:20px 0 0;font-weight:400}
    .hero .eyebrow,.hero .hero-bottom,.hero .hero-bottom p,.hero .hero-caption{color:var(--apx-muted)!important}
    .intro.page-width{background:transparent!important;color:var(--apx-fg);padding-block:var(--apx-space);display:grid;grid-template-columns:minmax(130px,1fr) minmax(0,2fr);gap:clamp(28px,5vw,72px)}
    .intro>.eyebrow{color:var(--apx-accent)}
    .intro h2{font-size:clamp(2rem,4vw,3.65rem);line-height:1.12;font-weight:500;letter-spacing:-.047em;margin:0 0 25px;color:var(--apx-fg)}
    .intro h2 span{color:var(--apx-muted)}
    .intro div>p{font-size:clamp(.96rem,1.25vw,1.1rem);line-height:1.48;color:var(--apx-muted);max-width:570px;margin:0}
    #projects.page-width{background:transparent!important;color:var(--apx-fg);padding-bottom:clamp(36px,5vw,70px)}
    #projects .section-heading{padding:20px 0 35px;border-top:1px solid var(--apx-line);margin:0}
    #projects .section-heading h2{font-size:clamp(1.35rem,2.35vw,2rem);line-height:1.2;font-weight:500;letter-spacing:-.035em;color:var(--apx-fg)}
    #projects .section-heading>span{font-size:.7rem;color:var(--apx-muted)}
    #projects .reviewed-venture{display:block!important;position:relative;width:100%;margin:0 0 clamp(30px,4vw,50px);padding:0!important;border:0!important;background:transparent!important;color:var(--apx-fg)}
    #projects .reviewed-info{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:clamp(16px,2vw,25px)}
    #projects .reviewed-copy{max-width:650px;min-width:0}
    #projects .reviewed-copy h3{margin:0 0 8px;font-size:clamp(1.65rem,3vw,2.55rem);font-weight:550;letter-spacing:-.038em;line-height:1.16;color:var(--apx-fg)}
    #projects .reviewed-copy p{max-width:60ch;margin:0;font-size:clamp(.96rem,1.2vw,1.07rem);line-height:1.48;color:var(--apx-muted)}
    #projects .reviewed-link{flex:none;display:inline-flex;gap:.65em;align-items:center;color:var(--apx-fg);font-size:.87rem;font-weight:500;border-bottom:1px solid var(--apx-accent);padding-bottom:6px;text-decoration:none}
    #projects .reviewed-banner{display:block;width:100%;overflow:hidden;background:#12191c;border:1px solid var(--apx-line);border-radius:3px}
    #projects .reviewed-banner img{display:block;width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}
    .site-footer{background:var(--apx-surface)!important;color:var(--apx-fg)!important;margin-top:0;padding-top:clamp(48px,6vw,75px)}
    .site-footer .footer-contact{padding-bottom:clamp(50px,7vw,84px)}
    .site-footer .footer-contact>a{font-size:clamp(2.8rem,5.2vw,4.5rem)!important;letter-spacing:-.045em;line-height:1.08;color:var(--apx-fg)}
    .site-footer .footer-contact>a>span:first-child{color:var(--apx-muted)}
    .site-footer .footer-contact>p:last-child{color:var(--apx-muted);font-size:clamp(.94rem,1.15vw,1.08rem);line-height:1.5;max-width:540px;margin-top:24px}
    .footer-legal{border-color:var(--apx-line);color:var(--apx-muted)}
    .site-footer a{color:inherit}
    @media(max-width:800px){.intro.page-width{grid-template-columns:1fr;gap:22px}.intro>.eyebrow{padding-top:0}}
    @media(max-width:640px){:root{--apx-gutter:20px;--apx-space:48px}.hero #hero-title{font-size:clamp(3rem,11.5vw,5.4rem)}.hero .reviewed-hero-line{font-size:1rem}.intro h2{font-size:clamp(1.8rem,7.8vw,2.4rem);margin-bottom:14px}.intro div>p{font-size:.96rem;line-height:1.45}#projects .section-heading{padding:18px 0 23px}#projects .section-heading h2{font-size:clamp(1.3rem,5vw,1.6rem)}#projects .reviewed-info{align-items:start;flex-direction:column;gap:10px;margin-bottom:15px}#projects .reviewed-copy h3{font-size:clamp(1.45rem,6vw,1.85rem);margin-bottom:6px}#projects .reviewed-copy p{font-size:.91rem;line-height:1.5}#projects .reviewed-link{font-size:.82rem}#projects .reviewed-banner{width:min(88%,360px);max-width:100%;margin-inline:auto}#projects .reviewed-banner img{display:block;width:100%;min-width:0;max-width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}#projects .reviewed-venture{margin-bottom:28px}.site-footer .footer-contact>a{font-size:clamp(2.65rem,10vw,3.7rem)!important}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
    /* Keep mobile title wrapping from the preview QA pass. */
    .hero #hero-title{overflow-wrap:normal;max-width:100%;text-wrap:balance}
    @media(max-width:700px){
      .hero #hero-title{font-size:clamp(3rem,12vw,5rem)!important;line-height:1.04;letter-spacing:-.045em}
      .hero #hero-title span{display:block}
      .hero-content{max-width:100%;min-width:0}
    }

    /* Single quiet surface; all original project banner artwork is preserved. */
    .hero .hero-content,.hero .hero-bottom{color:var(--apx-fg)!important}
    .hero .hero-bottom a,.hero a,.hero .circle{color:var(--apx-fg)!important;border-color:var(--apx-line)!important}
    .hero .reviewed-hero-line{color:var(--apx-muted)!important}
    #projects .reviewed-banner{background:#171c20;border-color:var(--apx-line)}
  </style>`;
  html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow"/>' + css + "</head>");

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "no-store",
    },
  });
}
