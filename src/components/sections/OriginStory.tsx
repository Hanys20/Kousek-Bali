import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";

export function OriginStory() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <PlaceholderPhoto
            label="Foto: balijská farma, sklizeň kakaa"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-6 -right-6 rounded-2xl border border-turquoise/40 bg-forest-900 px-5 py-4 shadow-xl shadow-black/40">
            <p className="font-serif text-2xl text-turquoise">25+ let</p>
            <p className="tracked-label text-[10px] text-cream-muted">tradice pěstování</p>
          </div>
        </div>

        <div>
          <SectionLabel>Od farmářů až k vám</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream">
            Od balijských farmářů až k vašemu šálku
          </h2>
          <p className="mt-6 text-cream-muted">
            Naše kakao pochází z malých rodinných farem na Bali, kde se
            sklízí a zpracovává tradičními postupy — bez zbytečných zásahů a
            spěchu. Věříme, že takhle chutná kakao nejlépe: čistě, jemně a s
            respektem k místu, odkud pochází.
          </p>
          <div className="mt-8">
            <Button href="/o-nas" variant="secondary">
              Přečíst celý příběh
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
