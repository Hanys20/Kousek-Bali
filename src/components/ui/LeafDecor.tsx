// Jemná botanická čárová kresba do pozadí sekcí. Čistě dekorativní —
// drží se hodně nízké krytosti, aby nekonkurovala obsahu.
export function LeafDecor({
  className = "",
  flip = false,
  src = "/icons/list.svg",
  maskSize = "contain",
}: {
  className?: string;
  flip?: boolean;
  src?: string;
  maskSize?: string;
}) {
  const url = `url(${src})`;
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute bg-cream/[0.04] ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize,
        WebkitMaskSize: maskSize,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "top center",
        WebkitMaskPosition: "top center",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    />
  );
}
