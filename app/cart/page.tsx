"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <ShoppingBag size={56} className="text-beige mb-6" />
        <h1 className="font-heading text-3xl font-bold text-dark-brown mb-3">
          Корзина пуста
        </h1>
        <p className="text-dark-brown/50 mb-8">
          Добавьте эфирные масла или запишитесь на услугу
        </p>
        <Link
          href="/oils"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white
                     font-semibold px-7 py-3 hover:bg-terracotta/90 transition-all duration-200"
        >
          Перейти в каталог
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  const subtotal = total();
  const shipping = subtotal >= 3000 ? 0 : 350;
  const orderTotal = subtotal + shipping;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-10">
        Корзина
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* ── Items ── */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-beige/60"
            >
              {/* Thumb */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-beige/20 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link
                  href={product.slug}
                  className="font-heading text-base font-semibold text-dark-brown
                             hover:text-terracotta transition-colors leading-tight line-clamp-1"
                >
                  {product.name}
                </Link>
                {product.meta && (
                  <p className="text-xs text-dark-brown/40 mt-0.5">{product.meta}</p>
                )}
                <p className="font-heading text-lg font-bold text-dark-brown mt-2">
                  {(product.price * quantity).toLocaleString("ru-RU")} ₽
                </p>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-end justify-between shrink-0">
                <button
                  onClick={() => removeItem(product.id)}
                  aria-label="Удалить"
                  className="text-dark-brown/30 hover:text-red-400 transition-colors p-1"
                >
                  <Trash2 size={16} />
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    aria-label="Меньше"
                    className="w-8 h-8 rounded-full border border-beige hover:border-terracotta/50
                               flex items-center justify-center text-dark-brown/60 hover:text-terracotta
                               transition-all duration-150"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-dark-brown">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    aria-label="Больше"
                    className="w-8 h-8 rounded-full border border-beige hover:border-terracotta/50
                               flex items-center justify-center text-dark-brown/60 hover:text-terracotta
                               transition-all duration-150"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Summary ── */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-beige/60 lg:sticky lg:top-28">
          <h2 className="font-heading text-xl font-bold text-dark-brown mb-5">
            Итог заказа
          </h2>

          <div className="space-y-3 text-sm mb-5">
            <Row label="Товары" value={`${subtotal.toLocaleString("ru-RU")} ₽`} />
            <Row
              label="Доставка"
              value={shipping === 0 ? "Бесплатно" : `${shipping} ₽`}
              sub={shipping > 0 ? "При заказе от 3 000 ₽ — бесплатно" : undefined}
            />
          </div>

          <div className="border-t border-beige/60 pt-4 mb-6">
            <Row
              label="К оплате"
              value={`${orderTotal.toLocaleString("ru-RU")} ₽`}
              bold
            />
          </div>

          <Link
            href="/checkout"
            className="flex items-center justify-center gap-2 w-full rounded-full
                       bg-terracotta text-white font-semibold py-3.5 text-sm
                       hover:bg-terracotta/90 transition-all duration-200"
          >
            Оформить заказ
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/oils"
            className="block text-center text-sm text-dark-brown/50 hover:text-terracotta
                       transition-colors mt-3"
          >
            Продолжить покупки
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  sub,
  bold,
}: {
  label: string;
  value: string;
  sub?: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <span className={bold ? "font-semibold text-dark-brown" : "text-dark-brown/60"}>
          {label}
        </span>
        {sub && <p className="text-[11px] text-dark-brown/35 mt-0.5">{sub}</p>}
      </div>
      <span
        className={[
          "shrink-0",
          bold
            ? "font-heading text-xl font-bold text-dark-brown"
            : "text-dark-brown",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}
