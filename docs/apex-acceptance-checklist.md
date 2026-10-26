# Apex Innovate — Pre-release acceptance checklist

**Prepared:** 2026-10-25. **Status:** PRE-RELEASE / NOT ACCEPTED.

## 1. Production provenance (BLOCKED)

- [ ] DNS owner and hosting administrator identify the production project associated with `www.apexinnovate.ae` and `apexinnovate.ae`.
- [ ] Record production provider/account, project ID, Git repository, branch, commit SHA, deployment URL, and custom domain/alias.
- [ ] Check external registrar DNS and Vercel domain assignment match that production project.
- [ ] Verify old public `APEX INNOVATE LLC` page's actual source; no assumption that JoBranch serves the domain.
- [ ] Confirm rollback path for the actual live deployment. **Never deploy solely to resolve a provenance question.**

## 2. Legal identity (DOCUMENT VERIFIED; LIVE FIX BLOCKED)

- [x] Registrar verified legal name Apex Innovate FZE LLC.
- [x] Registrar verified Ajman NuVentures Centre Free Zone, Ajman UAE.
- [x] Registrar verified manager/shareholder Joseph Nasr.
- [ ] Production copy and footer show correct legal name and actual authority.
- [ ] Check licence term/current standing and applicable commercial activities when release is approved.
- [ ] Obtain expert review for any activities requiring additional permissions.

## 3. Product attribution (PARTIAL)

- [x] Selected list restricted to RoboMarket, IdeaVent, Visual Framework.
- [x] Public copy distinguishes public website, developing platform and working implementation.
- [ ] Verify legal operator/merchant of record of RoboMarket; demonstrate actually working functions.
- [ ] Verify current IdeaVent release state, publicly available features, ownership and any executed agreements before making stronger claims.
- [ ] Compare Visual Framework `/api/build-info`, Help > About, main SHA; verify human release acceptance.
- [ ] Confirm Apex's contractual role and IP rights before adding `owns`, `operates`, `subsidiary` or `parentOrganization` structured-data claims.
- [ ] All three project URLs resolve to intended official sites (no stale preview).

## 4. SEO / AI retrieval

- [x] JoBranch page has machine-readable project titles/descriptions and stable Organization identity.
- [ ] Remove duplicated/conflicting JSON-LD Organization nodes or reconcile all properties once final rendering is established.
- [ ] Only index production canonical domain; preview stays `noindex` and excluded from canonical sitemap.
- [ ] Per-page canonical for Terms and Privacy; no homepage canonical inherited by legal pages.
- [ ] Ensure visible title, description, OG/Twitter tags, JSON-LD and README use same current identities and release statuses.
- [ ] Check `robots.txt`, sitemap XML, response code, rendered DOM and structured data on actual production host.
- [ ] Do not use `sameAs` to equate Apex, Joe, or three products.

## 5. Legal / privacy and consumer status

- [ ] Confirm live Terms and Privacy match working site: contact method, cookies/local storage, analytics/logging and linked project handling.
- [ ] Do not present corporate policy as substitutes for marketplace, SaaS or software project-specific policies.
- [ ] Confirm checkout/payments, refund/warranty and supplier responsibility in relevant project's policies before making claims.

## 6. UI / accessibility / mobile

- [ ] Test 360, 390, 768, 1024, 1440 px widths on actual rendered deployment.
- [ ] Heading hierarchy H1 company, sensible section headings and project modules.
- [ ] Each approved banner displays without clipping, stretching or horizontal overflow and has meaningful text outside image.
- [ ] Keyboard focus, contrast, reduced-motion preferences, light/dark toggle and links tested.
- [ ] Verify working homepage and policy routes; avoid shadow legacy pages that disagree with production.

## Release decision

**HOLD** while production hosting access, project operating rights and applicable legal confirmations remain open. The preview can be reviewed without publishing. Approval requires reviewer name, test date, commit SHA, evidence of all critical checks and explicit production authorization.
