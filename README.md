# Vertoq

Flerspråkig samling av vardagsverktyg, byggd med Astro. Enhetsomvandlaren är mallen — varje ny kalkylator (procent, ålder, valuta osv.) följer samma mönster.

## Komma igång lokalt

```bash
npm install
npm run dev
```

Sidan körs sedan på `http://localhost:4321`. Testa `/sv/`, `/en/units/` osv.

## Deploy till Netlify

1. Pusha projektet till ett GitHub-repo.
2. I Netlify: "Add new site" → "Import an existing project" → välj repot.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Netlify installerar paketen automatiskt vid build.

**Innan första deploy:**
- Byt `site: 'https://dindomän.se'` i `astro.config.mjs` till din riktiga domän.
- Byt domänen i `public/robots.txt`.
- Sätt din egen domän i Netlfys DNS-inställningar.

## Lägga till en ny kalkylator (t.ex. procent)

1. **Data** — skapa `src/data/percent.ts` med logiken (motsvarande `units.ts`).
2. **Översättningar** — lägg till en `percent: {...}` sektion i varje språk i `src/i18n/translations.ts`.
3. **Komponent** — skapa `src/components/PercentCalculator.astro` med samma struktur som `UnitConverter.astro`: props in, `define:vars` för att skicka data till klient-scriptet, ren JS-logik utan ramverk.
4. **Sida** — skapa `src/pages/[lang]/percent/index.astro`, kopiera mönstret från `units/index.astro`.
5. **Hemsida** — lägg till ett `<a class="card">` i `src/pages/[lang]/index.astro` som länkar till den nya sidan, i alla språk.

Det är hela mönstret — ingen ny infrastruktur behövs, bara nya data + översättningar + en komponent + en sida.

## Annonser

Varje sida har en `<AdSlot />`-platshållare. När ditt AdSense-konto är godkänt:
1. Klistra in AdSense-scriptet i `<head>` i `src/layouts/Layout.astro` (markerat med TODO).
2. Byt ut innehållet i `src/components/AdSlot.astro` mot din riktiga `<ins class="adsbygoogle">`-annonsenhet.

## SEO-checklista innan lansering

- [ ] Sätt riktig domän i `astro.config.mjs` och `robots.txt`
- [ ] Skapa Google Search Console-konto, lägg till alla språkversioner
- [ ] Skicka in `sitemap-index.xml` (genereras automatiskt av `@astrojs/sitemap`)
- [ ] Skriv unika, naturliga (inte maskinöversatta) texter per språk allt eftersom du expanderar
- [ ] Överväg översatta URL-slugs per språk längre fram (t.ex. `/sv/enheter/` istället för `/sv/units/`) — ger ofta bättre ranking lokalt, men kräver mer underhåll
