import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button, ArrowRight } from "@/components/ui/Button";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cokolada",
    title: "Nasekej",
    description: "Nasekej 30–40 g kakaa na kousky a dej do rendlíku.",
  },
  {
    icon: "hrnec",
    title: "Zahřej",
    description:
      "Zalij malým množstvím vody a zahřívej na mírném ohni — ideální teplota je do 75 °C, kakao se nesmí vařit.",
  },
  {
    icon: "hmozdir",
    title: "Rozmíchej",
    description:
      "Přilij 150–200 ml oblíbeného mléka (třeba ovesného) a pomalu míchej. Podle chuti osladíš kokosovým cukrem nebo medem.",
  },
  {
    icon: "hrnek",
    title: "Vychutnej",
    description: "Usaď se, vnímej vůni kakaa a dopřej si chvíli přítomnosti.",
  },
];

export function RitualSteps() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Jak připravit</SectionLabel>
          <h2 className="mt-5 font-brand text-3xl uppercase leading-tight text-cream sm:text-5xl">
            <span className="font-bold">Malý rituál</span>{" "}
            <span className="font-light">pro velký okamžik</span>
          </h2>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-card border border-cream/10 bg-night-900 p-7 pt-9 transition-colors hover:border-turquoise/30"
            >
              <span className="absolute -top-4 left-7 flex size-9 items-center justify-center rounded-full bg-turquoise font-brand text-sm font-bold text-night-950">
                {i + 1}
              </span>
              <Icon name={step.icon} className="size-11 text-turquoise" />
              <h3 className="mt-5 font-brand text-lg font-bold uppercase text-cream">
                {step.title}
              </h3>
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
