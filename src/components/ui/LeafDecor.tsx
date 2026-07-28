// Jemná botanická čárová kresba do pozadí sekcí. Čistě dekorativní —
// drží se hodně nízké krytosti, aby nekonkurovala obsahu.
export function LeafDecor({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const url = "url(/icons/list.svg)";
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute bg-cream/[0.04] ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
