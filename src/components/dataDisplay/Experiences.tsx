import { cn } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import ExperienceType from "@/data/types/experience";
import ExperienceData from "./ExperienceData";
import { Fragment } from "react";

export default function Experiences({
  experiences,
  projects,
  className,
}: {
  experiences: ExperienceType[];
  projects: ProjectType[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle firstLine="MI" secondLine="EXPERIENCIA" />
      <div className="flex flex-col gap-4 max-w-4xl">
        {experiences.map((experience, index, array) => (
          <Fragment key={experience.id}>
            <ExperienceData
              experience={experience}
              projects={projects}
              className="w-full"
            />
            {index !== array.length - 1 && (
              <hr className="w-full border-buttonGray my-4" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
