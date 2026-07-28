import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button, ArrowRight } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Jak připravit ceremoniální kakao",
  description:
    "Návod krok za krokem: 30–40 g kakaa na osobu, zahřát na max. 75 °C, přilít 150–200 ml mléka a dochutit dle chuti. Malý rituál pro velký okamžik.",
};

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cokolada",
    title: "Nasekej",
    description:
      "Odměř si 30–40 g ceremoniálního kakaa na osobu a nasekej ho na menší kousky, ať se snáz rozpustí.",
  },
  {
    icon: "hrnec",
    title: "Zahřej",
    description:
      "Dej kakao do rendlíku, zalij malým množstvím vody a zahřívej na mírném ohni. Dej pozor, aby se nezačalo vařit — ideální teplota je do 75 °C, aby si kakao zachovalo své přirozené vlastnosti.",
  },
  {
    icon: "hmozdir",
    title: "Rozmíchej",
    description:
      "Do hrnečku si odměř 150–200 ml svého oblíbeného mléka (třeba ovesného), přilij ho k rozpuštěnému kakau a pomalu míchej, dokud se vše nepropojí. Podle chuti dochuť kokosovým cukrem, medem nebo jiným sladidlem — nápoj by neměl být příliš horký.",
  },
  {
    icon: "hrnek",
    title: "Vychutnej",
    description:
      "Pak už se jen pohodlně usaď, vnímej vůni kakaa a dopřej si chvíli přítomnosti — třeba i s pocitem, že do svého srdce zveš kousek Bali.",
  },
];

export default function NavodPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 pb-4 pt-40 text-center sm:px-8 lg:pt-48">
          <SectionLabel>Jak připravit</SectionLabel>
          <h1 className="mt-5 font-brand text-4xl font-bold uppercase leading-tight text-cream sm:text-5xl">
            Malý rituál pro velký okamžik
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream-muted">
            Ceremoniální kakao se nepřipravuje jako běžné kakao z krabice —
            nechává si na sebe čas. Tady je přesný postup.
          </p>
        </div>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-card border border-cream/10 bg-night-900 p-6 sm:gap-7 sm:p-8"
                >
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-turquoise font-brand text-sm font-bold text-night-950">
                      {i + 1}
                    </span>
                    <Icon name={step.icon} className="hidden size-9 text-turquoise sm:block" />
                  </div>
                  <div>
                    <h2 className="font-brand text-xl font-bold uppercase text-cream">
                      {step.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-cream-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-night-900/40 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionLabel>Tip na dozdobení</SectionLabel>
            <h2 className="mt-4 font-brand text-2xl font-bold uppercase leading-tight text-cream sm:text-3xl">
              Pro dokonalý závěr rituálu
            </h2>
            <p className="mt-5 leading-relaxed text-cream-muted">
              Pro jemnou pěnu použij šlehač, ponorný mixér nebo tradiční
              molinillo. Hotové kakao pak můžeš ozdobit sušenými jedlými
              květy, skořicí nebo špetkou kvalitní mořské soli.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream-muted/70">
              Video ukázku přípravy krok za krokem připravujeme.
            </p>
          </div>
        </section>

        <section className="py-16 text-center lg:py-20">
          <Button href="/eshop">
            Ochutnat kakao
            <ArrowRight />
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
