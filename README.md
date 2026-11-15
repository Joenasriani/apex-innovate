# Apex Innovate FZE LLC

**Apex Innovate** is a UAE-registered company active in **e-commerce and marketing management**, developing and managing businesses, digital platforms, and new ventures. Its present website showcases three selected projects without limiting the company's future business scope.

- **Legal name:** Apex Innovate FZE LLC
- **Jurisdiction:** Ajman NuVentures Centre Free Zone, Ajman, United Arab Emirates
- **Incorporation recorded in the corporate evidence register:** 3 December 2025
- **Canonical public domain:** https://apexinnovate.ae/
- **Source repository:** `Joenasriani/apex-innovate` · branch `main`

## Important: source vs live deployment

**Verified 15 November 2026:** both production aliases serve the approved November application source at GitHub commit `b9f1a8a`. Later documentation-only commits do not change the rendered application.

| Source | Verified state |
| --- | --- |
| GitHub `main` | Approved light editorial redesign, new official pages, broadened corporate hero copy |
| Vercel preview project | Builds of the approved design have reached `READY`; visual/browser interaction acceptance remains open |
| Live `apexinnovate.ae` / `www` | Production deployment `dpl_J7LE5saV1WAEtMNL4tsFHTYdmRuP`, READY, commit `b9f1a8adef7d218d61200d8c1c8c933583b7d41f`, both aliases assigned (15 November 2026) |
| Approved application source | `b9f1a8a` is deployed; subsequent documentation-only commits must not be mistaken for visual divergence |
| Production access | The connected Developer account still lacks direct production deploy permission (403); an authorized RoboMarket Owner CLI deployment successfully published the approved code |

The hosting project has been identified: Vercel **RoboMarket team**, project **`apex-innovate`** (`prj_orU3BILg3A4TqZgK4ePPzHmcOnYs`). The old register's assertion that production ownership/source was unknown is now superseded.

**Deployment identity and commit alignment have been verified via Vercel. Live rendered-page/browser QA is still NOT RECHECKED because page-fetch attempts were unsuccessful. See [AI handoff](docs/AI_HANDOFF.md) and [release checklist](docs/apex-acceptance-checklist.md).

## Approved presentation and scope

- Light editorial, responsive design with a shared content grid and consistent spacing.
- Lowercase **`apex innovate`** wordmark and lowercase **`ai`** code logo, both Oxanium, matching font size at every breakpoint.
- Exact original copper architectural hero image and original three banners extracted **without modification** from `public/astra-preview.html`.
- Hero eyebrow: **E-COMMERCE & MARKETING MANAGEMENT · UNITED ARAB EMIRATES**
- Hero title: **Ideas with forward intent.**
- Hero subtitle: **Developing and managing businesses, digital platforms, and new ventures.**
- Three **selected examples**, not the bounds of Apex's business: RoboMarket, IdeaVent, Visual Framework.
- No life-coaching activity on the public company website.

**Approved click destinations:** RoboMarket `https://robomarket.ae`, IdeaVent `https://ideavent.ae`, Visual Framework `https://visual-framework-system.vercel.app`. The IdeaVent URL is the user's specified destination; independent live response was not obtainable during this audit. Banner images remain unchanged.

## Active website routes and files

| Route | Implementation | State in current GitHub source |
| --- | --- | --- |
| `/` | `src/app/(main)/route.ts` → `src/app/astra-reviewed/route.ts` | Approved corporate homepage, directly served (no extra redirect) |
| `/contact` | `src/app/(main)/contact/page.tsx` | WhatsApp and professional LinkedIn; no contact form |
| `/privacy` | `src/app/(main)/privacy/page.tsx` | Corporate privacy notice |
| `/terms` | `src/app/(main)/terms/page.tsx` | Corporate website terms |
| `/astra-reviewed` | Alternate entry to same renderer | Preview compatibility; `noindex`, not in sitemap |

Legacy `/studio`, `/software`, `/academy`, `/vr`, and `/robomarket` redirect to `/#projects`. Their historical page components, `src/data/navigation.ts`, `index.html`, and older branding assets are **not the approved live homepage**. Preserve them as historical source until separately authorized for removal. They must not be used to reconstruct the public design.

The working design source is `src/app/astra-reviewed/route.ts`; corporate copy is centralized in `src/data/config.ts` (`companyPositioning`). Secondary-page typography and layout live in `src/app/globals.css`, `src/components/layout/*`. Sitemap, metadata, redirects and proxy rules are separate and must remain consistent.

## Governance

- Distinguish **GitHub source**, **Vercel preview**, and **confirmed live production**.
- Do not revert to old dark/split agency layouts or replace the approved artwork.
- Do not describe the company as restricted to its three current ventures.
- Do not infer independent incorporation, licensing, ownership, merchant-of-record roles, purchase availability or completed releases of individual projects.
- Avoid exposing personal registrar paperwork or identifiers.
- Review terms/privacy when behavior or data practices change.

See [AI handoff](docs/AI_HANDOFF.md), [evidence register](docs/apex-corporate-product-evidence-register.md) and [acceptance checklist](docs/apex-acceptance-checklist.md).

## Development

```bash
npm ci
npm run build
npm run dev
```

The GitHub Actions workflow `.github/workflows/deploy-production.yml` is **manual** (`workflow_dispatch`) and needs an authorized `VERCEL_TOKEN`. A successful build does not prove that the production domain was reassigned.
