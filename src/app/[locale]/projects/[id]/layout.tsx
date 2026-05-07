import getCurriculum from "@/services/getCurriculum";
import { isLocale } from "@/i18n/locales";
import { notFound } from "next/navigation";

type LayoutParams = {
  locale: string;
  id: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const curriculum = await getCurriculum(locale);
  const project = curriculum.projects.find((project) => project.id === id);

  return {
    title: `Proyecto - ${project?.name}`,
    description: project?.description,
    icons: {
      icon: curriculum.page.logo,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
