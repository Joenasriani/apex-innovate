# Apex Innovate – Production acceptance and reconciliation checklist

**Reviewed:** 15 November 2026  
**Release decision:** **HOLD / NOT LIVE-CONFIRMED**  
**Approved UI:** Light editorial corporate site in GitHub `main`; site metadata proves the official domain still points to an older Vercel production deployment.

## Evidence levels

- **PASS – repository/source:** inspected in GitHub and corroborated by build output where available.
- **PASS – deployment metadata:** verified directly from connected Vercel API, *not* a browser rendering.
- **NOT RECHECKED:** requires a working live browser, external endpoint response or fresh regulator/operational evidence.
- **BLOCKED:** cannot proceed with current authorization.

Do not convert a code-level PASS into a live-production PASS.

## 1. Identity, provenance and deployment

- [x] **PASS – Vercel metadata:** production project identified as `RoboMarket / apex-innovate`, project `prj_orU3BILg3A4TqZgK4ePPzHmcOnYs`.
- [x] **PASS – Vercel metadata:** `apexinnovate.ae` and `www.apexinnovate.ae` are assigned to that project; last confirmed production deployment is `dpl_5K9RcxDxBcEyTpTuNsrxxCH9jCfM` at commit `a92d3e0e134e90702766030fa75a000714a7405b` (27 October 2026).
- [x] **PASS – GitHub source:** approved November light design, official pages and broad corporate positioning are merged into `Joenasriani/apex-innovate` `main`.
- [ ] **BLOCKED – publish:** direct Vercel API attempt to deploy `main` to production returned HTTP 403 (permission denied). Authorized account or already configured manual CI workflow is needed.
- [ ] **NOT RECHECKED:** current DNS registrar ownership, domain certificate, live HTTP page responses, and production rollback mechanism.
- [ ] **NOT RECHECKED:** demonstrate that the production domain is serving the newly merged commit after an authorized deployment.

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

- [x] **PASS – source:** Contact page exposes WhatsApp and professional LinkedIn without implying an active contact form.
- [x] **PASS – source:** Privacy notice no longer describes a retired theme-switch localStorage preference; it discloses hosting logs and external font requests.
- [x] **PASS – source:** corporate Terms distinguish their scope from separate project/platform contracts and data practices.
- [ ] **NOT RECHECKED:** legal sufficiency and exact commercial/technical practices after production release; external messaging/LinkedIn link behavior.

## 6. Documentation and archival source

- [x] **PASS – repository:** `README.md` and `docs/AI_HANDOFF.md` document both approved code and the actual older production deployment.
- [x] **PASS – repository:** evidence register retains October provenance as historical, corrected by a November dated reconciliation.
- [x] **PASS – source:** obsolete `src/data/navigation.ts`, old service-page modules and historic HTML are not mistaken for the approved public visual.
- [ ] **NOT RECHECKED:** authenticated production CI workflow/token permissions and full interactive browser regression tests.

## Next release action

An authorized Vercel production deploy must target **the existing RoboMarket-team `apex-innovate` project**, using the reviewed GitHub `main` commit. It must then be verified against **both** actual aliases and all public routes. Do not change DNS, migrate the domain to a different Vercel project or disable protection as a workaround. Record the verified deployment SHA, date, test widths and outcomes here before marking this checklist accepted.
