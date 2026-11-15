# APEX INNOVATE – AI HANDOFF / CONTINUITY CONTRACT

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
- Hero: preserve the **exact existing sculptural copper-apex image** from `public/astra-preview.html`; washed/soft treatment on right. Never replace or generate a new image as a substitute.
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
- `public/astra-preview.html` – **active original asset library**, even though it is a historical design artifact; the route extracts the full-size hero and three banner data URIs. Do **not** delete or compress casually.
- `index.html`, `src/data/navigation.ts`, retired service page/components and `public/apex-logo*.svg` – older or alternative implementations; do not assume these currently define the approved on-page visual.
- `.github/workflows/deploy-production.yml` – manual authorized production release route.

## 5. Venture links and assertions

The current app renders **RoboMarket**, **IdeaVent**, **Visual Framework** as selected project cards.

- RoboMarket: `https://robomarket.ae`.
- IdeaVent: `https://ideavent.ae` (**user-approved destination**; cannot independently confirm HTTP availability in this audit). The archived `public/astra-preview.html` banner metadata still contains `ideavent.ai`; rendering now overrides the destination in `projectDestinations` without touching image data.
- Visual Framework: `https://visual-framework-system.vercel.app`.

The route's `projectDestinations` determines both rendered links and `ItemList` structured-data URLs. Do not take legacy embedded banner hrefs as the current target. All three image assets remain as originally embedded.

No claim is made here that project payments, release acceptance, legal ownership or licensing are fully verified. Visual Framework is associated with academic psychology and behavioral analysis; do not generically describe it as a productivity brainstorming app.

## 6. Policy and SEO consistency

- The corporate site has **no on-site account registration or contact form**. Its Contact page offers two company-facing direct WhatsApp chat links: **UAE** `https://wa.me/971586749577` (`+971 58 674 9577`) and **Lebanon** `https://wa.me/96176713497` (`+961 76 713 497`). Do not restore the personal LinkedIn card or user-facing implementation notes.
- The shared React metadata includes the company Organization entity only, not the director's personal profile. Privacy Notice recognizes web-server request data, WhatsApp correspondence and third-party font requests. Do not reinsert the old light/dark localStorage claim; the current site has no theme switch.
- Corporate policies do not automatically govern separate project transactions or data processing.
- Home canonical: `https://apexinnovate.ae/`; alternate `/astra-reviewed` is noindex.
- Secondary canonical pages: `/contact`, `/privacy`, `/terms`.
- Sitemap lists exactly those four canonical pages. `www` redirects to bare hostname through `src/proxy.ts` on deployed code.
- Root metadata is used for React-rendered secondary pages; the HTML route owns homepage metadata. Confirm any SEO changes in **both** implementations before merging.

## 7. Mandatory every-edit sitemap, README and AI-retrieval synchronization

**This is a standing requirement, not a one-time cleanup.** In every feature/fix PR, inspect the active route inventory, `src/app/sitemap.ts`, `src/app/robots.ts`, canonical and noindex rules, HTML metadata, Organization/ItemList JSON-LD, `README.md`, `AGENTS.md`, this `AI_HANDOFF.md`, the acceptance checklist, and dated evidence register. If a route, identity, CTA, public URL or behavior changes, update affected records **in that same PR**. If a file remains correct, leave it unchanged and state that it was checked.

**AI retrieval discipline:** public machine-readable claims must match visible company copy and only verified venture descriptions. The internal handoff and evidence register are GitHub documents for maintaining work, **not public AI-crawler landing pages**. No public `llms.txt` currently exists; it is optional and cannot replace canonical indexable content and structured data. Never publish internal permission details, speculative rights/launch states or personal records as crawler content.

**Live comparison:** always record (a) latest approved GitHub application SHA, (b) current Vercel production alias SHA and (c) separately verified HTTP/browser outcomes. Publish with approved production credentials, then test actual URLs, layout, buttons, contact actions, sitemap and robots. Without publication, report **MERGED / NOT YET LIVE**, even when README and handoff have been updated.

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
- The original icon/legacy SVG assets remain preserved but are not proof of the currently rendered Oxanium code mark; review favicon consistency separately before replacing asset files.
- Review licence renewal/validity before its documented 2 December 2026 expiry and legal/privacy text before making expanded regulatory or operational claims.

**Source priority:** verified live production metadata → exact approved GitHub source → current Vercel preview → historical register and screenshots. If sources conflict, report the discrepancy with dates and SHAs. Do not invent a successful deployment.
