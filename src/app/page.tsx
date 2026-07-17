import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { featuredProducts } from "@/data/products";

const directions = [
  ["Для украшений", "Шкатулки с фетром, флоком и отдельными ящиками", "/product/milano"],
  ["Для коллекций", "Витрины со стеклом для памятных предметов", "/product/bella"],
  ["Для творчества", "Органайзеры, отделения и заготовки под роспись", "/product/studiya-poryadka"],
  ["Для подарка", "Футляры и кейсы, которые продолжают историю подарка", "/catalog"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy reveal"><p className="eyebrow">Предметная мастерская · Москва</p><h1>Деревянные футляры и шкатулки для вещей, которые важно сохранить</h1><p className="hero-subtitle">Готовые изделия и собственное производство по вашим размерам.</p><div className="hero-actions"><Link className="button button-primary" href="/catalog">Выбрать готовое</Link><Link className="button button-ghost" href="/custom-order">Заказать своё <ArrowIcon /></Link></div></div>
        <Link className="hero-media reveal-delay" href="/product/studiya-poryadka" aria-label="Открыть шкатулку Студия порядка"><Image src="/products/studiya-poryadka/01.jpg" alt="Чёрная деревянная шкатулка-органайзер Студия порядка в мастерской" fill priority sizes="(max-width: 800px) 100vw, 60vw" /><span className="hero-caption"><span>Студия порядка</span><strong>6 592 ₽</strong></span></Link>
      </section>

      <section className="trust-strip shell" aria-label="Факты о мастерской"><div><strong>С 2010 года</strong><span>собственное производство</span></div><div><strong>471 изделие</strong><span>в публичном каталоге</span></div><div><strong>Москва</strong><span>мастерская Woodbox</span></div><div><strong>Под ваш размер</strong><span>отделка и комплектация</span></div></section>

      <section className="section shell"><div className="section-heading"><div><p className="serif-mark">01</p><p className="eyebrow">Основные направления</p><h2>Точно под вашу задачу</h2></div><p>Сначала - то, что нужно сохранить. Затем форма, размер, отделения и отделка.</p></div><div className="direction-grid">{directions.map(([title, text, href], index) => <Link href={href} className="direction-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><ArrowIcon /></Link>)}</div></section>

      <section className="section surface-section"><div className="shell"><div className="section-heading"><div><p className="serif-mark">02</p><p className="eyebrow">Готовые изделия</p><h2>Выбрано мастерской</h2></div><Link className="text-link" href="/catalog">Смотреть весь каталог <ArrowIcon /></Link></div><div className="product-grid">{featuredProducts.slice(0, 4).map((product, index) => <ProductCard product={product} priority={index < 2} key={product.id} />)}</div></div></section>

      <section className="section shell"><div className="question-layout"><div className="question-intro"><p className="serif-mark">03</p><p className="eyebrow">Подбор по задаче</p><h2>Что вы хотите хранить?</h2><p>От предмета зависит всё: внутренний размер, глубина, ложемент, количество отделений и способ открывания.</p><Link className="button button-secondary" href="/custom-order">Описать задачу</Link></div><div className="question-list">{["Украшения и часы", "Награды и памятные вещи", "Инструменты для творчества", "Подарочный или корпоративный набор"].map((text, index) => <Link href={`/catalog`} key={text}><span>0{index + 1}</span>{text}<ArrowIcon /></Link>)}</div></div></section>

      <section className="materials-section"><div className="materials-image"><Image src="/products/lotok/01.jpg" alt="Открытая шкатулка из массива берёзы со съёмным лотком" fill sizes="(max-width: 800px) 100vw, 52vw" /></div><div className="materials-copy"><p className="serif-mark light">04</p><p className="eyebrow">Материалы и детали</p><h2>Сделано в мастерской. Рассчитано на годы.</h2><p>В отобранных изделиях используются массив берёзы и других твёрдых пород, шлифованная фанера, латунная фурнитура, стекло, фетр и флок.</p><ul><li><span>01</span>Ручная промежуточная шлифовка</li><li><span>02</span>Защитные лаковые покрытия</li><li><span>03</span>Отделка под конкретное назначение</li></ul><Link className="text-link light" href="/about">О мастерской <ArrowIcon /></Link></div></section>

      <section className="section shell split-feature"><div><p className="serif-mark">05</p><p className="eyebrow">Индивидуальное изготовление</p><h2>Один предмет. Один точный футляр.</h2><p>Размер, внутренние отделения, цвет, фетр или флок, гравировка и количество - мастерская подтверждает конструкцию после расчёта.</p><Link className="button button-primary" href="/custom-order">Собрать свой вариант</Link></div><div className="process-list"><div><span>01</span><h3>Расскажите, что внутри</h3><p>Размеры предмета, фото или чертёж.</p></div><div><span>02</span><h3>Выберите детали</h3><p>Отделения, покрытие и персонализация.</p></div><div><span>03</span><h3>Получите расчёт</h3><p>Мастер уточнит конструкцию, стоимость и срок.</p></div></div></section>

      <section className="business-banner shell"><div><p className="eyebrow">Корпоративные заказы</p><h2>Упаковка, которую не выбрасывают</h2><p>Подарочные футляры, мини-бары и комплекты из натурального дерева с персонализацией под фирменный стиль.</p><Link className="button button-light" href="/business">Обсудить тираж</Link></div><div className="business-image"><Image src="/products/lilovyy-keys/01.jpg" alt="Лиловый деревянный подарочный кейс на две бутылки" fill sizes="(max-width: 800px) 100vw, 48vw" /></div></section>

      <section className="section shell confidence"><div><p className="serif-mark">06</p><p className="eyebrow">Основание доверия</p><h2>Не обещания, а проверяемые детали</h2></div><div className="confidence-grid"><article><strong>2010</strong><p>Год начала собственного производства указан мастерской.</p></article><article><strong>471</strong><p>Публичная карточка товара обнаружена в каталоге на момент выгрузки.</p></article><article><strong>10</strong><p>Реальных изделий отобрано для этой демонстрации.</p></article></div><p className="source-note">Рейтинг и цитаты отзывов не показаны: точные данные не были доступны в выгрузке, поэтому мы их не придумывали.</p></section>

      <section className="final-cta"><p className="serif-mark light">Woodbox</p><h2>Вещи, которые достойны хорошего футляра</h2><p>Выберите готовое изделие или начните с собственной задачи.</p><div><Link className="button button-light" href="/catalog">Выбрать готовое</Link><Link className="button button-outline-light" href="/custom-order">Заказать своё</Link></div></section>
    </>
  );
}
