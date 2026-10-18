import Link from "next/link";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.559c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.336-3.202C4.92 11.7 4.2 9.433 4.2 8.772c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.864c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.745-.576.745z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://t.me/mushaolesya",   label: "Telegram",  icon: <TelegramIcon /> },
  { href: "https://vk.com/olesya_musha", label: "ВКонтакте", icon: <VkIcon /> },
];

const navCol1 = [
  { href: "/",         label: "Главная" },
  { href: "/about",    label: "Обо мне" },
  { href: "/services", label: "Услуги" },
  { href: "/oils",     label: "Масла" },
];

const navCol2 = [
  { href: "/reviews",         label: "Отзывы" },
  { href: "/gift",            label: "Подарок" },
  { href: "/contacts",        label: "Контакты" },
  { href: "/privacy-policy",  label: "Конфиденциальность" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2A1508", color: "#F5E6D3" }}>
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {/* Column 1: Brand + slogan + socials */}
          <div>
            <p className="font-heading font-bold text-lg" style={{ color: "#F5E6D3" }}>
              Твой нутрициолог
            </p>
            <p className="font-heading font-bold text-lg" style={{ color: "#C4704B" }}>
              Олеся Муша
            </p>
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 bg-[#F5E6D3]/20 hover:bg-[#C4704B]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation in 2 sub-columns */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
               style={{ color: "#C4704B" }}>
              Навигация
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[...navCol1, ...navCol2].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#F5E6D3B3" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts + Telegram button */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
               style={{ color: "#C4704B" }}>
              Контакты
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "#F5E6D3B3" }}>
              <li>
                <a href="mailto:olesyamusha@mail.ru"
                   className="transition-colors duration-150 hover:opacity-100"
                   style={{ color: "#F5E6D3B3" }}>
                  olesyamusha@mail.ru
                </a>
              </li>
              <li>
                <a href="tel:+79788550467"
                   className="transition-colors duration-150"
                   style={{ color: "#F5E6D3B3" }}>
                  +7 (978) 855-04-67
                </a>
              </li>
            </ul>
            <a
              href="https://t.me/mushaolesya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#C4704B", color: "#F5E6D3" }}
            >
              <TelegramIcon />
              Telegram-канал
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #F5E6D31A" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#F5E6D366" }}>
            © 2024 Олеся Муша. Все права защищены.
          </p>
          <p className="text-xs text-center sm:text-right" style={{ color: "#F5E6D64D" }}>
            Информация на сайте носит ознакомительный характер и не заменяет консультацию врача.
          </p>
        </div>
      </div>
    </footer>
  );
}
