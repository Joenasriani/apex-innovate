# Apex Innovate – Production acceptance and reconciliation checklist

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


**Reviewed:** 15 November 2026  
**Release decision:** **MOST RECENT PUBLIC APP FIX MERGED / NOT YET LIVE; LIVE QA OPEN**  
**Approved UI:** Light editorial corporate site at production commit `b9f1a8a`; newer Contact/legal copy commit `7f551ac` is merged to GitHub but not yet published. User screenshot shows the old Contact page.

## Evidence levels

- **PASS – repository/source:** inspected in GitHub and corroborated by build output where available.
- **PASS – deployment metadata:** verified directly from connected Vercel API, *not* a browser rendering.
- **NOT RECHECKED:** requires a working live browser, external endpoint response or fresh regulator/operational evidence.
- **BLOCKED:** cannot proceed with current authorization.

Do not convert a code-level PASS into a live-production PASS.

## 1. Identity, provenance and deployment

- [x] **PASS – Vercel metadata:** production project identified as `RoboMarket / apex-innovate`, project `prj_orU3BILg3A4TqZgK4ePPzHmcOnYs`.
- [x] **PASS – Vercel metadata:** both official aliases are assigned to `dpl_J7LE5saV1WAEtMNL4tsFHTYdmRuP` (READY), commit `b9f1a8adef7d218d61200d8c1c8c933583b7d41f` (15 November 2026). **Newer GitHub application commit `7f551ac` not yet deployed.**
- [x] **PASS – GitHub source:** approved November light design, official pages and broad corporate positioning are merged into `Joenasriani/apex-innovate` `main`.
- [x] **PASS – production publishing:** the authorized RoboMarket Owner account deployed the approved code using Vercel CLI. The connected Developer account still cannot publish directly (historical 403), but that is not an outstanding deployment blocker.
- [ ] **NOT RECHECKED:** current DNS registrar ownership, domain certificate, live HTTP page responses, and production rollback mechanism.
- [ ] **PENDING – newest application deployment:** Vercel's current `apexinnovate.ae` lookup resolves to older `b9f1a8a` with `www` also assigned. Deploy the newer approved `7f551ac` Contact/legal changes before treating them as live.

## 2. Legal and company positioning

- [x] **PASS – source/evidence register:** public legal name is `Apex Innovate FZE LLC`; Ajman NuVentures Centre Free Zone is the recorded authority.
- [x] **PASS – source:** company positioning cites e-commerce and marketing management, with capacity to develop and manage businesses, digital platforms and new ventures. No life-coaching line.
- [x] **PASS – source:** RoboMarket, IdeaVent and Visual Framework are listed as current **selected ventures**, not the company’s exhaustive scope.
- [ ] **NOT RECHECKED:** licence renewal/validity (historic evidence register states expiry 2 December 2026) and qualifications for any additional regulated activity.
- [ ] **NOT RECHECKED:** project-specific operating entity, ownership/IP assignments and commercial availability; avoid unsupported subsidiary/merchant claims.

## 3. Approved visual and assets

- [x] **PASS – source:** original copper sculptural image and all three historic banner images remain extracted from `public/astra-preview.html` without replacement.
- [x] **PASS – source:** lowercase `ai` code mark and `apex innovate` wordmark both use Oxanium at the same font size across breakpoints.
- [x] **PASS – source:** light/off-white editorial palette, shared content gutters, consistent secondary-page header/footer, no dark mode/theme switch.
- [ ] **NOT RECHECKED:** actual desktop and mobile renderings at 360, 390, 768, 1024, 1440 px; baseline alignment, overflow, typography legibility, image sharpness, hover/focus and keyboard use.
- [ ] **NOT RECHECKED:** favicon/icon alignment with the current text-rendered brand mark; old SVG assets remain as source.
- [ ] **NOT RECHECKED:** all external destinations by clicking the rendered banners and CTAs, including the user-approved IdeaVent `ideavent.ae` link.

## 4. Site structure and SEO

- [x] **PASS – source:** `/` directly serves the approved corporate route; `/contact`, `/privacy`, `/terms` have independent page components.
- [x] **PASS – source:** retired service routes redirect to `/#projects`; `/contact` is no longer redirected.
- [x] **PASS – source:** homepage canonical is `https://apexinnovate.ae/`, preview `/astra-reviewed` is `noindex` and is absent from the sitemap.
- [x] **PASS – source:** public sitemap lists `/`, `/contact`, `/privacy`, `/terms`; secondary pages have corresponding canonical metadata.
- [x] **PASS – source:** homepage embeds Organization, WebSite and three ItemList entries with links drawn from the approved `projectDestinations` map.
- [ ] **NOT RECHECKED:** live `robots.txt`, sitemap XML, OG/Twitter tags, index/noindex headers, 308 `www` redirect, canonical HTML, rendered structured data and search-engine indexing after deployment.

## 5. Contact, Terms and Privacy

- [x] **PASS – GitHub source ONLY:** latest Contact code has direct UAE (+971 58 674 9577) and Lebanon (+961 76 713 497) WhatsApp links, with personal LinkedIn and form disclaimer removed. **FAIL – production currency:** user screenshot still shows old LinkedIn card. Live WhatsApp behavior NOT RECHECKED.
- [x] **PASS – updated source:** Privacy notice uses public-facing language concerning WhatsApp enquiries, hosting logs and external font requests, without developer instructions or obsolete theme-switch references.
- [x] **PASS – updated source:** corporate Terms retain project/platform limitations and are written for visitors rather than internal developers.
- [ ] **NOT RECHECKED:** legal sufficiency and exact commercial/technical practices after production release; both WhatsApp direct-link behaviors.

## 6. Documentation and archival source

- [x] **PASS – repository:** `README.md` and `docs/AI_HANDOFF.md` now record the actual November production deployment and explicitly preserve the older October state as historical.
- [x] **PASS – repository:** evidence register retains October provenance as historical, corrected by a November dated reconciliation.
- [x] **PASS – source:** obsolete `src/data/navigation.ts`, old service-page modules and historic HTML are not mistaken for the approved public visual.
- [ ] **NOT RECHECKED:** authenticated production CI workflow/token permissions and full interactive browser regression tests.

## Performance change – separate approved-artwork delivery (review pending)

- [x] **PASS – source:** approved original artwork retained; homepage HTML no longer includes four large base64 image sources.
- [x] **PASS – source:** `/apex-art/hero` and three banner media routes deliver the same original binary images with true detected MIME and one-day cache headers.
- [x] **PASS – preview HTTP:** homepage HTML ≈14,058 characters with 4 external artwork URLs and no inline `data:image/` payload; hero and three banners each returned HTTP 200 with `image/jpeg` and cache headers. Image content-length bytes: hero 194,650; RoboMarket 138,944; IdeaVent 169,622; Visual Framework 113,216.
- [ ] **NOT RECHECKED:** production HTTP/headers, real mobile/desktop screenshots, actual image appearance, load performance/LCP and repeat-visit behavior.
- [ ] **NOT LIVE:** newer performance source has not been published to the official production alias. Do not misinterpret a successful build as a production performance result.
- [x] **PASS – SEO source:** original four canonical sitemap entries remain unchanged; media URLs need no sitemap entries; robots, canonical and JSON-LD entity claims remain unchanged.

## Mandatory future-edit synchronization check

Every website/content/legal/link change must check sitemap, robots, canonicals, structured data, README, AI handoff/AGENTS, acceptance checklist and dated evidence register **in the same PR**. Update changed claims and record any intentionally unchanged files. Never call a merged commit “live” without matching Vercel production provenance and, where available, browser/HTTP verification. Public AI retrieval content must match visible pages; do not expose internal handoff as a public SEO file.

**Checked this pass:** The sitemap still correctly lists only `/`, `/contact`, `/privacy`, `/terms`, so no sitemap edit is warranted. `robots.ts` still references the canonical sitemap. No public `llms.txt` is configured, and none was silently created.

## Verified Google index recovery and focused homepage SEO (15 November 2026)

- **PASS – first-party Search Console via OpenSEO:** `https://apexinnovate.ae/` is now **Submitted and indexed**, with `INDEXING_ALLOWED`, `ALLOWED` robots and successful mobile Google crawl at `2026-11-15T18:06:17Z`. Both Google's canonical and page-declared canonical are `https://apexinnovate.ae/`; Google associates the page with `https://apexinnovate.ae/sitemap.xml`. This supersedes the historical 11 November `noindex` report.
- **Narrow SEO source adjustment (NOT YET LIVE):** the standalone homepage HTML document title is updated to `Apex Innovate FZE LLC | Digital Ventures in the UAE`. The on-page H1, approved hero copy, brand mark, venture descriptions, imagery and site routes are unchanged. The title aligns with verified company identity and positioning, not an unsupported new service.
- **Keyword evidence:** UAE-English research showed very low search volumes for specific generic terms; no claim of improved rankings or performance is made. Prioritize branded/company identity, accurate page descriptors and indexing over keyword stuffing. No change to sitemap or robots was required.
- **Release distinction:** this metadata-only change is a GitHub branch change until a preview build passes, merge is complete, and the official Vercel production alias is verified at the correct deployment SHA. The indexed status refers to Google's prior crawl of the actual live site, not to the new title.

## Next release action

**The latest application change is NOT deployed.** Use an authorized release to publish current approved GitHub source to the existing RoboMarket-team `apex-innovate` project. Then verify rendered behavior against **both** official aliases and all public routes using a working browser or HTTP client. Do not change DNS, migrate the domain to a different Vercel project or disable protection as a workaround. Record the verified deployment SHA, date, test widths and outcomes here before marking this checklist accepted.
