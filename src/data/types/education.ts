export default interface EducationType {
  id: string;
  institution: string;
  program: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: "UNIVERSITY" | "COURSE";
}
