# Content Brief — Finance Calculator Cluster

Same principles as fitness brief: substantive but compact, own voice, consistent "Limitations/Notes" section, cross-linking, no verbatim mirroring of competitor structure.

Build order (by search volume + how much they build on each other): Mortgage → Loan → Compound Interest → Investment → Retirement → Salary/Income Tax (skip if not targeting a specific country — see note below).

---

## 1. Mortgage Calculator

**Sections to cover:**
- What it calculates: monthly payment from principal, rate, term (and optionally taxes/insurance/PMI)
- Formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where r = monthly rate, n = number of payments
- Explain amortization briefly: early payments are mostly interest, shifts toward principal over time — link/point to an amortization schedule feature if you build one
- Factors affecting rate: credit score, down payment size, loan term, loan type (fixed vs adjustable) — factual, no financial advice
- Common down payment thresholds: 20% avoids PMI (US context) — flag if this is US-specific and note it may not apply globally, since vertoq is multilingual
- Limitation: doesn't account for local taxes, insurance, or country-specific mortgage structures — be upfront that this is a general estimate tool

**Sources to cite:** standard amortization formula (no single citation needed, it's a standard financial formula)

**Localization note:** mortgage structures vary a lot by country (down payment norms, rate types, tax deductibility). Consider whether to keep this generic or add per-locale notes for your top languages.

---

## 2. Loan Calculator

**Sections to cover:**
- Generalized version of mortgage formula, for any fixed-term amortizing loan (personal, auto, student)
- Same core formula as mortgage; explain the parallel explicitly so users understand why two calculators exist (mortgage has property-specific extras like PMI/taxes; this one is general-purpose)
- Explain APR vs interest rate distinction (APR includes fees, more representative of true cost) — genuinely useful differentiator most basic calculators skip
- Limitation: assumes fixed rate and consistent payment schedule — doesn't model variable-rate loans

**Sources to cite:** none needed, standard formula

---

## 3. Compound Interest Calculator

**Sections to cover:**
- Formula: A = P(1 + r/n)^(nt) — define each variable clearly (principal, rate, compounding frequency, time)
- Explain compounding frequency's real impact with a concrete example (annual vs monthly vs daily compounding on the same principal) — this is the single most "aha" concept for this calculator and worth a proper example
- Rule of 72 as a quick mental-math aside (years to double ≈ 72 / interest rate) — cheap, genuinely useful, good long-tail keyword ("rule of 72 calculator")
- Contribution/deposit variant: if your calculator supports recurring contributions, explain the annuity formula addition
- Limitation: assumes constant rate — real investments fluctuate; this is a projection tool, not a guarantee

**Sources to cite:** none needed, standard formula

---

## 4. Investment Calculator

**Sections to cover:**
- Distinguish from compound interest: this is typically broader (variable contributions, expected return ranges, inflation adjustment)
- Explain nominal vs real (inflation-adjusted) returns — genuinely valuable distinction, most users don't think about it
- Historical average return context: mention common benchmarks (e.g., long-term stock market average ~7-10% nominal) as illustrative only — clearly flag as historical/illustrative, not a prediction or advice
- Limitation/disclaimer: this is a projection tool based on assumptions the user inputs, not financial advice; past performance doesn't guarantee future results — important both ethically and for avoiding regulatory issues

**Sources to cite:** none needed; keep return figures generic/illustrative, avoid citing specific current market data that goes stale

---

## 5. Retirement Calculator

**Sections to cover:**
- What it solves: given current savings, contributions, expected return, and timeline, project retirement savings (or reverse: how much to save monthly to hit a target)
- Key variables to explain: current age, retirement age, current savings, monthly contribution, expected annual return, inflation assumption
- Withdrawal rate context: mention the "4% rule" as a common (but debated) rule of thumb for sustainable withdrawal — present as one perspective, not gospel, since it's a genuinely contested topic among financial planners
- Limitation: doesn't account for pension systems, social security/state pension (varies hugely by country — relevant given your multilingual audience), or healthcare cost inflation
- Strong disclaimer: educational estimate only, not a substitute for a financial advisor — especially important for retirement given the stakes

**Sources to cite:** none needed; note the 4% rule's origin (Bengen, 1994 / Trinity Study) if you want a citation-style credibility signal, but keep it brief

---

## 6. Salary / Income Tax Calculator — recommend deprioritizing or scoping carefully

**Note before building:** these are inherently country-specific (tax brackets, currency, deductions differ by jurisdiction). Given vertoq is multilingual across 10 languages, a single "income tax calculator" either needs to support multiple countries' tax systems (high effort, needs regular updates as brackets change) or be clearly scoped to one country (limits its usefulness for a multilingual audience).

**Recommendation:** either skip this calculator for now, or build a simpler "gross to net salary" calculator with user-selectable country/region presets, clearly dated ("tax rates as of [year], verify current rates locally"). Don't present tax figures as current without a visible last-updated date — tax law changes are a factual-accuracy liability.

---

## Shared elements across finance pages
- Consistent "Limitations / Not Financial Advice" disclaimer — genuinely important here, more so than fitness, since financial harm from bad assumptions is more direct
- Avoid citing specific current interest rates, tax brackets, or market data as "current" — these date quickly; use illustrative/example numbers instead, or clearly timestamp anything current
- Cross-link chain: Mortgage/Loan → Compound Interest → Investment → Retirement
