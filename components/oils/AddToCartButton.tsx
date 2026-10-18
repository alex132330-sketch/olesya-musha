"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/lib/store";
import type { CartProduct } from "@/types";

interface Props {
  product: CartProduct;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
}

export default function AddToCartButton({
  product,
  className = "",
  size = "md",
  variant = "filled",
}: Props) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    toast.success("Добавлено в корзину", {
      description: product.meta
        ? `${product.name} · ${product.meta}`
        : product.name,
    });
    setTimeout(() => setAdded(false), 2000);
  }

  const sizeClass = {
    sm: "h-8 px-4 text-xs gap-1.5",
    md: "h-10 px-5 text-sm gap-2",
    lg: "h-12 px-7 text-base gap-2",
  }[size];

  const variantClass =
    variant === "filled"
      ? added
        ? "bg-green-600 text-white"
        : "bg-terracotta text-white hover:bg-terracotta/90"
      : added
      ? "border-green-600 text-green-600"
      : "border border-terracotta text-terracotta hover:bg-terracotta hover:text-white";

  return (
    <button
      onClick={handleAdd}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold",
        "transition-all duration-200 active:scale-[0.97] shrink-0",
        sizeClass,
        variantClass,
        className,
      ].join(" ")}
    >
      {added ? (
        <>
          <Check size={size === "sm" ? 13 : 16} />
          Добавлено
        </>
      ) : (
        <>
          <ShoppingCart size={size === "sm" ? 13 : 16} />
          В корзину
        </>
      )}
    </button>
  );
}
