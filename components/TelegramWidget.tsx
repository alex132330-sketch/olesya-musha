import Link from "next/link";

function TgIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

interface TelegramWidgetProps {
  /**
   * compact — горизонтальная полоска (для footer, сайдбара)
   * card    — белая карточка с описанием (для страниц)
   * banner  — широкий тёмный баннер (для секций)
   */
  variant?: "compact" | "card" | "banner";
  /** Мок-число подписчиков */
  subscriberCount?: string;
  channelUrl?: string;
  className?: string;
}

export default function TelegramWidget({
  variant = "card",
  subscriberCount = "12.4K",
  channelUrl = "https://t.me/olesya_musha",
  className = "",
}: TelegramWidgetProps) {
  /* ── Compact (footer / sidebar) ── */
  if (variant === "compact") {
    return (
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "group inline-flex items-center gap-3 rounded-xl px-4 py-2.5",
          "bg-cream/10 hover:bg-[#2AABEE]/20 border border-cream/10 hover:border-[#2AABEE]/40",
          "transition-all duration-200",
          className,
        ].join(" ")}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2AABEE]/20 text-[#2AABEE] group-hover:bg-[#2AABEE]/30 transition-colors">
          <TgIcon className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-cream leading-none">
            Telegram-канал
          </p>
          <p className="text-[11px] text-cream/45 mt-0.5">{subscriberCount} подписчиков</p>
        </div>
        <span className="ml-auto text-xs font-semibold text-[#2AABEE] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          →
        </span>
      </a>
    );
  }

  /* ── Banner (dark full-width section) ── */
  if (variant === "banner") {
    return (
      <div
        className={[
          "flex flex-col sm:flex-row items-center justify-between gap-5",
          "rounded-2xl bg-gradient-to-r from-[#1e3a5f] to-[#1a2f4e]",
          "border border-[#2AABEE]/20 px-6 py-5 shadow-lg",
          className,
        ].join(" ")}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2AABEE]">
            <TgIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-heading text-base font-bold text-white">
              Олеся Муша · Telegram
            </p>
            <p className="text-sm text-white/55">{subscriberCount} подписчиков · советы каждый день</p>
          </div>
        </div>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] text-white
                     font-semibold text-sm px-6 py-2.5 hover:bg-[#2AABEE]/90
                     active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0"
        >
          <TgIcon className="w-4 h-4" />
          Подписаться
        </a>
      </div>
    );
  }

  /* ── Card (default) ── */
  return (
    <div
      className={[
        "flex flex-col items-center text-center rounded-2xl bg-white shadow-sm",
        "border border-beige/60 px-6 py-8",
        className,
      ].join(" ")}
    >
      {/* Telegram icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2AABEE] mb-5 shadow-lg shadow-[#2AABEE]/30">
        <TgIcon className="w-8 h-8 text-white" />
      </div>

      <p className="text-xs uppercase tracking-widest text-dark-brown/40 mb-1 font-sans">
        Присоединяйтесь
      </p>
      <h3 className="font-heading text-xl font-bold text-dark-brown mb-2">
        Telegram-канал
      </h3>
      <p className="text-sm text-dark-brown/55 leading-relaxed mb-5 max-w-xs">
        Ежедневные советы по питанию, рецепты, разборы масел и честные ответы на вопросы подписчиков.
      </p>

      {/* Subscriber count */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex -space-x-1.5">
          {["#C67B5C", "#8B7355", "#A08060"].map((bg) => (
            <div
              key={bg}
              className="w-6 h-6 rounded-full border-2 border-white"
              style={{ backgroundColor: bg }}
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-sm text-dark-brown/60">
          <strong className="text-dark-brown">{subscriberCount}</strong> подписчиков
        </span>
      </div>

      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] text-white
                   font-semibold text-sm px-7 py-3 hover:bg-[#2AABEE]/90 hover:-translate-y-0.5
                   shadow-md shadow-[#2AABEE]/25 active:scale-[0.98] transition-all duration-200"
      >
        <TgIcon className="w-4 h-4" />
        Подписаться на канал
      </a>

      <Link
        href="/telegram"
        className="mt-3 text-xs text-dark-brown/35 hover:text-terracotta transition-colors"
      >
        Посмотреть последние посты →
      </Link>
    </div>
  );
}
