import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { socials, SocialLink } from "@/components/ui/SocialLinks";

const columns = [
  {
    title: "Obchod",
    links: [
      { href: "/#kakao", label: "Ceremoniální kakao" },
      { href: "/#navod", label: "Jak připravit" },
      { href: "/spoluprace", label: "Spolupráce s kavárnami" },
    ],
  },
  {
    title: "Informace",
    links: [
      { href: "/o-nas", label: "Náš příběh" },
      { href: "/#faq", label: "FAQ" },
      { href: "/galerie", label: "Galerie" },
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

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-night-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Logo className="h-14 w-auto sm:h-16" />
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

          <nav aria-label="Kontakt">
            <h3 className="tracked-label text-[0.68rem] font-bold text-cream">
              Kontakt
            </h3>
            <p className="mt-5 text-sm font-bold text-cream">Štěpánka Kielkovská</p>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="mailto:info@kousekbali.cz"
                  className="text-sm text-cream-muted transition-colors hover:text-turquoise"
                >
                  info@kousekbali.cz
                </a>
              </li>
              <li>
                <a
                  href="tel:+420773334477"
                  className="text-sm text-cream-muted transition-colors hover:text-turquoise"
                >
                  +420 773 334 477
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-7 text-center text-xs text-cream-muted">
          <p>
            © {new Date().getFullYear()} Kousek Bali, IČO 22253327. Všechna
            práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
