import React from "react";
import * as LucideIcons from "lucide-react";

export type LucideIconProps = {
  icon?: keyof typeof LucideIcons | string;
} & React.SVGProps<SVGSVGElement>;

export default function LucideIcon({ icon, ...props }: LucideIconProps) {
  if (!icon) {
    return <></>;
  }
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as
    | LucideIcons.LucideIcon
    | undefined;
  if (!Icon) {
    return <></>;
  }
  return <Icon {...props} />;
}
