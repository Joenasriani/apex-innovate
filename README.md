# Apex Innovate FZE LLC

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

This is a performance code change, **NOT YET LIVE** until an authorized production deploy includes the merged change. The Vercel preview returned HTTP 200 for homepage and all four artwork endpoints; each image reported `image/jpeg`, with a one-day cache header. The preview homepage HTML was approximately **14 KB** and contained no `data:image/` payload. Real mobile/desktop appearance, first-load timings and production delivery remain NOT RECHECKED. No image was resized or recompressed.

## Every-edit synchronization requirement

For any future edit, review the **sitemap and robots rules, canonicals, public structured data, README, AI handoff, agent instructions, acceptance checklist and evidence register** against both the edited source and the actual production deployment. Update only surfaces genuinely affected and include the check in the same PR. A new GitHub commit is **not live** until the correct Vercel production deployment is confirmed. Avoid putting private AI handoff data into publicly crawlable files. The authoritative checklist is [AGENTS.md](AGENTS.md).

**Current release gate:** publish the reviewed `7f551ac` application source (or its later exact approved application successor) to the existing RoboMarket-team Apex Vercel production project; then verify the live Contact page, both direct WhatsApp URLs and removal of LinkedIn.

## Verified Google index recovery and focused homepage SEO (15 November 2026)

- **PASS – first-party Search Console via OpenSEO:** `https://apexinnovate.ae/` is now **Submitted and indexed**, with `INDEXING_ALLOWED`, `ALLOWED` robots and successful mobile Google crawl at `2026-11-15T18:06:17Z`. Both Google's canonical and page-declared canonical are `https://apexinnovate.ae/`; Google associates the page with `https://apexinnovate.ae/sitemap.xml`. This supersedes the historical 11 November `noindex` report.
- **Narrow SEO source adjustment (NOT YET LIVE):** the standalone homepage HTML document title is updated to `Apex Innovate FZE LLC | Digital Ventures in the UAE`. The on-page H1, approved hero copy, brand mark, venture descriptions, imagery and site routes are unchanged. The title aligns with verified company identity and positioning, not an unsupported new service.
- **Keyword evidence:** UAE-English research showed very low search volumes for specific generic terms; no claim of improved rankings or performance is made. Prioritize branded/company identity, accurate page descriptors and indexing over keyword stuffing. No change to sitemap or robots was required.
- **Release distinction:** this metadata-only change is a GitHub branch change until a preview build passes, merge is complete, and the official Vercel production alias is verified at the correct deployment SHA. The indexed status refers to Google's prior crawl of the actual live site, not to the new title.

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
