export type ProductPurpose =
  | "Украшения"
  | "Подарок"
  | "Коллекция"
  | "Творчество"
  | "Очки"
  | "Корпоративный заказ";

export type ProductType =
  | "Шкатулка"
  | "Футляр"
  | "Мини-комод"
  | "Подарочный кейс"
  | "Заготовка";

export interface Product {
  id: string;
  slug: string;
  sourceUrl: string;
  title: string;
  shortTitle: string;
  price: number;
  priceLabel: string;
  size: string;
  materials: string[];
  finish: string;
  purpose: ProductPurpose[];
  type: ProductType;
  availability: "in_stock" | "made_to_order";
  availabilityLabel: string;
  description: string;
  features: string[];
  images: string[];
  featured?: boolean;
  customizable?: boolean;
}

export interface CatalogProvider {
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
}
