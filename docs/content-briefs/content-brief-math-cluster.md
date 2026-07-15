# Content Brief — Math Calculator Cluster

Same principles: compact but substantive, own voice, consistent structure, cross-linking.

Build order: Percentage → Fraction → Standard Deviation → Triangle → Scientific (mostly UI, less content-dependent) → Random Number Generator (minimal content needed).

---

## 1. Percentage Calculator

**Sections to cover:**
- Cover the 3 common variants people search for separately — worth structuring as sub-sections or tabs since each is its own search intent:
  1. "What is X% of Y?" — X/100 × Y
  2. "X is what percent of Y?" — (X/Y) × 100
  3. "Percentage increase/decrease between X and Y" — ((Y−X)/X) × 100
- Worked example for each variant with real numbers (concrete examples aid both users and content depth)
- Common real-world use cases worth naming: discounts, tips, grade calculations, statistics — helps capture long-tail searches
- No real "limitations" section needed here (it's exact math, not an estimate) — instead use that space for a "common mistakes" section (e.g., confusing percentage change with percentage points) — genuinely useful and differentiating

**Sources to cite:** none needed, basic arithmetic

---

## 2. Fraction Calculator

**Sections to cover:**
- Cover the operations: add, subtract, multiply, divide fractions — brief explanation of the method for each (common denominator for add/subtract, cross-multiplication for multiply/divide)
- Simplifying fractions: explain GCD (greatest common divisor) method briefly
- Mixed numbers vs improper fractions: brief explanation of converting between them, since this trips people up
- Decimal-to-fraction conversion if your calculator supports it — genuinely useful add-on
- Worked example for each operation

**Sources to cite:** none needed, basic arithmetic

---

## 3. Standard Deviation Calculator

**Sections to cover:**
- Explain what it measures in plain language: spread/variability of data around the mean — lead with intuition before formula
- Distinguish population vs sample standard deviation clearly (this trips up a lot of users and is a common source of "why did I get a different answer" confusion) — explain when to use which (n vs n−1 divisor)
- Formula for both variants
- Worked example with a small dataset, step by step
- Related concept: variance (standard deviation squared) — worth a one-line mention with the relationship, since it's a common companion search term

**Sources to cite:** none needed, standard statistics

---

## 4. Triangle Calculator

**Sections to cover:**
- What it solves: given some combination of sides/angles, calculate the rest (SSS, SAS, ASA, AAS, etc.) — explain briefly which combinations are solvable
- Key formulas: Pythagorean theorem (right triangles), Law of Sines, Law of Cosines — state each with variable definitions
- Area formulas: base × height / 2 (basic), Heron's formula (when only sides are known) — worth including both since they serve different input scenarios
- Worked example for at least one non-right triangle case, since that's where Law of Sines/Cosines actually gets used and is less commonly explained well elsewhere

**Sources to cite:** none needed, standard geometry

---

## 5. Scientific Calculator — minimal content needed
This is primarily a UI/functionality page (trig functions, exponents, logs) rather than a content-depth page. Light content only:
- Brief note on function notation used (e.g., which log base, degree vs radian mode)
- Skip building out heavy explanatory content here — effort is better spent elsewhere in this cluster; a functioning, fast, well-designed calculator is the value-add itself

---

## 6. Random Number Generator — minimal content needed
Also primarily functional. Light content only:
- Brief explanation of range/uniqueness options if your version supports them (e.g., unique numbers only, exclude specific values)
- Note on randomness method if relevant (pseudo-random, not cryptographically secure) — honest, low-effort trust signal
- Don't over-invest content effort here; low content-depth expectation for tool-only pages is fine as long as the tool itself works well and other pages on the site demonstrate depth

---

## Shared elements across math pages
- Worked examples are the highest-value content element in this cluster — prioritize them over prose explanation
- "Common mistakes" sections are a good differentiator and genuinely helpful (percentage points vs percentage, sample vs population std dev, mixed number conversion)
- Cross-link chain: Percentage ↔ Fraction (both basic arithmetic tools, natural pairing), Standard Deviation → Triangle is a weaker link — better to cross-link Standard Deviation toward a future statistics-cluster expansion if you build one later
