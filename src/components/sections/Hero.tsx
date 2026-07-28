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
        Fotka lusku — zmenšený rám ořezaný jen zleva/zprava/zdola (clip-path
        s top: -100 % nechává horní hranu otevřenou), takže lusk může vizuálně
        vystupovat nad rám. Vrstva leží nad kartou, ne uvnitř jejího
        overflow-hidden, jinak by ji horní hrana karty osekla.
      */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block">
        <div
          className="absolute inset-x-3 bottom-3 top-10 rounded-2xl"
          style={{ clipPath: "inset(-100% 0px 0px 0px round 1rem)" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-[135%]">
            <Image
              src="/images/kakaovy-lusk.webp"
              alt="Rozkrojený kakaový lusk s boby"
              fill
              sizes="50vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
