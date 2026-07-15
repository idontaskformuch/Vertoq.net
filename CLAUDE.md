# vertoq.net — Project Context

## Overview
Multilingual calculator/converter website. Built with **Astro**, hosted on **Cloudflare Pages**.
Goal: real organic growth — become genuinely useful, well-ranked calculator content, not just AdSense-approved.

## Stack
- Framework: Astro
- Hosting: Cloudflare Pages
- Languages: 10 (multilingual, hreflang tagging in place)
- Monetization: Google AdSense (currently flagged "low value content" — being resolved via content depth, not workarounds)

## Current priorities (in order)
1. **Content depth**: Every calculator page needs substantive, compact content — formula explained, use-case, sources. Start with BMI (`/en/bmi/` and locale equivalents) and TDEE.
2. **Site restructure**: Reorganizing site/content architecture — see active session notes before assuming current structure is final.
3. **Technical cleanup**:
   - Duplicate content indexed on `vertoq-net.pages.dev` subdomain (should canonical to vertoq.net or be noindexed)
   - Low cache hit rate on Cloudflare
   - Unexplained traffic on port 8443 — investigate before dismissing as legitimate
4. **SEO**: Internal linking between related calculators, long-tail keyword targeting (e.g. narrower queries vs. head terms already dominated by calculator.net / omnicalculator).

## Content briefs
Per-cluster content briefs live in `docs/content-briefs/`. Read the relevant brief before writing or revising content for a calculator in that cluster.
- @docs/content-briefs/content-brief-fitness-cluster.md
- @docs/content-briefs/content-brief-finance-cluster.md
- @docs/content-briefs/content-brief-math-cluster.md
- @docs/content-briefs/content-brief-other-cluster.md

## Known noise (do not treat as real traffic/bugs)
- Heavy bot/scanner traffic hitting `/wp-admin/install.php`, `/wp-includes/wlwmanifest.xml` under various fake paths (`/wp1/`, `/wp2/`, `/test/`, `/wordpress/`). Site has no WordPress — these are opportunistic vulnerability scans, safe to ignore or block via WAF later.
- `2a06:98c0:3600::103` in Cloudflare logs is Cloudflare's own IPv6 range — not an external visitor.

## Working conventions
- Be specific in task requests; avoid open-ended "improve the site" prompts that trigger full-repo exploration.
- Prefer small, scoped commits per calculator/page rather than sweeping rewrites.
- Before ending a session, write/update `session-notes.md` in repo root with: decisions made, files touched, current goal, next step. Read it at the start of the next session.
- Genuine content quality is the target — no thin/auto-generated filler, no keyword stuffing.

## Do not
- Don't assume WordPress-related paths/logic are relevant to this codebase.
- Don't optimize purely for AdSense approval at the expense of actual content usefulness — the two should converge, not trade off.
