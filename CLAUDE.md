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
  sytá tyrkysovo-modrá `night-950`–`night-700` (`#073c42`–`#187a84`), **ne
  zelená a ne skoro černá** — druhé jméno vzniklo z experimentu se
  světlým motivem (bílé plochy + černý text), který se zavrhl, protože
  logo existuje jen v modré nebo bílé verzi a černý text k němu nesedí.
  Text krémový `#f4efe4`, nikdy čistě bílý. Teplo dodávají fotky (kakao,
  lusky), ne barva UI. Terakota `#8a5a3b` je rezerva na drobnosti. Tokeny
  jsou v `src/app/globals.css` (`@theme`) — nikdy nezadávej hex natvrdo
  v komponentách. Kontrast ověřený výpočtem: cream na night-950 10,6:1,
  na night-900 8,7:1, na night-850 7,1:1 (WCAG AA je 4,5:1); tyrkysové
  ikony na night-850 jsou nejslabší místo s 2,8:1 (nad hranicí 3:1 pro
  netextovou grafiku).
- **"Liquid glass"** (`.liquid-glass` v globals.css): matné sklo pro prvky
  sedící přímo na hero fotce (pilulková navigace, košík, sekundární CTA
  `Button variant="glass"`) — gradient + silný `backdrop-filter: blur`
  + vnitřní highlight. Používej jen na prvcích nad fotkou, na plné barvě
  pozadí to nedává smysl (nic průhledného pod sklem prosvítat nebude).
- **Typografie**:
  - `font-brand` = Yoshida Sans (font z loga) — **nadpisy (h1–h3) a tlačítka**.
    **Zásadní pravidlo: Yoshida se používá VÝHRADNĚ VERZÁLKAMI
    (`uppercase`), nikdy v běžném ani smíšeném řezu.** V malých/smíšených
    písmenech se jeho výrazné „k“ a diakritika slévají a text je nečitelný
    (ověřeno vizuálním testem — „100 % čisté kakao“ v běžném řezu splývalo
    na „100 % ôisté kahao“). Ve verzálkách je naopak výrazný, hravý a
    čitelný a ladí s logem. Než přidáš Yoshida na nový text, zkontroluj, že
    má `uppercase` — bez něj je to bug, ne styl.
  - **Výjimka**: citát v `Testimonial.tsx` zůstává Fraunces kurzívou, ne
    Yoshida verzálkami — je to celá věta, ne nadpis/tlačítko, a verzálkový
    displejový font by zabil klidnou/intimní náladu, kterou má citát mít.
  - `font-serif` = Fraunces — ceny, velká čísla (statistiky), citát. Elegantní
    protiváha k hravé Yoshidě, drží klidnou náladu tam, kde nejde o CTA.
  - `font-sans` = Inter — UI a delší texty (popisky, odstavce, navigace).
- **Ikony**: čárová sada od klienta v `public/icons/`. Jsou to černé kresby,
  barví se přes CSS mask komponentou `<Icon>` — barvu řídí `text-*` třída.
  **Žádná ikona se na homepage nesmí opakovat** (jednoduše zaměnitelné
  ikony vedle sebe jinak matou, viz proč se „Ručně zpracované“ přesunulo
  z `pece` na `hmozdir`). Než přidáš/přesuneš ikonu, zkontroluj duplicity:
  `grep -rh 'icon: "\|Icon name="' src/components/sections/*.tsx | sort | uniq -c`.
- **Cocoa pattern** (`public/icons/cocoa-pattern.svg`): dekorativní vzor
  kakaových listů/lusků, stejná technika jako `LeafDecor` (CSS mask,
  velmi nízká krytost `bg-cream/[0.04]`). `LeafDecor` bere `src` jako prop,
  výchozí je `list.svg`.
- **Nálada**: klidná, jasná, radostná, přírodní. Fotky dělají většinu práce,
  text je stručný. Žádný přeplácaný layout — jedna myšlenka na sekci.

## Struktura webu

Web je většinou jednostránkový — jediná samostatná podstránka je `/o-nas`
(delší text, vlastní stránka dává smysl). Zbytek (Kakao, Jak připravit, FAQ)
jsou sekce na homepage s `id` + `scroll-mt-24`, na které se odkazuje kotvou
(`/#kakao`, `/#navod`, `/#faq`) i z jiných stránek. Není samostatná stránka
s výpisem produktů ani detail produktu — e-shop má natrvalo jen dva produkty,
zobrazené přímo v `ProductGrid` na homepage; přidat/ubrat produkt znamená
upravit `products` tabulku v Supabase, ne přidat route.

## Materiály od klienta

Zdroje jsou v `client_materials/` (loga, AI fotky, ikony, fonty). Do `public/`
patří jen zpracované verze — fotky převedené na WebP (z ~2 MB PNG na ~100–165
kB), assety s ASCII názvy. Skript, který to připravil, byl jednorázový;
při přidání dalších fotek je potřeba je znovu převést.

## Na co si dát pozor v obsahu

- **Žádná vymyšlená hodnocení ani čísla.** E-shop zatím nemá recenze, takže
  se hvězdičky nezobrazují (v kartě je místo nich hmotnost balení).
- Ceny v tabulce `products` v Supabase odpovídají zadání (0,5 kg = 1 100 Kč,
  1 kg = 2 000 Kč). Katalog je natrvalo jen tyhle dva produkty (viz
  „Struktura webu“ výš) — žádné „boby“ ani další varianty se nechystají.
- **Hover fotka produktu** (`ProductCard.tsx`): odvozuje se z hlavní fotky
  přesmyčkou přípony (`produkt-500g.webp` → `produkt-500g-hover.webp`), ne
  z vlastního pole v databázi. Když přidáváš nový produkt, musí mít
  v `public/images/` fotku i pod stejným názvem s `-hover` příponou, jinak
  se při najetí myší zobrazí rozbitý obrázek.
- **Kontaktní osoba** v patičce je Štěpánka Kielkovská (ne Jan Kielkovský,
  který zůstává coby IČO/plátce na právních stránkách) — telefon
  `+420 773 334 477` je zatím totožný s WhatsApp číslem klienta, není
  ověřeno, že je to i telefon pro běžné hovory.
- **Reálný příběh značky** (z letáku, viz `/o-nas` a homepage): zakladatelé
  jsou **Štěpánka a Honza**, kakao objevili na svatební cestě na Bali. Kakao
  se dováží od balijské čokoládovny **Ubud Raw**, která podporuje lokální
  farmáře a zpracovává boby tradičně — nepraží se, přirozeně fermentují
  a suší na slunci. Tohle je zdroj pravdy pro copy o původu — nepoužívat
  obecné „malé rodinné farmy" bez vazby na Ubud Raw.
- **Recept na přípravu** (z letáku, `/navod` a homepage rituál): 30–40 g
  kakaa na osobu, zalít malým množstvím vody, zahřívat na mírném ohni max.
  do 75 °C (nesmí vařit), pak přilít 150–200 ml mléka (např. ovesné),
  dochutit kokosovým cukrem nebo medem. Šlehač/ponorný mixér/molinillo na
  pěnu, ozdoba sušenými květy/skořicí/mořskou solí.
- Fotky produktů jsou zatím atmosférické snímky — finální verze potřebuje
  packshoty tyrkysových obalů.
- **Licence fontu Yoshida Sans (TypeUnion)**: dodaný soubor je desktopový OTF.
  Font se teď aktivně používá na živém webu (nadpisy, tlačítka) — **je
  potřeba ověřit, že licence pokrývá i webové vkládání** (webfont licence
  bývá u desktopových fontů samostatná a placená zvlášť). Tohle není
  teoretická poznámka, dokud to neověříš, běží to produkčně.

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
2. ✅ Design systém (barvy, typografie) + homepage s reálnými texty v ČJ
3. ✅ Katalog dvou produktů napojený na Supabase, zobrazený přímo na
   homepage (žádná samostatná stránka výpisu/detailu)
4. ✅ Cloudflare Workers deploy + doména kousekbali.cz (MX zůstal na
   Webglobe, e-mail funguje beze změny)
5. ⏳ Checkout s QR platbou (košík `/eshop/kosik` je zatím placeholder)

Právní stránky (obchodní podmínky, ochrana údajů, cookies) jsou povinné
kvůli e-shopu — nezapomenout před spuštěním.
