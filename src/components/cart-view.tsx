"use client";

import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";

const money = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });

export function CartView() {
  const { items, total, updateQuantity, removeItem } = useCart();
  if (!items.length) return <div className="empty-state"><p className="serif-mark">Пока пусто</p><h1>В корзине нет изделий</h1><p>Посмотрите готовые шкатулки и футляры или подготовьте индивидуальный заказ.</p><Link className="button button-primary" href="/catalog">Перейти в каталог</Link></div>;
  return (
    <div className="cart-layout">
      <div className="cart-lines">{items.map(({ product, quantity }) => <article className="cart-line" key={product.id}><Link className="cart-line-image" href={`/product/${product.slug}`}><Image src={product.images[0]} alt={product.title} fill sizes="140px" /></Link><div className="cart-line-info"><p className="eyebrow">{product.type}</p><h2>{product.shortTitle}</h2><p>{product.size}</p><button className="text-button" type="button" onClick={() => removeItem(product.id)}>Удалить</button></div><div className="quantity"><button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="Уменьшить количество"><MinusIcon /></button><span>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="Увеличить количество"><PlusIcon /></button></div><strong>{money.format(product.price * quantity)}</strong></article>)}</div>
      <aside className="order-summary"><p className="eyebrow">Ваш заказ</p><h2>Итого</h2><div><span>Товары</span><strong>{money.format(total)}</strong></div><div><span>Доставка</span><span>Рассчитывается позже</span></div><div className="summary-total"><span>К оплате</span><strong>{money.format(total)}</strong></div><p className="demo-note">Демо-режим. Оплата не производится.</p><Link className="button button-primary full" href="/checkout">Перейти к оформлению</Link></aside>
    </div>
  );
}
