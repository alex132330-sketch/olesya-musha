import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Play } from "lucide-react";
import LeafShadow from "@/components/LeafShadow";
import { clips } from "@/data/clips";

export const metadata: Metadata = {
  title: "Клипы",
  description:
    "Короткие клипы о нутрициологии и эфирных маслах от Олеси Муша — Shorts и Reels.",
};

export default function ClipsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          PAGE HEADER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-20 md:pb-16">
        <LeafShadow variant="top-right" opacity={0.07} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Shorts · Reels
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Клипы
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-lg mx-auto leading-relaxed">
            Короткие видео о питании, маслах и здоровом образе жизни
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {["Питание", "Масла", "Здоровье", "Рецепты", "Советы"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-beige text-dark-brown/70
                             text-xs font-medium border border-beige/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CLIPS GRID  (3 cols, portrait cards)
      ════════════════════════════════════════ */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {clips.map((clip) => (
              <div
                key={clip.id}
                className="group relative rounded-2xl overflow-hidden bg-dark-brown
                           cursor-pointer shadow-sm hover:shadow-xl
                           transition-all duration-300 hover:-translate-y-1"
              >
                {/* Portrait thumbnail (9:16) */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <Image
                    src={clip.thumbnail}
                    alt={clip.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
                                  from-dark-brown/90 via-dark-brown/20 to-transparent"
                  />

                  {/* Play button — visible on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full
                                    bg-white/20 backdrop-blur-sm border border-white/30"
                    >
                      <Play
                        size={18}
                        className="text-white ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold font-heading leading-snug line-clamp-2">
                      {clip.title}
                    </p>
                    <span className="flex items-center gap-1 mt-1.5 text-white/55 text-xs">
                      <Eye size={11} />
                      {clip.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════════════ */}
      <section className="bg-beige/30 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Подписывайтесь
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown mb-3">
            Новые клипы каждую неделю
          </h2>
          <p className="text-dark-brown/50 mb-8 leading-relaxed max-w-md mx-auto">
            Подпишитесь на YouTube-канал и Telegram, чтобы не пропускать новые
            видео и советы
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://youtube.com/@olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000]
                         text-white font-semibold px-6 py-3 text-sm
                         hover:bg-[#FF0000]/90 hover:-translate-y-0.5
                         shadow-md transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a
              href="https://t.me/olesya_musha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-dark-brown/20
                         text-dark-brown font-semibold px-6 py-3 text-sm
                         hover:bg-beige hover:-translate-y-0.5
                         transition-all duration-200"
            >
              Telegram-канал
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
