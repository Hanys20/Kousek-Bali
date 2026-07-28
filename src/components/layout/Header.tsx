"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { href: "/eshop", label: "Kakao" },
  { href: "/o-nas", label: "Náš příběh" },
  { href: "/navod", label: "Jak připravit" },
  { href: "/o-bali", label: "O Bali" },
];

export function Header() {
  // Nahoře stránky splývá s hero fotkou, po odscrollování dostane podklad.
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Otevřené mobilní menu nesmí nechat scrollovat stránku pod sebou.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-cream/10 bg-night-950/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Kousek Bali — domů" className="shrink-0">
          <Logo className="h-10 w-auto sm:h-11" />
        </Link>

        {/* pilulková navigace uprostřed (desktop) */}
        <nav className="hidden lg:block">
          <ul className="tracked-label flex items-center gap-1 rounded-full border border-cream/10 bg-night-900/70 p-1.5 text-[0.68rem] font-bold text-cream/80 backdrop-blur">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-4 py-2 transition-colors hover:bg-cream/10 hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CartLink />

          <Link
            href="/eshop"
            className="hidden rounded-full bg-turquoise px-6 py-2.5 text-sm font-bold text-night-950 transition-colors hover:bg-turquoise-light sm:inline-flex"
          >
            Ochutnat kakao
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobilni-menu"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            <span className="relative block h-3.5 w-4.5">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ztmavení obsahu pod otevřeným menu, kliknutí menu zavře */}
      {menuOpen && (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 -z-10 h-screen w-full cursor-default bg-night-950/80 lg:hidden"
        />
      )}

      {/* mobilní menu — bez něj by web na mobilu neměl navigaci */}
      <div
        id="mobilni-menu"
        hidden={!menuOpen}
        className="relative border-t border-cream/10 bg-night-950/95 backdrop-blur-md lg:hidden"
      >
        <nav className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3.5 font-serif text-2xl text-cream transition-colors hover:bg-cream/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/eshop"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-turquoise px-6 py-3.5 font-bold text-night-950"
          >
            Ochutnat kakao
          </Link>
        </nav>
      </div>
    </header>
  );
}

function CartLink() {
  // Počet položek napojíme na košík, až bude hotová logika objednávky.
  const count = 0;
  return (
    <Link
      href="/eshop/kosik"
      aria-label={`Košík — ${count} položek`}
      className="relative flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:bg-cream/10"
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" />
        <circle cx="10" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex size-4.5 items-center justify-center rounded-full bg-turquoise text-[0.6rem] font-bold text-night-950">
          {count}
        </span>
      )}
    </Link>
  );
}
