# Kousek Bali

E-shop [kousekbali.cz](https://kousekbali.cz) — Jan Kielkovský, IČO 22253327.

Kousek Bali prodává ceremoniální kakao a doplňkové produkty z Bali (Indonésie).
Kakao je jemné, s "laskavou esencí", pěstované v souladu s ekologickými
hodnotami — to je hlavní odlišení od konkurence (Cacayo, Kuskakao, Madam
Cacao).

Cíl webu: prodávat online + budovat důvěryhodnou, osobní značku. Primární
konverze je objednávka kakaa (případně navázání spolupráce — prodej kakaa v
kavárnách).

Cílová skupina: muži i ženy cca 25–45 let, otevření, alternativně smýšlející,
po celé ČR a SR. Přichází hlavně z mobilu, přes Instagram a osobní
doporučení. Rozhodují se často na základě chuti/kvality a příběhu za
produktem, ne primárně podle ceny.

## Tech stack

- **Next.js** (App Router, TypeScript, Tailwind CSS v4) — frontend, statický build
- **Cloudflare Workers (static assets)** — hosting, deploy automaticky
  při push na `main` (Cloudflare dnes nové statické projekty zakládá jako
  Worker, ne jako klasický Pages projekt — viz `wrangler.jsonc`)
- **Supabase** — databáze a backendová logika (edge functions: vytvoření
  objednávky + variabilní symbol, kontrola platby na bance)
- **Resend** — transakční e-maily (potvrzení objednávky, potvrzení platby)

## Platební tok (shrnutí)

1. Zákazník vybere produkt(y), vyplní checkout (e-mail, doprava, poznámka)
2. Supabase edge function vytvoří objednávku a vygeneruje unikátní variabilní
   symbol (VS)
3. Frontend zobrazí QR platbu (formát SPD) s tímto VS + e-mail s potvrzením
   objednávky (Resend)
4. Naplánovaná úloha kontroluje bankovní účet (API banky, ideálně Fio) a
   páruje příchozí platby podle VS
5. Po spárování se objednávka označí jako zaplacená a odejde druhý e-mail
   (potvrzení platby + info o odeslání)

Doprava: Zásilkovna, Balíkovna, osobní předání v Opavě (individuální
domluva).

## Struktura projektu

```
src/
├── app/            # stránky (App Router)
│   ├── eshop/      # výpis produktů, detail, košík/checkout
│   ├── o-nas/
│   ├── galerie/
│   ├── faq/
│   ├── navod/
│   └── spoluprace/ # poptávkový formulář pro kavárny/prodejny
├── components/
│   ├── ui/
│   └── layout/
├── lib/            # supabase klient, generování QR platby, typy
└── styles/
supabase/
├── functions/      # create-order, check-payment (edge functions)
└── migrations/      # SQL schéma
```

## Vývoj

### Dočasná veřejná stránka a soukromý vývoj

Web je nyní rozdělený už při sestavení. Běžné `npm run build` vygeneruje
do `out/` **jen stránku „Připravujeme“ s návodem na kakao**. Původní homepage,
košík ani ostatní podstránky se neexportují. Také návštěvník se starým odkazem
uvidí oznámení s návodem (stav 404). Nejde o skrývání přes CSS nebo heslo
uložené v prohlížeči; rozpracované stránky na veřejném serveru vůbec nejsou.

- **Vývoj celého webu:** `npm run dev` → <http://127.0.0.1:3000>.
  Server naslouchá jen na tomto počítači. Nepotřebuješ heslo a průběžné
  změny se zobrazují automaticky. Vývojový port nevystavuj přes veřejný tunel.
  Pokud je Supabase nedostupné, lokální náhled použije dva označené ukázkové
  produkty, takže lze dál pracovat na vzhledu. Produkční e-shop náhradu nepoužívá.
- **Úpravy veřejné stránky:** `npm run dev:public` → <http://127.0.0.1:3001>.
  Oba náhledy lze mít otevřené současně; používají oddělenou Next.js cache.
- **Nasazení:** `npm run deploy` nejprve vytvoří a zkontroluje veřejný build,
  pak ho nahraje do stávajícího Cloudflare Workeru. Vyžaduje platné přihlášení
  přes `npx wrangler login`. Stávající automatické nasazení po pushi na `main`
  také publikuje pouze dočasnou stránku, i když současně vyvíjíš e-shop.
- **Spuštění celého webu později:** v Cloudflare nastavit build proměnnou
  `SITE_MODE=full` a spustit nové nasazení. Do té doby ji nenastavovat.
  Lokální vývoj celého webu ji nepotřebuje.

Veřejný návrh a texty jsou v `src/components/preparing/PreparingPage.tsx`,
styly v `preparing.module.css`. Vstupní soubory `src/app/*.public.tsx` jsou
vybrané přes `pageExtensions` v `next.config.ts`; ostatní stránky zůstávají
pro lokální vývoj. Kontrola `postbuild` odmítne export s jinými stránkami.
Ikony jsou vybrané přímo z dodaného `Příprava kakaa.svg`; při změně podkladu
je lze znovu připravit skriptem `python scripts/extract-preparation-icons.py`.

### Běžný vývoj

```bash
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Stav projektu

Aktuálně: kostra projektu + design systém (barvy, typografie) a homepage.
Následuje: e-shop (výpis + detail produktu), checkout s QR platbou, napojení
Supabase a Cloudflare Workers.
