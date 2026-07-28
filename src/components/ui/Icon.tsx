// Ikony od klienta jsou černá čárová kresba (SVG). Přes CSS mask je
// obarvíme na libovolnou barvu z palety — barvu řídí `text-*` třída.
export type IconName =
  | "kakao"
  | "ekologie"
  | "pece"
  | "doprava"
  | "cokolada"
  | "hrnek"
  | "hrnec"
  | "hmozdir"
  | "svicka"
  | "sto-procent"
  | "bali-ostrov"
  | "kvet"
  | "meditace"
  | "list"
  | "farmari";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-6" }: IconProps) {
  const url = `url(/icons/${name}.svg)`;
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
