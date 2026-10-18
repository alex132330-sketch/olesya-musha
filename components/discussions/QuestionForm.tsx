"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  category: z.enum(["nutrition", "oils", "consultations"], {
    message: "Выберите категорию",
  }),
  question: z
    .string()
    .min(20, "Минимум 20 символов")
    .max(1000, "Максимум 1000 символов"),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  "w-full rounded-xl border border-beige bg-cream/60 px-4 py-3 text-sm text-dark-brown " +
  "placeholder:text-dark-brown/35 focus:outline-none focus:border-terracotta/60 " +
  "focus:ring-2 focus:ring-terracotta/15 transition-colors duration-150";

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Ваш вопрос отправлен! Мы ответим в ближайшее время.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-name" className="block text-xs font-medium text-dark-brown/60 mb-1.5">
            Имя <span className="text-terracotta">*</span>
          </label>
          <input
            id="q-name"
            {...register("name")}
            placeholder="Ваше имя"
            className={inputBase}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="q-email" className="block text-xs font-medium text-dark-brown/60 mb-1.5">
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            id="q-email"
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={inputBase}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Category select */}
      <div>
        <label htmlFor="q-category" className="block text-xs font-medium text-dark-brown/60 mb-1.5">
          Тема вопроса <span className="text-terracotta">*</span>
        </label>
        <select
          id="q-category"
          {...register("category")}
          className={`${inputBase} appearance-none cursor-pointer bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C67B5C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center]`}
          defaultValue=""
        >
          <option value="" disabled>
            Выберите категорию
          </option>
          <option value="nutrition">Нутрициология</option>
          <option value="oils">Эфирные масла</option>
          <option value="consultations">Консультации</option>
        </select>
        {errors.category && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Question textarea */}
      <div>
        <label htmlFor="q-question" className="block text-xs font-medium text-dark-brown/60 mb-1.5">
          Текст вопроса <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="q-question"
          {...register("question")}
          rows={5}
          placeholder="Опишите ваш вопрос подробно..."
          className={`${inputBase} resize-none`}
        />
        {errors.question && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.question.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white
                   font-semibold px-8 py-3.5 text-sm hover:bg-terracotta/90
                   hover:-translate-y-0.5 shadow-md shadow-terracotta/25
                   disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                   transition-all duration-200"
      >
        <Send size={16} />
        {isSubmitting ? "Отправляем..." : "Отправить вопрос"}
      </button>
    </form>
  );
}
