export default interface ExperienceType {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  projects: string[];
  url?: string;
  technologies: string[];
  responsibilities: string[];
  logo?: string;
}
