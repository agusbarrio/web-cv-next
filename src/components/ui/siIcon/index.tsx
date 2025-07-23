import React from "react";
import * as SiIcons from "@icons-pack/react-simple-icons";

export type SiIconProps = {
  icon?: keyof typeof SiIcons;
} & React.SVGProps<SVGSVGElement>;

export default function SiIcon({ icon, ...props }: SiIconProps) {
  if (!icon) {
    return <></>;
  }
  const Icon = SiIcons[icon];
  if (!Icon) {
    return <></>;
  }
  return React.createElement(Icon, props);
}
