import { cn } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import ProjectCard from "./ProjectCard";

export default function Projects({
  projects,
  className,
}: {
  projects: ProjectType[];
  className?: string;
}) {
  const personalProjects = projects.filter(
    (project) => project.type === "PERSONAL"
  );
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle firstLine="MIS" secondLine="PROYECTOS" />
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,26rem)] gap-8">
        {personalProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="w-full md:w-auto h-104"
          />
        ))}
      </div>
    </div>
  );
}
