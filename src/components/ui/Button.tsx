import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200";

const sizes = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-[0.95rem]",
};

const variants = {
  // zlatá = hlavní akce (koupit, objevit)
  primary: "bg-turquoise text-night-950 hover:bg-turquoise-light",
  // obrysová varianta pro druhotnou akci vedle primární
  secondary:
    "border border-cream/30 text-cream hover:border-cream/70 hover:bg-cream/5",
  // textový odkaz se šipkou
  ghost: "text-turquoise hover:text-turquoise-light px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const sizing = variant === "ghost" ? "text-sm" : sizes[size];
  return (
    <Link
      href={href}
      className={`${base} ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
