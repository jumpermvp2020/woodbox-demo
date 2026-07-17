import "@fontsource/onest/400.css";
import "@fontsource/onest/500.css";
import "@fontsource/onest/600.css";
import "@fontsource/prata/400.css";
import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/components/cart-provider";
import { DemoBar, Footer, Header } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://woodbox.mjband.com"),
  title: { default: "Woodbox - деревянные футляры и шкатулки", template: "%s | Woodbox" },
  description: "Готовые деревянные футляры и шкатулки. Собственное производство по вашим размерам в Москве.",
  openGraph: {
    title: "Woodbox - вещи, которые достойны хорошего футляра",
    description: "Деревянные футляры и шкатулки для вещей, которые важно сохранить.",
    url: "https://woodbox.mjband.com",
    siteName: "Woodbox",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/products/studiya-poryadka/01.jpg", width: 1024, height: 1024 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><CartProvider><DemoBar /><Header /><main>{children}</main><Footer /></CartProvider></body></html>;
}
