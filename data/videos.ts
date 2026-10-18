export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  date: string;
  thumbnail: string;
  youtubeId: string;
  tag: string;
}

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Как начать правильно питаться без стресса и диет",
    duration: "14:32",
    date: "15 сентября 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "xoN3D4lXPfQ",
    tag: "Питание",
  },
  {
    id: "2",
    title: "Топ-5 эфирных масел для укрепления иммунитета",
    duration: "18:45",
    date: "2 сентября 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "Wz7PIf6vXjQ",
    tag: "Масла",
  },
  {
    id: "3",
    title: "Разбор состава: что скрывается в популярных продуктах",
    duration: "22:17",
    date: "20 августа 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "hY7m5jjJ9mM",
    tag: "Разборы",
  },
  {
    id: "4",
    title: "Лаванда: всё об эфирном масле для сна и расслабления",
    duration: "16:08",
    date: "10 августа 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "9XkgD4rXnAk",
    tag: "Масла",
  },
  {
    id: "5",
    title: "Как составить сбалансированное меню на неделю",
    duration: "26:50",
    date: "28 июля 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "8SoeCbsZkbg",
    tag: "Питание",
  },
  {
    id: "6",
    title: "Детокс — это миф или правда?",
    duration: "19:23",
    date: "15 июля 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&q=80&auto=format&fit=crop",
    youtubeId: "QH2-TGUlwu4",
    tag: "Здоровье",
  },
];
