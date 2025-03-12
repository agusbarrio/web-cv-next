import React from "react";
import * as LucideIcons from "lucide-react";

export default function SiIcon({
  icon,
  ...props
}: {
  icon?: keyof typeof LucideIcons;
} & React.SVGProps<SVGSVGElement>) {
  if (!icon) {
    return <></>;
  }
  const Icon = LucideIcons[icon] as LucideIcons.LucideIcon;
  if (!Icon) {
    return <></>;
  }
  return <Icon {...props} />;
}
