"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";
import { products } from "@/data/products";

export function CustomOrderForm() {
  const params = useSearchParams();
  const selected = products.find((product) => product.slug === params.get("product"));
  const [sent, setSent] = useState(false);
  if (sent) return <div className="form-success"><CheckIcon /><p className="eyebrow">Форма готова</p><h2>Заявка подготовлена</h2><p>В полноценной версии она будет отправлена мастеру для расчёта.</p><Link className="button button-secondary" href="/catalog">Вернуться в каталог</Link></div>;
  return (
    <form className="custom-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      {selected && <div className="selected-product">Основа: <strong>{selected.shortTitle}</strong></div>}
      <div className="field span-2"><label htmlFor="purpose">Что будет храниться?</label><input id="purpose" required placeholder="Например: часы, награда, набор кистей" /></div>
      <div className="field"><label htmlFor="dimensions">Размеры вложения</label><input id="dimensions" required placeholder="Д × Ш × В, мм" /></div>
      <div className="field"><label htmlFor="quantity">Количество</label><input id="quantity" type="number" min="1" defaultValue="1" /></div>
      <div className="field"><label htmlFor="sections">Отделения</label><select id="sections"><option>Без отделений</option><option>2-4 отделения</option><option>5 и более</option><option>Нужна консультация</option></select></div>
      <div className="field"><label htmlFor="color">Цвет</label><select id="color"><option>Натуральное дерево</option><option>Тёмный орех</option><option>Чёрная эмаль</option><option>Другой</option></select></div>
      <div className="field"><label htmlFor="lining">Внутренняя отделка</label><select id="lining"><option>Без отделки</option><option>Флок</option><option>Фетр</option><option>Нужна консультация</option></select></div>
      <div className="field"><label htmlFor="engraving">Гравировка</label><select id="engraving"><option>Не нужна</option><option>Текст</option><option>Логотип</option><option>Нужна консультация</option></select></div>
      <div className="field span-2"><label htmlFor="comment">Комментарий</label><textarea id="comment" rows={5} placeholder="Опишите задачу и важные детали" /></div>
      <div className="field span-2"><label htmlFor="reference">Референс или чертёж</label><input id="reference" type="file" accept="image/*,.pdf" /><small>Файл останется только в браузере - это демонстрационная форма.</small></div>
      <button className="button button-primary span-2" type="submit">Подготовить заявку</button>
    </form>
  );
}

export function CheckoutForm() {
  const { items, total, clear } = useCart();
  const [done, setDone] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setDone(true); clear(); };
  if (done) return <div className="form-success checkout-success"><CheckIcon /><p className="eyebrow">Готово</p><h1>Демонстрационный заказ успешно создан</h1><p>Оплата не проводилась. В полноценной версии мастерская получила бы состав заказа и контакты для подтверждения.</p><Link className="button button-primary" href="/">На главную</Link></div>;
  if (!items.length) return <div className="empty-state"><h1>Сначала добавьте изделие</h1><Link className="button button-primary" href="/catalog">Перейти в каталог</Link></div>;
  return (
    <form className="checkout-layout" onSubmit={submit}><div className="checkout-fields"><section><p className="eyebrow">Шаг 1</p><h2>Контакты</h2><div className="two-columns"><div className="field"><label htmlFor="name">Имя</label><input id="name" required /></div><div className="field"><label htmlFor="phone">Телефон</label><input id="phone" required inputMode="tel" placeholder="+7 999 000-00-00" /></div></div><div className="field"><label htmlFor="email">Email</label><input id="email" required type="email" /></div></section><section><p className="eyebrow">Шаг 2</p><h2>Доставка</h2><div className="field"><label htmlFor="city">Город</label><input id="city" required defaultValue="Москва" /></div><div className="choice-grid"><label><input type="radio" name="delivery" defaultChecked />Курьерская доставка<span>Стоимость после подтверждения</span></label><label><input type="radio" name="delivery" />Самовывоз<span>Адрес согласует мастер</span></label></div></section><section><p className="eyebrow">Шаг 3</p><h2>Оплата</h2><div className="choice-grid"><label><input type="radio" name="payment" defaultChecked />Банковская карта - демо</label><label><input type="radio" name="payment" />СБП - демо</label><label><input type="radio" name="payment" />Связаться для подтверждения заказа</label></div><p className="demo-note">Демо-режим. Оплата не производится. Данные карты не запрашиваются.</p></section></div><aside className="order-summary"><p className="eyebrow">Состав заказа</p>{items.map(({ product, quantity }) => <div key={product.id}><span>{product.shortTitle} × {quantity}</span><strong>{new Intl.NumberFormat("ru-RU").format(product.price * quantity)} ₽</strong></div>)}<div className="summary-total"><span>Итого</span><strong>{new Intl.NumberFormat("ru-RU").format(total)} ₽</strong></div><button className="button button-primary full" type="submit">Создать демо-заказ</button></aside></form>
  );
}
