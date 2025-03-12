import * as SiIcons from "@icons-pack/react-simple-icons";
import * as LucideIcons from "lucide-react";
export default interface SkillType {
  id: string;
  name: string;
  image?: string;
  category: string;
  simpleIcon?: keyof typeof SiIcons;
  lucideIcon?: keyof typeof LucideIcons;
}
