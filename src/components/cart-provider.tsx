"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products } from "@/data/products";
import type { Product } from "@/types/catalog";

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  items: Array<{ product: Product; quantity: number }>;
  count: number;
  total: number;
  addItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "woodbox-demo-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) queueMicrotask(() => setLines(JSON.parse(saved) as CartLine[]));
    } catch {
      queueMicrotask(() => setLines([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(lines));
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((line) => {
      const product = products.find((candidate) => candidate.id === line.productId);
      return product ? [{ product, quantity: line.quantity }] : [];
    });
    return {
      lines,
      items,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      total: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      addItem: (productId) => setLines((current) => {
        const existing = current.find((line) => line.productId === productId);
        return existing
          ? current.map((line) => line.productId === productId ? { ...line, quantity: line.quantity + 1 } : line)
          : [...current, { productId, quantity: 1 }];
      }),
      updateQuantity: (productId, quantity) => setLines((current) =>
        quantity <= 0
          ? current.filter((line) => line.productId !== productId)
          : current.map((line) => line.productId === productId ? { ...line, quantity } : line),
      ),
      removeItem: (productId) => setLines((current) => current.filter((line) => line.productId !== productId)),
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
