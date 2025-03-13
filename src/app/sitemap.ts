//generar sitemap que contempla la pagina principal y las paginas de los proyectos

import getCurriculum from "@/services/getCurriculum";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const curriculum = await getCurriculum();
  const projects = curriculum.projects;
  const changeFrequency = "weekly" as const;
  const pages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    })),
  ];
  return pages;
}
