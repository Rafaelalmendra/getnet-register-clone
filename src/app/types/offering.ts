export interface Offering {
  offering_id: string;
  reference_id: string;
  request_id: string;
  priced_offering_id: string;
  name: string;
  description: string;
  offering_code: string;
  campaign_code: string;
  offering_terms: string;
  special_conditions: string;
  image_url: string;
  price: number;
  items: Item[];
  filters: Filter[];
  offering_type: string;
  start_date_available: string;
}

export interface Item {
  item_sequence_number: number;
  product: Product;
  quantity: number;
  settlement_period?: string;
  unit_price?: number;
  total_price?: number;
}

export interface Product {
  product_id: string;
  description: string;
  name: string;
  product_type: string;
  composite_type?: string;
  phone_support_getnet_included?: boolean;
  pricing_model?: PricingModel;
  product_characteristics: ProductCharacteristic[];
  product_benefits: string[];
  product_items?: ProductItem[];
  terminal_type?: string;
  transaction_channel_type?: string;
  image_urls?: string[];
  delivery_method?: string;
  wireless?: boolean;
  print_receipt?: boolean;
  icon_url?: string;
}

export interface PricingModel {
  amount: number;
  currency: string;
  pricing_type: string;
}

export interface ProductCharacteristic {
  description: string;
  image_url: string;
}

export interface ProductItem {
  description: string;
  image_url: string;
}

export interface Filter {
  values: {
    country?: string;
    channel?: string;
    terminal_type_wireless?: boolean;
    receipt_print?: boolean;
    pricing_type?: string;
    settlement_period?: string;
  };
}
