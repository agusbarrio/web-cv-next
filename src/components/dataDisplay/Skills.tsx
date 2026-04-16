import { cn } from "@/lib/utils";
import PageTitle from "../ui/PageTitle";
import SkillType from "@/data/types/skill";
import { Card } from "../ui/card";
import CategoryType from "@/data/types/category";
import SkillIcon from "./SkillIcon";

export default function Skills({
  skillsByCategory,
  className,
  categories,
}: {
  skillsByCategory: Record<string, SkillType[]>;
  categories: CategoryType[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle firstLine="MIS" secondLine="HABILIDADES" />
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,16rem)] gap-8">
        {categories.map((category) => {
          const categorySkills = skillsByCategory[category.id] ?? [];
          if (categorySkills.length === 0) {
            return null;
          }
          return (
            <Card
              key={category.id}
              className="flex flex-col gap-4 px-10 py-6"
            >
              <h4 className="text-white font-bold text-2xl font-inter ">
                {category.name}
              </h4>
              <div className="flex flex-col gap-2">
                {categorySkills.map((skill) => (
                  <div
                    className="flex items-center gap-2"
                    key={skill.id || skill.name}
                  >
                    <SkillIcon skill={skill} />
                    <span className="text-card-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
