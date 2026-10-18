"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, CheckCircle, Lock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Введите имя (минимум 2 символа)"),
  email: z.string().email("Введите корректный email"),
});

type FormData = z.infer<typeof schema>;

async function sendLeadMagnet(data: FormData): Promise<void> {
  // TODO: подключить email-сервис (SendGrid, Mailchimp и т.д.)
  console.log("[Lead magnet] New subscriber:", {
    name: data.name,
    email: data.email,
    guide: "Гайд по здоровому питанию",
    date: new Date().toISOString(),
  });
  await new Promise((r) => setTimeout(r, 900));
}

export default function GiftLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await sendLeadMagnet(data);
    toast.success("Гайд отправлен!", {
      description: `Письмо для ${data.name} отправлено на ${data.email} 🌿`,
    });
    setSubmitted(true);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl shadow-dark-brown/15">
        <div
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center
                      rounded-full bg-green-50 ring-8 ring-green-50/50"
        >
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-dark-brown mb-2">
          Гайд отправлен на вашу почту!
        </h3>
        <p className="text-sm text-dark-brown/50 leading-relaxed">
          Проверьте папку «Входящие» или «Спам».
          <br />
          Если письмо не пришло в течение 5 минут — напишите нам.
        </p>
        <a
          href="mailto:olesya@musha.ru"
          className="mt-4 inline-block text-sm text-terracotta hover:underline"
        >
          olesya@musha.ru
        </a>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-dark-brown/15"
    >
      <p className="text-[11px] uppercase tracking-widest text-terracotta mb-1 font-sans">
        Бесплатно
      </p>
      <h3 className="font-heading text-xl md:text-2xl font-bold text-dark-brown mb-1">
        Получить гайд
      </h3>
      <p className="text-sm text-dark-brown/50 mb-6">
        Введите данные — гайд придёт на почту мгновенно
      </p>

      <div className="space-y-3">
        {/* Name */}
        <div>
          <input
            {...register("name")}
            aria-label="Ваше имя"
            placeholder="Ваше имя"
            className={field(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            aria-label="Ваш email"
            placeholder="Ваш email"
            className={field(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-full
                     bg-terracotta text-white font-semibold py-3.5 text-sm
                     hover:bg-terracotta/90 active:scale-[0.98]
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-200 shadow-lg shadow-terracotta/30 mt-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Отправляем...
            </>
          ) : (
            "Получить подарок 🎁"
          )}
        </button>
      </div>

      {/* Trust */}
      <p className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-dark-brown/35">
        <Lock size={11} />
        Без спама. Только полезное.
      </p>
    </form>
  );
}

function field(hasError: boolean) {
  return [
    "w-full rounded-xl border px-4 py-3 text-sm text-dark-brown font-sans bg-white",
    "placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 transition-all duration-150",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-beige focus:border-terracotta/50 focus:ring-terracotta/10",
  ].join(" ");
}
