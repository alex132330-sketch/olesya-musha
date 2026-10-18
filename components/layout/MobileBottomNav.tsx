"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Droplets, User } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  Icon: React.ElementType;
}

const items: NavItem[] = [
  { href: "/", label: "Главная", Icon: Home },
  { href: "/services", label: "Услуги", Icon: Briefcase },
  { href: "/oils", label: "Масла", Icon: Droplets },
  { href: "/profile", label: "Профиль", Icon: User },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50
                 bg-white/95 backdrop-blur-md
                 border-t border-beige/60
                 shadow-[0_-4px_20px_rgba(44,24,16,0.07)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Мобильная навигация"
    >
      <div className="flex items-stretch h-16">
        {items.map(({ href, label, Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(href + "/");

          return (
            <Link
              key={href}
              href={href}
              className={[
                "relative flex flex-col items-center justify-center flex-1 gap-0.5",
                "transition-colors duration-150",
                active
                  ? "text-terracotta"
                  : "text-dark-brown/35 hover:text-dark-brown/60",
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              {/* Active indicator line */}
              {active && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-terracotta" />
              )}

              <Icon size={22} strokeWidth={active ? 2.5 : 1.75} />

              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
