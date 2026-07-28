export type Product = {
  slug: string;
  name: string;
  price: number;
  weightGrams: number;
  description: string;
  /** Doplňková věta navíc — používá ji zvýrazněná („doporučeno“) karta. */
  note?: string;
  /** Zobrazíme, až budou skutečné recenze — vymyšlené hodnocení klame zákazníka. */
  rating?: number;
  featured?: boolean;
  image: string;
  /** CSS object-position, aby se fotka v čtvercové kartě ořízla na to podstatné. */
  imagePosition?: string;
};

export type ShippingMethod = "zasilkovna" | "balikovna" | "osobni-predani";

export type OrderStatus = "pending" | "paid";
