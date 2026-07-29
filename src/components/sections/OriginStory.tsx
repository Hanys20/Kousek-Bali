import Image from "next/image";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LeafDecor } from "@/components/ui/LeafDecor";
import { Icon } from "@/components/ui/Icon";

export function OriginStory() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/*
        Vzor kakaových listů přes celou šířku — aspect-ratio přesně podle
        zdrojového SVG (2667:1500), takže se nic neořezává shora ani zdola,
        jen ho případně ořízne pravý/levý okraj sekce.
      */}
      <LeafDecor
        src="/icons/cocoa-pattern.svg"
        maskSize="100% 100%"
        className="inset-x-0 top-0 aspect-[2667/1500] w-full"
      />

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

            {/* Odznak přesahuje přes roh fotky — drží se reálného zpracování od Ubud Raw. */}
            <div className="absolute -bottom-7 left-4 flex items-center gap-3.5 rounded-2xl border border-turquoise/25 bg-night-850 px-6 py-4 shadow-xl shadow-black/40 sm:-left-7">
              <Icon name="slunce" className="size-8 text-turquoise" />
              <p className="text-sm font-bold leading-tight text-cream">
                Bez pražení
                <span className="block text-cream-muted">sušené na slunci</span>
              </p>
            </div>
          </div>

          <div className="lg:pt-4">
            <SectionLabel>Od farmářů až k vám</SectionLabel>
            <h2 className="mt-5 font-brand text-3xl uppercase leading-[1.15] text-cream sm:text-5xl">
              <span className="font-bold">Od balijských farmářů</span>
              <span className="block font-light">až k vám</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-cream-muted">
              Kakao dovážíme od balijské čokoládovny <strong className="text-cream">Ubud Raw</strong>,
              která podporuje lokální farmáře a zpracovává kakao tradičně —
              boby se nepraží, ale přirozeně fermentují a suší na slunci, aby
              si zachovaly svou chuť i vlastnosti.
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
