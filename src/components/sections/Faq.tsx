import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Jak si kakao připravit?",
    answer:
      "Nasekej 30–40 g kakaa na osobu, zalij malým množstvím vody a zahřívej na mírném ohni max. do 75 °C (nesmí vařit). Přilij 150–200 ml oblíbeného mléka, promíchej a podle chuti osladíš kokosovým cukrem nebo medem. Celý postup najdeš krok za krokem výš v sekci Jak připravit.",
  },
  {
    question: "Jaký má kakao efekt na tělo?",
    answer:
      "Ceremoniální kakao obsahuje teobromin a menší množství kofeinu — dodává jemnou, dlouhotrvající energii bez neklidu, který znáš třeba od kávy. Spíš než razantní nakopnutí jde o pocit klidu, soustředění a otevřenosti, který si spojíme hlavně s pomalým rituálem přípravy.",
  },
  {
    question: "Z čeho se kakao skládá?",
    answer:
      "Naše kakao je čistá kakaová hmota z Bali — žádný přidaný cukr, mléko ani umělé přísady. Sladíš a ředíš si ho podle vlastní chuti, přesně jak popisujeme v návodu k přípravě.",
  },
  {
    question: "Jak probíhá sklizeň a výroba?",
    answer:
      "Kakao dovážíme od balijské čokoládovny Ubud Raw, která podporuje lokální farmáře a zpracovává boby tradičně — po sklizni se nepraží, ale přirozeně fermentují a suší na slunci, aby si zachovaly svou chuť i vlastnosti.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <SectionLabel>Časté otázky</SectionLabel>
          <h2 className="mt-5 font-brand text-3xl uppercase leading-tight text-cream sm:text-5xl">
            <span className="font-bold">Než si</span>{" "}
            <span className="font-light">objednáš</span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-card border border-cream/10 bg-night-900 px-6 py-5 open:border-turquoise/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-cream marker:content-none">
                {item.question}
                <span
                  aria-hidden
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-cream/5 text-turquoise transition-transform duration-200 group-open:rotate-45"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
