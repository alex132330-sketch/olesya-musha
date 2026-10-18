import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section relative w-full aspect-[10/9] md:aspect-[20/9] lg:aspect-[16/5] overflow-hidden bg-cream">

        {/* Photo — absolute fill so it covers the full section height */}
        <div className="absolute inset-0">
          <Image
            src="/images/OlesyaGPT.png"
            alt="Твой нутрициолог Олеся Муша"
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="hero-buttons absolute inset-x-0 bottom-0 z-10 flex justify-center px-[4%] pb-[2vh]">
          <Link
            href="/services"
            className="hero-btn inline-flex items-center justify-center rounded-xl
                       bg-white text-dark-brown font-semibold
                       hover:bg-cream transition-colors duration-200 shadow-md"
          >
            Записаться
          </Link>
          <a
            href="https://t.me/olesya_musha"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn inline-flex items-center justify-center rounded-xl
                       bg-terracotta text-white font-semibold
                       hover:bg-terracotta/90 transition-colors duration-200 shadow-md"
          >
            Telegram
          </a>
        </div>

      </section>

      {/* Heading — below the hero, not overlaid */}
      <div className="text-center px-[4%] py-[2vh] bg-cream">
        <h1 className="hero-heading font-heading font-bold text-dark-brown leading-snug">
          Раскрытие себя через заботу о теле
        </h1>
      </div>
    </>
  );
}
