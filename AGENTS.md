# Apex Innovate – Repository agent instructions

This repository belongs to **Apex Innovate FZE LLC**. Before modifying anything, read:

1. [docs/AI_HANDOFF.md](docs/AI_HANDOFF.md) – approved design, active routing, current deployment provenance, exact copy and restrictions.
2. [README.md](README.md) – public company identity, runtime and active routes.
3. [docs/apex-acceptance-checklist.md](docs/apex-acceptance-checklist.md) – pass/not-rechecked/blocked evidence.
4. [docs/apex-corporate-product-evidence-register.md](docs/apex-corporate-product-evidence-register.md) – corporate/product records with dated historical corrections.

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
