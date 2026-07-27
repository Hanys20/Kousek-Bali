export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="tracked-label text-xs font-semibold text-turquoise">
      {children}
    </span>
  );
}
