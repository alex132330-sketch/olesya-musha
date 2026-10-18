import Image from "next/image";
import Link from "next/link";
import LeafShadow from "@/components/LeafShadow";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "200+", label: "клиентов" },
  { value: "12", label: "программ" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <LeafShadow variant="bottom-right" opacity={0.07} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">
          {/* ── Photo ── */}
          <FadeIn>
          <div className="relative flex justify-center lg:justify-start">
            {/* Beige background blob */}
            <div
              className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full bg-beige/70 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-terracotta/10 -z-10"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Main photo */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/olesya.jpg"
                  alt="Олеся Муша — сертифицированный нутрициолог"
                  fill
                  sizes="(max-width: 1024px) 384px, 448px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating name card */}
              <div
                className="absolute bottom-6 left-6 right-6
                           bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <p className="font-heading text-lg font-semibold text-dark-brown leading-tight">
                  Олеся Муша
                </p>
                <p className="text-sm text-terracotta mt-0.5">
                  Сертифицированный нутрициолог
                </p>
              </div>

              {/* Small herb photo inset */}
              <div
                className="absolute -right-6 top-10 w-24 h-24 rounded-2xl overflow-hidden
                           border-4 border-cream shadow-xl hidden md:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=200&q=80&auto=format&fit=crop"
                  alt="натуральные травы"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          </FadeIn>

          {/* ── Content ── */}
          <FadeIn delay={150}>
          <div>
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              Обо мне
            </p>
            <h2
              className="font-heading font-bold text-dark-brown leading-tight mb-6
                         text-3xl md:text-4xl xl:text-5xl"
            >
              Раскрытие себя<br />через заботу о теле
            </h2>

            <div className="space-y-4 text-dark-brown/65 text-base leading-relaxed mb-10">
              <p>
                Меня зовут Олеся Муша. Я сертифицированный нутрициолог и
                практик ароматерапии. Моя философия проста: здоровье — это
                гармония тела, разума и духа.
              </p>
              <p>
                Я помогаю людям выстроить осознанные отношения с едой, открыть
                силу натуральных эфирных масел и найти путь к себе через заботу
                о своём теле.
              </p>
              <p>
                Каждый человек уникален, поэтому подход к питанию и образу
                жизни всегда индивидуален — никаких шаблонов, только ваш путь.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3 sm:p-4 text-center shadow-sm border border-beige/60"
                >
                  <p className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-terracotta">
                    {value}
                  </p>
                  <p className="text-xs md:text-sm text-dark-brown/55 mt-1 font-sans">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-terracotta
                         text-terracotta font-semibold text-sm px-7 py-3
                         hover:bg-terracotta hover:text-white
                         transition-all duration-300"
            >
              Подробнее обо мне
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
