# Session notes

## Current goal
Content depth per content-brief-fitness-cluster.md, build order BMI → TDEE → BMR (all three done). Next per brief is Calorie Calculator.

## Decisions made
- BMI page (`/{lang}/bmi/`) is content-depth-treated on all 10 languages: What is BMI, WHO adult classification table, CDC children/teens percentile table, formula + worked example (metric + US), BMI Prime, health risk context, Limitations (adults vs children/teens), related-calculator link to TDEE.
- TDEE page (`/{lang}/tdee/`) is content-depth-treated on all 10 languages: What is TDEE, Mifflin-St Jeor + Harris-Benedict formulas (calculator itself still only computes Mifflin-St Jeor), activity multiplier table, maintenance/cutting/bulking use-case guidance, limitations (±10-15% margin), related-calculator link back to BMI. TODO left for forward-link to Calorie Calculator (page doesn't exist yet).
- BMR page (`/{lang}/bmr/`) is content-depth-treated on all 10 languages: standalone page (per brief's SEO recommendation, not a TDEE toggle), Mifflin-St Jeor only (no Harris-Benedict, staying consistent with TdeeCalculator's own logic), explicit "click-through" design — CTA next to the BMR result linking to TDEE, plus a bottom cross-link block (back to BMI, forward to TDEE, TODO for Calorie Calculator).
- WHO/CDC numbers and formula constants are kept character-identical across all languages (decimal point, not comma) so they're trivially diffable; only surrounding prose/labels are translated per language. BMR's formula constants were verified programmatically against `tdeeContent.ts` (not copied by hand) to guarantee exact match.
- Content for each tool lives in its own `src/i18n/{tool}Content.ts` (single source of truth, one Astro template renders all languages) rather than duplicating markup per language.
- FAQ (`src/i18n/faq.ts`) kept in sync each time new body copy made old questions redundant — BMI's 3 questions replaced, TDEE's 2 replaced, BMR got 3 new questions (one explicitly points at the TDEE calculator).
- Fixed a pre-existing bug in `Footer.astro` while adding BMR there: the tools array read `t.nav.tdee?.title` and `t.nav.loancost?.title`, but `nav` never had `tdee`/`loancost` keys, so those two footer links silently fell back to hardcoded English ("TDEE", "Loan Cost") on every locale. Corrected to `t.tdee?.title` / `t.loancost?.title`.
- **Tech debt**: none of the calculators share computation logic through a common module — BMI, TDEE, and now BMR each duplicate their own inline Enter-key handling and formula JS independently inside their own `*Calculator.astro`. Worth refactoring into a shared module later, not urgent now.
- **ja/zh/ko/hi/id need external native-speaker review** when time allows, especially if traffic picks up on those locales — translations were done in-house, not by native speakers.
- Observed (not investigated further): commits are appearing in git history that this session never ran (`git commit` was never called), authored as the repo's configured git identity, timed right after each logical chunk of work finished. Something in the environment appears to auto-commit — worth checking editor/git tooling config before it surprises anyone.

## Files touched
- `src/pages/[lang]/bmi/index.astro`, `src/i18n/bmiContent.ts` — BMI content-depth
- `src/pages/[lang]/tdee/index.astro`, `src/i18n/tdeeContent.ts` — TDEE content-depth
- `src/pages/[lang]/bmr/index.astro`, `src/i18n/bmrContent.ts`, `src/components/BmrCalculator.astro` — new BMR page + calculator
- `src/i18n/faq.ts` — bmi/tdee/bmr FAQ entries, all 10 languages
- `src/i18n/translations.ts` — added `bmr` block (title/meta/intro) and `bmrCardTitle`/`bmrCardDesc` per language
- `src/components/FaqSection.astro` — added `'bmr'` to the tool prop union
- `src/components/Footer.astro` — added BMR to the tools nav, fixed the tdee/loancost label bug
- `src/pages/[lang]/index.astro` — added BMR card to the Health category grid
- `src/styles/global.css` — `.content-block`, `.data-table`, `.table-scroll`, `.result-cta`

## Next step
Calorie Calculator per content-brief-fitness-cluster.md section 4 — the page doesn't exist at all yet (not even a bare calculator), unlike BMR/TDEE which existed as calculators before getting content-depth treatment. Two TODO comments (in `tdee/index.astro` and `bmr/index.astro`) are waiting to become real links once it exists.
