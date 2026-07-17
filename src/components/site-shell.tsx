"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, UserIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";

const nav = [
  ["Каталог", "/catalog"],
  ["Индивидуальный заказ", "/custom-order"],
  ["Для бизнеса", "/business"],
  ["О мастерской", "/about"],
] as const;

export function DemoBar() {
  return <div className="demo-bar">Демо-версия сайта. Оплата не производится.</div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Woodbox - на главную">WOODBOX<span>предметная мастерская</span></Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {nav.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="icon-button desktop-only" href="/favorites" aria-label="Избранное"><HeartIcon /></Link>
          <Link className="icon-button desktop-only" href="/account" aria-label="Аккаунт"><UserIcon /></Link>
          <Link className="icon-button cart-button" href="/cart" aria-label={`Корзина, товаров: ${count}`}><BagIcon />{count > 0 && <span>{count}</span>}</Link>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Закрыть меню" : "Открыть меню"}>{open ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Мобильная навигация">
          {nav.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/favorites" onClick={() => setOpen(false)}>Избранное</Link>
          <Link href="/account" onClick={() => setOpen(false)}>Аккаунт</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div><div className="wordmark footer-logo">WOODBOX<span>предметная мастерская</span></div><p>Деревянные футляры и шкатулки для вещей, которые важно сохранить.</p></div>
        <div><h3>Покупателям</h3><Link href="/catalog">Каталог</Link><Link href="/delivery">Доставка и оплата</Link><Link href="/reviews">Отзывы</Link></div>
        <div><h3>Мастерская</h3><Link href="/about">О мастерской</Link><Link href="/business">Для бизнеса</Link><Link href="/contacts">Контакты</Link></div>
        <div><h3>Документы</h3><Link href="/privacy">Политика конфиденциальности</Link><Link href="/terms">Условия использования</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Woodbox Demo</span><span>Москва · собственное производство с 2010 года</span></div>
    </footer>
  );
}
