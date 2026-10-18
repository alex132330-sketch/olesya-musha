import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Droplets, ArrowLeft } from "lucide-react";
import { oils, getOilBySlug, getSimilarOils } from "@/data/oils";
import OilCard from "@/components/oils/OilCard";

export async function generateStaticParams() {
  return oils.map((o) => ({ id: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const oil = getOilBySlug(id);
  if (!oil) return {};
  return {
    title: oil.name,
    description: oil.description,
  };
}

export default async function OilPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const oil = getOilBySlug(id);
  if (!oil) notFound();

  const similar = getSimilarOils(oil);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Back */}
        <Link
          href="/oils"
          className="inline-flex items-center gap-2 text-sm text-dark-brown/50
                     hover:text-terracotta transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Все масла
        </Link>

        {/* Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* ── Photo ── */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-beige/20 shadow-lg">
            <Image
              src={oil.image ?? ""}
              alt={oil.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={oil.objectFit === "contain" ? "object-contain" : "object-cover"}
              priority
            />
          </div>

          {/* ── Info ── */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-widest text-terracotta mb-2 font-sans">
              Эфирное масло
            </p>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-3">
              {oil.name}
            </h1>

            <p className="text-dark-brown/60 leading-relaxed mb-6">{oil.description}</p>

            {/* Benefits */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {oil.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 text-sm bg-beige/60
                             text-dark-brown/70 px-3 py-1.5 rounded-full"
                >
                  <Check size={13} className="text-terracotta shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Full description */}
            <p className="text-dark-brown/65 text-sm leading-relaxed mb-8 border-l-2 border-beige pl-4">
              {oil.fullDescription}
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Detail label="Состав" value={oil.composition} />
              <Detail label="Объём" value={oil.volume} />
            </div>

            {/* Usage */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-dark-brown/40 mb-3 font-sans">
                Способы применения
              </p>
              <ul className="space-y-2">
                {oil.usage.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm text-dark-brown/65">
                    <Droplets size={14} className="text-terracotta shrink-0 mt-0.5" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Similar oils ── */}
        {similar.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-brown mb-8">
              Похожие масла
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {similar.map((o) => (
                <OilCard key={o.id} oil={o} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-beige/30 rounded-xl p-4">
      <p className="text-[11px] uppercase tracking-wider text-dark-brown/40 mb-1 font-sans">
        {label}
      </p>
      <p className="text-sm text-dark-brown/80 leading-snug">{value}</p>
    </div>
  );
}
