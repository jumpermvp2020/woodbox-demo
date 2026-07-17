import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://woodbox.mjband.com";
  const routes = ["", "/catalog", "/custom-order", "/about", "/delivery", "/business", "/reviews", "/contacts"];
  return [...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })), ...products.map((product) => ({ url: `${base}/product/${product.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 }))];
}
