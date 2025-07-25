import React from "react";
import CustomIcon from "../ui/customIcon";
import SkillType from "@/data/types/skill";

export default function SkillIcon({ skill }: { skill: SkillType }) {
  return (
    <CustomIcon
      simpleIconProps={
        skill?.simpleIcon
          ? {
              icon: skill?.simpleIcon,
              className: "text-card-foreground",
            }
          : undefined
      }
      lucideIconProps={
        skill?.lucideIcon
          ? {
              icon: skill?.lucideIcon,
              className: "text-card-foreground",
            }
          : undefined
      }
      imageProps={
        skill?.image
          ? {
              src: skill.image,
              alt: skill.name,
            }
          : undefined
      }
    />
  );
}
