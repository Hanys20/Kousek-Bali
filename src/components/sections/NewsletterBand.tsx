import { Icon } from "@/components/ui/Icon";

// Nahrazuje dřívější StatsBar (nedoložená čísla po quote působila zbytečně).
// Newsletter se přesunul sem z patičky — v patičce zůstal jen kontakt.
// border-t turquoise (ne jen cream/10) — výraznější švík od FAQ nad tím.
export function NewsletterBand() {
  return (
    <section className="border-t border-turquoise/25 bg-night-900/40">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-16 lg:py-16">
        <div className="flex items-center gap-4">
          <Icon name="svicka" className="hidden size-10 shrink-0 text-turquoise sm:block" />
          <div>
            <h2 className="font-brand text-2xl uppercase leading-tight text-cream sm:text-3xl">
              <span className="font-bold">Buď součástí</span>{" "}
              <span className="font-light">kakaové rodiny</span>
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-muted">
              Novinky, tipy a příběhy z Bali přímo do e-mailu. Jednou za čas,
              bez spamu.
            </p>
          </div>
        </div>

        {/* Odeslání napojíme na Supabase spolu s objednávkami. */}
        <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row lg:ml-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            Váš e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Váš e-mail"
            className="w-full rounded-full border border-cream/20 bg-night-950 px-5 py-3 text-sm text-cream placeholder:text-cream-muted/70 focus:border-turquoise focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-turquoise px-6 py-3 font-brand text-sm font-bold uppercase tracking-wide text-night-950 transition-colors hover:bg-turquoise-light"
          >
            Přihlásit se
          </button>
        </form>
      </div>
    </section>
  );
}
