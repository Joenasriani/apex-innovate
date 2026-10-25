import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

type Banner = { cls: string; src: string; href: string; alt: string };
const descriptions: Record<string, { name: string; detail: string }> = {
  "robot-venture": { name: "RoboMarket", detail: "Robotics marketplace" },
  "event-venture": { name: "IdeaVent", detail: "Event concepts and production planning" },
  "framework-venture": { name: "Visual Framework", detail: "Visual reasoning and structured thinking" },
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
    const article = '<article class="venture ' + b.cls + ' reviewed-venture"><a class="reviewed-banner" href="' + b.href + '" target="_blank" rel="noopener noreferrer" aria-label="Visit ' + project.name + ' (opens in new tab)"><img src="' + b.src + '" alt="' + b.alt + '" loading="lazy" decoding="async" width="1536" height="512"/></a><div class="reviewed-text"><h3>' + project.name + '</h3><p>' + project.detail + '</p></div></article>';
    html = html.slice(0, start) + article + html.slice(end + "</article>".length);
  }

  // A private review preview must not compete with the public company site.
  html = html
    .replace(/<meta name="robots"[^>]*>/gi, "")
    .replace(/<meta name="googlebot"[^>]*>/gi, "")
    .replace(/<link rel="canonical"[^>]*>/gi, "");
  const css = '<style id="apex-reviewed-layout">#projects .reviewed-venture{display:block!important;width:100%;min-width:0;background:transparent;border:0;padding:0 0 clamp(20px,3vw,42px)}#projects .reviewed-banner{display:block;width:100%;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:3px;background:#111;transition:border-color .2s ease}#projects .reviewed-banner:hover{border-color:rgba(255,255,255,.45)}#projects .reviewed-banner img{display:block;width:100%;height:auto;aspect-ratio:3/1;object-fit:contain}#projects .reviewed-text{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}@media(max-width:640px){#projects .reviewed-banner{overflow-x:auto}#projects .reviewed-banner img{min-width:650px;max-width:none}}@media(prefers-reduced-motion:reduce){#projects .reviewed-banner{transition:none}}</style>';
  html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow"/>' + css + "</head>");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "no-store",
    },
  });
}
