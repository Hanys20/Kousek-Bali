import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button, ArrowRight } from "@/components/ui/Button";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cokolada",
    title: "Nasekej",
    description: "Odlom nebo nasekej 20–30 g kakaa na malé kousky.",
  },
  {
    icon: "hrnek",
    title: "Zahřej",
    description: "Zahřej vodu nebo rostlinné mléko na 60–70 °C, ne k varu.",
  },
  {
    icon: "hmozdir",
    title: "Rozmíchej",
    description: "Přidej kakao a míchej, dokud se úplně nerozpustí.",
  },
  {
    icon: "svicka",
    title: "Vychutnej",
    description: "Zpomal, zhluboka dýchej a vychutnej si každý doušek.",
  },
];

export function RitualSteps() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Jak připravit</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Malý rituál pro velký okamžik
          </h2>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-card border border-cream/10 bg-night-900 p-7 pt-9 transition-colors hover:border-turquoise/30"
            >
              <span className="absolute -top-4 left-7 flex size-9 items-center justify-center rounded-full bg-turquoise font-serif text-sm font-bold text-night-950">
                {i + 1}
              </span>
              <Icon name={step.icon} className="size-11 text-turquoise" />
              <h3 className="mt-5 font-serif text-xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href="/navod" variant="ghost">
            Podrobný návod s videem
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
