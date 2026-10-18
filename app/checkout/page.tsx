"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Truck, Store, Mail } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Image from "next/image";

const schema = z.object({
  fullName: z.string().min(3, "Введите ФИО (минимум 3 символа)"),
  phone: z.string().min(10, "Введите корректный номер"),
  email: z.string().email("Некорректный email"),
  address: z.string().min(10, "Введите полный адрес доставки"),
  delivery: z.enum(["courier", "pickup", "post"], {
    message: "Выберите способ доставки",
  }),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const DELIVERY_OPTIONS = [
  {
    value: "courier" as const,
    label: "Курьер",
    desc: "Доставка 1–2 дня",
    price: 350,
    icon: Truck,
  },
  {
    value: "pickup" as const,
    label: "Самовывоз",
    desc: "Москва, ул. Цветная, 12",
    price: 0,
    icon: Store,
  },
  {
    value: "post" as const,
    label: "Почта России",
    desc: "Доставка 5–14 дней",
    price: 250,
    icon: Mail,
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { delivery: "courier" },
  });

  const selectedDelivery = watch("delivery");
  const deliveryOption = DELIVERY_OPTIONS.find((o) => o.value === selectedDelivery);
  const deliveryPrice = deliveryOption?.price ?? 350;
  const subtotal = total();
  const orderTotal = subtotal + (subtotal >= 3000 ? 0 : deliveryPrice);

  const orderNumber = () =>
    `ОМ-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200)); // имитация запроса
    const num = orderNumber();
    clearCart();
    alert(
      `Заказ принят! 🌿\n\nНомер заказа: ${num}\n\nМы отправим подтверждение на вашу почту.`
    );
    router.push("/");
  };

  useEffect(() => {
    if (items.length === 0) router.push("/cart");
  }, [items.length, router]);

  if (items.length === 0) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-10">
        Оформление заказа
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* ── Form fields ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal */}
            <Card title="Контактные данные">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="ФИО" required error={errors.fullName?.message}>
                  <input
                    {...register("fullName")}
                    placeholder="Иванова Мария Ивановна"
                    className={inp(!!errors.fullName)}
                  />
                </Field>
                <Field label="Телефон" required error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    className={inp(!!errors.phone)}
                  />
                </Field>
              </div>
              <Field label="Email" required error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className={inp(!!errors.email)}
                />
              </Field>
            </Card>

            {/* Delivery method */}
            <Card title="Способ доставки">
              {errors.delivery && (
                <p className="mb-3 text-xs text-red-500">
                  {errors.delivery.message}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {DELIVERY_OPTIONS.map(({ value, label, desc, price, icon: Icon }) => (
                  <label
                    key={value}
                    className={[
                      "flex flex-col gap-1 rounded-xl border-2 p-4 cursor-pointer",
                      "transition-all duration-150",
                      selectedDelivery === value
                        ? "border-terracotta bg-terracotta/5"
                        : "border-beige hover:border-terracotta/40",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      value={value}
                      {...register("delivery")}
                      className="sr-only"
                    />
                    <Icon
                      size={20}
                      className={
                        selectedDelivery === value
                          ? "text-terracotta"
                          : "text-dark-brown/40"
                      }
                    />
                    <span className="font-semibold text-sm text-dark-brown">
                      {label}
                    </span>
                    <span className="text-xs text-dark-brown/50">{desc}</span>
                    <span
                      className={[
                        "text-sm font-bold mt-1",
                        selectedDelivery === value
                          ? "text-terracotta"
                          : "text-dark-brown",
                      ].join(" ")}
                    >
                      {price === 0 ? "Бесплатно" : `${price} ₽`}
                    </span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Address */}
            <Card title="Адрес доставки">
              <Field label="Адрес" required error={errors.address?.message}>
                <textarea
                  {...register("address")}
                  rows={2}
                  placeholder="Город, улица, дом, квартира, индекс"
                  className={`${inp(!!errors.address)} resize-none`}
                />
              </Field>
              <Field label="Комментарий к заказу" error={errors.comment?.message}>
                <textarea
                  {...register("comment")}
                  rows={2}
                  placeholder="Особые пожелания, удобное время доставки..."
                  className={`${inp(false)} resize-none`}
                />
              </Field>
            </Card>
          </div>

          {/* ── Order summary ── */}
          <div className="lg:sticky lg:top-28">
            <Card title="Ваш заказ">
              <div className="space-y-3 mb-5">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-beige/20 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-dark-brown line-clamp-1">
                        {product.name}
                      </p>
                      {product.meta && (
                        <p className="text-xs text-dark-brown/40">{product.meta}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold text-dark-brown">
                        {(product.price * quantity).toLocaleString("ru-RU")} ₽
                      </p>
                      <p className="text-xs text-dark-brown/40">× {quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-beige/60 pt-4 space-y-2 text-sm mb-5">
                <div className="flex justify-between text-dark-brown/60">
                  <span>Товары</span>
                  <span>{subtotal.toLocaleString("ru-RU")} ₽</span>
                </div>
                <div className="flex justify-between text-dark-brown/60">
                  <span>Доставка</span>
                  <span>
                    {deliveryPrice === 0 || subtotal >= 3000
                      ? "Бесплатно"
                      : `${deliveryPrice} ₽`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-dark-brown pt-2 border-t border-beige/60">
                  <span>Итого</span>
                  <span className="font-heading text-xl">
                    {orderTotal.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-full
                           bg-terracotta text-white font-semibold py-3.5 text-sm
                           hover:bg-terracotta/90 active:scale-[0.98]
                           disabled:opacity-60 disabled:cursor-not-allowed
                           transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Обработка...
                  </>
                ) : (
                  "Оплатить"
                )}
              </button>

              <p className="text-[11px] text-center text-dark-brown/35 mt-3 leading-relaxed">
                Нажимая «Оплатить», вы принимаете условия{" "}
                <a href="/privacy-policy" className="underline hover:text-terracotta">
                  оферты
                </a>
              </p>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

/* ── helpers ── */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-beige/60">
      <h2 className="font-heading text-lg font-bold text-dark-brown mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1 text-sm font-medium text-dark-brown mb-1.5">
        {label}
        {required && <span className="text-terracotta">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inp(hasError: boolean) {
  return [
    "w-full rounded-xl border px-4 py-2.5 text-sm text-dark-brown font-sans bg-white",
    "placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 transition-all duration-150",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-beige focus:border-terracotta/50 focus:ring-terracotta/10",
  ].join(" ");
}
