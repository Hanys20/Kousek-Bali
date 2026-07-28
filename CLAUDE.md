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

- **Barvy**: celá paleta stojí na **tyrkysové `#27a8b3`** vzorkované přímo
  z vektorového loga (logo se nikdy nepřebarvuje). Tyrkysová je zároveň
  barva značky i barva akcí — CTA, ceny, ikony, pruh benefitů. Plochy jsou
  tmavá petrolejová `night-950`–`night-700` (`#061f1e`–`#1c4d4c`), **ne
  zelená**. Text krémový `#f4efe4`, nikdy čistě bílý. Teplo dodávají fotky
  (kakao, lusky), ne barva UI. Terakota `#8a5a3b` je rezerva na drobnosti.
  Tokeny jsou v `src/app/globals.css` (`@theme`) — nikdy nezadávej hex
  natvrdo v komponentách. Všechny kombinace textu a pozadí procházejí
  WCAG AA (nejnižší je tyrkysová na kartě, 4,95:1).
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

## Data a nasazení

- **Supabase projekt**: `kzqjhzlbvlcgwvfziidu` (eu-central-1). Tabulky
  `products`, `orders`, `order_items`, `newsletter_subscribers`.
- **RLS je zapnuté všude.** `orders` a `order_items` nemají žádnou politiku
  pro veřejný klíč — jsou tedy z webu neviditelné i nezapisovatelné a
  pracují s nimi jen edge funkce přes servisní klíč. Ověřeno reálnými
  HTTP dotazy: podvržení objednávky i změna ceny produktu jsou zamítnuty.
- **Ceny jsou integer v korunách**, ne float — u peněz se s desetinnými
  čísly dělají chyby zaokrouhlením. Do `order_items` se název i cena
  kopírují, aby objednávka přežila pozdější změnu ceníku.
- **Statický export**: `output: "export"` → složka `out/`. Katalog se
  načítá ze Supabase **při buildu**, takže po změně produktu je potřeba
  spustit nový deploy.
- **Nasazení běží přes Cloudflare Workers (ne přes starší Cloudflare
  Pages)** — Cloudflare teď nové git-napojené statické projekty zakládá
  jako Worker se static assets, dashboard tomu pořád říká souhrnně
  „Workers & Pages". Konfigurace je ve `wrangler.jsonc`
  (`assets.directory: "./out"`). V Cloudflare dashboardu (Workers & Pages
  → Create application → Import a repository) nastav:
  `Build command: npm run build`, `Deploy command: npm run deploy`.
  **Název Workeru v dashboardu musí přesně sedět s `name` ve
  `wrangler.jsonc` (`kousek-bali`)**, jinak build v CI/CD selže.
- `_headers` (bezpečnostní hlavičky, cache) je v `public/`, Workers static
  assets ho čtou nativně stejně jako dřív Pages — nepatří do
  `.assetsignore`, musí zůstat nahraný, aby se vůbec načetl.

## Tech stack a architektura

- Next.js (App Router, TS, Tailwind v4) → statický export → **Cloudflare
  Workers (static assets)** (deploy na push do `main` přes Workers Builds)
- **Supabase**: databáze + edge functions (`create-order`, `check-payment`)
  řeší vše, co potřebuje server — frontend je čistě statický hosting
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
5. ⏳ Cloudflare Workers deploy + doména kousekbali.cz (pozor: MX na
   Webglobe kvůli info@kousekbali.cz, musí se přenést spolu s DNS)

Právní stránky (obchodní podmínky, ochrana údajů, cookies) jsou povinné
kvůli e-shopu — nezapomenout před spuštěním.
