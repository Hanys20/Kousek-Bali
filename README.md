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
- **Cloudflare Pages** — hosting, deploy automaticky při push na `main`
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

```bash
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Stav projektu

Aktuálně: kostra projektu + design systém (barvy, typografie) a homepage.
Následuje: e-shop (výpis + detail produktu), checkout s QR platbou, napojení
Supabase a Cloudflare Pages.
