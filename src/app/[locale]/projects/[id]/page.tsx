import _ from "lodash";
import Header from "@/components/ui/Header";
import ProjectData from "@/components/dataDisplay/ProjectData";
import { notFound } from "next/navigation";
import getCurriculum from "@/services/getCurriculum";
import { isLocale } from "@/i18n/locales";

type PageParams = {
  locale: string;
  id: string;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const { projects } = await getCurriculum(params.locale);
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const { projects, skills } = await getCurriculum(locale);
  const project = projects.find((project) => project.id === id);

  if (!project || _.isEmpty(project)) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header locale={locale} />
      <main className="px-12 flex flex-col md:flex-row md:gap-4 p-8">
        <section id="project" className="pt-24 md:ml-12">
          <ProjectData project={project} allSkills={skills} />
        </section>
      </main>
    </div>
  );
}
