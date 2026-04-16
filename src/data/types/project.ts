export type ProjectStatus = "PRODUCTION" | "DEVELOPMENT" | "ARCHIVED";

export default interface ProjectType {
  id: string;
  /** From JSON / CMS; compare to literals at runtime (e.g. `"PERSONAL"`). */
  type: string;
  name: string;
  description: string;
  responsibilities: string[];
  /** From JSON / CMS (e.g. `"PRODUCTION"`). */
  status: string;
  technologies: string[];
  features?: string[];
  link: string;
  startDate: string;
  endDate?: string;
  logo?: string;
  image: string;
  imageHover: string;
  imagePlatform: string;
}
