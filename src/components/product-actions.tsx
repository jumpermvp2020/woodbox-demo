"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/types/catalog";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(product.images[0]);
  return (
    <div className="gallery">
      <div className="gallery-main"><Image src={active} alt={product.title} fill priority sizes="(max-width: 900px) 100vw, 58vw" /></div>
      <div className="gallery-thumbs">{product.images.map((image, index) => <button className={active === image ? "active" : ""} type="button" key={image} onClick={() => setActive(image)} aria-label={`Показать фото ${index + 1}`}><Image src={image} alt="" fill sizes="90px" /></button>)}</div>
    </div>
  );
}

export function ProductPurchase({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const add = () => { addItem(product.id); setAdded(true); };
  return <div className="purchase-actions"><button className="button button-primary" type="button" onClick={add}>{added ? <><CheckIcon />Добавлено</> : "Добавить в корзину"}</button><Link className="button button-secondary" href={`/custom-order?product=${product.slug}`}>Изменить размер или комплектацию</Link></div>;
}
