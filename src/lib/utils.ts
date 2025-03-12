import ProjectType from "@/data/types/project";
import SkillType from "@/data/types/skill";
import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateString({
  startDate,
  endDate,
  format = "MM/YYYY",
}: {
  startDate: string;
  endDate?: string;
  format?: string;
}) {
  const start = moment(startDate);
  const end = endDate ? moment(endDate) : undefined;

  return `${start.format(format)} - ${end ? end.format(format) : "Actualidad"}`;
}

export function getSkillsByProject(
  project: ProjectType,
  allSkills: SkillType[]
) {
  return project.technologies?.map((technology) => {
    const skill = allSkills.find((skill) => skill.id === technology);
    return skill;
  });
}
