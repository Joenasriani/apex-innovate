# Apex Innovate FZE LLC

**Apex Innovate** is a UAE-registered company active in **e-commerce and marketing management**, developing and managing businesses, digital platforms, and new ventures. Its present website showcases three selected projects without limiting the company's future business scope.

- **Legal name:** Apex Innovate FZE LLC
- **Jurisdiction:** Ajman NuVentures Centre Free Zone, Ajman, United Arab Emirates
- **Incorporation recorded in the corporate evidence register:** 3 December 2025
- **Canonical public domain:** https://apexinnovate.ae/
- **Source repository:** `Joenasriani/apex-innovate` · branch `main`

## Important: source vs live deployment

**Production/source reconciliation checked 15 November 2026:** the official aliases still serve application commit `b9f1a8a`. GitHub `main` has advanced to application commit `7f551ac` with the two WhatsApp contact cards and revised corporate copy. Those changes are **MERGED / NOT YET LIVE**. Later documentation-only commits do not change the rendered application.

| Source | Verified state |
| --- | --- |
| GitHub `main` | Includes corrected company Contact page (UAE and Lebanon WhatsApp), no personal LinkedIn card, and revised Privacy/Terms – merged as `7f551ac`, **not deployed** |
| Vercel preview project | Builds of the approved design have reached `READY`; visual/browser interaction acceptance remains open |
| Live `apexinnovate.ae` / `www` | Production deployment `dpl_J7LE5saV1WAEtMNL4tsFHTYdmRuP`, READY, commit `b9f1a8adef7d218d61200d8c1c8c933583b7d41f`, both aliases assigned (15 November 2026) |
| Application source status | Production `b9f1a8a`; newer application `7f551ac` remains pending production publication. These are different visual/copy states |
| Production access | The connected Developer account still lacks direct production deploy permission (403); an authorized RoboMarket Owner CLI deployment successfully published the approved code |

The hosting project has been identified: Vercel **RoboMarket team**, project **`apex-innovate`** (`prj_orU3BILg3A4TqZgK4ePPzHmcOnYs`). The old register's assertion that production ownership/source was unknown is now superseded.

**Production identity is verified via Vercel, but deployment is behind the latest application source. The old Contact page on production is independently illustrated by a user-supplied mobile screenshot. Direct browser/HTTP regression testing remains NOT RECHECKED. See [AI handoff](docs/AI_HANDOFF.md) and [release checklist](docs/apex-acceptance-checklist.md).

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
| `/contact` | `src/app/(main)/contact/page.tsx` | **GitHub `main` only / NOT YET LIVE:** UAE WhatsApp `+971 58 674 9577`, Lebanon WhatsApp `+961 76 713 497`, no personal LinkedIn. The deployed older version still has the LinkedIn card |
| `/privacy` | `src/app/(main)/privacy/page.tsx` | Corporate privacy notice |
| `/terms` | `src/app/(main)/terms/page.tsx` | Corporate website terms |
| `/astra-reviewed` | Alternate entry to same renderer | Preview compatibility; `noindex`, not in sitemap |

Legacy `/studio`, `/software`, `/academy`, `/vr`, and `/robomarket` redirect to `/#projects`. Their historical page components, `src/data/navigation.ts`, `index.html`, and older branding assets are **not the approved live homepage**. Preserve them as historical source until separately authorized for removal. They must not be used to reconstruct the public design.

The public site uses a company-only Organization schema (no personal-profile entity) and customer-facing Privacy/Terms language. Both contact cards open direct WhatsApp chats using `wa.me` links. The working design source is `src/app/astra-reviewed/route.ts`; corporate copy is centralized in `src/data/config.ts` (`companyPositioning`). Secondary-page typography and layout live in `src/app/globals.css`, `src/components/layout/*`. Sitemap, metadata, redirects and proxy rules are separate and must remain consistent.

## Low-risk image delivery optimization (pending production)

The approved homepage now serves **short HTML** with original image bytes requested separately from `/apex-art/hero`, `/apex-art/robot-venture`, `/apex-art/event-venture` and `/apex-art/framework-venture`. `src/app/apex-art/[asset]/route.ts` decodes the **unchanged original embedded data**, identifies the actual image MIME type, and permits a one-day browser/CDN cache. The visible image URLs are implementation details and are **not sitemap entries**. The sculptural hero retains its approved display CSS and receives high fetch priority; venture images remain lazy-loaded. The HTML renderer caches its original source read within a warm server instance.

This is a performance code change, **NOT YET LIVE** until an authorized production deploy includes the merged change. Build success alone is not image-response or user-experience validation; verify all four image endpoints, dimensions, mobile crop, and transfer/performance metrics in the actual deployed build. No image was resized or recompressed.

## Every-edit synchronization requirement

For any future edit, review the **sitemap and robots rules, canonicals, public structured data, README, AI handoff, agent instructions, acceptance checklist and evidence register** against both the edited source and the actual production deployment. Update only surfaces genuinely affected and include the check in the same PR. A new GitHub commit is **not live** until the correct Vercel production deployment is confirmed. Avoid putting private AI handoff data into publicly crawlable files. The authoritative checklist is [AGENTS.md](AGENTS.md).

**Current release gate:** publish the reviewed `7f551ac` application source (or its later exact approved application successor) to the existing RoboMarket-team Apex Vercel production project; then verify the live Contact page, both direct WhatsApp URLs and removal of LinkedIn.

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
