import { ImageProps } from "next/image";

export default interface SkillType {
  id: string;
  name: string;
  image?: ImageProps["src"];
  category: string;
  /** Icon name as in `@icons-pack/react-simple-icons` (e.g. `SiReact` or `siReact` from JSON). */
  simpleIcon?: string;
  /** Lucide icon component name (e.g. `Microchip`). */
  lucideIcon?: string;
}
