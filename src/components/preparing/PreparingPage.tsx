import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { socials } from "@/components/ui/SocialLinks";
import styles from "./preparing.module.css";

const instagram = socials.find((social) => social.label === "Instagram");

const steps = [
  {
    icon: "odvaz",
    title: "Odvažte kakao",
    text: "Na jeden hrnek použijte 30–40 g kakaa. Nakrájejte ho na menší kousky a dejte do rendlíku s trochou vody.",
  },
  {
    icon: "zahrej",
    title: "Pomalu zahřejte",
    text: "Zahřívejte na mírném ohni, maximálně na 70 °C. Kakao by se nemělo vařit.",
  },
  {
    icon: "mleko",
    title: "Přidejte mléko",
    text: "Přilijte 150–200 ml oblíbeného mléka, například ovesného, a důkladně promíchejte.",
  },
  {
    icon: "vyslehej",
    title: "Vyšlehejte",
    text: "Pro jemnou pěnu použijte metličku, mixér nebo tradiční molinillo.",
  },
  {
    icon: "dochut",
    title: "Dochuťte",
    text: "Podle chuti přidejte kokosový cukr, med, skořici nebo špetku soli.",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" className={down ? styles.arrowDown : undefined}>
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PreparingPage() {
  return (
    <div className={styles.page}>
      <a href="#navod" className={styles.skipLink}>Přejít na návod k přípravě kakaa</a>
      <header className={styles.header}>
        <a href="/" aria-label="Kousek Bali — úvod" className={styles.logo}>
          <Logo className="h-14 w-auto sm:h-16" />
        </a>
        {instagram?.href && (
          <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{instagram.path}</svg>
            Instagram
          </a>
        )}
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="pripravujeme">
          <div className={styles.heroCopy}>
            <h1 id="pripravujeme" className={styles.title}>
              <span className={styles.titleLead}>Připravujeme pro vás web plný</span>{" "}
              <span className={styles.titleAccent}>kakaových dobrot.</span>
            </h1>
            <p className={styles.intro}>Mezitím se podívejte, jak si připravit kakao.</p>
            <a href="#navod" className={styles.button}>Návod na přípravu <Arrow down /></a>
            <p className={styles.contact}>
              Máte zájem o některý z našich produktů? Napište nám na{" "}
              <a href="mailto:info@kousekbali.cz">info@kousekbali.cz</a>.
            </p>
            {instagram?.href && (
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={styles.mobileInstagram}>
                @kousekbali na Instagramu <Arrow />
              </a>
            )}
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.photoFrame}>
              <Image src="/images/pripravujeme-fotka.webp" alt="Společná fotografie u moře s útesy v pozadí" fill preload sizes="(max-width: 700px) 90vw, (max-width: 1000px) 40vw, 430px" className={styles.photo} />
            </div>
          </figure>
        </section>

        <section id="navod" className={styles.recipe} aria-labelledby="navod-title">
          <div className={styles.recipeInner}>
            <div className={styles.recipeHeading}>
              <h2 id="navod-title" className={styles.sectionTitle}>Jak si připravit kakao</h2>
              <span aria-hidden="true" className={styles.recipeIllustration} />
            </div>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.icon} className={styles.step}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <div className={styles.stepArtwork}>
                    <span aria-hidden="true" className={styles.stepIcon} style={{ maskImage: `url(/icons/priprava-${step.icon}.svg)`, WebkitMaskImage: `url(/icons/priprava-${step.icon}.svg)` }} />
                  </div>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Kousek Bali</span>
        <a href="mailto:info@kousekbali.cz">info@kousekbali.cz <Arrow /></a>
      </footer>
    </div>
  );
}
