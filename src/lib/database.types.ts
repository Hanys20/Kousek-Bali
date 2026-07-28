// Vygenerováno ze Supabase schématu. Po každé změně schématu znovu vygeneruj.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: { created_at: string; email: string; id: string; source: string | null };
        Insert: { created_at?: string; email: string; id?: string; source?: string | null };
        Update: { created_at?: string; email?: string; id?: string; source?: string | null };
        Relationships: [];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          product_name: string;
          quantity: number;
          unit_price_czk: number;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          product_name: string;
          quantity: number;
          unit_price_czk: number;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string | null;
          product_name?: string;
          quantity?: number;
          unit_price_czk?: number;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          newsletter_consent: boolean;
          paid_at: string | null;
          phone: string | null;
          shipping_method: string;
          shipping_note: string | null;
          shipping_point: string | null;
          shipping_price_czk: number;
          status: string;
          total_czk: number;
          variable_symbol: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          newsletter_consent?: boolean;
          paid_at?: string | null;
          phone?: string | null;
          shipping_method: string;
          shipping_note?: string | null;
          shipping_point?: string | null;
          shipping_price_czk?: number;
          status?: string;
          total_czk: number;
          variable_symbol: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          newsletter_consent?: boolean;
          paid_at?: string | null;
          phone?: string | null;
          shipping_method?: string;
          shipping_note?: string | null;
          shipping_point?: string | null;
          shipping_price_czk?: number;
          status?: string;
          total_czk?: number;
          variable_symbol?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          active: boolean;
          created_at: string;
          description: string | null;
          featured: boolean;
          id: string;
          image: string | null;
          image_position: string | null;
          name: string;
          note: string | null;
          price_czk: number;
          slug: string;
          sort_order: number;
          weight_grams: number;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          description?: string | null;
          featured?: boolean;
          id?: string;
          image?: string | null;
          image_position?: string | null;
          name: string;
          note?: string | null;
          price_czk: number;
          slug: string;
          sort_order?: number;
          weight_grams: number;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          description?: string | null;
          featured?: boolean;
          id?: string;
          image?: string | null;
          image_position?: string | null;
          name?: string;
          note?: string | null;
          price_czk?: number;
          slug?: string;
          sort_order?: number;
          weight_grams?: number;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

export type ProductRow = Database["public"]["Tables"]["products"]["Row"];
export type OrderRow = Database["public"]["Tables"]["orders"]["Row"];
export type OrderItemRow = Database["public"]["Tables"]["order_items"]["Row"];
