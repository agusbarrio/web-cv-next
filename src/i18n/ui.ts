import { Locale } from "@/i18n/locales";

type UiDictionary = {
  navAbout: string;
  navExperience: string;
  navProjects: string;
  navSkills: string;
  navEducation: string;
  navContact: string;
  helloIam: string;
  downloadCv: string;
  personalDescription: string;
  personalSpecialization: string;
  letsWorkTogether: string;
  viewMore: string;
  platform: string;
  myProjectsFirst: string;
  myProjectsSecond: string;
  mySkillsFirst: string;
  mySkillsSecond: string;
  myExperienceFirst: string;
  myExperienceSecond: string;
  myEducationFirst: string;
  myEducationSecond: string;
  contactFirst: string;
  contactSecond: string;
  name: string;
  company: string;
  phone: string;
  message: string;
  sendMessage: string;
  messageSentOk: string;
  messageSentError: string;
  project: string;
  responsibilities: string;
  assignedProjects: string;
  technologies: string;
  visitPlatform: string;
};

export const uiByLocale: Record<Locale, UiDictionary> = {
  es: {
    navAbout: "Sobre mi",
    navExperience: "Experiencia",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navEducation: "Educación",
    navContact: "Contacto",
    helloIam: "Hola soy",
    downloadCv: "Descargar CV",
    personalDescription: "Descripción:",
    personalSpecialization: "Especialización:",
    letsWorkTogether: "Trabajemos juntos",
    viewMore: "Ver más",
    platform: "Plataforma",
    myProjectsFirst: "Mis",
    myProjectsSecond: "Proyectos",
    mySkillsFirst: "Mis",
    mySkillsSecond: "Habilidades",
    myExperienceFirst: "Mi",
    myExperienceSecond: "Experiencia",
    myEducationFirst: "Mi",
    myEducationSecond: "Educación",
    contactFirst: "Pongámonos en",
    contactSecond: "Contacto",
    name: "Nombre",
    company: "Empresa",
    phone: "Teléfono",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    messageSentOk: "Mensaje enviado correctamente",
    messageSentError: "Error al enviar el mensaje",
    project: "Proyecto",
    responsibilities: "Responsabilidades",
    assignedProjects: "Proyectos asignados",
    technologies: "Tecnologías",
    visitPlatform: "Visitar plataforma",
  },
  en: {
    navAbout: "About me",
    navExperience: "Experience",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    helloIam: "Hello I am",
    downloadCv: "Download CV",
    personalDescription: "Description:",
    personalSpecialization: "Specialization:",
    letsWorkTogether: "Let's work together",
    viewMore: "See more",
    platform: "Platform",
    myProjectsFirst: "My",
    myProjectsSecond: "Projects",
    mySkillsFirst: "My",
    mySkillsSecond: "Skills",
    myExperienceFirst: "My",
    myExperienceSecond: "Experience",
    myEducationFirst: "My",
    myEducationSecond: "Education",
    contactFirst: "Let's get in",
    contactSecond: "Touch",
    name: "Name",
    company: "Company",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send message",
    messageSentOk: "Message sent successfully",
    messageSentError: "Error sending the message",
    project: "Project",
    responsibilities: "Responsibilities",
    assignedProjects: "Assigned projects",
    technologies: "Technologies",
    visitPlatform: "Visit platform",
  },
  pt: {
    navAbout: "Sobre mim",
    navExperience: "Experiência",
    navProjects: "Projetos",
    navSkills: "Habilidades",
    navEducation: "Educação",
    navContact: "Contato",
    helloIam: "Olá, eu sou",
    downloadCv: "Baixar CV",
    personalDescription: "Descrição:",
    personalSpecialization: "Especialização:",
    letsWorkTogether: "Vamos trabalhar juntos",
    viewMore: "Ver mais",
    platform: "Plataforma",
    myProjectsFirst: "Meus",
    myProjectsSecond: "Projetos",
    mySkillsFirst: "Minhas",
    mySkillsSecond: "Habilidades",
    myExperienceFirst: "Minha",
    myExperienceSecond: "Experiência",
    myEducationFirst: "Minha",
    myEducationSecond: "Educação",
    contactFirst: "Vamos entrar em",
    contactSecond: "Contato",
    name: "Nome",
    company: "Empresa",
    phone: "Telefone",
    message: "Mensagem",
    sendMessage: "Enviar mensagem",
    messageSentOk: "Mensagem enviada com sucesso",
    messageSentError: "Erro ao enviar a mensagem",
    project: "Projeto",
    responsibilities: "Responsabilidades",
    assignedProjects: "Projetos atribuídos",
    technologies: "Tecnologias",
    visitPlatform: "Visitar plataforma",
  },
};

