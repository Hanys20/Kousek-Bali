import Image from "next/image";

type LogoProps = {
  className?: string;
  /** `dlouhe` obsahuje i claim „ze srdce do srdce“ — hodí se do patičky. */
  variant?: "hlavni" | "dlouhe";
};

// Vektorové logo od klienta v bílé (negativní) verzi pro tmavé pozadí.
// Logo se nepřebarvuje — používá se tak, jak je.
export function Logo({ className = "h-11 w-auto", variant = "hlavni" }: LogoProps) {
  const isLong = variant === "dlouhe";
  return (
    <Image
      src={isLong ? "/logo/logo-dlouhe.svg" : "/logo/logo-hlavni.svg"}
      alt="Kousek Bali"
      width={isLong ? 1407 : 117}
      height={isLong ? 394 : 56}
      priority
      className={className}
    />
  );
}
