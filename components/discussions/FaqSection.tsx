"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems, faqCategoryLabels } from "@/data/faq";
import type { FaqCategory } from "@/data/faq";

type ActiveCategory = FaqCategory | "all";

const CATEGORIES: ActiveCategory[] = ["all", "nutrition", "oils", "consultations"];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("all");
  const [openId, setOpenId] = useState<string | null>("1");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div>
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenId(null);
            }}
            className={[
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-terracotta text-white shadow-sm"
                : "bg-white border border-beige text-dark-brown/70 hover:border-terracotta/50 hover:text-dark-brown",
            ].join(" ")}
          >
            {faqCategoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={[
                "bg-white rounded-2xl border transition-all duration-200",
                isOpen
                  ? "border-terracotta/30 shadow-md"
                  : "border-beige/60 shadow-sm hover:border-terracotta/20 hover:shadow",
              ].join(" ")}
            >
              <button
                id={`faq-btn-${item.id}`}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
              >
                <span className="font-heading text-base font-semibold text-dark-brown leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={[
                    "shrink-0 text-terracotta transition-transform duration-300",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {/* Answer — smooth height transition via grid trick */}
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className={[
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-dark-brown/65 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-dark-brown/40 py-10 text-sm">
          Вопросов в этой категории пока нет.
        </p>
      )}
    </div>
  );
}
