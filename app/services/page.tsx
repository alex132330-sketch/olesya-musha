import type { Metadata } from "next";
import LeafShadow from "@/components/LeafShadow";
import ServiceCards from "@/components/services/ServiceCards";
import HowItWorks from "@/components/services/HowItWorks";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Консультации нутрициолога, персональные программы питания и подписка на практики. Индивидуальный подход к вашему здоровью.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="relative overflow-hidden bg-cream pt-8 pb-6 md:pt-10 md:pb-8">
        <LeafShadow variant="top-right" opacity={0.08} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Работа со мной
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Услуги
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-xl mx-auto leading-relaxed">
            Индивидуальный подход к вашему здоровью — выберите формат, который
            подходит именно вам.
          </p>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="bg-beige/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceCards />
        </div>
      </section>

      {/* ── How it works ── */}
      <HowItWorks />

      {/* ── FAQ strip ── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown mb-3">
            Остались вопросы?
          </h2>
          <p className="text-dark-brown/55 mb-8 leading-relaxed">
            Напишите мне в Telegram или оставьте заявку — я отвечу в течение
            нескольких часов.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta
                         text-terracotta font-semibold text-sm px-7 py-3
                         hover:bg-terracotta hover:text-white transition-all duration-200"
            >
              Написать в Telegram
            </a>
            <a
              href="mailto:olesya@musha.ru"
              className="inline-flex items-center gap-2 text-dark-brown/55 hover:text-terracotta
                         text-sm transition-colors duration-200"
            >
              olesya@musha.ru
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
