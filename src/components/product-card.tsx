"use client";

import Image from "next/image";
import Link from "next/link";
import { BagIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/types/catalog";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  return (
    <article className="product-card">
      <Link className="product-image" href={`/product/${product.slug}`}>
        <Image src={product.images[0]} alt={product.title} fill sizes="(max-width: 680px) 92vw, (max-width: 1100px) 45vw, 24vw" priority={priority} />
        <span className="availability">{product.availabilityLabel}</span>
      </Link>
      <div className="product-card-body">
        <div><p className="eyebrow">{product.type} · {product.purpose[0]}</p><Link href={`/product/${product.slug}`}><h3>{product.shortTitle}</h3></Link><p className="product-meta">{product.size}</p></div>
        <div className="product-card-bottom"><strong>{product.priceLabel}</strong><button type="button" className="quick-add" onClick={() => addItem(product.id)} aria-label={`Добавить ${product.shortTitle} в корзину`}><BagIcon /></button></div>
      </div>
    </article>
  );
}
