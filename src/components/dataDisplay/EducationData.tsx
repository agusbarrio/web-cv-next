import { cn, getDateString } from "@/lib/utils";
import EducationType from "@/data/types/education";

export default function EducationData({
  education,
  className,
}: {
  education: EducationType;
  className?: string;
}) {
  /* titulo */
  /* institucion */
  /* fecha */
  /* descripcion */
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-2xl font-bold font-inter text-white">
        {education.program?.toUpperCase()}
      </h3>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-inter text-white font-bold">
          {education.institution?.toUpperCase()}
        </p>
        <p className="text-sm font-inter text-white">
          {getDateString({
            startDate: education.startDate,
            endDate: education.endDate,
          })?.toUpperCase()}
        </p>
      </div>
      <p className="text-sm font-inter text-card-foreground">
        {education.description?.toUpperCase()}
      </p>
    </div>
  );
}
