import { ClipboardList, MessageCircle, FileText, Heart } from "lucide-react";
import LeafShadow from "@/components/LeafShadow";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Заявка",
    description:
      "Оставляете заявку на сайте или пишете в Telegram. Выбираете удобный формат встречи.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Знакомство",
    description:
      "Проводим бесплатную 15-минутную встречу, чтобы понять ваш запрос и познакомиться.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Программа",
    description:
      "Разрабатываю персональную программу восстановления организма, основываясь на собранном анамнезе и результатах анализов",
  },
  {
    number: "04",
    icon: Heart,
    title: "Поддержка",
    description:
      "В случае выбора услуги «Консультация + сопровождение 1 месяц», я с вами на всём пути: отвечаю на вопросы, корректирую программу, подбираю добавки и отслеживаю реакции организма, поддерживаю)",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-dark-brown py-10 md:py-14">
      <LeafShadow variant="top-right" opacity={0.1} light />
      <LeafShadow variant="bottom-left" opacity={0.07} light />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Процесс работы
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Как проходит консультация
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Connector line (desktop) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-full h-px
                               bg-gradient-to-r from-terracotta/40 to-transparent z-0"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex flex-col">
                  {/* Icon circle */}
                  <div className="flex items-center gap-4 mb-4 lg:flex-col lg:items-start lg:gap-0">
                    <div
                      className="w-14 h-14 rounded-2xl bg-terracotta/20 border border-terracotta/30
                                 flex items-center justify-center shrink-0 lg:mb-4"
                    >
                      <Icon size={24} className="text-terracotta" />
                    </div>

                    {/* Mobile connector */}
                    <div className="flex-1 h-px bg-terracotta/20 lg:hidden" aria-hidden="true" />
                  </div>

                  {/* Step number */}
                  <span className="text-[11px] font-semibold tracking-widest text-terracotta/60 mb-1 font-sans">
                    ШАГ {step.number}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/50 text-sm mb-6">
            Первая ознакомительная встреча — бесплатно
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center justify-center rounded-full
                       bg-terracotta text-white font-semibold px-8 py-3.5 text-sm
                       hover:bg-terracotta/90 hover:-translate-y-0.5 shadow-lg
                       transition-all duration-300"
          >
            Записаться на бесплатную встречу
          </a>
        </div>
      </div>
    </section>
  );
}
