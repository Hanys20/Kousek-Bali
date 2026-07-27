export type Product = {
  slug: string;
  name: string;
  price: number;
  weightGrams: number;
  description: string;
  rating: number;
  featured?: boolean;
  image: string;
};

export type ShippingMethod = "zasilkovna" | "balikovna" | "osobni-predani";

export type OrderStatus = "pending" | "paid";
