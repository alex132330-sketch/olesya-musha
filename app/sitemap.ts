import type { MetadataRoute } from "next";
import { oils } from "@/data/oils";

const BASE = "https://olesya-musha.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/oils`, priority: 0.9, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/gift`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/reviews`, priority: 0.8, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/discussions`, priority: 0.7, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/videos`, priority: 0.7, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/clips`, priority: 0.7, changeFrequency: "weekly", lastModified: now },
    { url: `${BASE}/telegram`, priority: 0.6, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/contacts`, priority: 0.6, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly", lastModified: now },
  ];

  const oilPages: MetadataRoute.Sitemap = oils.map((oil) => ({
    url: `${BASE}/oils/${oil.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...oilPages];
}
