# APEX INNOVATE – AI HANDOFF / CONTINUITY CONTRACT

## Technical hardening – 24 November 2026 (PR OPEN · NOT MERGED · NOT YET LIVE)

Branch `fix/technical-audit-hardening`, based on `f6a2587d6ecceb1bd070d410a32a6d6751f1519e` (the commit the owner reported as the READY Vercel production deployment `dpl_FBxReocrfNJ9NyHCP9iFU6UBMeXy`, team RoboMarket, project `apex-innovate`; that deployment state is **user-reported and could not be confirmed through the Vercel API from this session**). Change this heading to **MERGED / NOT YET LIVE** only when the PR is merged, and to live only after an owner-authorized production deployment is independently verified.

**Changed (verified on a local production build, `next build` + `next start`):**
- Homepage now emits canonical-host `og:*` / `twitter:*` tags, icon links and a 1200×630 social image `public/apex-og.jpg`. The image is a **derived composition** (original unmodified hero crop + the site's left wash, Oxanium `</ai>` mark and wordmark, and the existing line "Ideas with forward intent."), rendered from the real artwork; no new artwork was generated. `public/favicon.ico` (16/32/48) is rasterised from the existing `public/icon.svg`.
- Contact / Privacy / Terms use `pageMetadata()` in `src/lib/seo.ts`: canonical, `og:url`, `siteName`, image and `summary_large_image` card on every page. Titles and descriptions are unchanged.
- Pinch-zoom restriction removed (`maximum-scale=1` deleted from the viewport).
- Security headers in `next.config.ts`: CSP (`unsafe-inline` for script/style is deliberate, see the comment there), `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, and `X-Robots-Tag: noindex` on legacy `/images/*`. **HSTS is intentionally untouched** (Vercel already sends `max-age=63072000`); `includeSubDomains` / `preload` are an owner decision.
- Structured data consolidated: `src/lib/seo.ts` builds one Organization + WebSite node (stable `@id`s) used by every page; the homepage adds the venture `ItemList` from `src/data/ventures.ts`. Only properties already supported by `companyPositioning` / `companyConfig` are emitted.
- Venture names, descriptions and destinations now live **only** in `src/data/ventures.ts` (replaces `projectDestinations` / `descriptions` in the homepage route).
- Internal source assets moved from `public/` to `source-assets/` (`astra-preview.html`, `astra-assets/`). `/astra-preview.html` and `/astra-assets/*` now return 404 locally. They are read server-side by `src/lib/original-art.ts`, which parses the 2.6 MB file once per instance instead of per request. Served artwork bytes are **byte-identical** to the pre-change build (SHA-256 prefixes hero `eff36b5ed6f5cc99`, robot `164420514b8c8a2b`, event `d17314d53a3c8ec7`, framework `2bed60ce44020dd9`), and the file is present in each route's Next file trace.
- Accessibility (axe-core, WCAG 2.2 AA + best-practice, 4 pages × 1280/375/320): all prior violations fixed except the logo `ai` mark (#c88760, 2.78:1), which is deliberately left as brand/logotype and is the only remaining finding. Fixes: darker `--accent-text` (#7f5f4a) for small accent text, accessible names that contain their visible text (label-in-name), invisible hit-area expansion for small links, a skip link and `#main` target on every page, and the Contact link is no longer hidden on mobile. No horizontal overflow at 320/375.
- Removed 21 source files proven unreachable (no importer, not a route) and 8 dependencies used only by them (`three`, `@types/three`, `framer-motion`, `lucide-react`, `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`). This also fixes `npm ci`, which failed on the old lockfile. Kept: `shadcn` / `tw-animate-css` / `components.json`, root `index.html`, `public/apex-logo*.svg`, legacy `/images/*` (not provably unused).
- `deploy-production.yml`: `actions/checkout` and `actions/setup-node` pinned to full commit SHAs (both v4.4.0). Trigger, permissions and deploy steps are untouched.
- Homepage caching: `no-store` replaced by `public, max-age=0, s-maxage=300, stale-while-revalidate=86400`. **Local timing showed no meaningful difference (≈5 ms either way); the live ~2× gap versus static pages is a network/serverless effect that cannot be measured before deployment.** Treat this as unproven until the post-deploy check below; revert the single header if `x-vercel-cache` never reports HIT or stale content appears.

**Unchanged by scope (checked):** sitemap (4 routes) and robots responses are byte-identical to the baseline; the five retired paths still return 410; `www` redirect, positioning copy, venture descriptions, contact details and visual identity untouched.

**Not verifiable before deployment (post-deploy checks):** live headers incl. CSP with real Google Fonts; no CSP console violations on the live site; `x-vercel-cache` behaviour; OG/Twitter rendering in a sharing debugger; Search Console recrawl. Test-harness notes: axe's own stylesheet fetch is blocked by `connect-src` and the sandbox font mock produces three font 404s on subpages; both are test artefacts, not site defects, and should be absent live.

## IdeaVent destination correction – 21 November 2026

**CURRENT APPROVED TARGET:** `https://ideavent.ai` for the Apex IdeaVent card, banner and venture ItemList URL. The previously approved `https://ideavent.ae` failed external DNS resolution during the same-day verification. `https://ideavent.ai/` was independently fetched successfully (HTTP 200) and the user explicitly approved replacing the destination. The embedded historical `public/astra-preview.html` banner source remains untouched; the live HTML renderer determines the outbound link and structured data. No claim is made about full commercial availability or subscriptions on IdeaVent. **Release gate:** source change is not live until preview passes, PR merges and production deploy SHA plus actual homepage links are verified. Historical statements below describe prior audit dates and must not be used as current destination claims.


## Retired URLs – corrective removal, 21 November 2026

The previous SEO cleanup changed obsolete service URLs to permanent redirects to `/#projects`, which was inappropriate where no equivalent page exists. This follow-up replaces that behavior with **HTTP 410 Gone** for `/studio`, `/software`, `/academy`, `/vr` and `/robomarket` on both canonical and www hosts. All five legacy Next.js page components were deleted. The legacy navigation list now includes only `/` and `/contact`. The current RoboMarket venture card still links externally to `https://robomarket.ae`; it is **not** the obsolete Apex `/robomarket` page.

The only intended public HTML pages remain `/`, `/contact`, `/privacy`, `/terms`. Their existing sitemap, robots rules, canonical identities, design and structured data are unchanged. Search Console will need to recrawl the obsolete URLs; their disappearance from results cannot be guaranteed immediately. The corrective branch must pass preview build and production acceptance before anyone calls the 410 responses live. Historical audit and deployment records below are retained as dated evidence.


## SEO cleanup review – 21 November 2026 (branch only)

- Production checked through the connected Vercel RoboMarket team: project `apex-innovate`, deployment `dpl_61phVFPRZFZG3tKrWSDh4qx1bDiK`, READY, application SHA `b63986bcb4b4c33dc7a520c8608b214e0fd28a3a`, assigned to `apexinnovate.ae` and `www.apexinnovate.ae`. This supersedes the **15 November deployment snapshot** below; it does not prove a new cleanup release.
- First-party Search Console on 21 November: homepage and Privacy **indexed**; Contact and Terms **discovered, not indexed**. Historical `www/studio` and `www/academy` still reported indexed from old crawls; `www/robomarket` reported as redirect.
- OpenSEO technical audit `c08fb4cf-d753-4771-a021-623f94c4baa7`: four canonical pages returned HTTP 200 and were indexable, no critical crawl issues. One Contact thin-content advisory, homepage description length warning, and two short legal-page descriptions.
- Proposed code cleanup on branch `seo-cleanup-2026-11-21`: make five existing retired-route redirects permanent; remove duplicated Apex suffix from secondary page titles; improve only SEO meta descriptions, leaving visible corporate copy, images and layout unchanged. Keep Contact concise; do not add keyword stuffing.
- **RELEASE GATE:** this branch has not been merged, built or deployed merely by creating these commits. Recheck branch build, PR review, the exact Vercel production SHA, HTTP redirects, page titles, canonicals, sitemap, robots and Search Console after release. Search indexing changes are not instantaneous or guaranteed.
- Checked unchanged by scope: four canonical sitemap entries, robots sitemap reference, Organization / WebSite / venture ItemList, `www` canonical host redirect, approved external venture links, original artwork, WhatsApp cards, optional public `llms.txt` (still unnecessary).


**Updated:** 15 November 2026  
**Status:** Production currently serves `b9f1a8a`, but GitHub `main` contains later application changes merged as `7f551ac`. Contact/Privacy/Terms and shared homepage copy are **MERGED / NOT YET LIVE**; user mobile screenshot shows the old LinkedIn Contact card. Browser/HTTP acceptance remains NOT RECHECKED.  
**Repository:** `Joenasriani/apex-innovate` · `main`  
**Do not confuse with:** `Joenasriani/apex-innovate-website` (separate historical repository).

## 1. Identity and positioning (locked)

**Legal entity:** Apex Innovate FZE LLC. Authority: Ajman NuVentures Centre Free Zone, United Arab Emirates. Licensed activities relevant to public positioning: **e-commerce and marketing management**. The company can develop and manage further businesses, digital platforms and ventures.

This website displays **three selected ventures**, not an exhaustive statutory business definition or permanent ceiling on future projects. Do not mention the life-coaching activity or reintroduce generic creative-agency/service-menu copy.

Approved homepage text:

- Eyebrow: `E-COMMERCE & MARKETING MANAGEMENT · UNITED ARAB EMIRATES`
- H1: `Ideas with forward intent.`
- Subtitle: `Developing and managing businesses, digital platforms, and new ventures.`

Use the shared `companyPositioning` object in `src/data/config.ts` for these three public positioning fields and broad SEO company description. Do not update one textual surface while leaving others contradictory.

## 2. Verified deployment provenance (not a guess)

| Field | Evidence / current known value |
| --- | --- |
| Production domain | `apexinnovate.ae` and `www.apexinnovate.ae` |
| Vercel team | `RoboMarket` – `team_aK7orsaNw316c1bdLjjKFVMy` |
| Production project | `apex-innovate` – `prj_orU3BILg3A4TqZgK4ePPzHmcOnYs` |
| Last confirmed production deployment | `dpl_J7LE5saV1WAEtMNL4tsFHTYdmRuP` – READY; both official aliases assigned |
| Commit actually on production alias at audit | `b9f1a8adef7d218d61200d8c1c8c933583b7d41f` |
| Production deployment created | 15 November 2026 |
| Approved app source baseline | Production `b9f1a8a`; latest public application changes merged as `7f551ac` are **NOT YET LIVE**; later documentation commits do not change this distinction |
| Preview Vercel project | `apex-innovate-jo-branch-preview` – `prj_0XDwqILI3nzNQGmsGEbWmPIj6pzv` |
| Production publishing access | Connected Developer identity still receives 403 on direct production API deployment; authorized RoboMarket Owner CLI deployment succeeded. GitHub merges alone do not prove a live release. |

This mapping supersedes earlier 25 October and pre-release 15 November evidence that production was unidentified or on an October commit. The remote webpage could not be opened directly by the available browser/web network sources during this reconciliation. The production **identity and SHA were verified using Vercel deployment metadata**, whereas rendered-page/browser QA remains **NOT RECHECKED**. Never equate these evidence types.

The optional manually dispatched GitHub workflow is `.github/workflows/deploy-production.yml` (NOT required for the verified Owner CLI production release), with `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` aimed at the above project; it requires the Vercel token secret and owner-authorized execution. Do not silently redirect the domain to the separate preview project, disable deployment protection, change DNS, or attempt unauthorized workaround.

## 3. Approved visual specification

- Light/off-white background; restrained copper/brown accents, dark text, generous but mathematically consistent spacing and content gutters.
- Header: an **AI code mark** and lowercase **`apex innovate`**, both using **Oxanium** with identical font-size and weight per breakpoint. Never splice vector letters into a font word or mix letterform types within one word.
- Hero: preserve the **exact existing sculptural copper-apex image** from `source-assets/astra-preview.html`; washed/soft treatment on right. Never replace or generate a new image as a substitute.
- Venture cards: the three approved original banner images from the same file, displayed full width, preserving artwork and aspect ratio.
- Footer and Contact/Privacy/Terms use the same light editorial tone, horizontal grid and branding.
- Mobile and desktop need browser QA at 360 / 390 / 768 / 1024 / 1440 px. Previous screenshots are visual feedback, **not** evidence of a completed QA pass on the latest deployment.

Most visible homepage HTML and CSS are authored in the standalone route file `src/app/astra-reviewed/route.ts` (a route handler that returns the HTML document). Secondary-page layout is implemented in the normal Next.js app structure. Do not assume the global shared React Header also renders around the route-handler homepage.

## 4. Routing and source-of-truth map

| Public route | Source |
| --- | --- |
| `/` | `src/app/(main)/route.ts` imports `GET` from `src/app/astra-reviewed/route.ts` |
| `/contact` | `src/app/(main)/contact/page.tsx` |
| `/privacy` | `src/app/(main)/privacy/page.tsx` |
| `/terms` | `src/app/(main)/terms/page.tsx` |
| `/astra-reviewed` | Same standalone renderer; excluded from indexing, kept for compatibility |
| Legacy `/studio`, `/software`, `/academy`, `/vr`, `/robomarket` | `next.config.ts` redirects to `/#projects` |

Supporting files:
- `src/data/config.ts` – common company positioning, contact and external links.
- `src/app/globals.css` and `src/components/layout/{header,footer,content-panel}.tsx` – secondary-page design system.
- `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/proxy.ts` – SEO/metadata, sitemap, canonical host redirect and preview noindex.
- `source-assets/astra-preview.html` – **active original asset library** (moved from `public/` on 24 Nov 2026 so it is no longer publicly served), even though it is a historical design artifact; `src/lib/original-art.ts` loads it once and the routes extract the full-size hero and three banner data URIs. Do **not** delete or compress casually.
- `index.html` and `public/apex-logo*.svg` – older or alternative implementations; do not assume these currently define the approved on-page visual.
- `.github/workflows/deploy-production.yml` – manual authorized production release route.

## 5. Venture links and assertions

The current app renders **RoboMarket**, **IdeaVent**, **Visual Framework** as selected project cards.

- RoboMarket: `https://robomarket.ae`.
- IdeaVent: `https://ideavent.ae` (**user-approved destination**; cannot independently confirm HTTP availability in this audit). The archived `public/astra-preview.html` banner metadata still contains `ideavent.ai`; rendering now overrides the destination in `projectDestinations` without touching image data.
- Visual Framework: `https://visual-framework-system.vercel.app`.

`src/data/ventures.ts` determines both rendered links and `ItemList` structured-data URLs. Do not take legacy embedded banner hrefs as the current target. All three image assets remain as originally embedded.

No claim is made here that project payments, release acceptance, legal ownership or licensing are fully verified. Visual Framework is associated with academic psychology and behavioral analysis; do not generically describe it as a productivity brainstorming app.

## 6. Policy and SEO consistency

- The corporate site has **no on-site account registration or contact form**. Its Contact page offers two company-facing direct WhatsApp chat links: **UAE** `https://wa.me/971586749577` (`+971 58 674 9577`) and **Lebanon** `https://wa.me/96176713497` (`+961 76 713 497`). Do not restore the personal LinkedIn card or user-facing implementation notes.
- The shared React metadata includes the company Organization entity only, not the director's personal profile. Privacy Notice recognizes web-server request data, WhatsApp correspondence and third-party font requests. Do not reinsert the old light/dark localStorage claim; the current site has no theme switch.
- Corporate policies do not automatically govern separate project transactions or data processing.
- Home canonical: `https://apexinnovate.ae/`; alternate `/astra-reviewed` is noindex.
- Secondary canonical pages: `/contact`, `/privacy`, `/terms`.
- Sitemap lists exactly those four canonical pages. `www` redirects to bare hostname through `src/proxy.ts` on deployed code.
- Root metadata is used for React-rendered secondary pages; the HTML route owns homepage metadata. Confirm any SEO changes in **both** implementations before merging.

## Safe performance changes (original artwork, no visual redesign)

Homepage performance implementation now uses `src/app/apex-art/[asset]/route.ts` to return the original hero and three banners as **unaltered, separately cacheable binary images**. Homepage HTML refers to `/apex-art/hero` and the three venture identifiers rather than embedding four large data URIs. The original `public/astra-preview.html` remains canonical artwork; a decoded response must use true image MIME (some original embedded labels are inaccurate). The hero remains eager/high priority; banners are lazy. This is a new source change and is **not live** until the production deployment SHA is advanced. Do not falsely report a byte-size improvement measured from a live browser without an actual measurement. All four image endpoints returned HTTP 200 and `image/jpeg` in a Vercel preview; homepage and Contact also returned HTTP 200. Visual inspection, actual LCP, production availability and mobile responsiveness remain NOT RECHECKED. These asset endpoints are not canonical content pages and are not listed in the sitemap.

## 7. Mandatory every-edit sitemap, README and AI-retrieval synchronization

**This is a standing requirement, not a one-time cleanup.** In every feature/fix PR, inspect the active route inventory, `src/app/sitemap.ts`, `src/app/robots.ts`, canonical and noindex rules, HTML metadata, Organization/ItemList JSON-LD, `README.md`, `AGENTS.md`, this `AI_HANDOFF.md`, the acceptance checklist, and dated evidence register. If a route, identity, CTA, public URL or behavior changes, update affected records **in that same PR**. If a file remains correct, leave it unchanged and state that it was checked.

**AI retrieval discipline:** public machine-readable claims must match visible company copy and only verified venture descriptions. The internal handoff and evidence register are GitHub documents for maintaining work, **not public AI-crawler landing pages**. No public `llms.txt` currently exists; it is optional and cannot replace canonical indexable content and structured data. Never publish internal permission details, speculative rights/launch states or personal records as crawler content.

**Live comparison:** always record (a) latest approved GitHub application SHA, (b) current Vercel production alias SHA and (c) separately verified HTTP/browser outcomes. Publish with approved production credentials, then test actual URLs, layout, buttons, contact actions, sitemap and robots. Without publication, report **MERGED / NOT YET LIVE**, even when README and handoff have been updated.

## Verified Google index recovery and focused homepage SEO (15 November 2026)

- **PASS – first-party Search Console via OpenSEO:** `https://apexinnovate.ae/` is now **Submitted and indexed**, with `INDEXING_ALLOWED`, `ALLOWED` robots and successful mobile Google crawl at `2026-11-15T18:06:17Z`. Both Google's canonical and page-declared canonical are `https://apexinnovate.ae/`; Google associates the page with `https://apexinnovate.ae/sitemap.xml`. This supersedes the historical 11 November `noindex` report.
- **Narrow SEO source adjustment (NOT YET LIVE):** the standalone homepage HTML document title is updated to `Apex Innovate FZE LLC | Digital Ventures in the UAE`. The on-page H1, approved hero copy, brand mark, venture descriptions, imagery and site routes are unchanged. The title aligns with verified company identity and positioning, not an unsupported new service.
- **Keyword evidence:** UAE-English research showed very low search volumes for specific generic terms; no claim of improved rankings or performance is made. Prioritize branded/company identity, accurate page descriptors and indexing over keyword stuffing. No change to sitemap or robots was required.
- **Release distinction:** this metadata-only change is a GitHub branch change until a preview build passes, merge is complete, and the official Vercel production alias is verified at the correct deployment SHA. The indexed status refers to Google's prior crawl of the actual live site, not to the new title.

## 8. Editing and release procedure

1. Inspect **live Vercel alias + deployment SHA** first, then active GitHub `main`; compare with the latest approved preview and earlier user design screenshots.
2. Review this handoff, `README.md`, current evidence register and acceptance checklist; preserve previously approved design, copy and assets.
3. Modify the smallest necessary active files on a feature branch. Run `npm run build` (and lint if available). Inspect build logs, links, metadata and route table.
4. For significant UI changes, obtain real rendered responsive screenshots or user review of the exact READY preview. A build status alone is not visual acceptance.
5. Merge only reviewed changes into `main`. **Separately**, with authorized production permissions, deploy to the **existing RoboMarket-team Apex Vercel project** and verify the deployment's source SHA is on the live domain.
6. Recheck homepage, Contact, Privacy, Terms, project links, redirects, responsive presentation, robots/sitemap/SEO and contact actions in the live website; mark failed or not-rechecked separately.
7. Update this handoff and evidence/status register **only when verification changes**. Never report a GitHub merge as a live production fix.

### Current unresolved items

- Current application release **PENDING**: GitHub app commit `7f551ac` includes UAE + Lebanon WhatsApp and removal of personal LinkedIn; official domain still serves `b9f1a8a`. Direct Developer deployment permission remains insufficient; an authorized Owner CLI deployment was previously successful.
- Actual browser-based live UX, device screenshots, and URL click-through were inaccessible in this audit.
- Independent IdeaVent `.ae` endpoint response and project launch states require current cross-check.
- Favicon: `public/icon.svg` / `apple-icon.svg` and a derived `favicon.ico` are now wired on every page (24 Nov 2026, PR open); confirm in a live browser tab after deployment.
- Review licence renewal/validity before its documented 2 December 2026 expiry and legal/privacy text before making expanded regulatory or operational claims.

**Source priority:** verified live production metadata → exact approved GitHub source → current Vercel preview → historical register and screenshots. If sources conflict, report the discrepancy with dates and SHAs. Do not invent a successful deployment.
