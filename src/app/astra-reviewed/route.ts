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

  // A private review preview must not compete with the public company site.
  html = html
    .replace(/<meta name="robots"[^>]*>/gi, "")
    .replace(/<meta name="googlebot"[^>]*>/gi, "")
    .replace(/<link rel="canonical"[^>]*>/gi, "");
  // The registered company name is the sole page-level heading.
  // Keep Astra's original phrase as a quieter editorial subtitle.
  html = html.replace(/<h1 id="hero-title">[\s\S]*?<\/h1>/, '<h1 id="hero-title">APEX <span>INNOVATE</span></h1><p class="reviewed-hero-line">Ideas with forward intent.</p>');
  const css = `<style id="apex-reviewed-layout">
    :root{--review-bg:#111318;--review-line:rgba(233,238,241,.14);--review-copy:#dadfe3;--review-muted:#acb2ba;--review-copper:#d1a07b}
    .hero #hero-title{max-width:900px;font-size:clamp(3.4rem,9vw,8rem);font-weight:650;letter-spacing:-.055em;line-height:.99}
    .hero #hero-title span{color:var(--review-copper)}
    .hero .reviewed-hero-line{font-size:clamp(1rem,1.6vw,1.3rem);line-height:1.5;color:var(--review-copy);margin-top:clamp(18px,2vw,28px);font-weight:400;letter-spacing:.005em}
    #projects .section-heading{margin-bottom:clamp(22px,3vw,42px)}
    #projects .reviewed-venture{display:block!important;width:100%;min-width:0;position:relative;background:var(--review-bg)!important;border:1px solid var(--review-line)!important;border-radius:4px;padding:clamp(20px,3vw,42px)!important;margin-bottom:clamp(22px,3vw,38px);box-sizing:border-box}
    #projects .reviewed-info{display:flex;justify-content:space-between;align-items:end;gap:20px;min-width:0;margin-bottom:clamp(20px,2.8vw,34px)}
    #projects .reviewed-copy{min-width:0;max-width:680px}
    #projects .reviewed-copy h3{font-size:clamp(1.6rem,3.2vw,2.8rem);font-weight:600;letter-spacing:-.035em;line-height:1.15;margin:0 0 12px;color:#f5f4f0}
    #projects .reviewed-copy p{font-size:clamp(.93rem,1.2vw,1.12rem);font-weight:400;line-height:1.6;color:var(--review-muted);margin:0;max-width:56ch}
    #projects .reviewed-link{display:inline-flex;flex-shrink:0;gap:.7em;align-items:center;color:var(--review-copy);font-size:.9rem;text-decoration:none;letter-spacing:.01em;border-bottom:1px solid var(--review-copper);padding-bottom:7px}
    #projects .reviewed-link:hover{color:#fff}
    #projects .reviewed-banner{display:block;width:100%;overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:2px;background:#111;text-decoration:none;transition:border-color .2s ease}
    #projects .reviewed-banner:hover{border-color:rgba(255,255,255,.4)}
    #projects .reviewed-banner img{display:block;width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}
    @media(max-width:700px){#projects .reviewed-info{display:block}#projects .reviewed-link{margin-top:18px}#projects .reviewed-banner{overflow-x:auto}#projects .reviewed-banner img{min-width:580px;max-width:none}}
    @media(prefers-reduced-motion:reduce){#projects .reviewed-banner{transition:none}}
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
