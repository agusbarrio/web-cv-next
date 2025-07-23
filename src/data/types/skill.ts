import * as SiIcons from "@icons-pack/react-simple-icons";
import * as LucideIcons from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageProps } from "next/image";

export default interface SkillType {
  id: string;
  name: string;
  image?: ImageProps["src"];
  category: string;
  simpleIcon?: keyof typeof SiIcons;
  lucideIcon?: keyof typeof LucideIcons;
}
