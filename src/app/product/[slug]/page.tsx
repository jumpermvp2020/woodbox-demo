import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductGallery, ProductPurchase } from "@/components/product-actions";
import { products } from "@/data/products";
import { catalogProvider } from "@/lib/catalog-provider";

export async function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = await catalogProvider.getProductBySlug((await params).slug); return product ? { title: product.title, description: product.description, openGraph: { images: [product.images[0]] } } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = await catalogProvider.getProductBySlug((await params).slug);
  if (!product) notFound();
  const related = products.filter((candidate) => candidate.id !== product.id && candidate.purpose.some((purpose) => product.purpose.includes(purpose))).slice(0, 3);
  return <div className="shell page-space"><div className="breadcrumbs"><Link href="/catalog">Каталог</Link><span>/</span><span>{product.shortTitle}</span></div><div className="pdp"><ProductGallery product={product} /><div className="pdp-info"><p className="eyebrow">{product.type} · {product.availabilityLabel}</p><h1>{product.title}</h1><p className="pdp-price">{product.priceLabel}</p><p className="pdp-description">{product.description}</p><ProductPurchase product={product} /><dl className="specs"><div><dt>Размер</dt><dd>{product.size}</dd></div><div><dt>Материалы</dt><dd>{product.materials.join(", ")}</dd></div><div><dt>Отделка</dt><dd>{product.finish}</dd></div><div><dt>Срок</dt><dd>Готовое изделие - в наличии. Индивидуальная версия - после расчёта.</dd></div></dl><a className="source-link" href={product.sourceUrl} target="_blank" rel="noreferrer">Исходная карточка на Livemaster</a></div></div><section className="pdp-details"><div><p className="serif-mark">Детали</p><h2>Конструкция без лишнего</h2><p>Все заявленные свойства перенесены из карточки мастерской. Для индивидуального заказа геометрия и комплектация уточняются до изготовления.</p></div><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section><section className="size-diagram"><div><p className="eyebrow">Схема размеров</p><h2>{product.size}</h2><p>Размер указан по исходной карточке товара. Для точной посадки вложения мастерская рассчитывает внутренний объём отдельно.</p></div><div className="diagram-box"><span>Длина</span><span>Ширина</span><span>Высота</span></div></section><section className="section related"><div className="section-heading"><div><p className="eyebrow">Похожие изделия</p><h2>Продолжить выбор</h2></div></div><div className="product-grid three">{related.map((item) => <ProductCard product={item} key={item.id} />)}</div></section></div>;
}
