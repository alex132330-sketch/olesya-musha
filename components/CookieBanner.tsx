"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-16 lg:bottom-0 inset-x-0 z-40
                 bg-dark-brown/96 backdrop-blur-sm border-t border-white/10
                 shadow-[0_-4px_24px_rgba(0,0,0,0.3)]"
      role="dialog"
      aria-label="Уведомление о cookies"
    >
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4
                   flex flex-col sm:flex-row items-start sm:items-center
                   justify-between gap-3"
      >
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
          Мы используем cookies для улучшения работы сайта и персонализации
          контента. Продолжая использование сайта, вы соглашаетесь с нашей{" "}
          <Link
            href="/privacy-policy"
            className="text-terracotta hover:text-terracotta/80 underline underline-offset-2 transition-colors"
          >
            политикой конфиденциальности
          </Link>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="rounded-full bg-terracotta text-white font-semibold text-sm
                       px-6 py-2.5 min-h-[40px]
                       hover:bg-terracotta/90 active:scale-[0.97]
                       transition-all duration-150"
          >
            Принять
          </button>
          <button
            onClick={accept}
            className="flex items-center justify-center w-8 h-8 rounded-full
                       text-white/40 hover:text-white/70 hover:bg-white/10
                       transition-all duration-150"
            aria-label="Закрыть"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
