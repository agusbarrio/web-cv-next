import { cn } from "@/lib/utils";
import PageTitle from "../ui/PageTitle";
import SkillType from "@/data/types/skill";
import { Card } from "../ui/card";
import CategoryType from "@/data/types/category";
import SiIcon from "../ui/siIcon";
import LucideIcon from "../ui/lucideIcon";
import { map } from "lodash";
import Image from "next/image";
import CustomIcon from "../ui/customIcon";
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
        {map(skillsByCategory, (categorySkills, category) => (
          <Card key={category} className="flex flex-col gap-4 px-10 py-6">
            <h4 className="text-white font-bold text-2xl font-inter ">
              {categories.find((c) => c.id === category)?.name}
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
        ))}
      </div>
    </div>
  );
}
