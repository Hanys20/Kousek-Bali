@AGENTS.md

# Kousek Bali — kontext projektu

E-shop kousekbali.cz — Jan Kielkovský, IČO 22253327. Prodej ceremoniálního
kakaa a doplňkových produktů z Bali. Cíl: prodej online + budování osobní,
důvěryhodné značky. Primární konverze: objednávka kakaa (CTA "Ochutnat
kakao").

Cílovka: muži i ženy 25–45 let, celá ČR/SR, hlavně mobil, Instagram a osobní
doporučení. Rozhodují se podle chuti/kvality a příběhu, ne primárně podle
ceny.

## Vizuální styl

Tmavá jungle estetika, prémiový rituál, ne běžný e-shop s potravinami.

- **Barvy**: tmavě zelená s nádechem petroleje `#081915`–`#163a31` jako hlavní
  plocha; **zlatá `#d9a94e`** jako barva akcí (CTA, ceny, pruh benefitů,
  ikony); **tyrkysová `#27a8b3`** je barva značky, vzorkovaná přímo
  z vektorového loga (logo se nikdy nepřebarvuje); terakota `#8a5a3b` na
  drobnosti; text krémový `#f4efe4`, nikdy čistě bílý. Tokeny jsou
  v `src/app/globals.css` (`@theme`) — nikdy nezadávej hex natvrdo
  v komponentách.
- **Typografie**:
  - `font-serif` = Fraunces — nadpisy, ceny, velká čísla
  - `font-sans` = Inter — UI a delší texty
  - `font-brand` = Yoshida Sans (font z loga) — jen displejové akcenty.
    Pro tělo textu se nepoužívá: má výrazné „k“ a v malých velikostech se
    slévají háčky, což na mobilu (odkud chodí většina návštěvníků) zhoršuje
    čitelnost.
- **Ikony**: čárová sada od klienta v `public/icons/`. Jsou to černé kresby,
  barví se přes CSS mask komponentou `<Icon>` — barvu řídí `text-*` třída.
- **Nálada**: klidná, jasná, radostná, přírodní. Fotky dělají většinu práce,
  text je stručný. Žádný přeplácaný layout — jedna myšlenka na sekci.

## Materiály od klienta

Zdroje jsou v `client_materials/` (loga, AI fotky, ikony, fonty). Do `public/`
patří jen zpracované verze — fotky převedené na WebP (z ~2 MB PNG na ~100–165
kB), assety s ASCII názvy. Skript, který to připravil, byl jednorázový;
při přidání dalších fotek je potřeba je znovu převést.

## Na co si dát pozor v obsahu

- **Žádná vymyšlená hodnocení ani čísla.** E-shop zatím nemá recenze, takže
  se hvězdičky nezobrazují (v kartě je místo nich hmotnost balení). Stejně
  tak se nepoužívá neověřený údaj typu „25+ let tradice“ — držíme se tvrzení,
  která má klient v zadání.
- Ceny v `src/lib/products.ts` odpovídají zadání (0,5 kg = 1 100 Kč,
  1 kg = 2 000 Kč). Třetí produkt je placeholder, než ho klient doplní.
- Fotky produktů jsou zatím atmosférické snímky — finální verze potřebuje
  packshoty tyrkysových obalů.
- **Licence fontu Yoshida Sans (TypeUnion)**: dodaný soubor je desktopový OTF.
  Než se font začne používat na živém webu, je potřeba ověřit, že licence
  pokrývá i webové vkládání (webfont licence bývá samostatná). Teď se font
  na stránce nepoužívá, takže se návštěvníkům ani nestahuje.

## Tech stack a architektura

- Next.js (App Router, TS, Tailwind v4) → statický build → **Cloudflare
  Pages** (deploy na push do `main`)
- **Supabase**: databáze + edge functions (`create-order`, `check-payment`)
  řeší vše, co potřebuje server — Cloudflare Pages je čistě statický hosting
- **Resend**: transakční e-maily (potvrzení objednávky, potvrzení platby)
- Platba: QR platba (SPD formát) s variabilním symbolem, párování přes
  bankovní API (ideálně Fio) na cronu

Doprava: Zásilkovna, Balíkovna, osobní předání v Opavě.

## SEO klíčová slova

kakao, ceremoniální kakao, rituální kakao, balijské kakao, indonéské kakao,
Bali, Indonésie, kakao z Bali

## Stav / postup prací

1. ✅ Kostra projektu (struktura složek, git)
2. ✅ Design systém (barvy, typografie) + homepage s placeholder texty v ČJ
3. ⏳ E-shop: výpis produktů + detail produktu
4. ⏳ Checkout s QR platbou + napojení Supabase
5. ⏳ Cloudflare Pages deploy

Právní stránky (obchodní podmínky, ochrana údajů, cookies) jsou povinné
kvůli e-shopu — nezapomenout před spuštěním.
