import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

type Banner = { cls: string; src: string; href: string; alt: string };
const descriptions: Record<string, { name: string; detail: string }> = {
  "robot-venture": { name: "RoboMarket", detail: "A UAE-focused online marketplace for robotics and related technologies." },
  "event-venture": { name: "IdeaVent", detail: "A digital platform for developing and organizing event ideas and experiences." },
  "framework-venture": { name: "Visual Framework", detail: "An approach to organizing ideas and complex information through visual structures." },
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
  // A private review preview must not compete with the public company site.
  html = html
    .replace(/<meta name="robots"[^>]*>/gi, "")
    .replace(/<meta name="googlebot"[^>]*>/gi, "")
    .replace(/<link rel="canonical"[^>]*>/gi, "");
  // The registered company name is the sole page-level heading.
  // Keep Astra's original phrase as a quieter editorial subtitle.
  html = html.replace(/<h1 id="hero-title">[\s\S]*?<\/h1>/, '<h1 id="hero-title">APEX <span>INNOVATE</span></h1><p class="reviewed-hero-line">Ideas with forward intent.</p>');
  html = html.replace(
    '<p>Business enquiries &amp; project conversations.</p>',
    '<p>Have an idea, concept, or project to discuss? Contact Apex Innovate to explore the possibilities.</p>'
  );
  const css = `<style id="apex-reviewed-layout">
    /* JoBranch review: coherent Apex typography, spacing and surface scale. */
    :root {
      --apx-bg:#121412;
      --apx-surface:#1e231e;
      --apx-fg:#eeeae1;
      --apx-muted:#b6b9b1;
      --apx-accent:#d6a17a;
      --apx-hairline:rgba(238,234,225,.14);
      --apx-gutter:clamp(20px,4vw,64px);
      --apx-content:1180px;
      --apx-section:clamp(68px,9vw,120px);
      --apx-card-gap:clamp(20px,3vw,36px);
      --apx-font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    }
    html{scroll-behavior:smooth}
    body{background:var(--apx-bg);color:var(--apx-fg);font-family:var(--apx-font);-webkit-font-smoothing:antialiased}
    .page-width{width:min(var(--apx-content),calc(100% - 2 * var(--apx-gutter)));margin-inline:auto;box-sizing:border-box}
    .hero #hero-title{max-width:900px;font-size:clamp(3.4rem,9vw,8rem);font-weight:650;letter-spacing:-.055em;line-height:.99;color:var(--apx-fg)}
    .hero #hero-title span{color:var(--apx-accent)}
    .hero .reviewed-hero-line{font-size:clamp(1rem,1.6vw,1.3rem);line-height:1.5;color:var(--apx-fg);margin-top:clamp(18px,2vw,28px);font-weight:400;letter-spacing:.005em}
    .intro,.ventures-section,#projects,.site-footer{box-sizing:border-box}
    .intro{padding-block:var(--apx-section)}
    .intro h2,.section-heading h2{font-size:clamp(2rem,4vw,3.5rem);line-height:1.13;letter-spacing:-.035em;font-weight:600}
    .intro p,.intro .intro-copy{font-size:clamp(.98rem,1.2vw,1.1rem);line-height:1.65;color:var(--apx-muted)}
    #projects .section-heading{margin-bottom:clamp(28px,4vw,48px)}
    #projects .reviewed-venture{display:block!important;position:relative;box-sizing:border-box;width:100%;min-width:0;background:var(--apx-surface)!important;color:var(--apx-fg)!important;border:1px solid var(--apx-hairline)!important;border-radius:3px;padding:clamp(20px,3vw,40px)!important;margin:0 0 var(--apx-card-gap)}
    #projects .reviewed-venture:last-child{margin-bottom:0}
    #projects .reviewed-info{display:flex;align-items:end;justify-content:space-between;gap:24px;min-width:0;margin:0 0 clamp(24px,3vw,36px)}
    #projects .reviewed-copy{min-width:0;max-width:690px}
    #projects .reviewed-copy h3{font-size:clamp(1.65rem,3vw,2.5rem);font-weight:600;letter-spacing:-.035em;line-height:1.15;color:var(--apx-fg);margin:0 0 12px}
    #projects .reviewed-copy p{font-size:clamp(.96rem,1.15vw,1.07rem);font-weight:400;line-height:1.65;color:var(--apx-muted);margin:0;max-width:56ch}
    #projects .reviewed-link{display:inline-flex;flex-shrink:0;align-items:center;gap:.6em;padding-bottom:7px;border-bottom:1px solid var(--apx-accent);color:var(--apx-fg);font-size:.92rem;font-weight:500;line-height:1.4;letter-spacing:0;text-decoration:none}
    #projects .reviewed-link:hover,#projects .reviewed-link:focus-visible{color:var(--apx-accent)}
    #projects .reviewed-banner{display:block;width:100%;max-width:100%;overflow:hidden;border:1px solid var(--apx-hairline);border-radius:2px;background:#101417;text-decoration:none;transition:border-color .18s ease}
    #projects .reviewed-banner:hover{border-color:rgba(238,234,225,.42)}
    #projects .reviewed-banner img{display:block;width:100%;max-width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}
    .site-footer .footer-contact{padding-bottom:clamp(48px,7vw,78px)}
    .site-footer .footer-contact>a{font-size:clamp(2.8rem,5.2vw,4.2rem)!important;line-height:1.08;letter-spacing:-.04em;font-weight:600;max-width:850px}
    .site-footer .footer-contact>p:last-child{font-size:clamp(.98rem,1.18vw,1.06rem);line-height:1.65;max-width:540px;color:var(--apx-muted);margin-top:24px}
    @media(max-width:800px){
      .intro{grid-template-columns:1fr;gap:28px}
      #projects .reviewed-info{align-items:start;flex-direction:column;gap:16px}
    }
    @media(max-width:600px){
      :root{--apx-gutter:20px;--apx-section:64px}
      #projects .reviewed-venture{padding:16px!important}
      #projects .reviewed-info{margin-bottom:20px}
      #projects .reviewed-copy h3{font-size:clamp(1.55rem,7vw,2rem)}
      #projects .reviewed-banner img{min-width:0;max-width:100%;width:100%}
      .site-footer .footer-contact>a{font-size:clamp(2.4rem,10vw,3.3rem)!important}
    }
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}#projects .reviewed-banner{transition:none}}
  </style>`;
  html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow"/>' + css + "</head>");

  // Compact presentation-only appearance switch. Artwork is intentionally unchanged.
  const themeCss = `<style id="apex-theme-toggle">
    :root{color-scheme:dark}
    html[data-apx-theme="light"]{color-scheme:light;--apx-bg:#f5f2ec;--apx-surface:#fffefa;--apx-fg:#252722;--apx-muted:#565c55;--apx-accent:#995e3f;--apx-hairline:rgba(38,39,33,.17)}
    html[data-apx-theme="light"] body,
    html[data-apx-theme="light"] .intro,
    html[data-apx-theme="light"] #projects,
    html[data-apx-theme="light"] .site-footer{background:var(--apx-bg)!important;color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .site-header,
    html[data-apx-theme="light"] header{background-color:var(--apx-bg)!important;color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .hero{background-color:#e9e4da;color:var(--apx-fg)}
    html[data-apx-theme="light"] .hero #hero-title,
    html[data-apx-theme="light"] .hero .reviewed-hero-line,
    html[data-apx-theme="light"] .intro h2,
    html[data-apx-theme="light"] .section-heading h2,
    html[data-apx-theme="light"] #projects .reviewed-copy h3{color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .intro p,
    html[data-apx-theme="light"] #projects .reviewed-copy p,
    html[data-apx-theme="light"] .site-footer .footer-contact>p:last-child{color:var(--apx-muted)!important}
    html[data-apx-theme="light"] #projects .reviewed-venture{background:var(--apx-surface)!important;border-color:var(--apx-hairline)!important}
    html[data-apx-theme="light"] #projects .reviewed-link{color:var(--apx-fg)}
    html[data-apx-theme="light"] .site-footer a,
    html[data-apx-theme="light"] .site-header a{color:var(--apx-fg)}
    html[data-apx-theme="light"] .hero::before{opacity:.2}
    #apx-theme-switch{appearance:none;display:inline-grid;place-items:center;flex:none;width:30px;height:30px;padding:0;margin:0 0 0 14px;border:1px solid currentColor;border-radius:50%;background:transparent;color:inherit;opacity:.78;cursor:pointer;vertical-align:middle}
    #apx-theme-switch:hover,#apx-theme-switch:focus-visible{opacity:1;outline-offset:3px}
    #apx-theme-switch svg{display:block;width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    @media(max-width:600px){#apx-theme-switch{width:28px;height:28px;margin-left:8px}}
  </style>`;
  const themeScript = `<script id="apex-theme-behavior">
    (function(){
      var key='apex-review-theme';
      function setTheme(theme){
        document.documentElement.setAttribute('data-apx-theme',theme);
        var button=document.getElementById('apx-theme-switch');
        if(button){
          button.setAttribute('aria-label',theme==='dark'?'Switch to light appearance':'Switch to dark appearance');
          button.setAttribute('title',theme==='dark'?'Light appearance':'Dark appearance');
          button.setAttribute('aria-pressed',String(theme==='light'));
          button.innerHTML=theme==='dark'
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"></path></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"></path></svg>';
        }
      }
      var theme='dark';try{theme=localStorage.getItem(key)==='light'?'light':'dark'}catch(e){}
      setTheme(theme);
      function mount(){
        if(document.getElementById('apx-theme-switch'))return;
        var header=document.querySelector('.site-header')||document.querySelector('header');
        if(!header)return;
        var destination=header.querySelector('nav')||header.querySelector('.header-actions')||header;
        var button=document.createElement('button');
        button.type='button';button.id='apx-theme-switch';
        destination.appendChild(button);
        button.addEventListener('click',function(){
          theme=document.documentElement.getAttribute('data-apx-theme')==='light'?'dark':'light';
          setTheme(theme);try{localStorage.setItem(key,theme)}catch(e){}
        });
        setTheme(theme);
      }
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);
      else mount();
    })();
  </script>`;
  html = html.replace("</head>", themeCss + "</head>");
  html = html.replace("</body>", themeScript + "</body>");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "no-store",
    },
  });
}
