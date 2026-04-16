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
  /** From JSON / CMS (e.g. `"BASIC"`). */
  englishLevel?: string;
  birthDate: string;
  hobbies: HobbyType[];
  profession: string;
  description: string;
  specialization: string;
  shortDescription: string;
  image: string;
  logo: string;
  curriculumFileUrl: string;
}
