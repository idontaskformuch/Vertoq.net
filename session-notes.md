# Session notes

## Current goal
Content depth per content-brief-fitness-cluster.md, build order BMI → TDEE.

## Decisions made
- BMI page (`/{lang}/bmi/`) is now content-depth-treated on all 10 languages: What is BMI, WHO adult classification table, CDC children/teens percentile table, formula + worked example (metric + US), BMI Prime, health risk context, Limitations (adults vs children/teens), related-calculator link to TDEE.
- WHO/CDC numbers and formula constants are kept character-identical across all languages (decimal point, not comma) so they're trivially diffable; only surrounding prose/labels are translated per language.
- Content lives in `src/i18n/bmiContent.ts` (single source of truth, one Astro template renders all languages) rather than duplicating markup per language.
- BMI FAQ (`src/i18n/faq.ts`) replaced on all 10 languages: old 3 questions were redundant with the new body copy, swapped for muscular/athletic accuracy, measurement frequency, BMI vs body fat percentage.
- **ja/zh/ko/hi/id need external native-speaker review** when time allows, especially if traffic picks up on those locales — translations were done in-house, not by native speakers.

## Files touched
- `src/pages/[lang]/bmi/index.astro` — rewritten to render from `bmiContent[lang]` generically
- `src/i18n/bmiContent.ts` — new, all 10 languages
- `src/i18n/faq.ts` — bmi FAQ entries replaced, all 10 languages
- `src/styles/global.css` — added `.content-block`, `.data-table`, `.table-scroll` styles

## Next step
Same content-depth treatment on the TDEE page. The TDEE calculator page already exists and works (`src/pages/[lang]/tdee/index.astro`, `TdeeCalculator.astro`) but has no content-depth sections yet — same gap BMI had before this session. Follow content-brief-fitness-cluster.md section 2.
