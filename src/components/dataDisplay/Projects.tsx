import { cn } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import ProjectCard from "./ProjectCard";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function Projects({
  projects,
  locale,
  className,
}: {
  projects: ProjectType[];
  locale: Locale;
  className?: string;
}) {
  const t = uiByLocale[locale];
  const personalProjects = projects.filter(
    (project) => project.type === "PERSONAL"
  );
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle
        firstLine={t.myProjectsFirst.toUpperCase()}
        secondLine={t.myProjectsSecond.toUpperCase()}
      />
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,26rem)] gap-8">
        {personalProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            className="w-full md:w-auto h-104"
          />
        ))}
      </div>
    </div>
  );
}
