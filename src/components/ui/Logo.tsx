import Image from "next/image";

type LogoProps = {
  className?: string;
  /** `dlouhe` obsahuje i claim „ze srdce do srdce“ — hodí se do patičky. */
  variant?: "hlavni" | "dlouhe";
};

// Světlý motiv (branch experiment/svetly-motiv): používá tyrkysovou verzi
// loga místo bílé — bílá by na světlém pozadí zmizela. Obě verze dodal
// klient hotové, jen se přepíná, který soubor se použije.
export function Logo({ className = "h-11 w-auto", variant = "hlavni" }: LogoProps) {
  const isLong = variant === "dlouhe";
  return (
    <Image
      src={isLong ? "/logo/logo-dlouhe.svg" : "/logo/logo-hlavni-tyrkys.svg"}
      alt="Kousek Bali"
      width={isLong ? 1407 : 117}
      height={isLong ? 394 : 56}
      priority
      className={className}
    />
  );
}
