import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Heart, MessageCircle, ExternalLink, Send } from "lucide-react";
import LeafShadow from "@/components/LeafShadow";
import TelegramWidget from "@/components/TelegramWidget";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Telegram-канал",
  description:
    "Telegram-канал Олеси Муша — ежедневные советы по питанию, рецепты, разборы эфирных масел и честные ответы на вопросы.",
};

interface TgPost {
  id: string;
  emoji: string;
  title: string;
  text: string;
  date: string;
  views: number;
  reactions: number;
  comments: number;
  tag: string;
}

const posts: TgPost[] = [
  {
    id: "1",
    emoji: "🌿",
    title: "5 продуктов, которые улучшат ваш сон",
    text: "Если засыпаете с трудом или просыпаетесь разбитыми — дело может быть в питании. Вот что реально работает: вишня (мелатонин), тыквенные семечки (магний), бананы (триптофан), тёплое молоко с куркумой (оба механизма), и — сюрприз — тёмный шоколад 70%+ за 2 часа до сна.\n\nКлюч: не ешьте тяжёлое за 3 часа до сна и добавьте один из этих продуктов в вечерний ритуал.",
    date: "22 апреля",
    views: 3840,
    reactions: 212,
    comments: 34,
    tag: "питание",
  },
  {
    id: "2",
    emoji: "💧",
    title: "Вода: сколько, когда и почему это важно",
    text: "Норма «8 стаканов» — это миф. Ваша потребность = 30–35 мл на кг веса. Но важнее когда: стакан воды сразу после пробуждения запускает метаболизм; за 30 минут до еды — улучшает пищеварение; после тренировки — восстанавливает электролиты.\n\nЧай, кофе и соки — не в счёт. Они требуют дополнительной воды для усвоения.",
    date: "19 апреля",
    views: 4120,
    reactions: 287,
    comments: 51,
    tag: "советы",
  },
  {
    id: "3",
    emoji: "🥗",
    title: "Bowl-салат за 15 минут: рецепт на каждый день",
    text: "Собираем идеальный боул по формуле: 50% зелени + 25% белка + 25% сложных углеводов + полезный жир + соус.\n\nМой любимый: руккола + нут + булгур + авокадо + лимонная заправка с зернистой горчицей. Готовится пока варится зерно — 15 минут. Насыщает на 4–5 часов.\n\nРецепт заправки в комментариях 👇",
    date: "16 апреля",
    views: 5210,
    reactions: 341,
    comments: 78,
    tag: "рецепты",
  },
  {
    id: "4",
    emoji: "✨",
    title: "Детокс без стресса: 3 шага к лёгкости",
    text: "Детокс — это не голодание. Это помощь вашим органам делать то, что они и так умеют. Три простых шага:\n\n1. Убрать ультраобработанное на 3 дня\n2. Добавить клетчатку (овощи, льняное семя)\n3. Поддержать печень — куркума, брокколи, зелёный чай\n\nРезультат: лёгкость в теле, ясность ума и лучший сон. Никаких чудо-соков.",
    date: "13 апреля",
    views: 6780,
    reactions: 445,
    comments: 93,
    tag: "детокс",
  },
];

const channelTopics = [
  { emoji: "🥦", text: "Советы по питанию каждый день" },
  { emoji: "🌿", text: "Разборы эфирных масел" },
  { emoji: "🍳", text: "Быстрые полезные рецепты" },
  { emoji: "💊", text: "Витамины и добавки — правда и мифы" },
  { emoji: "🧘", text: "Практики для баланса и энергии" },
  { emoji: "📖", text: "Ответы на вопросы подписчиков" },
];

function formatNum(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n);
}

const TAG_COLORS: Record<string, string> = {
  питание: "bg-terracotta/10 text-terracotta",
  советы: "bg-blue-50 text-blue-600",
  рецепты: "bg-green-50 text-green-600",
  детокс: "bg-purple-50 text-purple-600",
};

export default function TelegramPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2f4e] to-[#0d1f35] pt-16 pb-0 md:pt-20">
        <LeafShadow variant="top-right" opacity={0.07} light />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(42,171,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(42,171,238,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16">
          {/* Channel header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
            {/* Avatar */}
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl
                         bg-[#2AABEE] shadow-xl shadow-[#2AABEE]/30"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
              </svg>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-white">
                  Олеся Муша | Нутрициолог
                </h1>
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2AABEE] text-white"
                  title="Верифицирован"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="text-sm text-white/50 mb-3">@olesya_musha_nutrition</p>
              <p className="text-white/70 leading-relaxed max-w-lg text-sm md:text-base">
                Нутрициолог, практик ароматерапии. Помогаю найти гармонию с едой
                и телом без диет и стресса. Каждый день — польза и честность.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { value: "12.4K", label: "подписчиков" },
              { value: "340+", label: "публикаций" },
              { value: "4.9★", label: "рейтинг" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl bg-white/5 border border-white/10 py-3 px-4 text-center"
              >
                <p className="font-heading text-xl font-bold text-white">{value}</p>
                <p className="text-xs text-white/40 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] text-white
                         font-semibold px-8 py-3.5 text-sm hover:bg-[#2AABEE]/90 hover:-translate-y-0.5
                         shadow-lg shadow-[#2AABEE]/30 active:scale-[0.98] transition-all duration-200"
            >
              <Send size={16} />
              Подписаться на канал
              <ExternalLink size={13} className="opacity-60" />
            </a>
            <p className="text-xs text-white/35">Бесплатно · Без спама</p>
          </div>
        </div>

        {/* Wave */}
        <div className="overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 48" className="w-full fill-cream" preserveAspectRatio="none">
            <path d="M0 48 C480 0, 960 0, 1440 48 L1440 48 L0 48 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHAT'S PUBLISHED
      ════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
              О канале
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown">
              Что публикуется в канале
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {channelTopics.map(({ emoji, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5
                           border border-beige/60 shadow-sm"
              >
                <span className="text-xl shrink-0">{emoji}</span>
                <span className="text-sm text-dark-brown/70">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RECENT POSTS
      ════════════════════════════════════════ */}
      <section className="bg-beige/25 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-terracotta mb-1 font-sans">
                Лента
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown">
                Последние посты
              </h2>
            </div>
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm text-terracotta
                         hover:underline font-medium"
            >
              Все посты
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-beige/60
                           hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* Telegram avatar */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center
                               rounded-full bg-[#2AABEE] mt-0.5"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Post header */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-dark-brown">
                        Олеся Муша
                      </span>
                      <span className="text-xs text-dark-brown/35">{post.date}</span>
                      <span
                        className={[
                          "text-[10px] font-medium px-2 py-0.5 rounded-full ml-auto shrink-0",
                          TAG_COLORS[post.tag] ?? "bg-beige/60 text-dark-brown/60",
                        ].join(" ")}
                      >
                        #{post.tag}
                      </span>
                    </div>

                    {/* Post text */}
                    <p className="text-sm text-dark-brown/75 leading-relaxed whitespace-pre-line">
                      <span className="font-heading text-base font-semibold text-dark-brown mr-1">
                        {post.emoji}
                      </span>
                      {post.text}
                    </p>

                    {/* Engagement */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-beige/60">
                      <Stat icon={<Eye size={13} />} value={formatNum(post.views)} />
                      <Stat icon={<Heart size={13} />} value={formatNum(post.reactions)} />
                      <Stat icon={<MessageCircle size={13} />} value={String(post.comments)} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-dark-brown/50
                         hover:text-terracotta transition-colors"
            >
              Читать все {340}+ публикаций в Telegram
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SOCIAL LINKS + BIG CTA
      ════════════════════════════════════════ */}
      <section className="bg-dark-brown py-16 md:py-20 relative overflow-hidden">
        <LeafShadow variant="top-right" opacity={0.07} light />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Мы в социальных сетях
          </h2>
          <p className="text-white/50 mb-8">
            Выберите удобную платформу — везде свежий контент о питании и здоровье
          </p>

          {/* SocialLinks with labels */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              { label: "Telegram", href: "https://t.me/olesya_musha", color: "#2AABEE", count: "12.4K" },
              { label: "ВКонтакте", href: "https://vk.com/olesya_musha", color: "#0077FF", count: "8.1K" },
              { label: "Instagram", href: "https://instagram.com/olesya_musha", color: "#E1306C", count: "15K" },
              { label: "YouTube", href: "https://youtube.com/@olesya_musha", color: "#FF0000", count: "3.2K" },
            ].map(({ label, href, color, count }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                           bg-white/10 text-white hover:bg-white/20 border border-white/10
                           transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: `${color}30` }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                {label}
                <span className="text-white/40 text-xs">{count}</span>
              </a>
            ))}
          </div>

          {/* Big Telegram CTA */}
          <TelegramWidget variant="banner" className="max-w-2xl mx-auto" />
        </div>
      </section>
    </>
  );
}

function Stat({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-1 text-dark-brown/35 text-xs">
      {icon}
      <span>{value}</span>
    </div>
  );
}
