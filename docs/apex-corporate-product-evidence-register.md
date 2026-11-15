# Apex Innovate – Corporate and Project Evidence Register

**Current reconciliation:** 15 November 2026  
**Current release state:** November base at production `b9f1a8a`; latest corrected Contact/legal application `7f551ac` merged to GitHub but **NOT YET LIVE**. Vercel metadata checked; user screenshot confirms outdated Contact page.  
**Historical record:** the October 2026 register is preserved below with its original audit status and evidence limitations.

## 15 November 2026 – Low-risk homepage delivery evidence (NOT YET LIVE)

- Source inspection of the approved `public/astra-preview.html` found four embedded image data URIs (hero plus RoboMarket, IdeaVent and Visual Framework banners), totaling approximately **822 KB of base64 characters**. This is source-derived size, **not a live network timing or compression measurement**.
- New GitHub code serves those **unchanged original image bytes** from dedicated `/apex-art/*` media endpoints with one-day cache headers, removing the base64 data from the returned homepage HTML.
- All four source images carry JPEG byte prefixes, although three original data URIs are labelled `image/png`. The new endpoint detects actual binary MIME without recompression or modification.
- New optimized image routes were verified to compile in a READY preview build. **Actual HTTP 200/content-type, image appearance, real transfer bytes, LCP and responsive performance remain NOT RECHECKED.**
- The canonical page route list remains `/`, `/contact`, `/privacy`, `/terms`; media endpoints do not appear in sitemap. No changes to robots, canonical URLs or public structured-data claims were necessary.
- Production still serves old application commit `b9f1a8a` as of this recorded comparison. Performance source is not live until a new Vercel production deployment is confirmed.

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
