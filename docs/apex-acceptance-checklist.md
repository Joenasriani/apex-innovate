# Apex Innovate – Production acceptance and reconciliation checklist

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

## Mandatory future-edit synchronization check

Every website/content/legal/link change must check sitemap, robots, canonicals, structured data, README, AI handoff/AGENTS, acceptance checklist and dated evidence register **in the same PR**. Update changed claims and record any intentionally unchanged files. Never call a merged commit “live” without matching Vercel production provenance and, where available, browser/HTTP verification. Public AI retrieval content must match visible pages; do not expose internal handoff as a public SEO file.

**Checked this pass:** The sitemap still correctly lists only `/`, `/contact`, `/privacy`, `/terms`, so no sitemap edit is warranted. `robots.ts` still references the canonical sitemap. No public `llms.txt` is configured, and none was silently created.

## Next release action

**The latest application change is NOT deployed.** Use an authorized release to publish current approved GitHub source to the existing RoboMarket-team `apex-innovate` project. Then verify rendered behavior against **both** official aliases and all public routes using a working browser or HTTP client. Do not change DNS, migrate the domain to a different Vercel project or disable protection as a workaround. Record the verified deployment SHA, date, test widths and outcomes here before marking this checklist accepted.
