import type { Metadata } from "next";
import { Star } from "lucide-react";
import LeafShadow from "@/components/LeafShadow";
import GiftLeadForm from "@/components/gift/GiftLeadForm";

export const metadata: Metadata = {
  title: "Подарок для вас",
  description:
    "Скачайте бесплатный гайд от нутрициолога Олеси Муша. Чек-ап диагностика: какие анализы сдать, чтобы выявить заболевания и риски на ранней стадии, когда нет симптомов.",
};


export default function GiftPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — terracotta bg
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-terracotta">
        <LeafShadow variant="top-right" opacity={0.22} light />
        <LeafShadow variant="bottom-left" opacity={0.14} light />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left: text + form ── */}
            <div className="order-2 lg:order-1">
              <span
                className="inline-block mb-5 rounded-full border border-white/25
                           bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest
                           text-white/80 uppercase backdrop-blur-sm"
              >
                🎁 Бесплатный подарок
              </span>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.08]">
                Подарок<br />для вас
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                Скачайте бесплатный гайд и узнайте, какие анализы помогут выявить заболевания и риски на ранней стадии — до появления симптомов.
              </p>

              <GiftLeadForm />

            </div>

            {/* ── Right: guide mockup ── */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-90"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                  aria-hidden="true"
                />

                {/* Book spine */}
                <div className="absolute left-0 top-2 bottom-2 w-5 rounded-l-md bg-dark-brown/40" aria-hidden="true" />

                {/* Book cover */}
                <div
                  className="relative ml-3 w-56 sm:w-64 rounded-r-2xl rounded-l-sm overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "3/4" }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-beige" />

                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #C67B5C 0, #C67B5C 1px, transparent 0, transparent 50%)",
                      backgroundSize: "8px 8px",
                    }}
                    aria-hidden="true"
                  />

                  {/* Cover content */}
                  <div className="relative flex flex-col h-full p-6 md:p-7">
                    {/* Top accent bar */}
                    <div className="flex gap-1 mb-5">
                      <div className="h-1 w-10 rounded-full bg-terracotta" />
                      <div className="h-1 w-4 rounded-full bg-beige" />
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center mb-4 text-2xl">
                      🌿
                    </div>

                    <p className="text-[10px] uppercase tracking-widest text-terracotta font-sans mb-1">
                      Бесплатный гайд
                    </p>

                    <h2 className="font-heading text-dark-brown font-bold text-xl leading-tight mb-2">
                      Чек-ап диагностика
                    </h2>

                    <p className="text-xs text-dark-brown/45 leading-relaxed flex-1">
                      Какие анализы сдать, чтобы выявить заболевания и риски на ранней стадии, когда нет симптомов
                    </p>


                    {/* Author band */}
                    <div className="mt-auto pt-4 border-t border-beige/80 flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-full bg-terracotta flex items-center
                                   justify-center text-white text-xs font-bold shrink-0"
                      >
                        ОМ
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-dark-brown leading-none">
                          Олеся Муша
                        </p>
                        <p className="text-[10px] text-dark-brown/40 mt-0.5">Нутрициолог</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom terracotta stripe */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-terracotta" />
                </div>

                {/* Drop shadow */}
                <div
                  className="absolute -bottom-3 left-3 right-0 h-6 rounded-b-2xl blur-xl opacity-40"
                  style={{ background: "#2C1810" }}
                  aria-hidden="true"
                />

                {/* Floating badges */}
                <div
                  className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl
                             px-3 py-2 flex items-center gap-1.5"
                >
                  <Star size={13} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-dark-brown">4.9 / 5</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 56" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0 56 C480 0, 960 0, 1440 56 L1440 56 L0 56 Z" />
          </svg>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          BOTTOM CTA — dark-brown bg
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-dark-brown py-16 md:py-20">
        <LeafShadow variant="top-right" opacity={0.08} light />

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-4xl mb-5">🌿</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Готовы начать путь к здоровью?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Гайд — это только начало. Запишитесь на консультацию и получите
            персональную программу питания.
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full
                       bg-terracotta text-white font-semibold px-8 py-3.5 text-sm
                       hover:bg-terracotta/90 hover:-translate-y-0.5 shadow-lg
                       transition-all duration-300"
          >
            Записаться на консультацию
          </a>
        </div>
      </section>
    </>
  );
}
