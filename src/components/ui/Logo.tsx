// Textová náhrada za vektorové logo klienta (tyrkysové pozadí, bílá ikona a
// nápis). Až dorazí reálný vektor, nahradit za <Image>, nepřebarvovat.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-turquoise px-4 py-1.5 font-serif text-sm font-semibold uppercase tracking-wide text-forest-950 ${className}`}
    >
      Kousek Bali
    </span>
  );
}
