export interface HobbyType {
  name: string;
  description: string;
}

export default interface PersonalInfoType {
  fullName: string;
  email: string;
  linkedin?: string;
  github?: string;
  location: string;
  nativeLanguage: string;
  englishLevel?: "BASIC" | "INTERMEDIATE" | "ADVANCED";
  birthDate: string;
  hobbies: HobbyType[];
  profession: string;
  description: string;
}
