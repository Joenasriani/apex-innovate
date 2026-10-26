import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

type Banner = { cls: string; src: string; href: string; alt: string };
const descriptions: Record<string, { name: string; detail: string }> = {
  "robot-venture": { name: "RoboMarket", detail: "A publicly accessible robotics marketplace website for discovering robots, related products, and suppliers." },
  "event-venture": { name: "IdeaVent", detail: "An event concept and planning platform in development. Public release and commercial availability are not yet verified." },
  "framework-venture": { name: "Visual Framework", detail: "An interactive application for organizing and connecting ideas. A working implementation exists; release acceptance is ongoing." },
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
    'Apex Innovate develops and manages its own digital projects, bringing together applications in robotics, event planning, and visual communication.'
  );
  // Reuse the approved single logo asset on the company site without changing project artwork.
  html = html.replace(
    '<span class="apex-symbol" aria-hidden="true">A<span>i</span></span>',
    '<picture class="apex-logo-mark" aria-hidden="true"><img class="apex-logo-light" src="/apex-logo.svg" alt="" width="918" height="345"/><img class="apex-logo-dark" src="/apex-logo-dark.svg" alt="" width="918" height="345"/></picture>'
  );
  // The approved logo is custom artwork, not a distributable typeface.
  // Outfit is a geometrically related text font for the hero only.
  html = html.replace("</head>", '<link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&display=swap" rel="stylesheet"/></head>');
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
    :root{--apx-bg:#121412;--apx-surface:#1e231e;--apx-fg:#eeeae1;--apx-muted:#b6b9b1;--apx-accent:#d6a17a;--apx-line:rgba(238,234,225,.17);--apx-content:1180px;--apx-gutter:clamp(20px,4vw,56px);--apx-space:clamp(64px,8vw,110px);color-scheme:dark}
    *,*::before,*::after{box-sizing:border-box}
    html{background:var(--apx-bg)}
    body{margin:0;min-width:0;background:var(--apx-bg)!important;color:var(--apx-fg);font-family:Inter,system-ui,sans-serif;overflow-x:clip}
    .page-width{width:min(var(--apx-content),calc(100% - 2 * var(--apx-gutter)));max-width:none;margin-inline:auto}
    .site-header{height:clamp(82px,9vw,108px);background:transparent!important;color:var(--apx-fg);position:relative;z-index:4}
    .site-header nav{align-items:center;gap:clamp(12px,2vw,30px)}
    .site-header a{color:inherit}
    .apex-logo-mark{display:inline-flex;align-items:center;width:clamp(62px,8vw,90px);height:auto;flex:none}
    .apex-logo-mark img{display:block;width:100%;height:auto}
    .apex-logo-mark .apex-logo-light{display:none}
    .apex-logo-mark .apex-logo-dark{display:block}
    html[data-apx-theme="light"] .apex-logo-mark .apex-logo-light{display:block}
    html[data-apx-theme="light"] .apex-logo-mark .apex-logo-dark{display:none}
    .hero{background:#101110;position:relative}
    .hero-art{object-fit:cover;object-position:60% center}
    .hero-shade{background:linear-gradient(90deg,rgba(8,10,9,.70),rgba(8,10,9,.04) 85%),linear-gradient(0deg,rgba(8,10,9,.54),transparent 56%);position:absolute;inset:0}
    .hero-content{padding-top:clamp(36px,6vw,70px)}
    .hero #hero-title{text-transform:none!important;font-family:"Outfit",Inter,system-ui,sans-serif;font-optical-sizing:auto;max-width:900px;font-size:clamp(3.4rem,9vw,8rem);font-weight:650;letter-spacing:-.055em;line-height:.99;color:var(--apx-fg)}
    .hero #hero-title span{color:#d6a17a}
    .hero .reviewed-hero-line{font-size:clamp(1rem,1.6vw,1.3rem);line-height:1.5;color:var(--apx-fg);margin:20px 0 0;font-weight:400}
    .hero .eyebrow,.hero .hero-bottom,.hero .hero-bottom p,.hero .hero-caption{color:#e4e1d8}
    .intro.page-width{background:transparent!important;color:var(--apx-fg);padding-block:var(--apx-space);display:grid;grid-template-columns:minmax(130px,1fr) minmax(0,2fr);gap:clamp(28px,5vw,72px)}
    .intro>.eyebrow{color:var(--apx-accent)}
    .intro h2{font-size:clamp(2rem,4vw,3.65rem);line-height:1.12;font-weight:500;letter-spacing:-.047em;margin:0 0 25px;color:var(--apx-fg)}
    .intro h2 span{color:var(--apx-muted)}
    .intro div>p{font-size:clamp(.96rem,1.25vw,1.1rem);line-height:1.68;color:var(--apx-muted);max-width:570px;margin:0}
    #projects.page-width{background:transparent!important;color:var(--apx-fg);padding-bottom:clamp(36px,5vw,70px)}
    #projects .section-heading{padding:20px 0 35px;border-top:1px solid var(--apx-line);margin:0}
    #projects .section-heading h2{font-size:clamp(1.35rem,2.35vw,2rem);line-height:1.2;font-weight:500;letter-spacing:-.035em;color:var(--apx-fg)}
    #projects .section-heading>span{font-size:.7rem;color:var(--apx-muted)}
    #projects .reviewed-venture{display:block!important;position:relative;width:100%;margin:0 0 clamp(30px,4vw,50px);padding:0!important;border:0!important;background:transparent!important;color:var(--apx-fg)}
    #projects .reviewed-info{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:clamp(16px,2vw,25px)}
    #projects .reviewed-copy{max-width:650px;min-width:0}
    #projects .reviewed-copy h3{margin:0 0 8px;font-size:clamp(1.65rem,3vw,2.55rem);font-weight:550;letter-spacing:-.038em;line-height:1.16;color:var(--apx-fg)}
    #projects .reviewed-copy p{max-width:60ch;margin:0;font-size:clamp(.96rem,1.2vw,1.07rem);line-height:1.64;color:var(--apx-muted)}
    #projects .reviewed-link{flex:none;display:inline-flex;gap:.65em;align-items:center;color:var(--apx-fg);font-size:.87rem;font-weight:500;border-bottom:1px solid var(--apx-accent);padding-bottom:6px;text-decoration:none}
    #projects .reviewed-banner{display:block;width:100%;overflow:hidden;background:#12191c;border:1px solid var(--apx-line);border-radius:3px}
    #projects .reviewed-banner img{display:block;width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}
    .site-footer{background:var(--apx-surface)!important;color:var(--apx-fg)!important;margin-top:0;padding-top:clamp(48px,6vw,75px)}
    .site-footer .footer-contact{padding-bottom:clamp(50px,7vw,84px)}
    .site-footer .footer-contact>a{font-size:clamp(2.8rem,5.2vw,4.5rem)!important;letter-spacing:-.045em;line-height:1.08;color:var(--apx-fg)}
    .site-footer .footer-contact>a>span:first-child{color:var(--apx-muted)}
    .site-footer .footer-contact>p:last-child{color:var(--apx-muted);font-size:clamp(.94rem,1.15vw,1.08rem);line-height:1.65;max-width:540px;margin-top:24px}
    .footer-legal{border-color:var(--apx-line);color:var(--apx-muted)}
    .site-footer a{color:inherit}
    @media(max-width:800px){.intro.page-width{grid-template-columns:1fr;gap:22px}.intro>.eyebrow{padding-top:0}}
    @media(max-width:640px){:root{--apx-gutter:20px;--apx-space:48px}.hero #hero-title{font-size:clamp(3rem,12.5vw,4.9rem)}.hero .reviewed-hero-line{font-size:1rem}.intro h2{font-size:clamp(1.8rem,7.8vw,2.4rem);margin-bottom:14px}.intro div>p{font-size:.96rem;line-height:1.58}#projects .section-heading{padding:18px 0 23px}#projects .section-heading h2{font-size:clamp(1.3rem,5vw,1.6rem)}#projects .reviewed-info{align-items:start;flex-direction:column;gap:10px;margin-bottom:15px}#projects .reviewed-copy h3{font-size:clamp(1.45rem,6vw,1.85rem);margin-bottom:6px}#projects .reviewed-copy p{font-size:.91rem;line-height:1.5}#projects .reviewed-link{font-size:.82rem}#projects .reviewed-banner{width:min(88%,360px);max-width:100%;margin-inline:auto}#projects .reviewed-banner img{display:block;width:100%;min-width:0;max-width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}#projects .reviewed-venture{margin-bottom:28px}.site-footer .footer-contact>a{font-size:clamp(2.65rem,10vw,3.7rem)!important}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  </style>`;
  html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow"/>' + css + "</head>");

  // Compact presentation-only appearance switch. Artwork is intentionally unchanged.
  // Theme variables change globally: no local light rectangles or image opacity hacks.
  const themeCss = `<style id="apex-theme-toggle">
    html[data-apx-theme="light"]{color-scheme:light;--apx-bg:#f5f2ec;--apx-surface:#e9e5db;--apx-fg:#242622;--apx-muted:#5b6058;--apx-accent:#a56748;--apx-line:rgba(36,38,34,.21)}
    html[data-apx-theme="light"] body,html[data-apx-theme="light"] .intro,html[data-apx-theme="light"] #projects{background:var(--apx-bg)!important;color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .site-header{color:var(--apx-fg)!important;background:transparent!important}
    html[data-apx-theme="light"] .hero{background:#ebe6dc!important;color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .hero-art{opacity:1;filter:none}
    html[data-apx-theme="light"] .hero-shade{background:linear-gradient(90deg,rgba(249,247,241,.91),rgba(249,247,241,.66) 42%,rgba(249,247,241,.11) 95%),linear-gradient(0deg,rgba(244,241,234,.43),transparent 44%)!important}
    html[data-apx-theme="light"] .hero #hero-title{color:#242622!important}
    html[data-apx-theme="light"] .hero #hero-title span{color:#a56748!important}
    html[data-apx-theme="light"] .hero .eyebrow,html[data-apx-theme="light"] .hero .hero-bottom p,html[data-apx-theme="light"] .hero .hero-bottom a,html[data-apx-theme="light"] .hero .hero-caption,html[data-apx-theme="light"] .hero .reviewed-hero-line{color:#282b26!important}
    html[data-apx-theme="light"] .hero .circle{border-color:rgba(36,38,34,.6)}
    html[data-apx-theme="light"] .site-footer{background:var(--apx-surface)!important;color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .site-footer .footer-contact>a,html[data-apx-theme="light"] .site-footer nav a{color:var(--apx-fg)!important}
    html[data-apx-theme="light"] .site-footer .footer-contact>a>span:first-child{color:#65715e!important}
    html[data-apx-theme="light"] .footer-legal{border-color:var(--apx-line)!important;color:var(--apx-muted)!important}
    #apx-theme-switch{appearance:none;display:grid;place-items:center;flex:none;width:30px;height:30px;margin-left:12px;padding:0;border:1px solid currentColor;border-radius:50%;background:transparent;color:inherit;cursor:pointer}
    #apx-theme-switch svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
    #apx-theme-switch:focus-visible{outline:2px solid var(--apx-accent);outline-offset:3px}
    @media(max-width:640px){#apx-theme-switch{width:28px;height:28px;margin-left:5px}}
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
        var header=document.querySelector('.site-header')||document.querySelector('header');
        if(header){
          var walker=document.createTreeWalker(header,NodeFilter.SHOW_TEXT);
          var nodes=[];var node;
          while((node=walker.nextNode())){
            if(/\\bAPEX\\b|\\bINNOVATE\\b/.test(node.nodeValue||''))nodes.push(node);
          }
          nodes.forEach(function(n){
            var original=n.nodeValue||'';
            var updated=original.replace(/\\bAPEX\\b/g,'apex').replace(/\\bINNOVATE\\b/g,'innovate');
            if(updated!==original){
              var span=document.createElement('span');
              span.textContent=updated;
              span.style.setProperty('text-transform','none','important');
              n.parentNode.replaceChild(span,n);
            }
          });
        }
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
