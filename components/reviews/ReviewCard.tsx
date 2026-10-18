import { Star } from "lucide-react";
import type { ReviewData } from "@/data/reviews";

export default function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <article
      className="group flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-beige/60
                 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Quote mark */}
      <div
        className="font-heading text-5xl text-terracotta/15 leading-none -mt-1 mb-2
                   select-none group-hover:text-terracotta/25 transition-colors"
        aria-hidden="true"
      >
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={
              i < review.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-200 fill-gray-100"
            }
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-dark-brown/65 leading-relaxed flex-1 mb-5">
        {review.text}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-beige/60">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center
                     text-white text-xs font-bold shrink-0"
          style={{ backgroundColor: review.avatarBg }}
          aria-label={review.name}
        >
          {review.initials}
        </div>

        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-dark-brown leading-none">
            {review.name}
          </p>
          <p className="text-[11px] text-dark-brown/40 mt-1 truncate">
            {review.service} · {review.date}
          </p>
        </div>

        {/* Verified badge */}
        <span
          className="shrink-0 text-[10px] text-terracotta/70 font-medium border border-terracotta/30
                     rounded-full px-2 py-0.5 hidden sm:inline-block"
        >
          ✓ верифицирован
        </span>
      </div>
    </article>
  );
}
