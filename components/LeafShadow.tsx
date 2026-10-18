"use client";

type LeafShadowProps = {
  className?: string;
  variant?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
  opacity?: number;
  /** Use light (white/cream) fills — for placement on dark/terracotta backgrounds */
  light?: boolean;
};

export default function LeafShadow({
  className = "",
  variant = "top-right",
  opacity = 0.12,
  light = false,
}: LeafShadowProps) {
  const positionClass: Record<string, string> = {
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0 rotate-180",
    "top-left": "top-0 left-0 scale-x-[-1]",
    "bottom-right": "bottom-0 right-0 rotate-180 scale-x-[-1]",
  };

  const c = light
    ? { a: "#FFFFFF", b: "#FAF7F2", c: "#FFFFFF", d: "#FFFFFF", stroke: "#FFFFFF" }
    : { a: "#C67B5C", b: "#E8D5C4", c: "#C67B5C", d: "#2C1810", stroke: "#2C1810" };

  return (
    <div
      className={`pointer-events-none absolute ${positionClass[variant]} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width="420"
        height="380"
        viewBox="0 0 420 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M380 10 C340 60, 260 80, 200 140 C140 200, 120 280, 160 340 C180 370, 220 380, 260 360 C320 330, 380 260, 400 180 C420 100, 410 40, 380 10Z"
          fill={c.a}
        />
        <path
          d="M340 0 C300 50, 240 90, 200 160 C170 210, 170 270, 210 310 C240 340, 290 340, 330 310 C380 270, 410 200, 410 130 C410 60, 375 20, 340 0Z"
          fill={c.b}
        />
        <path
          d="M410 30 C390 70, 360 110, 320 150 C280 190, 230 210, 200 250 C185 275, 190 305, 210 320 C240 340, 290 325, 330 295 C380 255, 415 195, 420 130 C425 65, 415 30, 410 30Z"
          fill={c.c}
          fillOpacity="0.5"
        />
        <path
          d="M200 80 C170 110, 130 130, 100 170 C75 200, 80 240, 110 260 C130 272, 160 268, 180 248 C210 220, 220 180, 210 140 C204 112, 200 80, 200 80Z"
          fill={c.d}
          fillOpacity="0.15"
        />
        <path
          d="M380 10 C360 80, 320 160, 240 240 C190 288, 160 330, 160 340"
          stroke={c.stroke}
          strokeWidth="1.5"
          strokeOpacity="0.2"
          fill="none"
        />
        <path
          d="M200 80 C190 130, 170 180, 155 230"
          stroke={c.stroke}
          strokeWidth="1"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
}
