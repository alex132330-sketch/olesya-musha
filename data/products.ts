import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Консультация по питанию",
    description: "Индивидуальная консультация с разработкой плана питания",
    price: 3500,
    image: "/images/consultation.jpg",
    category: "programs",
    slug: "nutrition-consultation",
  },
  {
    id: "2",
    name: "Лавандовое масло",
    description: "100% натуральное эфирное масло лаванды для расслабления",
    price: 890,
    image: "/images/lavender-oil.jpg",
    category: "oils",
    slug: "lavender-oil",
  },
  {
    id: "3",
    name: "Программа детокса",
    description: "30-дневная программа очищения и восстановления",
    price: 7200,
    image: "/images/detox-program.jpg",
    category: "nutrition",
    slug: "detox-program",
  },
];
