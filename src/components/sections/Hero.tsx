import Image from "next/image";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative flex min-h-[42rem] items-center lg:min-h-[46rem]">
        <Image
          src="/images/cocoa-texture-hero.webp"
          alt="Detailní textura pražených kakaových bobů"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/*
          Neutrální černé ztmavení — dřív night-950 (tyrkysovo-modrá) dávalo
          fotce barevný nádech, který tam neměl být. Černá tón fotky
          neovlivňuje, jen ji ztlumí pro čitelnost textu.
        */}
        <div className="absolute inset-0 bg-black/48" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-32 text-center sm:px-8 lg:pb-36">
          <div className="mx-auto max-w-2xl">
            <span className="tracked-label block text-sm font-extrabold text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-base">
              Ceremoniální kakao přímo z Bali
            </span>

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
              <Button href="/#kakao" size="lg">
                Objevit kakao
                <ArrowRight />
              </Button>
              <Button href="/o-nas" variant="glass" size="lg">
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
  { icon: "farmari", label: "Přímo od farmářů" },
  { icon: "hmozdir", label: "Ručně zpracované" },
];

function TrustBar() {
  return (
    <div className="relative">
      <div className="grid overflow-hidden rounded-card border border-cream/10 bg-night-900/95 shadow-2xl shadow-black/50 backdrop-blur-sm lg:grid-cols-[1fr_3fr]">
        {/* prázdná rezervace místa — lusk samotný je samostatná vrstva níž */}
        <div aria-hidden className="hidden lg:block" />

        <ul className="grid grid-cols-1 sm:grid-cols-3">
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
        Lusk je samostatná vrstva MIMO overflow-hidden kartu, takže ho
        nic neořezává shora ani zprava. Zvětšení roste od pravého dolního
        rohu (origin-bottom-right), takže dole a vpravo... pozor: chceme
        ořez jen dole a vlevo, přesah nahoře a vpravo — proto kotva
        vlevo dole (origin-bottom-left): odtud fotka roste nahoru
        a doprava, dole/vlevo zůstává přesně na hraně karty.
      */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 lg:block">
        <Image
          src="/images/kakaovy-lusk.webp"
          alt="Rozkrojený kakaový lusk s boby"
          fill
          sizes="20vw"
          className="origin-bottom-left scale-125 object-cover object-[75%_0%]"
        />
      </div>
    </div>
  );
}
