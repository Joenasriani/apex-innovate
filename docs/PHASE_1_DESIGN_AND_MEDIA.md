# Phase 1 – design and media specification (2026-11-25)
Governing plan: THREE_PHASE_REDESIGN.md. Production unchanged.

## Art direction
Editorial technology exhibition. Ivory (#F5F3EF), near-black (#171918), copper accent (#A66B45); proposed design tokens, validate contrast. Oxanium wordmark retained, readable sans-serif body. Desktop 12-column grid, mobile 4-column grid; fluid type, tight heading leading (1.05–1.15), body 1.5. Native scroll by default. No decorative abstract shapes, mandatory hover, forced media stretching, or invented imagery. Hero: actual project screens in cinematic composition, clear headline and direct Work/Contact anchors. Desktop media-led asymmetric sections, mobile single-column content with touch controls. Services each pair short factual copy with relevant work; work categories retain their approved order. Projects retain direct external links. Founder archive linked once with explicit attribution.

## Source reconciliation
- RoboSim: canonical source Joenasriani/robo-web-sim README explicitly identifies public game https://joenasr.itch.io/robosim and simulator https://robo-web-sim.vercel.app. Joenasriani/robosim README identifies itself as alternate development copy. Public copy: Program a robot and navigate interactive 3D environments.
- Brick XR Builder: Joenasriani/legocraft README confirms browser-based brick construction; https://legocraftvr.vercel.app/. Public copy: Build, edit and explore digital brick structures in 3D. Avoid verified-headset claims.
- DIORAMA: Joenasriani/diorama-game README confirms 25 levels, mechanical puzzles and browser edition https://diorama-game.vercel.app/. Public copy: Guide a robot through miniature worlds using bridges, lifts and switches.
- ASCENSION: Joenasriani/ascension-opt README confirms canonical playable distribution, 21 levels, https://joenasriani.github.io/ascension-opt/. the-ascension-game README confirms earlier build. Public copy: Rotate architecture and connect paths in a 3D spatial puzzle.
- Reasoning & Logic: reasoning-library README confirms canonical catalogue https://reasoning-and-logic.vercel.app/ and documented book offer. Public copy: Digital publications exploring reasoning, logic and structured knowledge. Link to catalogue; do not duplicate prices or checkout.
- Existing venture descriptions remain in src/data/ventures.ts.
- Founder production shortlist: ELIE SAAB x EMAAR, Etihad Airways Choose Well, Pepsi Arabia; video IDs and attribution in governing plan. Use click-to-load original embeds or outbound links, not ripped video files. E! News not included until exact record identified.

## Service-to-work mapping
AI development: demonstrate only verified AI features of actual products; otherwise factual service copy.
Software development: IdeaVent, Visual Framework, interactive projects.
Social media marketing: founder campaign examples, precise contribution labels.
Digital content: founder video and post-production, interactive work.
E-commerce: RoboMarket and Reasoning & Logic catalogue.
AI research & innovation consultancy: research publications and frameworks; do not imply completed client consulting.

## Technical direction
Existing Next.js 16.1.6 / React 19.2.3. Prefer vanilla Three.js ES modules and GSAP as shared client-side enhancement with same semantic HTML in Pages and production. Native scroll; Lenis optional only after measured benefit. Single visible canvas where needed, lazy initialization, device pixel ratio cap, pause offscreen, dispose GPU resources, preserve aspect ratios, reduced-motion and no-WebGL fallback. Use poster-first video and opt-in third-party embeds. Pin versions after licence and build compatibility checks. No dependency installed yet.

## Acceptance evidence
Source identity reconciliation complete for flagship interactive projects. Media paths documented in prior inventory; binary inspection/copy, actual live playback, rights, final copy review and dependency build checks remain open. Design specification is a proposed implementation interpretation of frozen plan, not rendered approval. No production changes.
