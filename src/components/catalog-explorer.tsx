"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/catalog";

const purposes = ["Все", "Украшения", "Подарок", "Коллекция", "Творчество", "Очки", "Корпоративный заказ"];
const types = ["Все типы", "Шкатулка", "Футляр", "Мини-комод", "Подарочный кейс", "Заготовка"];

export function CatalogExplorer({ products }: { products: Product[] }) {
  const [purpose, setPurpose] = useState("Все");
  const [type, setType] = useState("Все типы");
  const [price, setPrice] = useState("all");

  const filtered = useMemo(() => products.filter((product) => {
    const purposeMatch = purpose === "Все" || product.purpose.includes(purpose as Product["purpose"][number]);
    const typeMatch = type === "Все типы" || product.type === type;
    const priceMatch = price === "all" || (price === "under5000" ? product.price < 5000 : product.price >= 5000);
    return purposeMatch && typeMatch && priceMatch;
  }), [price, products, purpose, type]);

  return (
    <div className="catalog-layout">
      <aside className="filters" aria-label="Фильтры каталога">
        <div className="filter-group"><label htmlFor="purpose">Назначение</label><select id="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)}>{purposes.map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="filter-group"><label htmlFor="type">Тип</label><select id="type" value={type} onChange={(event) => setType(event.target.value)}>{types.map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="filter-group"><label htmlFor="price">Цена</label><select id="price" value={price} onChange={(event) => setPrice(event.target.value)}><option value="all">Любая</option><option value="under5000">До 5 000 ₽</option><option value="over5000">От 5 000 ₽</option></select></div>
        <div className="filter-note"><span className="status-dot" />Все показанные изделия есть в наличии</div>
      </aside>
      <div><div className="catalog-result"><span>{filtered.length} товаров</span><button type="button" onClick={() => { setPurpose("Все"); setType("Все типы"); setPrice("all"); }}>Сбросить фильтры</button></div><div className="product-grid catalog-grid">{filtered.map((product) => <ProductCard product={product} key={product.id} />)}</div></div>
    </div>
  );
}
