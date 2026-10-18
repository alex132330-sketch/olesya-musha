/* ── Cart ── */

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  /** e.g. "15 мл", "60 мин" */
  meta?: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

/* ── Legacy Product (services) ── */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "nutrition" | "oils" | "programs";
  slug: string;
}

/* ── Oils ── */

export type OilCategory =
  | "relaxation"
  | "energy"
  | "immunity"
  | "skin"
  | "balance";

export type OilScent = "floral" | "citrus" | "woody" | "herbal" | "spicy";

export interface Oil {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  composition: string;
  usage: string[];
  volume: string;
  price: number;
  categories: OilCategory[];
  scent: OilScent;
  image?: string;
  objectFit?: "cover" | "contain";
  benefits: string[];
}

/* ── Forms ── */

export interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
