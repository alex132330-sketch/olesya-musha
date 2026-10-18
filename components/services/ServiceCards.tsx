"use client";

import { useState } from "react";
import { MessageCircle, BookOpen, Check, Droplets, Zap } from "lucide-react";
import BookingModal from "./BookingModal";

const nutritionPlanContent = (
  <div className="space-y-3 text-base mb-4 text-white/80 leading-relaxed">
    <p>
      <span className="font-semibold text-white">Персональная работа с нутрициологом в течение месяца.</span>{" "}
      Подходит тем, кому важно не только получить рекомендации, но и внедрить их в жизнь с поддержкой, обратной связью и корректировкой по ходу работы.
    </p>

    <div>
      <p className="font-semibold text-white mb-1">1. Разбор вашей ситуации</p>
      <p>
        Проведём первичную беседу, заполним анкету и разберём ваше питание, самочувствие, образ жизни, сон, стресс, физическую активность и цели.
      </p>
    </div>

    <div>
      <p className="font-semibold text-white mb-1">2. Индивидуальные рекомендации</p>
      <p className="mb-1">Вы получите подробные письменные рекомендации с аудиосопровождением:</p>
      <ul className="space-y-0.5 pl-1">
        <li>🍎 питание и подбор продуктов;</li>
        <li>💧 питьевой режим;</li>
        <li>😴 сон и восстановление;</li>
        <li>🧘 управление стрессом;</li>
        <li>🚶 физическая активность;</li>
        <li>🧪 разбор имеющихся анализов;</li>
        <li>💊 рекомендации по добавкам при необходимости;</li>
        <li>🎯 пошаговый план достижения вашей цели.</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold text-white mb-1">3. Сопровождение в течение месяца</p>
      <p className="mb-1">В течение месяца вы не остаётесь один на один с рекомендациями:</p>
      <ul className="space-y-0.5 pl-1">
        <li>💚 онлайн-встреча 1 раз в неделю;</li>
        <li>💚 анализ питания и самочувствия;</li>
        <li>💚 корректировка рекомендаций по мере необходимости;</li>
        <li>💚 ответы на возникающие вопросы в формате текста и аудио;</li>
        <li>💚 обучение выбору продуктов и чтению этикеток;</li>
        <li>💚 поддержка и мотивация на пути к вашей цели.</li>
      </ul>
    </div>

    <div className="border-t border-white/20 pt-3 space-y-1">
      <p className="font-semibold text-white">💚 Что вы получите?</p>
      <p className="font-semibold text-white">Не просто рекомендации, а поддержку на всём пути их внедрения.</p>
      <p>
        Вместе будем отслеживать изменения, разбирать возникающие сложности и постепенно формировать привычки, которые смогут стать частью вашего образа жизни.
      </p>
      <p className="text-white/55 text-sm italic pt-1">
        При необходимости рекомендую обратиться к врачу и пройти дополнительные обследования. Нутрициологические рекомендации не заменяют медицинскую диагностику и лечение.
      </p>
    </div>
  </div>
);

const consultationContent = (
  <div className="space-y-3 text-base mb-4 text-dark-brown/80 leading-relaxed">
    <p>
      Индивидуальная консультация для тех, кто хочет разобраться в своих привычках, питании и образе жизни и получить понятный план действий для достижения своей цели.
    </p>

    <div>
      <p className="font-semibold text-dark-brown mb-1">1. Знакомство и разбор вашей ситуации</p>
      <p className="mb-1">На первой встрече мы подробно обсудим:</p>
      <ul className="space-y-0.5 pl-1">
        <li>• ваше самочувствие и основные жалобы;</li>
        <li>• особенности питания и образа жизни;</li>
        <li>• режим сна и отдыха;</li>
        <li>• уровень стресса;</li>
        <li>• физическую активность;</li>
        <li>• ваши привычки и текущий распорядок дня;</li>
        <li>• цели, которых вы хотите достичь.</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold text-dark-brown mb-1">2. Индивидуальные рекомендации</p>
      <p className="mb-1">
        После консультации вы получите пошаговые письменные рекомендации с аудиосопровождением. В рекомендации войдёт:
      </p>
      <ul className="space-y-0.5 pl-1">
        <li>🍎 индивидуальный план питания с учётом ваших особенностей, калорийности и ЖБУ;</li>
        <li>💧 рекомендации по питьевому режиму;</li>
        <li>😴 советы по улучшению сна и режима отдыха;</li>
        <li>🧘 рекомендации по снижению и управлению уровнем стресса;</li>
        <li>🚶 рекомендации по физической активности;</li>
        <li>🧪 разбор имеющихся анализов;</li>
        <li>💊 рекомендации по добавкам — при необходимости;</li>
        <li>🎯 пошаговый план движения к вашей цели;</li>
        <li>🧠 рекомендации, которые помогут психологически подготовиться к изменениям и постепенно сформировать новые привычки.</li>
      </ul>
    </div>

    <div className="border-t border-dark-brown/10 pt-3 space-y-2">
      <p className="font-semibold text-dark-brown">Ваша цель — мой ориентир</p>
      <p>
        Не существует универсального плана, который одинаково подходит всем. Поэтому на консультации мы разберём именно вашу ситуацию и определим, какие изменения могут быть актуальны для вас.
      </p>
      <p>
        Начните с одного шага — и постепенно выстроите образ жизни, в котором вам комфортно.
      </p>
      <p>
        Запишитесь на консультацию и начните путь к своей цели с понятного плана действий.
      </p>
    </div>
  </div>
);

const oilsContent = (
  <div className="space-y-3 text-base mb-4 text-dark-brown/80 leading-relaxed">
    <p>
      Эфирные масла могут стать приятным дополнением к ежедневным ритуалам заботы о себе, расслаблению и созданию комфортной атмосферы дома.
    </p>

    <div>
      <p className="font-semibold text-dark-brown mb-1">Эфирные масла помогают:</p>
      <ul className="space-y-0.5 pl-1">
        <li>• укрепить иммунитет;</li>
        <li>• восстановить сон и справиться со стрессом;</li>
        <li>• сконцентрироваться;</li>
        <li>• улучшить настроение;</li>
        <li>• разнообразить вкус ваших блюд!</li>
      </ul>
    </div>

    <p>
      В рамках консультации я помогу подобрать эфирные масла с учётом ваших индивидуальных предпочтений, целей и образа жизни, а также расскажу, как безопасно и правильно использовать их в повседневной жизни.
    </p>

    <div>
      <p className="font-semibold text-dark-brown mb-1">Что входит в услугу:</p>
      <ul className="space-y-0.5 pl-1">
        <li>• подбор эфирных масел под ваши запросы и предпочтения;</li>
        <li>• лайфхаки по применению эфирных масел: аромадиффузор, ароматические ритуалы, применение в быту, массаж с маслами и многое другое;</li>
        <li>• рекомендации по дозировке и правилам безопасного использования;</li>
        <li>• информация о свойствах и особенностях выбранных масел;</li>
        <li>• рекомендации по хранению эфирных масел;</li>
        <li>• ответы на вопросы по использованию масел в домашних условиях.</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold text-dark-brown mb-1">Для кого подойдёт услуга:</p>
      <p>
        Для тех, кто хочет начать знакомство с эфирными маслами, укрепить иммунитет всей семьи, ввести в свою жизнь 100% натуральный продукт, окружить себя приятными ароматными помощниками и влюбиться в эфирные масла.
      </p>
    </div>

    <div className="border-t border-dark-brown/10 pt-3">
      <p>
        <span className="font-semibold text-dark-brown">Результат:</span> вы получите персональные рекомендации по выбору и использованию эфирных масел, которые сможете применять в повседневной жизни с учётом правил безопасности.
      </p>
    </div>
  </div>
);

const expressContent = (
  <div className="space-y-3 text-base mb-4 text-dark-brown/80 leading-relaxed">
    <p>
      Быстрый ответ на конкретный вопрос по питанию, образу жизни или добавкам — без длительной подготовки. Идеально, если вы хотите прояснить один вопрос и получить чёткую рекомендацию.
    </p>

    <div>
      <p className="font-semibold text-dark-brown mb-1">Что входит в услугу:</p>
      <ul className="space-y-0.5 pl-1">
        <li>• ответ на один конкретный вопрос по питанию, образу жизни или добавкам;</li>
        <li>• ответ в формате аудио или текста;</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold text-dark-brown mb-1">Для кого подойдёт:</p>
      <p>
        Для тех, у кого есть конкретный вопрос и кто хочет получить быстрый профессиональный ответ — без полноценной консультации.
      </p>
    </div>

    <div className="border-t border-dark-brown/10 pt-3">
      <p>
        <span className="font-semibold text-dark-brown">Результат:</span> вы получите чёткий ответ и практическую рекомендацию в течение 24 часов.
      </p>
    </div>
  </div>
);

const services = [
  {
    id: "consultation",
    icon: MessageCircle,
    title: "🌿 Разовая консультация нутрициолога",
    formats: ["Онлайн", "Офлайн"],
    content: consultationContent,
    description: null,
    price: "от 4 500 ₽",
    priceSub: null,
    features: [],
    popular: false,
  },
  {
    id: "nutrition-plan",
    icon: BookOpen,
    title: "Консультация + сопровождение на 1 месяц",
    subtitle: "Я с вами в течение месяца",
    formats: ["Онлайн"],
    content: nutritionPlanContent,
    description: null,
    price: "10 000 ₽",
    priceSub: null,
    features: [],
    popular: true,
  },
  {
    id: "oils",
    icon: Droplets,
    title: "Подбор и рекомендации по эфирным маслам",
    formats: ["Онлайн"],
    content: oilsContent,
    description: null,
    price: "от 2 000 ₽",
    priceSub: null,
    features: [
    ],
    popular: false,
  },
  {
    id: "express",
    icon: Zap,
    title: "Экспресс-консультация «Вопрос нутрициологу»",
    formats: ["Онлайн"],
    content: expressContent,
    description: null,
    price: "1 000 ₽",
    priceSub: null,
    features: [],
    popular: false,
  },
];

export default function ServiceCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  function openModal(serviceId: string) {
    setSelectedService(serviceId);
    setModalOpen(true);
  }

  function toggleExpanded(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[70rem] mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          const popular = service.popular;
          const expanded = expandedIds.has(service.id);

          return (
            <div
              key={service.id}
              className={[
                "relative flex flex-col rounded-2xl p-6 md:p-8",
                "transition-all duration-300 hover:-translate-y-1",
                popular
                  ? "bg-terracotta text-white shadow-xl ring-2 ring-terracotta/80"
                  : "bg-white text-dark-brown shadow-md border border-beige/60 hover:shadow-xl",
              ].join(" ")}
            >
              {popular && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2
                             bg-dark-brown text-white text-[11px] font-semibold
                             px-4 py-1 rounded-full whitespace-nowrap tracking-wide"
                >
                  ✨ Популярный выбор
                </span>
              )}

              {/* Icon */}
              <div
                className={[
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                  popular ? "bg-white/20" : "bg-terracotta/10",
                ].join(" ")}
              >
                <Icon size={24} className={popular ? "text-white" : "text-terracotta"} />
              </div>

              {/* Formats */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {service.formats.map((f) => (
                  <span
                    key={f}
                    className={[
                      "text-[11px] font-medium px-2.5 py-0.5 rounded-full",
                      popular
                        ? "bg-white/20 text-white"
                        : "bg-beige/70 text-dark-brown/65",
                    ].join(" ")}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <h3 className="font-heading text-2xl font-bold leading-tight mb-1">
                {service.title}
              </h3>
              {"subtitle" in service && service.subtitle && (
                <p className={["text-sm mb-4", popular ? "text-white/70" : "text-dark-brown/50"].join(" ")}>
                  {service.subtitle}
                </p>
              )}

              {/* Expandable content */}
              {expanded && (
                service.content ? (
                  service.content
                ) : (
                  <>
                    {service.description && (
                      <p
                        className={[
                          "text-sm leading-relaxed mb-5 flex-1",
                          popular ? "text-white/80" : "text-dark-brown/60",
                        ].join(" ")}
                      >
                        {service.description}
                      </p>
                    )}
                    {service.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm">
                            <Check
                              size={15}
                              className={[
                                "mt-0.5 shrink-0",
                                popular ? "text-white/70" : "text-terracotta",
                              ].join(" ")}
                            />
                            <span className={popular ? "text-white/80" : "text-dark-brown/70"}>
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )
              )}

              {/* Toggle button */}
              <button
                onClick={() => toggleExpanded(service.id)}
                className={[
                  "mb-3 text-sm font-semibold transition-colors duration-150",
                  popular
                    ? "text-white/80 hover:text-white"
                    : "text-terracotta hover:text-terracotta/75",
                ].join(" ")}
              >
                {expanded ? "Свернуть ↑" : "Подробнее ↓"}
              </button>

              {/* Price */}
              <div className="mb-5 mt-auto">
                <p
                  className={[
                    "font-heading text-3xl font-bold",
                    popular ? "text-white" : "text-dark-brown",
                  ].join(" ")}
                >
                  {service.price}
                </p>
                {service.priceSub && (
                  <p
                    className={[
                      "text-sm mt-0.5",
                      popular ? "text-white/60" : "text-dark-brown/45",
                    ].join(" ")}
                  >
                    или {service.priceSub}
                  </p>
                )}
              </div>

              <button
                onClick={() => openModal(service.id)}
                className={[
                  "w-full rounded-full py-3 text-base font-semibold",
                  "transition-all duration-200 active:scale-[0.98]",
                  popular
                    ? "bg-white text-terracotta hover:bg-cream"
                    : "bg-terracotta text-white hover:bg-terracotta/90",
                ].join(" ")}
              >
                Записаться
              </button>
            </div>
          );
        })}
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </>
  );
}
