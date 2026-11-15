# Apex Innovate FZE LLC

Apex Innovate is a UAE-based company developing and managing selected digital ventures.

**Legal name:** Apex Innovate FZE LLC  
**Jurisdiction:** Ajman NuVentures Centre Free Zone, Ajman, United Arab Emirates  
**Incorporated:** 3 December 2025  
**Production:** https://apexinnovate.ae/  
**Repository:** `Joenasriani/apex-innovate` (default branch `main`)

## Approved public scope

A concise, light corporate website presenting exactly three ventures:

1. **RoboMarket** – robotics marketplace and supplier discovery.
2. **IdeaVent** – event concept development and planning.
3. **Visual Framework** – academic psychology and behavioral analysis concept-mapping.

Project descriptions are informational; project platforms retain their own commercial conditions, availability and privacy disclosures.

## Official routes

- `/` – direct corporate homepage rendered by `src/app/(main)/route.ts` from the approved `src/app/astra-reviewed/route.ts` renderer.
- `/contact` – published business communication channels (WhatsApp and professional LinkedIn).
- `/privacy` – corporate website Privacy Notice.
- `/terms` – corporate Website Terms.
- `/astra-reviewed` – retained for review compatibility but excluded from indexing and the sitemap.

Legacy `/studio`, `/software`, `/academy`, `/vr` and `/robomarket` URLs redirect to `/#projects`.

The original copper sculptural hero image and all three approved venture banners are sourced unchanged from `public/astra-preview.html`. The wordmark `apex innovate` and `ai` code symbol use a uniform Oxanium font and matching font size at each breakpoint.

The shared company Contact, Privacy and Terms pages use consistent responsive typography, gutters, navigation and footer. The public sitemap comprises `/`, `/contact`, `/privacy`, and `/terms`.

## Operational rules

A GitHub merge is not confirmation of production deployment. Check the actual Vercel production alias and verify site routes, destinations and responsiveness after deployment. Legal pages must be updated when site behavior or data practices change.

## Local development

```bash
npm install
npm run build
npm run dev
```
