import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/eshop", label: "Kakao" },
  { href: "/o-nas", label: "Náš příběh" },
  { href: "/navod", label: "Jak připravit" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="tracked-label hidden items-center gap-8 text-xs text-cream/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-turquoise"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/eshop/kosik"
            aria-label="Košík"
            className="text-cream/80 transition-colors hover:text-turquoise"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="17" cy="21" r="1" />
            </svg>
          </Link>
          <Button href="/eshop" className="hidden sm:inline-flex">
            Ochutnat kakao
          </Button>
        </div>
      </div>
    </header>
  );
}
