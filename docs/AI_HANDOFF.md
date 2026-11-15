# APEX INNOVATE – AI HANDOFF / CONTINUITY CONTRACT

**Updated:** 15 November 2026  
**Status:** GitHub source reconciled to the approved November design; official domain still runs the older October deployment until authorized production release.  
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
| Last confirmed production deployment | `dpl_5K9RcxDxBcEyTpTuNsrxxCH9jCfM` – READY |
| Commit actually on production alias at audit | `a92d3e0e134e90702766030fa75a000714a7405b` |
| Production deployment created | 27 October 2026 |
| Approved design/official-page source baseline in `main` | `5f9a015597db056a8342c07c1c08d93640319216` prior to this document-sync change |
| Preview Vercel project | `apex-innovate-jo-branch-preview` – `prj_0XDwqILI3nzNQGmsGEbWmPIj6pzv` |
| Production publishing access | **BLOCKED:** most recent direct Vercel production deploy API returned HTTP 403 (permission denied). GitHub merges do NOT auto-publish to this production alias in the observed history. |

This mapping supersedes 25 October evidence stating the production project or deployed commit was unknown. The remote webpage could not be opened directly by the available browser/web network sources during this reconciliation. The production **identity and SHA were verified using Vercel deployment metadata**, whereas rendered-page/browser QA remains **NOT RECHECKED**. Never equate these evidence types.

The manually dispatched GitHub workflow is `.github/workflows/deploy-production.yml`, with `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` aimed at the above project; it requires the Vercel token secret and owner-authorized execution. Do not silently redirect the domain to the separate preview project, disable deployment protection, change DNS, or attempt unauthorized workaround.

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

- The corporate site has **no on-site account registration or contact form**; Contact directs to published WhatsApp and professional LinkedIn.
- Privacy Notice recognizes web-server request data and third-party font requests. Do not reinsert the old light/dark localStorage claim; the current site has no theme switch.
- Corporate policies do not automatically govern separate project transactions or data processing.
- Home canonical: `https://apexinnovate.ae/`; alternate `/astra-reviewed` is noindex.
- Secondary canonical pages: `/contact`, `/privacy`, `/terms`.
- Sitemap lists exactly those four canonical pages. `www` redirects to bare hostname through `src/proxy.ts` on deployed code.
- Root metadata is used for React-rendered secondary pages; the HTML route owns homepage metadata. Confirm any SEO changes in **both** implementations before merging.

## 7. Editing and release procedure

1. Inspect **live Vercel alias + deployment SHA** first, then active GitHub `main`; compare with the latest approved preview and earlier user design screenshots.
2. Review this handoff, `README.md`, current evidence register and acceptance checklist; preserve previously approved design, copy and assets.
3. Modify the smallest necessary active files on a feature branch. Run `npm run build` (and lint if available). Inspect build logs, links, metadata and route table.
4. For significant UI changes, obtain real rendered responsive screenshots or user review of the exact READY preview. A build status alone is not visual acceptance.
5. Merge only reviewed changes into `main`. **Separately**, with authorized production permissions, deploy to the **existing RoboMarket-team Apex Vercel project** and verify the deployment's source SHA is on the live domain.
6. Recheck homepage, Contact, Privacy, Terms, project links, redirects, responsive presentation, robots/sitemap/SEO and contact actions in the live website; mark failed or not-rechecked separately.
7. Update this handoff and evidence/status register **only when verification changes**. Never report a GitHub merge as a live production fix.

### Current unresolved items

- Production publishing permissions for the RoboMarket team remain insufficient; authorized owner/token deployment is required.
- Actual browser-based live UX, device screenshots, and URL click-through were inaccessible in this audit.
- Independent IdeaVent `.ae` endpoint response and project launch states require current cross-check.
- The original icon/legacy SVG assets remain preserved but are not proof of the currently rendered Oxanium code mark; review favicon consistency separately before replacing asset files.
- Review licence renewal/validity before its documented 2 December 2026 expiry and legal/privacy text before making expanded regulatory or operational claims.

**Source priority:** verified live production metadata → exact approved GitHub source → current Vercel preview → historical register and screenshots. If sources conflict, report the discrepancy with dates and SHAs. Do not invent a successful deployment.
