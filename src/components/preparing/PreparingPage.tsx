import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import styles from "./preparing.module.css";

const steps = [
  {
    icon: "odvaz",
    title: "Odvaž a nakrájej",
    lead: "30–40 g kakaa na jeden hrnek.",
    text: "Nakrájej ho na menší kousky a v rendlíku rozpusť s trochou vody.",
  },
  {
    icon: "zahrej",
    title: "Zahřívej pomalu",
    lead: "Mírný oheň, maximálně 70 °C.",
    text: "Kakao nech jen jemně prohřát, ne vařit. Zachová si tak svou chuť i cenné látky.",
  },
  {
    icon: "mleko",
    title: "Přilij mléko",
    lead: "150–200 ml tvého oblíbeného.",
    text: "Třeba ovesného. Přidávej ho k rozpuštěnému kakau a všechno důkladně promíchej.",
  },
  {
    icon: "vyslehej",
    title: "Vyšlehej do pěny",
    lead: "Malý detail, velká radost.",
    text: "Pro jemnou pěnu kakao vyšlehej metličkou, mixérem nebo tradičním molinillem.",
  },
  {
    icon: "dochut",
    title: "Dolaď podle sebe",
    lead: "Přesně tak, jak ho máš rád.",
    text: "Kokosovým cukrem, medem, skořicí nebo špetkou soli. A teď už jen svůj oblíbený hrnek.",
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
        <span className={styles.headerNote}>Ze srdce do srdce.</span>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="pripravujeme">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span className={styles.statusDot} />Náš web ještě zraje</p>
            <h1 id="pripravujeme" className={styles.title}>
              Připravujeme<br />pro vás náš<br /><span>šťavnatý<br className={styles.mobileBreak} /> kakaový web.</span>
            </h1>
            <p className={styles.intro}>Mícháme příběhy, ladíme chutě a chystáme místo,<br className={styles.desktopBreak} /> kde vám bude dobře. Už brzy vás pozveme dál.</p>
            <a href="#navod" className={styles.button}>Mezitím si připrav kakao <Arrow down /></a>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.photoFrame}>
              <Image src="/images/salek-kakaa.webp" alt="Hrnek napěněného kakaa s okvětními lístky v klidné balijské atmosféře" fill priority sizes="(max-width: 700px) 90vw, 43vw" className={styles.photo} />
            </div>
            <span className={styles.photoLabel}>Kousek Bali. Už teď ve tvém hrnku.</span>
            <div className={styles.photoSeal} aria-hidden="true"><Icon name="kakao" className="size-8" /><span>Malá chvíle.<br />Velký prožitek.</span></div>
          </figure>
        </section>

        <section id="navod" className={styles.recipe} aria-labelledby="navod-title">
          <div className={styles.recipeHeading}>
            <div>
              <p className={styles.eyebrow}>Web ještě není. Kakao už být může.</p>
              <h2 id="navod-title" className={styles.sectionTitle}>Tvůj malý<br /><span>kakaový rituál.</span></h2>
            </div>
            <p className={styles.recipeIntro}>Než se tu zabydlí celý náš příběh, dopřej si jeho první doušek. Stačí jeden hrnek a pár minut jen pro sebe.</p>
          </div>

          <div className={styles.recipeBody}>
            <aside className={styles.ingredients} aria-label="Na jeden hrnek si připrav">
              <Icon name="hrnek" className="size-16 text-turquoise-light" />
              <h3 className={styles.ingredientsTitle}>Na jeden hrnek</h3>
              <ul>
                <li><strong>30–40 g</strong><span>kakaa</span></li>
                <li><strong>Trochu</strong><span>vody na rozpuštění</span></li>
                <li><strong>150–200 ml</strong><span>oblíbeného mléka</span></li>
                <li><strong>Podle chuti</strong><span>něco na doladění</span></li>
              </ul>
              <p>A hlavně nikam nespěchej.</p>
            </aside>

            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.icon} className={styles.step}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <span aria-hidden="true" className={styles.stepIcon} style={{ maskImage: `url(/icons/priprava-${step.icon}.svg)`, WebkitMaskImage: `url(/icons/priprava-${step.icon}.svg)` }} />
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}><strong>{step.lead}</strong> {step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.closing}>
            <Icon name="slunce" className="size-10 text-turquoise-light" />
            <p>Pak už si jen dopřej chvíli přítomnosti<br />a pozvi do svého srdce <span>kousek Bali.</span></p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Kousek Bali <span aria-hidden="true">·</span> Ze srdce do srdce.</span>
        <a href="mailto:info@kousekbali.cz">info@kousekbali.cz <Arrow /></a>
      </footer>
    </div>
  );
}
