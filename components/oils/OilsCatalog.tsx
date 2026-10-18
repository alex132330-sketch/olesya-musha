"use client";

import { useState, useMemo } from "react";
import type { Oil, OilCategory, OilScent } from "@/types";
import OilCard from "./OilCard";

const CATEGORIES: { value: OilCategory | "all"; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "relaxation", label: "Расслабление" },
  { value: "energy", label: "Энергия" },
  { value: "immunity", label: "Иммунитет" },
  { value: "skin", label: "Кожа" },
  { value: "balance", label: "Баланс" },
];

const SCENTS: { value: OilScent | "all"; label: string }[] = [
  { value: "all", label: "Все ароматы" },
  { value: "floral", label: "Цветочный" },
  { value: "citrus", label: "Цитрусовый" },
  { value: "woody", label: "Древесный" },
  { value: "herbal", label: "Травяной" },
];

export default function OilsCatalog({ oils }: { oils: Oil[] }) {
  const [category, setCategory] = useState<OilCategory | "all">("all");
  const [scent, setScent] = useState<OilScent | "all">("all");

  const filtered = useMemo(() => {
    return oils.filter((o) => {
      const catOk = category === "all" || o.categories.includes(category);
      const scentOk = scent === "all" || o.scent === scent;
      return catOk && scentOk;
    });
  }, [oils, category, scent]);

  return (
    <div>
      {/* ── Filters ── */}
      <div className="mb-8 space-y-4">
        {/* Category filter */}
        <div>
          <p className="text-xs text-dark-brown/40 uppercase tracking-widest mb-2.5 font-sans">
            По назначению
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setCategory(value)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
                  category === value
                    ? "bg-terracotta text-white shadow-sm"
                    : "bg-white border border-beige text-dark-brown/70 hover:border-terracotta/50 hover:text-terracotta",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Scent filter */}
        <div>
          <p className="text-xs text-dark-brown/40 uppercase tracking-widest mb-2.5 font-sans">
            По аромату
          </p>
          <div className="flex flex-wrap gap-2">
            {SCENTS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setScent(value)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
                  scent === value
                    ? "bg-dark-brown text-white shadow-sm"
                    : "bg-white border border-beige text-dark-brown/70 hover:border-dark-brown/30 hover:text-dark-brown",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-3xl mb-3">🌿</p>
          <p className="font-heading text-xl text-dark-brown/60">
            Ничего не найдено
          </p>
          <p className="text-sm text-dark-brown/40 mt-1">
            Попробуйте изменить фильтры
          </p>
          <button
            onClick={() => { setCategory("all"); setScent("all"); }}
            className="mt-4 text-sm text-terracotta hover:underline"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <>
          <p className="text-sm text-dark-brown/40 mb-5">
            {filtered.length} {plural(filtered.length, "масло", "масла", "масел")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((oil) => (
              <OilCard key={oil.id} oil={oil} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function plural(n: number, one: string, few: string, many: string): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}
