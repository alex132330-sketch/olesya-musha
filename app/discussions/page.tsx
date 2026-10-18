import type { Metadata } from "next";
import { MessageSquare, Users, ExternalLink } from "lucide-react";
import LeafShadow from "@/components/LeafShadow";
import FaqSection from "@/components/discussions/FaqSection";
import QuestionForm from "@/components/discussions/QuestionForm";

export const metadata: Metadata = {
  title: "Обсуждения",
  description:
    "Частые вопросы о нутрициологии и эфирных маслах, а также сообщество Олеси Муша — присоединяйтесь к обсуждениям.",
};

const discussions = [
  {
    id: "1",
    title: "Мой опыт использования масел doTERRA",
    description:
      "Делимся личными историями и лайфхаками применения масел в повседневной жизни",
    replies: 24,
    tag: "Масла",
    avatars: ["#C67B5C", "#8B7355", "#A08060", "#D4956A"],
  },
  {
    id: "2",
    title: "Рецепты здорового питания",
    description: "Простые и вкусные блюда, которые нравятся всей семье",
    replies: 47,
    tag: "Питание",
    avatars: ["#7B9E87", "#6B8E5E", "#A8C5A0"],
  },
  {
    id: "3",
    title: "Марафон лёгкости",
    description:
      "Поддержка участников, обмен результатами и вдохновение для продолжения",
    replies: 89,
    tag: "Программы",
    avatars: ["#C67B5C", "#B5A393", "#8B7355", "#D4956A"],
  },
  {
    id: "4",
    title: "Вопросы о детском питании",
    description: "Как мягко помочь детям полюбить здоровую еду без принуждения",
    replies: 31,
    tag: "Нутрициология",
    avatars: ["#9B7F6B", "#C67B5C", "#A08060"],
  },
];

export default function DiscussionsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          PAGE HEADER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-20 md:pb-16">
        <LeafShadow variant="top-right" opacity={0.07} />
        <LeafShadow variant="bottom-left" opacity={0.04} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            FAQ · Сообщество
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Обсуждения
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-lg mx-auto leading-relaxed">
            Частые вопросы и сообщество
          </p>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ ACCORDION
      ════════════════════════════════════════ */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              Ответы на вопросы
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown">
              Часто спрашивают
            </h2>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR DISCUSSIONS
      ════════════════════════════════════════ */}
      <section className="bg-beige/30 py-14 md:py-20 relative overflow-hidden">
        <LeafShadow variant="top-right" opacity={0.05} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              Присоединяйтесь
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-3">
              Популярные обсуждения
            </h2>
            <p className="text-dark-brown/50 max-w-md mx-auto">
              Живое сообщество в Telegram — задавайте вопросы, делитесь опытом
              и получайте поддержку
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {discussions.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl border border-beige/60 p-5
                           shadow-sm hover:shadow-md hover:-translate-y-0.5
                           transition-all duration-200"
              >
                {/* Tag + replies */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-beige text-dark-brown/70 text-[11px] font-semibold">
                    {d.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-dark-brown/40">
                    <MessageSquare size={12} />
                    {d.replies} ответов
                  </span>
                </div>

                <h3 className="font-heading text-base font-semibold text-dark-brown leading-snug mb-1.5">
                  {d.title}
                </h3>
                <p className="text-sm text-dark-brown/50 leading-relaxed mb-4">
                  {d.description}
                </p>

                {/* Avatar stack + join */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {d.avatars.map((bg) => (
                        <div
                          key={bg}
                          className="w-6 h-6 rounded-full border-2 border-white"
                          style={{ backgroundColor: bg }}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-dark-brown/40 flex items-center gap-1">
                      <Users size={11} />
                      {d.avatars.length}+ участников
                    </span>
                  </div>

                  <a
                    href="https://t.me/olesya_musha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-terracotta
                               hover:text-terracotta/80 transition-colors duration-150"
                  >
                    Присоединиться
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Telegram CTA */}
          <div className="text-center">
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] text-white
                         font-semibold px-8 py-3.5 text-sm hover:bg-[#2AABEE]/90
                         hover:-translate-y-0.5 shadow-md shadow-[#2AABEE]/25
                         transition-all duration-200"
            >
              Открыть Telegram-канал
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ASK A QUESTION FORM
      ════════════════════════════════════════ */}
      <section className="bg-cream py-14 md:py-24 relative overflow-hidden">
        <LeafShadow variant="bottom-left" opacity={0.06} />

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              Остались вопросы?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-3">
              Задать вопрос
            </h2>
            <p className="text-dark-brown/50 leading-relaxed">
              Напишите мне — я отвечу лично или добавлю ответ в FAQ
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-beige/60 shadow-sm p-6 md:p-8">
            <QuestionForm />
          </div>
        </div>
      </section>
    </>
  );
}
