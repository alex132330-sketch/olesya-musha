"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/oils", label: "Масла" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/discussions", label: "Обсуждения" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-cream/80 backdrop-blur-md shadow-sm border-b border-beige/60"
          : "bg-cream",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 md:h-28 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight shrink-0 group">
            <span
              className="font-heading text-base md:text-lg font-bold text-dark-brown/70
                         group-hover:text-terracotta transition-colors duration-200"
            >
              Твой нутрициолог
            </span>
            <span
              className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-dark-brown
                         group-hover:text-terracotta transition-colors duration-200"
            >
              Олеся Муша
            </span>
            <span className="text-xs md:text-sm text-terracotta/80 tracking-widest uppercase font-sans mt-0.5">
              нутрициология · эфирные масла
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "relative text-base font-medium transition-colors duration-200 py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-terracotta",
                  "after:transition-all after:duration-300",
                  pathname === href
                    ? "text-terracotta after:w-full"
                    : "text-dark-brown/80 hover:text-terracotta after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Hamburger (mobile/tablet) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full
                         hover:bg-beige/60 transition-colors duration-200"
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X size={20} className="text-dark-brown" />
              ) : (
                <Menu size={20} className="text-dark-brown" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-72 border-t border-beige/60" : "max-h-0",
        ].join(" ")}
      >
        <nav
          aria-label="Главное меню"
          className="mx-auto max-w-7xl px-4 sm:px-6 py-3 grid grid-cols-2 gap-x-2 gap-y-0.5"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                pathname === href
                  ? "bg-beige text-terracotta"
                  : "text-dark-brown/80 hover:bg-beige/50 hover:text-dark-brown",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
