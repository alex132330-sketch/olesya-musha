import type { Metadata } from "next";
import LeafShadow from "@/components/LeafShadow";
import VideosClient from "@/components/videos/VideosClient";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Видео",
  description:
    "Видеоразборы, рецепты и советы по нутрициологии и эфирным маслам от Олеси Муша.",
};

export default function VideosPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          PAGE HEADER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-20 md:pb-16">
        <LeafShadow variant="top-right" opacity={0.07} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            YouTube-канал
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Видео
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-lg mx-auto leading-relaxed">
            Разборы, рецепты и советы по нутрициологии и эфирным маслам
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { value: "6+", label: "видео" },
              { value: "50K+", label: "просмотров" },
              { value: "2+", label: "года" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-heading text-2xl font-bold text-dark-brown">
                  {value}
                </p>
                <p className="text-xs text-dark-brown/45 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VIDEO GRID (client — modal state)
      ════════════════════════════════════════ */}
      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VideosClient videos={videos} />
        </div>
      </section>
    </>
  );
}
