import mongoose, { Schema, Types } from "mongoose";

export const ProjectSchema = new Schema({
  id: String,
  type: String,
  name: String,
  description: String,
  responsibilities: [String],
  status: String,
  technologies: [String],
  link: String,
  startDate: String,
  endDate: String,
  features: [String],
  image: String,
  imageHover: String,
});

export const ExperienceSchema = new Schema({
  company: String,
  position: String,
  startDate: String,
  description: String,
  projects: [String],
  id: String,
  technologies: [String],
  responsibilities: [String],
  url: String,
  logo: String,
});

export const PersonalInfoSchema = new Schema({
  fullName: String,
  email: String,
  location: String,
  nativeLanguage: String,
  englishLevel: String,
  linkedin: String,
  github: String,
  birthDate: String,
  profession: String,
  description: String,
  specialization: String,
  shortDescription: String,
});

export const EducationSchema = new Schema({
  id: String,
  institution: String,
  program: String,
  description: String,
  startDate: String,
  endDate: String,
  organization: String,
  type: String,
});

export const SkillSchema = new Schema({
  id: String,
  name: String,
  image: String,
  simpleIcon: String,
  category: String,
});

export const HobbieSchema = new Schema({
  name: String,
  description: String,
});

export const CurriculumSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: Types.ObjectId,
  },
  personalInfo: PersonalInfoSchema,
  hobbies: [HobbieSchema],
  experiences: [ExperienceSchema],
  projects: [ProjectSchema],
  educations: [EducationSchema],
  skills: [SkillSchema],
});

//model
export const CurriculumModel =
  mongoose.models.Curriculum || mongoose.model("Curriculum", CurriculumSchema);
