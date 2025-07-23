import React from "react";
import * as LucideIcons from "lucide-react";

export type LucideIconProps = {
  icon?: keyof typeof LucideIcons;
} & React.SVGProps<SVGSVGElement>;

export default function LucideIcon({ icon, ...props }: LucideIconProps) {
  if (!icon) {
    return <></>;
  }
  const Icon = LucideIcons[icon] as LucideIcons.LucideIcon;
  if (!Icon) {
    return <></>;
  }
  return <Icon {...props} />;
}
