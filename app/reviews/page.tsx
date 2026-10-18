import type { Metadata } from "next";
import LeafShadow from "@/components/LeafShadow";
import ReviewCard from "@/components/reviews/ReviewCard";
import ReviewForm from "@/components/reviews/ReviewForm";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы клиентов нутрициолога Олеси Муша. Реальные истории о результатах консультаций, программ питания и эфирных маслах.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          PAGE HEADER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-20 md:pb-16">
        <LeafShadow variant="top-right" opacity={0.07} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Мнения клиентов
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Отзывы
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-lg mx-auto mb-12 leading-relaxed">
            Что говорят клиенты — реальные истории о результатах и изменениях
          </p>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS GRID
      ════════════════════════════════════════ */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LEAVE A REVIEW FORM
      ════════════════════════════════════════ */}
      <section className="bg-beige/30 py-16 md:py-24 relative overflow-hidden">
        <LeafShadow variant="bottom-left" opacity={0.07} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              Ваш опыт
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-3">
              Оставить отзыв
            </h2>
            <p className="text-dark-brown/50 max-w-md mx-auto">
              Поделитесь своим опытом — ваши слова помогают другим людям
              решиться на первый шаг
            </p>
          </div>

          <ReviewForm />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════════════ */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown mb-3">
            Хотите такой же результат?
          </h2>
          <p className="text-dark-brown/50 mb-8 leading-relaxed">
            Запишитесь на первичную консультацию — бесплатно и без обязательств
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
