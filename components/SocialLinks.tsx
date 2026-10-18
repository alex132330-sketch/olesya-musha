/* Reusable social-links row — Telegram, VK, Instagram, YouTube */

interface SocialLinksProps {
  /** light → white icons on dark bg; dark → colored/dark icons on light bg */
  theme?: "light" | "dark";
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ICON_SIZE = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
const BTN_SIZE = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };

const links = [
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/olesya_musha",
    color: "#2AABEE",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
      </svg>
    ),
  },
  {
    id: "vk",
    label: "ВКонтакте",
    href: "https://vk.com/olesya_musha",
    color: "#0077FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.559c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.336-3.202C4.92 11.7 4.2 9.433 4.2 8.772c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.864c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.745-.576.745z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/olesya_musha",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@olesya_musha",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function SocialLinks({
  theme = "dark",
  showLabels = false,
  size = "md",
  className = "",
}: SocialLinksProps) {
  const isLight = theme === "light";

  return (
    <div className={`flex items-center gap-2 ${className}`} role="list" aria-label="Социальные сети">
      {links.map(({ id, label, href, color, icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          role="listitem"
          title={label}
          className={[
            "group relative flex items-center justify-center rounded-full",
            "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
            BTN_SIZE[size],
            isLight
              ? "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
              : "bg-beige/60 text-dark-brown/60 hover:text-white",
          ].join(" ")}
          style={
            isLight
              ? undefined
              : ({ "--hover-bg": color } as React.CSSProperties)
          }
          onMouseEnter={(e) => {
            if (!isLight) {
              (e.currentTarget as HTMLElement).style.backgroundColor = color;
            }
          }}
          onMouseLeave={(e) => {
            if (!isLight) {
              (e.currentTarget as HTMLElement).style.backgroundColor = "";
            }
          }}
        >
          <span className={ICON_SIZE[size]}>{icon}</span>
          {showLabels && (
            <span className="ml-2 text-sm font-medium whitespace-nowrap">{label}</span>
          )}
        </a>
      ))}
    </div>
  );
}
