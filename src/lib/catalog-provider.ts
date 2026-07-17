import { products } from "@/data/products";
import type { CatalogProvider, Product } from "@/types/catalog";

class LocalCatalogProvider implements CatalogProvider {
  async getProducts(): Promise<Product[]> {
    return products;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return products.find((product) => product.slug === slug) ?? null;
  }
}

export const catalogProvider: CatalogProvider = new LocalCatalogProvider();
