# Apex Innovate – Corporate and Project Evidence Register

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


**Current reconciliation:** 15 November 2026  
**Current release state:** November base at production `b9f1a8a`; latest corrected Contact/legal application `7f551ac` merged to GitHub but **NOT YET LIVE**. Vercel metadata checked; user screenshot confirms outdated Contact page.  
**Historical record:** the October 2026 register is preserved below with its original audit status and evidence limitations.

## 15 November 2026 – Low-risk homepage delivery evidence (NOT YET LIVE)

- Source inspection of the approved `public/astra-preview.html` found four embedded image data URIs (hero plus RoboMarket, IdeaVent and Visual Framework banners), totaling approximately **822 KB of base64 characters**. This is source-derived size, **not a live network timing or compression measurement**.
- New GitHub code serves those **unchanged original image bytes** from dedicated `/apex-art/*` media endpoints with one-day cache headers, removing the base64 data from the returned homepage HTML.
- All four source images carry JPEG byte prefixes, although three original data URIs are labelled `image/png`. The new endpoint detects actual binary MIME without recompression or modification.
- New optimized image routes compiled in a READY preview build. Vercel preview HTTP check: homepage returned 200 and ~14,058-character HTML; all four original-artwork endpoints returned 200, `image/jpeg`, and one-day cache headers (hero 194,650 bytes; RoboMarket 138,944; IdeaVent 169,622; Visual Framework 113,216). **Actual rendered image appearance, production HTTP, LCP and responsive performance remain NOT RECHECKED.**
- The canonical page route list remains `/`, `/contact`, `/privacy`, `/terms`; media endpoints do not appear in sitemap. No changes to robots, canonical URLs or public structured-data claims were necessary.
- Production still serves old application commit `b9f1a8a` as of this recorded comparison. Performance source is not live until a new Vercel production deployment is confirmed.

## Verified Google index recovery and focused homepage SEO (15 November 2026)

- **PASS – first-party Search Console via OpenSEO:** `https://apexinnovate.ae/` is now **Submitted and indexed**, with `INDEXING_ALLOWED`, `ALLOWED` robots and successful mobile Google crawl at `2026-11-15T18:06:17Z`. Both Google's canonical and page-declared canonical are `https://apexinnovate.ae/`; Google associates the page with `https://apexinnovate.ae/sitemap.xml`. This supersedes the historical 11 November `noindex` report.
- **Narrow SEO source adjustment (NOT YET LIVE):** the standalone homepage HTML document title is updated to `Apex Innovate FZE LLC | Digital Ventures in the UAE`. The on-page H1, approved hero copy, brand mark, venture descriptions, imagery and site routes are unchanged. The title aligns with verified company identity and positioning, not an unsupported new service.
- **Keyword evidence:** UAE-English research showed very low search volumes for specific generic terms; no claim of improved rankings or performance is made. Prioritize branded/company identity, accurate page descriptors and indexing over keyword stuffing. No change to sitemap or robots was required.
- **Release distinction:** this metadata-only change is a GitHub branch change until a preview build passes, merge is complete, and the official Vercel production alias is verified at the correct deployment SHA. The indexed status refers to Google's prior crawl of the actual live site, not to the new title.

## Current verified correction to the 25 October production assessment

The previous register said that the production project/account/commit were **UNKNOWN** because access was unavailable in October. That finding was historically valid for that date but **has now been superseded** by connected Vercel metadata:

| Field | 15 November verified state |
| --- | --- |
| Vercel team | RoboMarket – `team_aK7orsaNw316c1bdLjjKFVMy` |
| Production project | `apex-innovate` – `prj_orU3BILg3A4TqZgK4ePPzHmcOnYs` |
| Connected repository/branch | `Joenasriani/apex-innovate`, `main` |
| Confirmed live alias deployment | `dpl_J7LE5saV1WAEtMNL4tsFHTYdmRuP`, Vercel state READY; apex and www aliases assigned |
| Confirmed production commit | `b9f1a8adef7d218d61200d8c1c8c933583b7d41f` (approved November design) |
| Date that production deployment was created | 15 November 2026 |
| GitHub approved application source deployed | `b9f1a8a` (documentation-only updates may follow without application-code changes) |
| Production permission | Developer API access returned 403, but authorized RoboMarket Owner published via Vercel CLI; deployment now READY |
| Direct live webpage/rendered visual inspection | **NOT RECHECKED:** website-fetch/browser sources were inaccessible; Vercel metadata verifies deployment identity, not pixel appearance |

**Updated interpretation (15 November 2026, after Contact merge):** the November base deployment is verified, but production no longer matches current approved GitHub application source. The later `7f551ac` commit removes the personal LinkedIn Contact card and adds UAE/Lebanon WhatsApp contacts; it remains **NOT YET LIVE**. User-supplied mobile screenshot of the old card corroborates the mismatch. Direct HTTP/browser testing still requires a separate pass.

### Company positioning update

The approved current hero presents:
- E-commerce & marketing management · United Arab Emirates.
- “Ideas with forward intent.”
- “Developing and managing businesses, digital platforms, and new ventures.”

This describes **Apex Innovate FZE LLC**, a UAE-registered company, independently of the current three examples on the website. RoboMarket, IdeaVent and Visual Framework are showcased projects, not exclusive business categories or independently proven subsidiaries. Do not include a life-coaching description on the site.

### Live click destinations in current source (not an endpoint-availability guarantee)

- RoboMarket: `https://robomarket.ae`
- IdeaVent: `https://ideavent.ae` – user-specified, **HTTP response NOT VERIFIED**. Historical banner metadata inside `public/astra-preview.html` instead references `https://ideavent.ai`; the rendered route overrides it through `projectDestinations`.
- Visual Framework: `https://visual-framework-system.vercel.app`

Visual Framework's present description expressly mentions **academic psychology and behavioral analysis**. Whether releases, integrations, payments or other project functions are active requires independent review of each project source and actual site.

### Remaining legal and product limitations

The earlier primary-document record lists **licence expiry 2 December 2026**; as of 15 November 2026, renewal/continuing standing has **not been rechecked**. This register does not publish private registrar documents or personal identifying details. Company-project relationships, merchant-of-record, commercial release states, contractual rights, and third-party site operation remain limited by the evidence explicitly recorded below and require fresh verification.

### Evidence provenance

- Connected Vercel project and deployment details read 15 November 2026.
- Connected GitHub `main`, standalone renderer, Next.js routing and private preview project source inspected 15 November 2026.
- Prior corporate licence and project rights information derives from the dated historical register below; not newly revalidated by a regulator.
- Network/browser inability to reach the actual domain is explicitly NOT a 404 finding and NOT proof of correct rendering.

---

## Archived snapshot – 25 October 2026 (HISTORICAL ONLY; NOT CURRENT PRODUCTION STATUS)

*The text below preserves the original assessment as of its historical audit date. Its production-access, design-review and URL statements are not necessarily current. Where the entries conflict with the 15 November reconciliation above, the later verified update prevails.*


**Audit date:** 2026-10-25  
**Status:** REVIEW / evidence-linked / not a claim of product launch  
**Scope:** Apex Innovate FZE LLC, RoboMarket, IdeaVent, Visual Framework.  
**Production changes:** None.

## Corporate identity

- **Licensed legal name:** Apex Innovate FZE LLC.
- **Legal form:** Free Zone Entity / FZE LLC.
- **Authority:** Ajman NuVentures Centre Free Zone, Ajman, United Arab Emirates (not to be abbreviated to a different licensing authority).
- **Incorporation:** 2025-12-03.
- **Documented licence expiry:** 2026-12-02; renewal status must be rechecked when relevant.
- **Manager/shareholder:** Joseph Nasr, based on reviewed primary-document registrar.
- **Working description:** UAE-based company developing and managing selected digital projects.
- **Registration is not independent proof that every proposed service is licensed or commercially operational.**
- **Source:** private APEXINNOVATE_REGISTRAR.md, reviewed from company documents 2026-10-03. Identifiers and private paperwork must not be published.

## Production-source reconciliation – historical October blocker (resolved in November by metadata)

- Public https://www.apexinnovate.ae/ currently renders an older page headed **APEX INNOVATE LLC**, offering enterprise AI services. This is inconsistent with licensed identity and approved current project website.
- DNS configuration for apexinnovate.ae: external Tasjeel name servers ns3.tasjeel.ae / ns4.tasjeel.ae and A record 76.76.21.21 (Vercel-facing). Verified from connected Vercel domain-config endpoint 2026-10-25.
- Connected Vercel account **denied access (403)** for apexinnovate.ae project-domain ownership mapping. Therefore the production Vercel project, account, and deployed commit are **UNKNOWN**.
- Connected preview project: apex-innovate-jo-branch-preview, GitHub Joenasriani/apex-innovate branch JoBranch; prior deployment of commit cf25d6ef is READY. This preview is NOT evidence of production.
- No DNS, aliases, main branch, production project or public site modifications authorized at this stage.
- Completion requires authorized domain owner/hosting administrator to provide production Vercel project access or verifiable project/commit mapping.

## Three-project relationship and release-state register

### RoboMarket
- **Public URL:** https://robomarket.ae/
- **GitHub source and project context:** alaineid/robomarket.ae; independent development and release roadmap records. Joe Nasr's founder/CEO relationship is documented in ONEJOE project evidence records.
- **What it is:** Robotics marketplace and buyer/supplier discovery platform.
- **State:** PUBLICLY AVAILABLE **website**; marketplace transaction completeness and fulfilment are NOT VERIFIED.
- **Apex relationship:** Project associated through founder/user business context; **precise legal operator/merchant of record and any IP ownership or assignment are NOT VERIFIED**. Do not label RoboMarket a separately incorporated Apex subsidiary.
- **Unsupported until checked:** universally available purchase/checkout, fulfilled sales, manufacturers' authorizations, completed Exchange roadmap, expanded GCC availability.
- **Evidence:** current RoboMarket public website /terms and /about; founder evidence ledger; GitHub development history.
- **Next acceptance evidence:** actual available account/enquiry/order flow, marketplace Terms and legal entity, seller arrangements.

### IdeaVent
- **Public URL reference:** https://ideavent.ai/ — public working release NOT VERIFIED.
- **What it is:** Digital event concept development and planning project, intended to create planning outputs.
- **State:** IN DEVELOPMENT on available records; public availability NOT VERIFIED.
- **Apex relationship:** Apex is identified as the proposed platform operator in internal commercial drafts; legal ownership/IP assignment and executed partner agreements must be verified. No signed relationship inferred.
- **Unsupported until checked:** live subscriptions, executed production partnerships, completed event production, available integrated booking/checkout.
- **Evidence:** 2026-07-14 draft IdeaVent partner agreements and checklists (unsigned/pending legal review), development/source records.
- **Next acceptance evidence:** working public functionality, releases, contractual operator and signed agreements if claimed.

### Visual Framework
- **Current application URL:** https://visual-framework-system.vercel.app/
- **GitHub source:** https://github.com/Joenasriani/visual-framework-system-app
- **What it is:** Interactive app for placing and connecting ideas on a visual canvas and viewing/editing their structure.
- **State:** TESTING — working MVP 1.0 implementation with release acceptance open, per current repository README. **Not certified operational/publicly accepted.**
- **Apex relationship:** Associated independent project; legal IP ownership/assignment to Apex NOT VERIFIED. Personal development relationship does not by itself establish corporate ownership.
- **Unsupported until checked:** completed public release acceptance, reliable live AI capabilities, enterprise deployment.
- **Evidence:** project README, CURRENT_PRODUCT_CONTRACT.md, app build-info and current deployment (needs current cross-check).
- **Next acceptance evidence:** compare Help > About, /api/build-info and deployed commit, test actual release acceptance and rights.

## Description discipline

- Corporate copy may say: “Apex Innovate is a UAE-based company developing and managing digital projects across robotics, event planning, and visual technologies.”
- **Do not:** substitute "APEX INNOVATE LLC" for the licensed name; represent Apex as a conventional agency; label all projects fully operational; infer corporate IP ownership, separate incorporation, or licences.
- **Do:** keep statuses explicit in the project descriptions where needed, with the finer distinctions recorded here.
- Consumer/payment/privacy policies belong to the relevant operator/project and must match actual functionality.

## Release blockers

1. **RESOLVED 15 Nov 2026:** production project, owner, deployment SHA, domain aliases and source repository identified; deployed application SHA matches GitHub.
2. Confirm RoboMarket contractual operator and marketplace functions.
3. Verify IdeaVent public state and any partner agreements before claims.
4. Verify Visual Framework current build and release state.
5. Obtain qualified legal review for regulated activities and final website Terms/Privacy if required.
6. Run checks in `docs/apex-acceptance-checklist.md` before production release.
