import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${business.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${business.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${business.url}/quote`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${business.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.url}/service-area`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${business.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${business.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
