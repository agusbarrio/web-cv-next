export default interface SkillType {
  id: string;
  name: string;
  image?: string;
  category:
    | "FRONTEND"
    | "BACKEND"
    | "LANGUAGES"
    | "TOOLS"
    | "CLOUD"
    | "IOT"
    | "DATABASES"
    | "DEVOPS";
  simpleIcon?: React.ElementType;
}
