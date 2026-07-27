import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors";

const variants = {
  primary: "bg-turquoise text-forest-950 hover:bg-turquoise-light",
  secondary:
    "border border-cream/40 text-cream hover:border-turquoise hover:text-turquoise",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
