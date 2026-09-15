import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOUR_PORTFOLIO_DOMAIN",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
