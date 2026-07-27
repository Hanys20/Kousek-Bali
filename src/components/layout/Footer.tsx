import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SectionLabel } from "@/components/ui/SectionLabel";

const columns = [
  {
    title: "Obchod",
    links: [
      { href: "/eshop", label: "Kakao" },
      { href: "/navod", label: "Jak připravit" },
      { href: "/o-bali", label: "O Bali" },
    ],
  },
  {
    title: "Informace",
    links: [
      { href: "/o-nas", label: "Náš příběh" },
      { href: "/faq", label: "FAQ" },
      { href: "/spoluprace", label: "Spolupráce" },
    ],
  },
  {
    title: "Právní",
    links: [
      { href: "/obchodni-podminky", label: "Obchodní podmínky" },
      { href: "/ochrana-udaju", label: "Ochrana osobních údajů" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-forest-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-cream-muted">
              Ceremoniální kakao přímo z Bali. Kousek klidu a rituálu pro
              každého, kdo chce zpomalit.
            </p>
            <div className="tracked-label mt-5 flex gap-4 text-xs text-cream-muted">
              <a href="#" className="hover:text-turquoise">Instagram</a>
              <a href="#" className="hover:text-turquoise">Facebook</a>
              <a href="#" className="hover:text-turquoise">WhatsApp</a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="tracked-label text-xs text-cream/60">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-cream-muted hover:text-turquoise">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <SectionLabel>Buď součástí rituálu</SectionLabel>
            <p className="mt-3 text-sm text-cream-muted">
              Novinky o sklizni, nových produktech a rituálech — jednou za
              čas, bez spamu.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Tvůj e-mail"
                className="w-full rounded-full border border-cream/20 bg-forest-900 px-4 py-2.5 text-sm text-cream placeholder:text-cream-muted focus:border-turquoise focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-turquoise px-5 py-2.5 text-sm font-medium text-forest-950 hover:bg-turquoise-light"
              >
                Odebírat
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kousek Bali — Jan Kielkovský, IČO 22253327</p>
          <p>info@kousekbali.cz</p>
        </div>
      </div>
    </footer>
  );
}
