import Image from "next/image";
import Link from "next/link";
import type { Oil } from "@/types";

const CATEGORY_LABELS: Record<string, string> = {
  relaxation: "Расслабление",
  energy: "Энергия",
  immunity: "Иммунитет",
  skin: "Кожа",
  balance: "Баланс",
};

const SCENT_LABELS: Record<string, string> = {
  floral: "Цветочный",
  citrus: "Цитрусовый",
  woody: "Древесный",
  herbal: "Травяной",
  spicy: "Пряный",
};

export default function OilCard({ oil }: { oil: Oil }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-beige/60
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={`/oils/${oil.slug}`} className="relative block aspect-square overflow-hidden bg-beige/20">
        {oil.image ? (
          <Image
            src={oil.image}
            alt={oil.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`${oil.objectFit === "contain" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
          />
        ) : (
          <div className="w-full h-full bg-beige/40 flex items-center justify-center">
            <span className="font-heading text-4xl text-terracotta/30">🌿</span>
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-dark-brown/70
                         text-[11px] font-medium px-2.5 py-1 rounded-full">
          {CATEGORY_LABELS[oil.categories[0]]}
        </span>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link
            href={`/oils/${oil.slug}`}
            className="font-heading text-base font-semibold text-dark-brown
                       hover:text-terracotta transition-colors leading-tight"
          >
            {oil.name}
          </Link>
          <span className="text-[11px] text-dark-brown/40 shrink-0 mt-0.5">
            {SCENT_LABELS[oil.scent]}
          </span>
        </div>

        <p className="text-xs text-dark-brown/50 mb-3 line-clamp-2 leading-relaxed flex-1">
          {oil.description}
        </p>

      </div>
    </div>
  );
}
