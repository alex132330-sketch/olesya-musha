"use client";

import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X, Loader2 } from "lucide-react";
import { sendBookingToTelegram } from "@/lib/telegram";

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  phone: z
    .string()
    .min(10, "Введите корректный номер")
    .regex(/^[\d\s\+\-\(\)]+$/, "Только цифры и +, -, ()"),
  email: z.string().email("Некорректный email"),
  serviceType: z.string().min(1, "Выберите услугу"),
  comment: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "consultation", label: "Консультация разовая" },
  { value: "nutrition-plan", label: "Консультация + сопровождение на 1 месяц" },
  { value: "oils", label: "Подбор и рекомендации по эфирным маслам" },
  { value: "express", label: "Экспресс-консультация «Вопрос нутрициологу»" },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService = "",
}: BookingModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { serviceType: preselectedService, consent: false },
  });

  useEffect(() => {
    if (isOpen) reset({ serviceType: preselectedService });
  }, [isOpen, preselectedService, reset]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  const onSubmit = async (data: FormData) => {
    await sendBookingToTelegram(data);
    toast.success("Заявка отправлена!", {
      description: "Олеся свяжется с вами в ближайшее время 🌿",
    });
    onClose();
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-brown/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl
                   rounded-t-2xl shadow-2xl max-h-[95vh] overflow-y-auto"
      >
        {/* Pull-handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-dark-brown/20" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-4 pb-4 border-b border-beige/60">
          <div>
            <h2
              id="modal-title"
              className="font-heading text-2xl font-bold text-dark-brown"
            >
              Записаться
            </h2>
            <p className="text-sm text-dark-brown/50 mt-0.5">
              Заполните форму — я свяжусь с вами
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="flex items-center justify-center w-9 h-9 rounded-full
                       hover:bg-beige/60 transition-colors shrink-0 ml-3"
          >
            <X size={18} className="text-dark-brown/60" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="px-6 py-5 space-y-4">
          <Field label="Имя" htmlFor="booking-name" required error={errors.name?.message}>
            <input
              id="booking-name"
              {...register("name")}
              placeholder="Ваше имя"
              className={input(!!errors.name)}
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Телефон" htmlFor="booking-phone" required error={errors.phone?.message}>
              <input
                id="booking-phone"
                {...register("phone")}
                type="tel"
                placeholder="+7 (900) 000-00-00"
                className={input(!!errors.phone)}
              />
            </Field>
            <Field label="Email" htmlFor="booking-email" required error={errors.email?.message}>
              <input
                id="booking-email"
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className={input(!!errors.email)}
              />
            </Field>
          </div>

          <Field label="Тип услуги" htmlFor="booking-service" required error={errors.serviceType?.message}>
            <select id="booking-service" {...register("serviceType")} className={input(!!errors.serviceType)}>
              <option value="">Выберите услугу...</option>
              {serviceOptions.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </Field>

          <Field
            label="Комментарий"
            htmlFor="booking-comment"
            hint="необязательно"
            error={errors.comment?.message}
          >
            <textarea
              id="booking-comment"
              {...register("comment")}
              rows={3}
              placeholder="Расскажите о своём запросе или пожеланиях..."
              className={`${input(false)} resize-none`}
            />
          </Field>

          {/* Consent checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <input
                id="booking-consent"
                type="checkbox"
                {...register("consent")}
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded border-beige
                           accent-terracotta cursor-pointer"
              />
              <span className="text-xs text-dark-brown/60 leading-relaxed">
                Я даю согласие на обработку моих персональных данных в соответствии с{" "}
                <a
                  href="/privacy-policy"
                  className="text-terracotta underline underline-offset-2 hover:text-terracotta/80 transition-colors"
                >
                  политикой конфиденциальности
                </a>
                {" "}<span className="text-terracotta">*</span>
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 text-xs text-red-500">{errors.consent.message}</p>
            )}
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
                Отправляем...
              </>
            ) : (
              "Отправить заявку"
            )}
          </button>
        </form>
      </div>
    </div>
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
      <label htmlFor={htmlFor} className="flex items-center gap-1.5 text-sm font-medium text-dark-brown mb-1.5">
        {label}
        {required && <span className="text-terracotta">*</span>}
        {hint && (
          <span className="text-dark-brown/40 font-normal text-xs">({hint})</span>
        )}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function input(hasError: boolean) {
  return [
    "w-full rounded-xl border px-4 py-2.5 text-sm text-dark-brown font-sans bg-white",
    "placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 transition-all duration-150",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-beige focus:border-terracotta/50 focus:ring-terracotta/10",
  ].join(" ");
}
