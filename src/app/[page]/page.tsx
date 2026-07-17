import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { eyebrow: string; title: string; text: string; note: string }> = {
  about: { eyebrow: "О мастерской", title: "Дерево. Точность. Сохранность.", text: "Мастерская деревянных изделий работает в Москве с 2010 года. В публичном каталоге - сотни шкатулок, футляров, органайзеров и заготовок.", note: "Для полноценной версии здесь появятся фотографии производства, мастеров и этапов работы." },
  delivery: { eyebrow: "Покупателям", title: "Доставка и оплата", text: "В демонстрации доставка и оплата не выполняются. Готовый сайт сможет показать варианты по городу, региону и типу заказа.", note: "Точные условия мастерской будут добавлены после согласования." },
  business: { eyebrow: "Корпоративным клиентам", title: "Футляры и упаковка для бизнеса", text: "Мастерская подтверждает индивидуальные и корпоративные заказы: размеры, отделка, комплектация и персонализация обсуждаются под задачу и тираж.", note: "В демонстрации расчёт не отправляется - можно пройти сценарий индивидуальной заявки." },
  reviews: { eyebrow: "Доверие", title: "Отзывы клиентов", text: "Точные тексты отзывов и подтверждённый рейтинг не были доступны в выгрузке. Мы намеренно не создаём вымышленные цитаты.", note: "В полноценной версии раздел подключится к подтверждённому источнику." },
  contacts: { eyebrow: "Контакты", title: "Мастерская в Москве", text: "Контактные данные не дублируются без подтверждения владельца. Здесь будут телефон, почта, мессенджеры и график работы.", note: "До запуска данные согласуются с мастерской." },
  account: { eyebrow: "Личный кабинет", title: "История заказов и настройки", text: "В этой демонстрации авторизация отключена. Будущий кабинет может хранить заказы, адреса и индивидуальные расчёты.", note: "Сейчас это брендированная заглушка." },
  favorites: { eyebrow: "Избранное", title: "Сохранённые изделия", text: "В полноценной версии здесь появятся товары, которые клиент отметил для сравнения или будущего заказа.", note: "Для демо используйте каталог и корзину." },
  privacy: { eyebrow: "Документы", title: "Политика конфиденциальности", text: "Демонстрация не отправляет формы, не создаёт аккаунты и не принимает оплату.", note: "Юридический текст будет подготовлен перед реальным запуском." },
  terms: { eyebrow: "Документы", title: "Условия использования", text: "Сайт показывает концепцию будущего магазина Woodbox. Цены и наличие взяты из публичных карточек на момент выгрузки.", note: "Демонстрация не является публичной офертой." },
};

export function generateStaticParams() { return Object.keys(pages).map((page) => ({ page })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> { const data = pages[(await params).page]; return data ? { title: data.title } : {}; }

export default async function InfoPage({ params }: { params: Promise<{ page: string }> }) {
  const key = (await params).page;
  const data = pages[key];
  if (!data) notFound();
  return <div className="placeholder-page"><div className="shell"><p className="serif-mark light">Woodbox</p><p className="eyebrow">{data.eyebrow}</p><h1>{data.title}</h1><p>{data.text}</p><div className="placeholder-note">{data.note}</div><div className="placeholder-actions">{key === "business" && <Link className="button button-light" href="/custom-order">Подготовить задачу</Link>}<Link className="button button-outline-light" href="/catalog">Перейти в каталог</Link></div></div></div>;
}
