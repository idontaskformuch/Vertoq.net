# Content Brief — Fitness & Health Calculator Cluster

Goal: substantive, accurate, source-backed content per calculator — enough depth to satisfy AdSense/Google content-quality signals, written in vertoq's own voice (not mirrored from competitors). Keep each page compact and scannable; this is a brief, not a template to copy verbatim.

Build order: BMI → TDEE → BMR → Calorie → Body Fat → Ideal Weight.
Cross-link every page to the next one in this chain ("see also").

---

## 1. BMI Calculator (in progress)

**Sections to cover:**
- What BMI measures and what it's for (1 short paragraph)
- Adult classification table (WHO): Severe Thinness <16, Moderate Thinness 16–17, Mild Thinness 17–18.5, Normal 18.5–25, Overweight 25–30, Obese Class I 30–35, Obese Class II 35–40, Obese Class III >40
- Children/teens (2–20): CDC uses BMI-for-age percentiles, not fixed ranges — Underweight <5th percentile, Healthy 5th–85th, At risk 85th–95th, Overweight >95th
- Formula: metric = kg / m²; US = 703 × lbs / in²
- Limitations: doesn't distinguish muscle from fat, varies by age/sex/ethnicity, not reliable alone for athletes or elderly
- Optional differentiator: add BMI Prime (BMI / 25) as a secondary stat — cheap to compute, rarely offered, decent long-tail keyword
- Health risk context: brief, non-alarmist mention of associated risks at both high and low extremes — cite CDC/WHO as source, don't dramatize
- App hook: "save your BMI over time" as a CTA

**Sources to cite:** WHO BMI classification, CDC BMI-for-age growth charts

---

## 2. TDEE Calculator (Total Daily Energy Expenditure)

**Sections to cover:**
- What TDEE is: BMR + activity level = total daily calories burned
- Activity multiplier table (standard Harris-Benedict activity factors):
  - Sedentary (little/no exercise): ×1.2
  - Light activity (1–3 days/week): ×1.375
  - Moderate activity (3–5 days/week): ×1.55
  - Very active (6–7 days/week): ×1.725
  - Extra active (physical job + training): ×1.9
- Explain the two common underlying formulas and let user pick: **Mifflin-St Jeor** (generally considered more accurate for modern populations) vs **Harris-Benedict** (older, still widely used)
  - Mifflin-St Jeor (metric): Men = 10×kg + 6.25×cm − 5×age + 5; Women = 10×kg + 6.25×cm − 5×age − 161
- Use case: maintenance calories, then offer +/- adjustment for cutting (~-500 kcal/day ≈ -0.5kg/week) or bulking
- Limitation: estimate only, individual metabolism varies ±10-15%; recommend adjusting based on real-world weight trend over 2-3 weeks
- Cross-link: BMI (previous step) and Calorie Calculator (next step)

**Sources to cite:** Mifflin MD et al. original 1990 equation citation (general reference, no need to link primary paper); CDC physical activity guidelines for activity levels

---

## 3. BMR Calculator (Basal Metabolic Rate)

**Sections to cover:**
- Definition: calories burned at complete rest (organ function only, no digestion/movement)
- Formula: same Mifflin-St Jeor equation as TDEE, without activity multiplier
- Explain relationship to TDEE clearly (BMR is the input, TDEE is BMR × activity)
- Factors that affect BMR: age (decreases with age), muscle mass (increases BMR), sex, genetics, hormonal factors (brief, factual — avoid overclaiming e.g. "hack your metabolism")
- Consider: since this overlaps heavily with TDEE, decide whether it's a standalone page or a toggle/section within the TDEE calculator — standalone page is better for SEO (separate keyword), but avoid duplicating explanatory text verbatim between the two pages

**Sources to cite:** Mifflin-St Jeor equation

---

## 4. Calorie Calculator

**Sections to cover:**
- Builds directly on TDEE: "how many calories should I eat to lose/gain/maintain weight"
- Explain the ~7700 kcal ≈ 1kg body fat rule of thumb (and its limitations — not perfectly linear, water weight, adaptive metabolism)
- Suggested deficit/surplus ranges: mild (-250 to -500 kcal/day), aggressive (-500 to -1000 kcal/day, with a caution note), lean bulk (+250-500 kcal/day)
- Macronutrient split mention (optional add-on): protein/carbs/fat breakdown at a basic level, could link to a future dedicated macro calculator
- Caution note: extreme deficits (below ~1200 kcal for women / 1500 for men, general rule) should be avoided without medical supervision — keep factual, no specific medical advice
- Cross-link: TDEE (source of numbers) and Body Fat (next step, more precise than weight alone)

**Sources to cite:** general energy balance principle (CDC/NIH), no controversial claims needed here

---

## 5. Body Fat Calculator

**Sections to cover:**
- What it measures vs BMI: body composition (fat vs lean mass) rather than just weight/height ratio — directly addresses BMI's stated limitation, good internal-link angle
- Method to use: **US Navy method** (circumference-based: neck, waist, and for women also hip) — practical for a web calculator, reasonably accurate, no special equipment needed
- Formula (US Navy, metric):
  - Men: BF% = 495 / (1.0324 − 0.19077×log10(waist−neck) + 0.15456×log10(height)) − 450
  - Women: BF% = 495 / (1.29579 − 0.35004×log10(waist+hip−neck) + 0.22100×log10(height)) − 450
- Healthy body fat ranges by sex and age (general ACE or ACSM reference ranges — essential/athletic/fitness/average/obese categories)
- Limitation: circumference-based methods are estimates; DEXA scan or calipers more accurate but not feasible for a web tool — say so honestly, builds trust
- Cross-link back to BMI and forward to Ideal Weight

**Sources to cite:** US Navy circumference method (Hodgdon & Beckett, 1984 — general reference), ACE body fat categories

---

## 6. Ideal Weight Calculator

**Sections to cover:**
- Explain there is no single "correct" ideal weight — present 2-3 established formulas rather than picking one as authoritative:
  - Devine formula (most commonly used clinically for drug dosing, originally, but widely adapted as general reference)
  - Robinson formula
  - Hamwi formula
- Show all three side by side so user sees the range, not a false-precision single number
- Explicitly state this is a population-level estimate, not personalized medical guidance — actual healthy weight depends on frame size, muscle mass, and individual factors
- Cross-link: back to BMI and Body Fat as more nuanced measures

**Sources to cite:** Devine (1974), Robinson (1983), Hamwi (1964) — general formula attribution, no need for primary source links

---

## Shared elements across all 6 pages
- Consistent "Limitations" section — this is what separates you from thin/generic calculator clones and is a direct AdSense content-quality signal
- Consistent cross-link block at the bottom ("Related calculators")
- App save/track CTA, worded consistently
- Avoid diagnostic or prescriptive medical language anywhere — informational framing only, recommend consulting a doctor for personalized advice where relevant (BMI risk section, calorie deficit caution, body fat ranges)
