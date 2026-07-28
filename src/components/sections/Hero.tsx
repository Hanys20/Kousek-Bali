import Image from "next/image";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon, type IconName } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative flex min-h-[42rem] items-center lg:min-h-[46rem]">
        <Image
          src="/images/hero-jungle.webp"
          alt="Šálek horkého kakaa a rozkrojený kakaový lusk v balijské džungli"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* rovnoměrné ztmavení pro čitelnost textu — žádný přechod do ztracena */}
        <div className="absolute inset-0 bg-night-950/45" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 text-center sm:px-8 lg:pb-36">
          <div className="mx-auto max-w-2xl">
            <SectionLabel className="text-center">
              Ceremoniální kakao přímo z Bali
            </SectionLabel>

            {/* Yoshida v kombinaci řezů: tučný akcent + lehčí pokračování */}
            <h1 className="mt-5 font-brand text-4xl uppercase leading-[1.05] text-cream sm:text-6xl lg:text-[4.25rem]">
              <span className="font-bold">Kousek Bali</span>
              <span className="block font-light">v každém šálku</span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream-muted">
              Čisté ceremoniální kakao, ručně zpracované s respektem k přírodě
              i místním tradicím. Pro každého, kdo chce zpomalit a vychutnat si
              okamžik.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="/eshop" size="lg">
                Objevit kakao
                <ArrowRight />
              </Button>
              <Button href="/o-nas" variant="secondary" size="lg">
                Náš příběh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* trust bar přesahuje přes spodní okraj hero fotky */}
      <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-5 sm:-mt-20 sm:px-8">
        <TrustBar />
      </div>
    </section>
  );
}

const trustItems: { icon: IconName; label: string }[] = [
  { icon: "kakao", label: "100 % čisté kakao" },
  { icon: "ekologie", label: "Přímo od farmářů" },
  { icon: "pece", label: "Ručně zpracované" },
];

function TrustBar() {
  return (
    <div className="relative">
      {/* karta s ikonami — fotka lusku je samostatná vrstva mimo ni (viz níž),
          díky tomu ji nezakusuje overflow-hidden a může nahoře přesahovat ven */}
      <div className="grid overflow-hidden rounded-card border border-cream/10 bg-night-900/95 shadow-2xl shadow-black/50 backdrop-blur-sm lg:grid-cols-2">
        <div aria-hidden className="hidden lg:block" />

        {/* dělicí linka je přesně na půlce karty (lg:border-l) */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:border-l lg:border-cream/15">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3.5 px-6 py-6 text-center sm:flex-col sm:gap-3 sm:py-8"
            >
              <Icon name={item.icon} className="size-8 text-turquoise sm:size-9" />
              <span className="text-sm font-bold leading-snug text-cream sm:max-w-[9rem]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/*
        Fotka lusku je transparentní produktový výřez, ne fotka na celou
        plochu — proto object-contain (nic z lusku neuřízne) místo
        object-cover (to useklo vzpřímený lusk úplně nahoře). Vrstva leží
        nad kartou mimo její overflow-hidden a přesahuje přes její horní
        okraj, takže lusk může vizuálně vystupovat ven z rámu.
      */}
      <div className="pointer-events-none absolute -top-8 bottom-3 left-3 hidden w-[42%] lg:block">
        <Image
          src="/images/kakaovy-lusk.webp"
          alt="Rozkrojený kakaový lusk s boby"
          fill
          sizes="30vw"
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
}
