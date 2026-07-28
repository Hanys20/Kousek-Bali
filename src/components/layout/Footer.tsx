import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    title: "Obchod",
    links: [
      { href: "/eshop", label: "Všechny produkty" },
      { href: "/eshop/ceremonialni-kakao-1kg", label: "Ceremoniální kakao" },
      { href: "/navod", label: "Jak připravit" },
      { href: "/spoluprace", label: "Spolupráce s kavárnami" },
    ],
  },
  {
    title: "Informace",
    links: [
      { href: "/o-nas", label: "Náš příběh" },
      { href: "/o-bali", label: "O Bali" },
      { href: "/galerie", label: "Galerie" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Podpora",
    links: [
      { href: "/doprava-a-platba", label: "Doprava a platba" },
      { href: "/obchodni-podminky", label: "Obchodní podmínky" },
      { href: "/ochrana-udaju", label: "Ochrana osobních údajů" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

/*
 * Sítě klienta. Facebook zatím neexistuje — ikona je připravená, stačí
 * doplnit `href` a odkaz se v patičce sám objeví (bez URL se nerenderuje,
 * ať návštěvník neklikne do prázdna).
 */
const socials: { label: string; href: string | null; path: React.ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kousekbali/",
    path: (
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm5.7-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/420773334477",
    path: (
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.2c.1.2.1.4 0 .6l-.4.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.5.2.5.3.1.2.1.7-.1 1.4Z" />
    ),
  },
  {
    label: "Facebook",
    href: null, // TODO: doplnit, až klient pošle odkaz
    path: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-night-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.6fr] lg:gap-10">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-muted">
              Ceremoniální kakao z Bali. Ručně zpracované s respektem
              k přírodě i lidem.
            </p>
            <div className="mt-6 flex gap-3">
              {socials
                .filter((s) => s.href)
                .map((s) => (
                  <SocialLink key={s.label} href={s.href!} label={s.label}>
                    {s.path}
                  </SocialLink>
                ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="tracked-label text-[0.68rem] font-bold text-cream">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-muted transition-colors hover:text-turquoise"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="rounded-card border border-cream/10 bg-night-900 p-7">
            <h3 className="font-brand text-lg font-bold uppercase text-cream">
              Buď součástí rituálu
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-muted">
              Novinky, tipy a příběhy z Bali přímo do e-mailu. Jednou za čas,
              bez spamu.
            </p>
            {/* Odeslání napojíme na Supabase spolu s objednávkami. */}
            <form className="mt-5 space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Váš e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Váš e-mail"
                className="w-full rounded-full border border-cream/20 bg-night-950 px-5 py-3 text-sm text-cream placeholder:text-cream-muted/70 focus:border-turquoise focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-turquoise px-5 py-3 font-brand text-sm font-bold uppercase tracking-wide text-night-950 transition-colors hover:bg-turquoise-light"
              >
                Přihlásit se
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-xs text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kousek Bali — Jan Kielkovský, IČO 22253327</p>
          <a href="mailto:info@kousekbali.cz" className="transition-colors hover:text-turquoise">
            info@kousekbali.cz
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream-muted transition-colors hover:border-turquoise/50 hover:text-turquoise"
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
