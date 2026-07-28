import { SectionLabel } from "./SectionLabel";
import { Button, ArrowRight } from "./Button";
import { LeafDecor } from "./LeafDecor";

type ComingSoonProps = {
  label: string;
  title: string;
  description: string;
};

// Dočasný obsah pro stránky, které stavíme až po homepage a e-shopu.
export function ComingSoon({ label, title, description }: ComingSoonProps) {
  return (
    <main className="relative flex-1 overflow-hidden">
      <LeafDecor className="-right-20 top-24 size-96 rotate-12" />
      {/* horní odsazení kvůli fixnímu headeru */}
      <div className="relative mx-auto max-w-3xl px-5 pb-28 pt-40 text-center sm:px-8 lg:pt-48">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-cream sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 leading-relaxed text-cream-muted">{description}</p>
        <div className="mt-10">
          <Button href="/" variant="secondary">
            Zpět na úvod
            <ArrowRight />
          </Button>
        </div>
      </div>
    </main>
  );
}
