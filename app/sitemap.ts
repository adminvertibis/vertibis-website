import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vertibis.com";
  const now = new Date();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/for-cas", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/for-msmes", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/for-lenders", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/for-enterprises", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/for-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/resources", priority: 0.75, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.35, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.35, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
