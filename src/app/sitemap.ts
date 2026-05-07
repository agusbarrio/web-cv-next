//generar sitemap que contempla la pagina principal y las paginas de los proyectos

import getCurriculum from "@/services/getCurriculum";
import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/i18n/locales";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const changeFrequency = "weekly" as const;

  const pages = (
    await Promise.all(
      SUPPORTED_LOCALES.map(async (locale) => {
        const curriculum = await getCurriculum(locale);
        return [
          {
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency,
            priority: 1,
          },
          ...curriculum.projects.map((project) => ({
            url: `${baseUrl}/${locale}/projects/${project.id}`,
            lastModified: new Date(),
            changeFrequency,
            priority: 0.8,
          })),
        ];
      }),
    )
  ).flat();

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
    ...pages,
  ];
}
