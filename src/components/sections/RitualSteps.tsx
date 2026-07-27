import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Nasekej",
    description: "Nastrouhej nebo nasekej kousek kakaa na jemné kousky.",
  },
  {
    number: "02",
    title: "Zahřej",
    description: "Rozpusť ho v horké (ne vroucí) vodě nebo rostlinném mléce.",
  },
  {
    number: "03",
    title: "Rozmíchej",
    description: "Šlehej metličkou dokřena, dokud nevznikne hladká pěna.",
  },
  {
    number: "04",
    title: "Vychutnej",
    description: "Najdi si klid, dej si čas a vychutnej si okamžik.",
  },
];

export function RitualSteps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionLabel>Jak připravit</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl text-cream">Malý rituál pro velký okamžik</h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="rounded-2xl border border-cream/10 bg-forest-900 p-6">
            <span className="font-serif text-3xl text-turquoise">{step.number}</span>
            <h3 className="mt-4 font-serif text-xl text-cream">{step.title}</h3>
            <p className="mt-2 text-sm text-cream-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
