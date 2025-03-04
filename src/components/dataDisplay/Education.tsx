import { cn } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import ProjectCard from "./ProjectCard";
import EducationType from "@/data/types/education";
import EducationData from "./EducationData";

export default function Educations({
  educations,
  className,
}: {
  educations: EducationType[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle firstLine="MI" secondLine="EDUCACIÓN" />
      <div className="flex flex-col gap-4 max-w-4xl">
        {educations.map((education, index, array) => (
          <>
            <EducationData key={education.id} education={education} />
            {index !== array.length - 1 && (
              <hr className="w-full border-buttonGray my-4" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
