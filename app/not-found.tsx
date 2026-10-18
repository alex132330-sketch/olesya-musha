import Link from "next/link";
import LeafShadow from "@/components/LeafShadow";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-cream min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <LeafShadow variant="top-right" opacity={0.1} />
      <LeafShadow variant="bottom-left" opacity={0.07} />

      <div className="relative z-10 text-center">
        <p
          className="font-heading font-bold text-terracotta/10 leading-none select-none
                     text-[120px] md:text-[160px]"
          aria-hidden="true"
        >
          404
        </p>

        <div className="-mt-4 mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-brown mb-3">
            Страница не найдена
          </h1>
          <p className="text-dark-brown/55 text-base max-w-sm mx-auto leading-relaxed">
            Такой страницы не существует или она была перенесена.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta text-white
                     font-semibold px-8 py-3.5 text-sm
                     hover:bg-terracotta/90 hover:-translate-y-0.5
                     shadow-md shadow-terracotta/25 transition-all duration-200"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
