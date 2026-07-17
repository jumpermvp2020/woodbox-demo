import type { Metadata } from "next";
import { Suspense } from "react";
import { CustomOrderForm } from "@/components/forms";

export const metadata: Metadata = { title: "Индивидуальный заказ", description: "Подготовьте задачу на деревянный футляр или шкатулку по вашим размерам." };

export default function CustomOrderPage() {
  return <div className="shell page-space"><header className="page-header narrow"><p className="eyebrow">Точно под вашу задачу</p><h1>Соберите свой футляр</h1><p>Опишите вложение и выберите детали. Это локальная демонстрация - заявка никуда не отправляется.</p></header><div className="form-layout"><div className="form-aside"><p className="serif-mark">01</p><h2>Начните с предмета</h2><p>Мастерской важнее точные размеры и сценарий использования, чем готовая идея конструкции.</p><ul><li>Внешние размеры вложения</li><li>Нужные отделения</li><li>Количество изделий</li><li>Логотип или гравировка</li></ul></div><Suspense><CustomOrderForm /></Suspense></div></div>;
}
