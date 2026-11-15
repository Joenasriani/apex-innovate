# Apex Innovate – Repository agent instructions

This repository belongs to **Apex Innovate FZE LLC**. Before modifying anything, read:

1. [docs/AI_HANDOFF.md](docs/AI_HANDOFF.md) – approved design, active routing, current deployment provenance, exact copy and restrictions.
2. [README.md](README.md) – public company identity, runtime and active routes.
3. [docs/apex-acceptance-checklist.md](docs/apex-acceptance-checklist.md) – pass/not-rechecked/blocked evidence.
4. [docs/apex-corporate-product-evidence-register.md](docs/apex-corporate-product-evidence-register.md) – corporate/product records with dated historical corrections.

## Mandatory synchronization gate for EVERY website edit

Every change to public code, copy, links, design, legal pages, metadata, SEO or routing must review and, when affected, update **all** of the following **in the same pull request**:

1. Active pages and structured data: homepage HTML route, Contact, Privacy, Terms, page titles/descriptions, company Organization and venture ItemList.
2. Search/AI discovery: `src/app/sitemap.ts` (only real canonical public routes), `src/app/robots.ts`, canonicals, `src/proxy.ts`, visible company copy and any public `llms.txt` **if it exists**. Do not create a hidden crawler-only page, duplicate sitemap routes or private knowledge dumps; a missing optional `llms.txt` is not a search defect.
3. Repository source of truth: `README.md`, `docs/AI_HANDOFF.md`, `AGENTS.md`, `docs/apex-acceptance-checklist.md`, and the dated corporate evidence register **when evidence changes**. Preserve dated historical findings as history.
4. Live reality: check GitHub `main` SHA, Vercel production alias deployment SHA and actual HTTP/browser outcomes separately. **Never label merged/preview work as live.** If deployment is pending, explicitly mark **MERGED / NOT YET LIVE**, record both SHAs, and keep the reconciliation open until owner-authorized production deployment and real-site verification.

A sitemap or robots file does **not** need a cosmetic commit when the valid route set is unchanged; record the check instead. Documentation-only commits must never trigger claims of a newly published application. Keep credentials, access details, unreleased commercial information, and personal records out of public retrieval files. Do not adjust the approved design or code solely to paper over stale live deployment.

## Non-negotiable continuity

- **Do not mistake GitHub `main`, a Vercel preview, and the official live deployment for the same state.** Verify project, team, exact commit, deployment and domain before claiming that changes are live.
- The approved website is the light editorial design, with the exact original copper sculptural hero and three original venture banners from `public/astra-preview.html`. Never generate substitute images or revert to the old agency/service-card design.
- Keep **`apex innovate`** and the **`ai`** mark lowercase, all Oxanium, matching font size per breakpoint; no mixed typefaces inside a word.
- Apex is a UAE company active in **e-commerce and marketing management**, developing businesses, digital platforms and new ventures. Its three displayed projects are examples, not the company's boundaries. Do not introduce life coaching into public positioning.
- Update `src/data/config.ts` (central `companyPositioning`) if public positioning changes, and verify that homepage/SEO/README/handoff remain aligned.
- Current approved project click destinations are defined in `projectDestinations` in `src/app/astra-reviewed/route.ts`. Do not let embedded legacy asset metadata override them.
- Active public pages: `/`, `/contact`, `/privacy`, `/terms`. Retired service pages and archived `index.html` are **not** the current visual contract.
- Any changed file must be build-tested on a preview branch. Merge reviewed changes only. Production is an independent operation requiring permission in the **RoboMarket Vercel team**; never move domains, bypass auth or infer success from merge alone.
- Clearly distinguish **verified**, **historical**, **inferred**, **blocked** and **not rechecked**. Keep old evidence as dated history rather than deleting contradictory prior records without explanation.

There are no credentials or private registry identifiers in these public handoff documents.
