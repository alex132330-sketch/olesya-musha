import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с Олесей Мушей — нутрициологом и практиком ароматерапии.",
};

const messengers = [
  {
    label: "Telegram",
    href: "https://t.me/olesya_musha",
    color: "bg-[#229ED9]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "ВКонтакте",
    href: "https://vk.ru/mushaclub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.559c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.336-3.202C4.92 11.7 4.2 9.433 4.2 8.772c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.864c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.745-.576.745z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/mushaolesya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
      </svg>
    ),
  },
];

const hours = [
  { days: "Понедельник — Пятница", time: "10:00 — 19:00" },
  { days: "Суббота",               time: "11:00 — 16:00" },
  { days: "Воскресенье",           time: "Выходной" },
];

export default function ContactsPage() {
  return (
    <main className="bg-cream">

      {/* Hero */}
      <section className="bg-terracotta py-6 sm:py-8 mx-4 sm:mx-8 lg:mx-16 rounded-2xl mt-6">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-widest text-cream/70 mb-2 font-sans">Связаться</p>
          <h1 className="font-heading font-bold text-cream leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Контакты
          </h1>
          <p className="mt-3 text-cream/80 text-sm sm:text-base tracking-wide">
            Напишите или позвоните — отвечу в течение дня
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ── Left column: contacts info ── */}
          <div className="space-y-8">

            {/* Phone & Email */}
            <div className="bg-white rounded-2xl border border-beige/60 p-6 space-y-4">
              <p className="text-xs uppercase tracking-widest text-terracotta font-sans">Прямая связь</p>
              <a href="tel:+79001234567"
                 className="flex items-center gap-4 group">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center
                                 text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.18 19.79 19.79 0 0 1 1.5 3.6 2 2 0 0 1 3.5 1.4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.4a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-dark-brown/40 font-sans uppercase tracking-widest">Телефон</p>
                  <p className="text-sm font-semibold text-dark-brown group-hover:text-terracotta transition-colors">
                    +7 (978) 855-04-67
                  </p>
                </div>
              </a>

              <a href="mailto:olesyamusha@mail.ru"
                 className="flex items-center gap-4 group">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-terracotta/10 flex items-center justify-center
                                 text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-dark-brown/40 font-sans uppercase tracking-widest">Email</p>
                  <p className="text-sm font-semibold text-dark-brown group-hover:text-terracotta transition-colors">
                    olesyamusha@mail.ru
                  </p>
                </div>
              </a>
            </div>

            {/* Messengers */}
            <div className="bg-white rounded-2xl border border-beige/60 p-6">
              <p className="text-xs uppercase tracking-widest text-terracotta font-sans mb-4">Мессенджеры</p>
              <div className="flex flex-wrap gap-3">
                {messengers.map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white
                                text-sm font-semibold hover:opacity-90 transition-opacity ${color}`}
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>


            {/* Hours */}
            <div className="bg-white rounded-2xl border border-beige/60 p-6">
              <p className="text-xs uppercase tracking-widest text-terracotta font-sans mb-4">Часы работы</p>
              <ul className="space-y-2">
                {hours.map(({ days, time }) => (
                  <li key={days} className="flex justify-between text-sm">
                    <span className="text-dark-brown/60">{days}</span>
                    <span className="font-semibold text-dark-brown">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl border border-beige/60 p-6">
              <p className="text-xs uppercase tracking-widest text-terracotta font-sans mb-4">Социальные сети</p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                               bg-beige/40 text-dark-brown text-sm font-semibold
                               hover:bg-terracotta hover:text-white transition-all duration-200"
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right column: form ── */}
          <div>
            <div className="bg-white rounded-2xl border border-beige/60 p-6 sm:p-8 sticky top-6">
              <p className="text-xs uppercase tracking-widest text-terracotta font-sans mb-1">Написать</p>
              <h2 className="font-heading font-bold text-dark-brown text-2xl sm:text-3xl mb-6">
                Форма обратной связи
              </h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
