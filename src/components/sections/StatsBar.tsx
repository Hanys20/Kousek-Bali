const stats = [
  { value: "100 %", label: "čistého kakaa" },
  { value: "1", label: "původ: Bali" },
  { value: "0", label: "zbytečností" },
  { value: "∞", label: "okamžiků klidu" },
];

export function StatsBar() {
  return (
    <section className="border-y border-cream/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-4xl text-turquoise">{stat.value}</p>
            <p className="tracked-label mt-2 text-xs text-cream-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
