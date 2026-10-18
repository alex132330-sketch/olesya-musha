"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Star, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Введите имя (минимум 2 символа)"),
  email: z.string().email("Введите корректный email"),
  text: z
    .string()
    .min(20, "Расскажите подробнее (минимум 20 символов)")
    .max(1000, "Максимум 1000 символов"),
  rating: z
    .number({ message: "Выберите оценку" })
    .int()
    .min(1, "Выберите оценку от 1 до 5")
    .max(5),
});

type FormData = z.infer<typeof schema>;

const RATING_LABELS: Record<number, string> = {
  1: "Плохо",
  2: "Так себе",
  3: "Нормально",
  4: "Хорошо",
  5: "Отлично!",
};

/* ── Interactive star picker ── */
function StarPicker({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (n: number) => void;
  error?: string;
}) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <div>
      <div
        className="flex items-center gap-1"
        role="radiogroup"
        aria-label="Оценка"
        onMouseLeave={() => setHovered(0)}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} из 5`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            className="p-0.5 transition-transform hover:scale-110 focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-terracotta/50 rounded"
          >
            <Star
              size={32}
              className={[
                "transition-colors duration-100",
                display >= n
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-200 fill-gray-100",
              ].join(" ")}
            />
          </button>
        ))}

        {/* Label */}
        {display > 0 && (
          <span className="ml-2 text-sm font-medium text-dark-brown/70 transition-opacity">
            {RATING_LABELS[display]}
          </span>
        )}
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

/* ── Main form ── */
export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", text: "", rating: 0 },
  });

  const textValue = watch("text") ?? "";

  const onSubmit = async (data: FormData) => {
    // Stub — replace with real API call
    console.log("[New review]", data);
    await new Promise((r) => setTimeout(r, 800));

    toast.success("Отзыв получен!", {
      description: "Он появится на странице после модерации 🌿",
    });
    setSubmitted(true);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-beige/60 max-w-lg mx-auto">
        <div
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center
                      rounded-full bg-green-50 ring-8 ring-green-50/50"
        >
          <CheckCircle size={30} className="text-green-500" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-dark-brown mb-2">
          Спасибо за отзыв!
        </h3>
        <p className="text-sm text-dark-brown/50 leading-relaxed">
          Ваш отзыв отправлен на модерацию и появится на странице в
          ближайшее время.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige/60 max-w-2xl mx-auto"
    >
      <h3 className="font-heading text-2xl font-bold text-dark-brown mb-1">
        Поделитесь впечатлениями
      </h3>
      <p className="text-sm text-dark-brown/45 mb-7">
        Ваш отзыв поможет другим людям сделать первый шаг
      </p>

      <div className="space-y-5">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Имя" htmlFor="review-name" required error={errors.name?.message}>
            <input
              id="review-name"
              {...register("name")}
              placeholder="Ваше имя"
              className={inp(!!errors.name)}
            />
          </Field>
          <Field label="Email" htmlFor="review-email" required error={errors.email?.message}
                 hint="Не публикуется">
            <input
              id="review-email"
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              className={inp(!!errors.email)}
            />
          </Field>
        </div>

        {/* Star rating */}
        <Field label="Оценка" required error={errors.rating?.message}>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <StarPicker
                value={field.value ?? 0}
                onChange={field.onChange}
              />
            )}
          />
        </Field>

        {/* Review text */}
        <Field
          label="Отзыв"
          htmlFor="review-text"
          required
          error={errors.text?.message}
          hint={`${textValue.length}/1000`}
        >
          <textarea
            id="review-text"
            {...register("text")}
            rows={5}
            placeholder="Расскажите о своём опыте: что вам понравилось, каких результатов вы достигли..."
            className={`${inp(!!errors.text)} resize-none`}
          />
        </Field>

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
              Отправляем...
            </>
          ) : (
            "Оставить отзыв"
          )}
        </button>

        <p className="text-[11px] text-center text-dark-brown/35">
          Отзыв проходит модерацию перед публикацией
        </p>
      </div>
    </form>
  );
}

/* ── helpers ── */
function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={htmlFor} className="flex items-center gap-1 text-sm font-medium text-dark-brown">
          {label}
          {required && <span className="text-terracotta">*</span>}
        </label>
        {hint && (
          <span className="text-xs text-dark-brown/35">{hint}</span>
        )}
      </div>
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
