import { cn, getDateString } from "@/lib/utils";
import ExperienceType from "@/data/types/experience";
import ProjectType from "@/data/types/project";
import ProjectCard from "./ProjectCard";
import { isEmpty } from "lodash";

export default function ExperienceData({
  experience,
  projects,
  className,
}: {
  experience: ExperienceType;
  projects: ProjectType[];
  className?: string;
}) {
  const assignedProjects = projects.filter((project) =>
    experience.projects.includes(project.id)
  );
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-2xl font-bold font-inter text-white">
        {experience.company?.toUpperCase()}
      </h3>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-inter text-white font-bold">
          {experience.position?.toUpperCase()}
        </p>
        <p className="text-sm font-inter text-white">
          {getDateString({
            startDate: experience.startDate,
            endDate: experience.endDate,
          })?.toUpperCase()}
        </p>
      </div>
      <p className="text-sm font-inter text-card-foreground">
        {experience.description}
      </p>
      {!isEmpty(experience.responsibilities) && (
        <>
          <h4 className="text-sm font-inter text-white font-bold">
            RESPONSABILIDADES
          </h4>
          <p className="text-sm font-inter text-card-foreground">
            {experience.responsibilities?.join("\n\n")}
          </p>
        </>
      )}
      <h4 className="text-sm font-inter text-white font-bold">
        PROYECTOS ASIGNADOS
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,26rem)] gap-8">
        {assignedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="w-full md:w-104 h-104"
          />
        ))}
      </div>
    </div>
  );
}
