export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`tracked-label block text-[0.7rem] font-bold text-gold ${className}`}
    >
      {children}
    </span>
  );
}
