# Apex Innovate – Continuity guide

Apex Innovate FZE LLC is a UAE-registered company. The newwebsite branch prepares its expanded corporate website around six proposed activities: AI development, software development, social media marketing, digital content, e-commerce, and AI research and innovation consultancy. Preserve the approved light editorial design, original copper hero and three original venture banners, lowercase Oxanium brand, and both WhatsApp contact channels. The selected ventures are RoboMarket (https://robomarket.ae), IdeaVent (https://ideavent.ai), and Visual Framework (https://visual-framework-system.vercel.app).

## Approved source map

- Homepage: `src/app/astra-reviewed/route.ts`, served at / via the main route.
- Contact, Privacy and Terms: `src/app/(main)/`; shared layout components in `src/components/layout/`.
- Company and venture copy: `src/data/config.ts`, `src/data/ventures.ts`.
- SEO and structured data: `src/lib/seo.ts`, `src/app/layout.tsx`, sitemap, robots and proxy.
- Original artwork: `source-assets/astra-preview.html` and media route. Preserve artwork bytes.
- Approved brand: lowercase Oxanium code mark and wordmark, original light editorial design.
- Production release: existing authorized GitHub Actions workflow `.github/workflows/deploy-production.yml`, existing RoboMarket team Apex project. Preview project is separate.

Current task status and verification evidence: [acceptance register](apex-acceptance-checklist.md). Historical engineering and evidence records are retained in the Git revision `0745f45d6f6979c79511fb6677d60f983396451a` of these documents. Historical observations describe their respective dates, not current operating conditions.


## newwebsite – licence-gated development (25 November 2026)

User-approved direction: advertise exactly six proposed ANCFZ activities (6201015, 620118ANC, 6202099, 6202011, 4790001, 6209015); no training. Proposed marketing copy is centralized in `src/data/capabilities.ts` and company positioning in `src/data/config.ts`. Preserve original artwork, venture links and contacts. This branch is not authorized for production until the issued licence and service scope are verified. Existing release evidence refers to main only. Build, rendered QA and deployment protection must be verified before acceptance. No new analytics, form, email, or privacy practices introduced.
