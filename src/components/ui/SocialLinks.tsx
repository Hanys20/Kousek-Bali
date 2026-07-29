/*
 * Sítě klienta, sdílené mezi Header a Footer. Facebook zatím nemá URL —
 * ikona je připravená, stačí doplnit `href` a odkaz se sám objeví
 * (bez URL se nerenderuje, ať návštěvník neklikne do prázdna).
 */
export const socials: { label: string; href: string | null; path: React.ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kousekbali/",
    path: (
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.948C23.729 2.72 21.308.273 16.949.073 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    ),
  },
  {
    label: "Facebook",
    href: null, // TODO: doplnit, až klient pošle odkaz
    path: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/420773334477",
    path: (
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5l.9 2.2c.1.2.1.4 0 .6l-.4.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.5.1.7-.1l.8-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.5.2.5.3.1.2.1.7-.1 1.4Z" />
    ),
  },
];

export function SocialLink({
  href,
  label,
  children,
  className = "flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream-muted transition-colors hover:border-turquoise/50 hover:text-turquoise",
  iconSize = 17,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  iconSize?: number;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
