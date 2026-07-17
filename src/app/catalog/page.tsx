import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { catalogProvider } from "@/lib/catalog-provider";

export const metadata: Metadata = { title: "Каталог", description: "Готовые деревянные шкатулки, футляры и подарочные кейсы Woodbox." };

export default async function CatalogPage() {
  const products = await catalogProvider.getProducts();
  return <div className="shell page-space"><header className="page-header"><p className="eyebrow">10 реальных изделий</p><h1>Каталог Woodbox</h1><p>Шкатулки, футляры и заготовки из мастерской. Фильтруйте по задаче, типу и цене.</p></header><CatalogExplorer products={products} /></div>;
}
