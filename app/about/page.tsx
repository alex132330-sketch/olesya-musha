import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeafShadow from "@/components/LeafShadow";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Олеся Муша — сертифицированный нутрициолог и практик ароматерапии. Узнайте о моём образовании, опыте и подходе к работе.",
};


export default function AboutPage() {
  return (
    <main className="bg-cream">

      {/* ── Hero banner ── */}
      <section className="bg-terracotta py-6 sm:py-8 mx-4 sm:mx-8 lg:mx-16 rounded-2xl mt-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-widest text-cream/70 mb-2 font-sans">
            Обо мне
          </p>
          <h1 className="font-heading font-bold text-cream leading-tight
                         text-4xl sm:text-5xl lg:text-6xl">
            Олеся Муша
          </h1>
          <p className="mt-3 text-cream/80 text-sm sm:text-base tracking-wide">
            Сертифицированный нутрициолог · Практик ароматерапии
          </p>
        </div>
      </section>


      {/* ── Bio + photo ── */}
      <section className="relative overflow-hidden py-8 sm:py-12">
        <LeafShadow variant="top-right" opacity={0.06} />
        <LeafShadow variant="bottom-left" opacity={0.05} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Photo */}
            <FadeIn>
              <div className="relative flex justify-center lg:justify-start">
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-beige/60 -z-10" />
                <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-terracotta/10 -z-10" />

                <div className="relative w-full max-w-md">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-[#D6C4B0]">
                    <Image
                      src="/images/Olesya5.jpg"
                      alt="Олеся Муша"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <p className="font-heading text-base font-bold text-dark-brown">Олеся Муша</p>
                    <p className="text-sm text-terracotta mt-0.5">Нутрициолог · Практик ароматерапии</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio text */}
            <FadeIn delay={150}>
              <div>
                <p className="text-xs uppercase tracking-widest text-terracotta mb-4 font-sans">
                  Моя история
                </p>
                <h2 className="font-heading font-bold text-dark-brown text-3xl sm:text-4xl leading-tight mb-6">
                  Раскрытие себя<br className="hidden sm:block" /> через заботу о теле
                </h2>

                <div className="space-y-4 text-dark-brown/65 text-base leading-relaxed">
                  <p>
                    Привет! Я Олеся, мне 42.
                    Зимой я ловлю суету и красоту в Подмосковье, а летом мы с семьей сбегаем к морю в Крым 🌊
                  </p>
                  <p>
                    По первому образованию я финансист. Но главный «аудит» я провела для себя, когда готовилась к беременности.
                  </p>
                  <p>
                    Тогда я с головой ушла в физиологию. Изучала, как мы устроены, закрывала свои дефициты, училась слышать свое тело и… поняла, что хочу помогать в этом другим. Этот опыт перевернул моё сознание…
                    Так финансист стал нутрициологом 🧬
                  </p>
                  <p>
                    Сейчас я мама в декрете, и на моей кухне всегда вкусно и полезно.
                  </p>
                  <p>
                    Я перестроила питание своей семьи и поняла: здоровая еда — это невероятно вкусно! 🥘🍰
                  </p>
                  <p className="font-semibold text-dark-brown/80">Как я работаю?</p>
                  <p>
                    🔹 Интегративно. Мы не чиним «отдельную деталь», мы смотрим на организм как на единую экосистему.
                  </p>
                  <p>
                    🔹 Индивидуально. У каждого тела своя история. Нет универсальных диет, есть ваш уникальный путь.
                  </p>
                  <p>
                    🔹 Без фанатизма. Мой принцип — 80/20. Мы убираем сахар, смотрим на глютен и лактозу, но «иногда можно всё». Жизнь должна быть яркой! 💃
                  </p>
                  <p>
                    Искренне считаю, что наше тело — гениальный механизм. Оно способно на невероятное!
                  </p>
                  <p>
                    Наша задача — просто дать ему правильные «инвестиции» в виде еды, отдыха и заботы.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="bg-cream py-14 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-dark-brown text-3xl sm:text-4xl mb-4">
              Готовы начать?
            </h2>
            <p className="text-dark-brown/55 text-base mb-8 max-w-md mx-auto">
              Запишитесь на первичную консультацию — вместе найдём ваш путь к здоровью
            </p>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl
                         bg-terracotta text-white font-semibold
                         text-base px-10 py-3.5
                         hover:bg-terracotta/90 transition-colors duration-200 shadow-md"
            >
              Записаться на консультацию
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
