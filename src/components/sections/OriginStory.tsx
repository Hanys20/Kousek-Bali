import Image from "next/image";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LeafDecor } from "@/components/ui/LeafDecor";
import { Icon } from "@/components/ui/Icon";

export function OriginStory() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <LeafDecor className="-right-16 top-10 size-96 rotate-12" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-card">
              <Image
                src="/images/farmari.webp"
                alt="Ruce balijského farmáře držící zralý kakaový lusk na stromě"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            {/*
              Odznak přesahuje přes roh fotky. Drží se tvrzení, která má
              klient v zadání — žádné číslo, které nemáme jak doložit.
            */}
            <div className="absolute -bottom-7 left-4 flex items-center gap-3.5 rounded-2xl border border-turquoise/25 bg-night-850 px-6 py-4 shadow-xl shadow-black/40 sm:-left-7">
              <Icon name="ekologie" className="size-8 text-turquoise" />
              <p className="text-sm font-bold leading-tight text-cream">
                Malé rodinné
                <span className="block text-cream-muted">farmy na Bali</span>
              </p>
            </div>
          </div>

          <div className="lg:pt-4">
            <SectionLabel>Od farmářů až k vám</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] text-cream sm:text-5xl">
              Od balijských farmářů
              <span className="block">až k vám</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-cream-muted">
              Naše kakao pochází z malých rodinných farem na Bali, kde se
              pěstuje s úctou k přírodě a tradičním metodám. Každý krok — od
              sklizně až po balení — děláme ručně a v malé dílně, abychom
              zachovali jeho čistotu, sílu a jedinečný charakter.
            </p>
            <div className="mt-9">
              <Button href="/o-nas">
                Přečíst celý příběh
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
