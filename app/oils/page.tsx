import type { Metadata } from "next";
import LeafShadow from "@/components/LeafShadow";
import OilsCatalog from "@/components/oils/OilsCatalog";
import { oils } from "@/data/oils";

export const metadata: Metadata = {
  title: "Эфирные масла",
  description:
    "Каталог натуральных эфирных масел doTERRA. Расслабление, энергия, иммунитет, уход за кожей.",
};

export default function OilsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-cream pt-16 pb-10 md:pt-20 md:pb-14">
        <LeafShadow variant="top-right" opacity={0.08} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-terracotta mb-3 font-sans">
            Натуральные масла doTERRA
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-4">
            Эфирные масла
          </h1>
          <p className="text-base md:text-lg text-dark-brown/55 max-w-lg mx-auto leading-relaxed">
            Терапевтические масла высшего качества для здоровья тела, гармонии
            духа и красоты кожи.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OilsCatalog oils={oils} />
        </div>
      </section>
    </>
  );
}
