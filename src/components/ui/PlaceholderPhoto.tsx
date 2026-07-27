type PlaceholderPhotoProps = {
  label: string;
  className?: string;
};

// Dočasná náhrada za klientovy fotky/logo. Nahradit skutečnými assety
// ve stejné náladě (přirozené světlo, jungle/kakao atmosféra).
export function PlaceholderPhoto({ label, className = "" }: PlaceholderPhotoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl border border-cream/10 bg-gradient-to-br from-forest-800 via-forest-900 to-turquoise-dark/30 ${className}`}
    >
      <span className="tracked-label px-4 text-center text-xs text-cream-muted">
        {label}
      </span>
    </div>
  );
}
