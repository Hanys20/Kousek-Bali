const benefits = [
  { label: "Etický původ" },
  { label: "Čisté složení" },
  { label: "Malé šarže" },
  { label: "Doprava z Česka" },
];

// Barevně nejvýraznější pruh na stránce — v referenci zlatá, tady dle
// klientova loga tyrkysová (žádnou zlatou paleta neobsahuje).
export function BenefitsBar() {
  return (
    <section className="bg-turquoise">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-forest-950 sm:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center">
            <BenefitIcon />
            <span className="tracked-label text-xs font-semibold">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BenefitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
    </svg>
  );
}
