"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  message: z.string().min(5, "Введите сообщение"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await submitContactForm(data);
    setSent(true);
    reset();
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C67B5C" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="font-heading font-bold text-dark-brown text-xl mb-2">Сообщение отправлено!</p>
        <p className="text-dark-brown/55 text-sm">Я свяжусь с вами в течение дня.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-terracotta hover:underline"
        >
          Отправить ещё одно
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-widest text-dark-brown/40 mb-1.5 font-sans">
          Имя
        </label>
        <input
          {...register("name")}
          placeholder="Ваше имя"
          className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm
                     text-dark-brown placeholder:text-dark-brown/30
                     focus:outline-none focus:border-terracotta/60 transition-colors"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-dark-brown/40 mb-1.5 font-sans">
          Телефон
        </label>
        <input
          {...register("phone")}
          placeholder="+7 (___) ___-__-__"
          type="tel"
          className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm
                     text-dark-brown placeholder:text-dark-brown/30
                     focus:outline-none focus:border-terracotta/60 transition-colors"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-dark-brown/40 mb-1.5 font-sans">
          Сообщение
        </label>
        <textarea
          {...register("message")}
          placeholder="Напишите ваш вопрос..."
          rows={4}
          className="w-full rounded-xl border border-beige bg-white px-4 py-3 text-sm
                     text-dark-brown placeholder:text-dark-brown/30 resize-none
                     focus:outline-none focus:border-terracotta/60 transition-colors"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-terracotta text-white font-semibold
                   py-3.5 text-sm hover:bg-terracotta/90 transition-colors
                   disabled:opacity-60"
      >
        {isSubmitting ? "Отправка..." : "Отправить сообщение"}
      </button>
    </form>
  );
}
