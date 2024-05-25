import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://twccom.co",
      lastModified: new Date().toISOString(),
    },
  ];
}
