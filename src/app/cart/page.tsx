import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = { title: "Корзина" };
export default function CartPage() { return <div className="shell page-space"><header className="page-header compact"><p className="eyebrow">Демо-корзина</p><h1>Ваш выбор</h1></header><CartView /></div>; }
