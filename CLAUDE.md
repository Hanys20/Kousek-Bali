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

- **Barvy** (vychází z klientova loga, needit): tmavě zelená/černozelená
  `#0f1a12`–`#16241a` jako hlavní plocha; tyrkysová `#20A9B3` (z loga) jako
  primární akcent na CTA/ikony/aktivní stavy; terakota `#8a5a3b` jako
  sekundární akcent (drobné detaily, ne plošně); text krémově bílý `#f5f1e8`,
  nikdy čistě bílý. Tokeny jsou v `src/app/globals.css` (`@theme`), nikdy je
  nezadávej natvrdo v komponentách.
- **Typografie**: Fraunces (serif) na velké nadpisy — klid a rituál. Inter
  (sans, prostrkaný, verzálky) na labely, menu a drobné popisky.
- **Nálada**: klidná, jasná, radostná, přírodní. Fotky dělají většinu práce,
  text je stručný. Žádný přeplácaný layout — jedna myšlenka na sekci.

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
