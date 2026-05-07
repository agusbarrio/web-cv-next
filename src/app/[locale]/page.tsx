import getCurriculum from "@/services/getCurriculum";
import _ from "lodash";
import Header from "@/components/ui/Header";
import HeroVideo from "@/components/ui/HeroVideo";
import PersonalInfoCard from "@/components/dataDisplay/PersonalInfoCard";
import AboutMe from "@/components/dataDisplay/AboutMe";
import Projects from "@/components/dataDisplay/Projects";
import Educations from "@/components/dataDisplay/Educations";
import Experiences from "@/components/dataDisplay/Experiences";
import Skills from "@/components/dataDisplay/Skills";
import Contact from "@/components/dataDisplay/Contact";
import { isLocale, Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  const {
    skills,
    experiences,
    projects,
    skillsByCategory,
    personalInfo,
    educations,
    categories,
    page,
  } = await getCurriculum(locale);

  return (
    <div className="min-h-screen bg-black">
      <Header locale={typedLocale} />
      <HeroVideo page={page} />
      <main className="mb-12 md:mb-0 px-12 flex flex-col md:flex-row md:gap-4">
        <section
          className="pt-24 md:pt-0 w-full md:w-68 md:sticky md:top-0 md:h-screen flex items-center justify-center"
          id="personal-info"
        >
          <PersonalInfoCard
            personalInfo={personalInfo}
            className="w-64"
            locale={typedLocale}
          />
        </section>
        <div>
          <section
            id="about"
            className="pt-24 flex justify-center md:h-screen items-center md:pl-12"
          >
            <AboutMe personalInfo={personalInfo} locale={typedLocale}></AboutMe>
          </section>

          {!_.isEmpty(experiences) && (
            <section id="experience" className="pt-24 md:ml-12">
              <Experiences
                experiences={experiences}
                projects={projects}
                locale={typedLocale}
              ></Experiences>
            </section>
          )}

          {!_.isEmpty(projects) && (
            <section id="projects" className="pt-24 md:ml-12 ">
              <Projects projects={projects} locale={typedLocale}></Projects>
            </section>
          )}

          {!_.isEmpty(skills) && (
            <section id="skills" className="pt-24 md:ml-12">
              <Skills
                skillsByCategory={skillsByCategory}
                categories={categories}
                locale={typedLocale}
              ></Skills>
            </section>
          )}

          {!_.isEmpty(educations) && (
            <section id="education" className="pt-24 md:ml-12">
              <Educations educations={educations} locale={typedLocale}></Educations>
            </section>
          )}

          <section
            id="contact"
            className="pt-24 flex justify-center md:h-screen items-center md:pl-12 md:justify-start"
          >
            <Contact className="w-full" locale={typedLocale}></Contact>
          </section>
        </div>
      </main>
    </div>
  );
}
