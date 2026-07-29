import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon } from "@/components/ui/Icon";
import { Button, ArrowRight } from "@/components/ui/Button";
import { LeafDecor } from "@/components/ui/LeafDecor";

export const metadata: Metadata = {
  title: "Náš příběh",
  description:
    "Kousek Bali založili Štěpánka a Honza poté, co objevili ceremoniální kakao na svatební cestě na Bali. Dovážíme ho od balijské čokoládovny Ubud Raw.",
};

export default function ONasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 pb-4 pt-40 text-center sm:px-8 lg:pt-48">
          <SectionLabel>Náš příběh</SectionLabel>
          <h1 className="mt-5 font-brand text-4xl uppercase leading-tight text-cream sm:text-5xl">
            <span className="font-bold">Kdo stojí za</span>{" "}
            <span className="font-light">Kousek Bali</span>
          </h1>
        </div>

        <section className="relative overflow-hidden py-16 lg:py-24">
          <LeafDecor className="-right-16 top-10 size-96 rotate-12" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-4/3 overflow-hidden rounded-card lg:order-2">
                <Image
                  src="/images/salek-kakaa.webp"
                  alt="Šálek ceremoniálního kakaa, jak ho Štěpánka a Honza přivezli z Bali"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:order-1">
                <p className="leading-relaxed text-cream-muted">
                  Ceremoniální kakao z Bali je pro nás srdeční záležitost.
                  Objevili jsme ho během naší svatební cesty na Bali —
                  ostrově bohů. Ačkoli jsme kakao znali už dřív, to balijské
                  nás okamžitě okouzlilo jemnou, plnou a lehce zemitou chutí
                  i jedinečnou energií místa, odkud pochází.
                </p>
                <p className="mt-5 leading-relaxed text-cream-muted">
                  Zaujalo nás, že čokoládovna{" "}
                  <strong className="text-cream">Ubud Raw</strong> podporuje
                  lokální farmáře a vyrábí kakao udržitelným způsobem.
                  Věříme, že kakao pěstované v tropických oblastech s
                  dostatkem vody je přirozenější a šetrnější k přírodě.
                </p>
                <p className="mt-5 leading-relaxed text-cream-muted">
                  Po návratu jsme kakao přivezli rodině a přátelům — a jejich
                  nadšení nás utvrdilo v rozhodnutí sdílet tenhle „kousek
                  Bali“ i u nás v Česku.
                </p>
                <p className="mt-5 leading-relaxed text-cream-muted">
                  Naším přáním není jen dovážet kvalitní kakao, ale taky
                  vytvářet komunitu a prostor pro setkávání — kakao vnímáme
                  jako nápoj otevřeného srdce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ubud Raw — reálný partner, ne obecná fráze o "malých farmách" */}
        <section className="bg-night-900/40 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Icon name="ekologie" className="mx-auto size-10 text-turquoise" />
            <SectionLabel className="mt-5">Náš partner na Bali</SectionLabel>
            <h2 className="mt-4 font-brand text-3xl font-bold uppercase leading-tight text-cream sm:text-4xl">
              Ubud Raw
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream-muted">
              Ubud Raw je balijská čokoládovna, která jedná v souladu s
              environmentální i sociální udržitelností a podporuje lokální
              farmáře. Ti do pěstování kakaových bobů vkládají i duchovní
              rozměr — modlí se a do sadů přinášejí květinové obětiny zvané
              Canang sari. Po sklizni se kakaové boby nepraží, ale přirozeně
              fermentují a suší na slunci, aby si kakao zachovalo své
              přirozené vlastnosti a kvalitu.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <svg
              width="40"
              height="31"
              viewBox="0 0 44 34"
              fill="currentColor"
              className="mx-auto text-turquoise"
              aria-hidden
            >
              <path d="M0 34V19.4C0 8.7 5.9 1.6 17.1 0l1.5 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H0Zm25.4 0V19.4C25.4 8.7 31.3 1.6 42.5 0L44 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H25.4Z" />
            </svg>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-cream sm:text-3xl">
              Děkujeme za vaši podporu.
            </p>
            <p className="tracked-label mt-5 text-xs font-bold text-cream-muted">
              Štěpánka a Honza — ze srdce do srdce
            </p>

            <div className="mt-10">
              <Button href="/#kakao">
                Ochutnat kakao
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
