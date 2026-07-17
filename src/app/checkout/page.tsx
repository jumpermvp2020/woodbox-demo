import type { Metadata } from "next";
import { CheckoutForm } from "@/components/forms";

export const metadata: Metadata = { title: "Оформление заказа" };
export default function CheckoutPage() { return <div className="shell page-space"><header className="page-header compact"><p className="eyebrow">Демо-оформление</p><h1>Оформление заказа</h1><p>Никаких платёжных данных - только реалистичный сценарий будущего магазина.</p></header><CheckoutForm /></div>; }
