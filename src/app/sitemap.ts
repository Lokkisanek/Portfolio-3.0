import type { MetadataRoute } from "next";
import { portfolioMeta } from "@/data/portfolio";
import { serviceIds, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(portfolioMeta.lastUpdated);

  const servicePages = serviceIds.map((id) => ({
    url: `${siteUrl}/sluzby/${id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sluzby`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePages,
  ];
}
