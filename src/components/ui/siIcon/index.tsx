import React from "react";
import * as SiIcons from "@icons-pack/react-simple-icons";

/** Maps JSON/API keys like `siReact` to package exports `SiReact`. */
function resolveSiIconKey(icon: string): keyof typeof SiIcons | undefined {
  if (!icon) {
    return undefined;
  }
  const candidates: string[] = [icon];
  if (icon.startsWith("si") && icon.length > 2) {
    candidates.push(`Si${icon.slice(2)}`);
  }
  for (const key of candidates) {
    if (!(key in SiIcons)) {
      continue;
    }
    const exported = SiIcons[key as keyof typeof SiIcons];
    if (typeof exported === "string") {
      continue;
    }
    return key as keyof typeof SiIcons;
  }
  return undefined;
}

export type SiIconProps = {
  icon?: keyof typeof SiIcons | string;
} & React.SVGProps<SVGSVGElement>;

export default function SiIcon({ icon, ...props }: SiIconProps) {
  if (!icon) {
    return <></>;
  }
  const key =
    typeof icon === "string" ? resolveSiIconKey(icon) : (icon as keyof typeof SiIcons);
  if (!key) {
    return <></>;
  }
  const Icon = SiIcons[key];
  if (!Icon || typeof Icon === "string") {
    return <></>;
  }
  return React.createElement(Icon as React.ElementType, props);
}
