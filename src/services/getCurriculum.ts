import CategoryType from "@/data/types/category";
import EducationType from "@/data/types/education";
import ExperienceType from "@/data/types/experience";
import PageType from "@/data/types/page";
import PersonalInfoType from "@/data/types/personalInfo";
import ProjectType from "@/data/types/project";
import SkillType from "@/data/types/skill";
import dbJson from "@/cvData/db.json";

export default async function getCurriculum() {
  const curriculum = dbJson;
  const categories: CategoryType[] = curriculum.categories;
  const skills: SkillType[] = curriculum.skills;
  const experiences: ExperienceType[] = curriculum.experiences;
  const projects: ProjectType[] = curriculum.projects;
  const educations: EducationType[] = curriculum.educations;
  const personalInfo: PersonalInfoType = {
    ...curriculum.personalInfo,
    hobbies: curriculum.hobbies,
  };
  const page: PageType = curriculum.page;
  const skillsByCategory = skills.reduce<Record<string, SkillType[]>>(
    (acc, skill) => {
      acc[skill.category] = [...(acc[skill.category] || []), skill];
      return acc;
    },
    {},
  );

  return {
    educations,
    personalInfo,
    skills,
    skillsByCategory,
    experiences,
    projects,
    categories,
    page,
  };
}
