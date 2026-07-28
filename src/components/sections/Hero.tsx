import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";
import { stockPhotos } from "@/lib/stock-photos";

export function Hero() {
  return (
    <section className="relative">
      <PlaceholderPhoto
        label="Balijský chrám v džungli"
        src={stockPhotos.hero}
        priority
        className="h-[640px] w-full rounded-none border-none sm:h-[720px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/10" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-xl">
            <SectionLabel>Ceremoniální kakao přímo z Bali</SectionLabel>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-cream sm:text-6xl">
              Kousek Bali v každém šálku
            </h1>
            <p className="mt-6 max-w-md text-base text-cream-muted sm:text-lg">
              Čisté ceremoniální kakao od balijských farmářů — pěstované a
              zpracované s respektem k přírodě i tradicím. Pro každého, kdo
              chce zpomalit a vychutnat si okamžik.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/eshop">Objevit kakao</Button>
              <Button href="/o-nas" variant="secondary">
                Náš příběh
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* trust bar — přesahuje přes spodní okraj hero fotky (na mobilu jede pod fotkou v běžném toku) */}
      <div className="relative z-10 mx-auto -mt-16 hidden max-w-5xl px-6 sm:block">
        <TrustBarCard />
      </div>
      <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-6 sm:hidden">
        <TrustBarCard />
      </div>
    </section>
  );
}

function TrustBarCard() {
  const items = [
    { label: "100 % čisté kakao" },
    { label: "Přímo od farmářů" },
    { label: "Ručně zpracované" },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-cream/10 rounded-2xl border border-cream/10 bg-forest-900/95 shadow-2xl shadow-black/40 backdrop-blur">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-3 px-6 py-7 text-center">
          <TrustIcon />
          <span className="tracked-label text-xs text-cream">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function TrustIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-turquoise" aria-hidden>
      <path d="M12 2 3 7v6c0 5 4 8.5 9 9 5-.5 9-4 9-9V7l-9-5Z" />
      <path d="m8.5 12 2.5 2.5 4.5-4.5" />
    </svg>
  );
}
