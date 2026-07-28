import { Icon, type IconName } from "@/components/ui/Icon";

const benefits: { icon: IconName; label: string }[] = [
  { icon: "ekologie", label: "Etický původ" },
  { icon: "kakao", label: "Čisté složení" },
  { icon: "pece", label: "Malé šarže" },
  { icon: "doprava", label: "Doprava z Česka" },
];

// Barevně nejvýraznější pruh na stránce — dělá zlatý předěl mezi sekcemi.
export function BenefitsBar() {
  return (
    <section className="bg-turquoise text-night-950">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-6 px-5 py-7 sm:px-8">
        {benefits.map((b, i) => (
          <li
            key={b.label}
            className={`flex w-1/2 items-center justify-center gap-3 px-4 sm:w-auto sm:flex-1 ${
              i > 0 ? "sm:border-l sm:border-night-950/20" : ""
            }`}
          >
            <Icon name={b.icon} className="size-7" />
            <span className="text-sm font-bold">{b.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
