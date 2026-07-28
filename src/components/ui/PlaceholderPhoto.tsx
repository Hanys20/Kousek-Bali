import Image from "next/image";

type PlaceholderPhotoProps = {
  label: string;
  className?: string;
  /** Dočasná fotka z fotobanky (Pexels) — nahradit klientovými fotkami. */
  src?: string;
  priority?: boolean;
};

export function PlaceholderPhoto({
  label,
  className = "",
  src,
  priority = false,
}: PlaceholderPhotoProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-cream/10 ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <span className="tracked-label absolute bottom-3 right-3 rounded-full bg-night-950/70 px-3 py-1 text-[10px] text-cream-muted backdrop-blur">
          Foto: Pexels (dočasné)
        </span>
      </div>
    );
  }

  // Dočasná náhrada za klientovy fotky/logo, dokud nemáme ani stock fotku.
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-cream/10 bg-gradient-to-br from-night-800 via-night-900 to-turquoise-dark/30 ${className}`}
    >
      <span className="tracked-label px-4 text-center text-xs text-cream-muted">
        {label}
      </span>
    </div>
  );
}
