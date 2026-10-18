import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    label: "ОБО МНЕ",
    href: "/about",
    image: "/images/Olesya5.jpg",
    external: false,
  },
  {
    label: "УСЛУГИ",
    href: "/services",
    image: "/images/tile-services.jpg",
    external: false,
  },
  {
    label: "ПОДАРОК",
    href: "/gift",
    image: "/images/tile-gift.jpg",
    external: false,
  },
  {
    label: "ЭФИРНЫЕ\nМАСЛА",
    href: "/oils",
    image: "/images/tile-oils.jpg",
    external: false,
  },
  {
    label: "ОТЗЫВЫ",
    href: "/reviews",
    image: "/images/tile-reviews.jpg",
    external: false,
  },
  {
    label: "ТЕЛЕГРАМ-\nКАНАЛ",
    href: "https://t.me/mushaolesya",
    image: "/images/tile-telegram.jpg",
    external: true,
  },
];

function TileCard({ tile }: { tile: (typeof tiles)[number] }) {
  const inner = (
    <>
      <Image
        src={tile.image}
        alt={tile.label.replace("\n", " ")}
        fill
        sizes="(max-width: 1024px) 33vw, 400px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </>
  );

  const className =
    "group relative block overflow-hidden rounded-lg aspect-[3/2]";

  if (tile.external) {
    return (
      <a
        href={tile.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={tile.href} className={className}>
      {inner}
    </Link>
  );
}

export default function TilesSection() {
  return (
    <section className="bg-cream py-4 sm:py-5">
      <div className="mx-auto max-w-2xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {tiles.map((tile) => (
            <TileCard key={tile.href} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
