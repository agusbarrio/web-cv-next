export type ProjectStatus = "PRODUCTION" | "DEVELOPMENT" | "ARCHIVED";

export default interface ProjectType {
  id: string;
  type: "PERSONAL" | "PROFESSIONAL";
  name: string;
  description: string;
  responsibilities: string[];
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  link: string;
  startDate: string;
  endDate?: string;
  logo?: string;
  image: string;
  imageHover: string;
}
