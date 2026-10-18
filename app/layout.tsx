import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import CookieBanner from "@/components/CookieBanner";
import { Toaster } from "sonner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olesya-musha.ru"),
  title: {
    default: "Твой нутрициолог Олеся Муша",
    template: "%s | Олеся Муша",
  },
  description:
    "Нутрициология, эфирные масла и здоровое питание. Индивидуальные консультации и продукты для вашего здоровья.",
  keywords: ["нутрициолог", "эфирные масла", "здоровое питание", "консультация"],
  openGraph: {
    type: "website",
    siteName: "Твой нутрициолог Олеся Муша",
    locale: "ru_RU",
    title: "Твой нутрициолог Олеся Муша",
    description:
      "Нутрициология, эфирные масла и здоровое питание. Индивидуальные консультации и продукты для вашего здоровья.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Твой нутрициолог Олеся Муша",
    description: "Нутрициология, эфирные масла и здоровое питание.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-dark-brown">
        <Header />
        {/* pb-16 reserves space for the fixed mobile bottom nav */}
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
        <CookieBanner />
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: { fontFamily: "var(--font-inter), sans-serif" },
          }}
        />
      </body>
    </html>
  );
}
