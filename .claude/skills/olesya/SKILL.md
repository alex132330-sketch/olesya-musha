---
description: Работа с сайтом "Твой нутрициолог Олеся Муша" — запуск, правки, проверка ошибок, деплой
---

# Сайт "Твой нутрициолог Олеся Муша"

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui.  
Продакшн-домен: `https://olesya-musha.ru`

---

## Структура проекта

```
app/                  — страницы App Router (каждая папка = маршрут)
  actions/            — Server Actions (contact.ts → Telegram Bot API)
  globals.css         — CSS-переменные Tailwind v4, цветовая палитра, шрифты
  layout.tsx          — корневой layout: Header, Footer, MobileBottomNav, Toaster
  page.tsx            — главная страница

components/
  layout/             — Header, Footer, MobileBottomNav
  home/               — HeroSection, AboutSection, ProfileSection, TilesSection
  oils/               — OilCard, OilsCatalog, AddToCartButton
  services/           — ServiceCards, BookingModal, HowItWorks
  reviews/            — ReviewCard, ReviewForm
  discussions/        — FaqSection, QuestionForm
  gift/               — GiftLeadForm
  ui/                 — shadcn/ui компоненты (не трогать вручную — генерируются через shadcn)

data/                 — статические данные (TypeScript-массивы)
  products.ts         — устаревший тип Product, используется только для services
  reviews.ts          — отзывы клиентов
  videos.ts           — видеоматериалы

lib/
  store.ts            — Zustand-корзина (useCartStore), persist в localStorage под ключом "olesya-cart"
  telegram.ts         — утилита отправки заявок через Bot API (sendBookingToTelegram)
  utils.ts            — cn() (classnames)

types/index.ts        — все TypeScript-типы: CartProduct, CartItem, Oil, OilCategory, OilScent, ConsultationForm
public/images/        — все изображения сайта
```

### Маршруты

| Маршрут          | Страница                      |
|------------------|-------------------------------|
| `/`              | Главная                       |
| `/services`      | Услуги + бронирование         |
| `/oils`          | Каталог масел                 |
| `/oils/[id]`     | Страница масла                |
| `/cart`          | Корзина                       |
| `/checkout`      | Оформление заказа             |
| `/reviews`       | Отзывы + форма                |
| `/discussions`   | FAQ + форма вопроса           |
| `/videos`        | Видео                         |
| `/clips`         | Клипы                         |
| `/about`         | О нутрициологе                |
| `/gift`          | Подарочный сертификат         |
| `/contacts`      | Контакты                      |
| `/telegram`      | Telegram-канал                |
| `/privacy-policy`| Политика конфиденциальности   |

---

## Цветовая палитра (Tailwind v4)

Токены определены в `app/globals.css` → `@theme inline`:

| Класс Tailwind         | HEX       | Применение        |
|------------------------|-----------|-------------------|
| `bg-cream` / `text-cream`         | `#FAF7F2` | Основной фон      |
| `bg-terracotta` / `text-terracotta` | `#C67B5C` | Акценты, CTA      |
| `bg-beige` / `text-beige`         | `#E8D5C4` | Вторичные секции  |
| `bg-dark-brown` / `text-dark-brown` | `#2C1810` | Основной текст    |

Шрифты: `font-heading` (Playfair Display) — заголовки, `font-sans` (Inter) — текст.

---

## Запуск

```bash
npm run dev      # http://localhost:3000  (Turbopack, hot reload)
npm run build    # продакшн-сборка
npm run start    # запуск собранного приложения
npm run lint     # ESLint
```

**Переменные окружения** (`.env`):

| Переменная                  | Назначение                             | Обязательна для dev? |
|-----------------------------|----------------------------------------|----------------------|
| `TELEGRAM_BOT_TOKEN`        | Токен бота для заявок (`/contacts`)    | Нет (форма упадёт)   |
| `TELEGRAM_CHAT_ID`          | ID чата нутрициолога                   | Нет                  |
| `NEXT_PUBLIC_SUPABASE_URL`  | Supabase (пока не подключён)           | Нет                  |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase                           | Нет                  |
| `NEXT_PUBLIC_SITE_URL`      | Публичный URL (sitemap, метатеги)      | Нет                  |

**Telegram-интеграция**: оба модуля активны и отправляют реальные сообщения.  
`app/actions/contact.ts` — Server Action для формы `/contacts`.  
`lib/telegram.ts` — используется `BookingModal` для формы записи на услугу.  
Оба читают токены из `.env`: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

---

## Как вносить изменения

### Добавить новую страницу
1. Создать `app/<route>/page.tsx` со стандартным экспортом `export default function Page()`.
2. Добавить `export const metadata: Metadata = { title: "...", description: "..." }` в начало файла.
3. Добавить ссылку в `components/layout/Header.tsx` и `components/layout/MobileBottomNav.tsx`.

### Добавить новый раздел на главной
Секции главной в `components/home/`, импортируются в `app/page.tsx`.

### Добавить новое масло в каталог
Данные масел хранятся в `data/` (уточни файл при работе с каталогом, т.к. данные могут быть в отдельном файле).  
Тип `Oil` из `types/index.ts`: поля `id`, `slug`, `name`, `description`, `fullDescription`, `composition`, `usage[]`, `volume`, `price`, `categories[]`, `scent`, `image`, `benefits[]`.

### Добавить shadcn-компонент
```bash
npx shadcn add <component-name>
```
Компонент появится в `components/ui/`.

### Изменить тексты/контент
- Статический контент обычно жёстко зашит в компонентах или в `data/`.
- Метаданные страниц (title, description) — в каждом `page.tsx`.

---

## Проверка ошибок

```bash
# TypeScript — проверка типов без сборки
npx tsc --noEmit

# ESLint
npm run lint

# Полная сборка (покажет все ошибки Next.js)
npm run build
```

**Типичные проблемы:**
- Tailwind v4 не использует `tailwind.config.js` — вся конфигурация в `app/globals.css`.
- shadcn/ui v4 устанавливается через `npx shadcn add`, не `npx shadcn-ui add`.
- `"use client"` обязателен для компонентов с хуками (`useState`, `useEffect`, `useCartStore`).
- Server Actions (`app/actions/*.ts`) должны начинаться с `"use server"`.
- Корзина (`useCartStore`) работает только на клиенте — не использовать в Server Components.

---

## Обновление README

`README.md` в корне проекта. Разделы:
1. Для кого сайт
2. Функциональность (таблица маршрутов)
3. Технологический стек (таблица)
4. Дизайн-система (цвета и шрифты)
5. Структура проекта (дерево папок)
6. Быстрый старт
7. Переменные окружения (таблица)
8. Команды (таблица)
9. Деплой на Vercel
10. Лицензия

При добавлении новых маршрутов — обновлять таблицу в разделе «Функциональность».  
При изменении env-переменных — обновлять таблицу в «Переменные окружения».

---

## Подготовка к публикации (Vercel)

### Предеплойный чеклист

```bash
# 1. Проверка типов
npx tsc --noEmit

# 2. Линтер
npm run lint

# 3. Пробная сборка
npm run build
```

Сборка **должна пройти без ошибок**. Предупреждения (warnings) допустимы.

### Переменные окружения на Vercel

В Vercel Dashboard → Settings → Environment Variables добавить:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `NEXT_PUBLIC_SITE_URL` = `https://olesya-musha.ru`

`NEXT_PUBLIC_SUPABASE_URL` и `NEXT_PUBLIC_SUPABASE_ANON_KEY` — добавить когда Supabase будет подключён.

### Telegram-интеграция

Оба модуля уже активны. Перед деплоем убедиться, что переменные `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` добавлены в Vercel → Settings → Environment Variables.

### Деплой

```
GitHub → Vercel → Add New Project → выбрать репозиторий → добавить env → Deploy
```

Каждый пуш в `master` автоматически триггерит новый деплой.

---

## Известные точки внимания

- **`lib/telegram.ts`** — Telegram-интеграция активна, отправляет реальные сообщения через Bot API. Токены `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` берутся из `.env`.
- **`data/products.ts`** — использует устаревший тип `Product`, нужен только для раздела services.
- **Изображения масел** — все хранятся в `public/images/`. При добавлении новых масел класть туда же.
- **`/checkout`** — страница есть, но логика оплаты не реализована.
- **Supabase** — в env.example есть, но нигде не используется. Планируется для хранения отзывов/вопросов.
