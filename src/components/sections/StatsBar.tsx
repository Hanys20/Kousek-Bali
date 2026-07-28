import { Icon, type IconName } from "@/components/ui/Icon";

const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: "sto-procent", value: "100 %", label: "kakaa" },
  { icon: "bali-ostrov", value: "1", label: "původ: Bali" },
  { icon: "kvet", value: "0", label: "zbytečností" },
  { icon: "meditace", value: "∞", label: "okamžiků pro sebe" },
];

export function StatsBar() {
  return (
    <section className="border-t border-gold/25 bg-forest-900/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-20">
        <h2 className="max-w-xs font-serif text-3xl leading-tight text-cream sm:text-4xl">
          Kakao s příběhem, který dává smysl
        </h2>

        <dl className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:border-l lg:border-cream/10 lg:pl-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Icon name={stat.icon} className="mx-auto size-8 text-gold" />
              <dd className="mt-3 font-serif text-4xl leading-none text-cream">
                {stat.value}
              </dd>
              <dt className="mt-2 text-xs font-bold text-cream-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
