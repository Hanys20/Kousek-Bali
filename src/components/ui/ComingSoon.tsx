import { SectionLabel } from "./SectionLabel";

type ComingSoonProps = {
  label: string;
  title: string;
  description: string;
};

// Dočasný obsah pro stránky, které stavíme až po homepage a e-shopu.
export function ComingSoon({ label, title, description }: ComingSoonProps) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">{title}</h1>
        <p className="mt-6 text-cream-muted">{description}</p>
      </div>
    </main>
  );
}
