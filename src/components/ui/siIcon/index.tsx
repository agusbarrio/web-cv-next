import React from "react";
import * as SiIcons from "@icons-pack/react-simple-icons";

export default function SiIcon({
  icon,
  ...props
}: {
  icon?: keyof typeof SiIcons;
} & React.SVGProps<SVGSVGElement>) {
  if (!icon) {
    return <></>;
  }
  const Icon = SiIcons[icon];
  if (!Icon) {
    return <></>;
  }
  return React.createElement(Icon, props);
}
