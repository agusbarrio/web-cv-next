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

export const dynamic = "force-static";

export default async function Home() {
  const {
    skills,
    experiences,
    projects,
    skillsByCategory,
    personalInfo,
    educations,
    categories,
    page,
  } = await getCurriculum();

  return (
    <div className="min-h-screen bg-black">
      {/*  312c8f to 00c4cc*/}
      <Header />
      <HeroVideo page={page} />
      <main className="mb-12 md:mb-0 px-12 flex flex-col md:flex-row md:gap-4">
        <section
          className="pt-24 md:pt-0 w-full md:w-68 md:sticky md:top-0 md:h-screen flex items-center justify-center"
          id="personal-info"
        >
          <PersonalInfoCard personalInfo={personalInfo} className="w-64" />
        </section>
        {/* Profile Section */}
        <div>
          <section
            id="about"
            className="pt-24 flex justify-center md:h-screen items-center md:pl-12"
          >
            <AboutMe personalInfo={personalInfo}></AboutMe>
          </section>

          {/* Experience Section */}
          {!_.isEmpty(experiences) && (
            <section id="experience" className="pt-24 md:ml-12">
              <Experiences
                experiences={experiences}
                projects={projects}
              ></Experiences>
            </section>
          )}

          {/* Projects Section */}
          {!_.isEmpty(projects) && (
            <section id="projects" className="pt-24 md:ml-12 ">
              <Projects projects={projects}></Projects>
            </section>
          )}

          {/* Skills Section */}
          {!_.isEmpty(skills) && (
            <section id="skills" className="pt-24 md:ml-12">
              <Skills
                skillsByCategory={skillsByCategory}
                categories={categories}
              ></Skills>
            </section>
          )}

          {/* Education Section */}
          {!_.isEmpty(educations) && (
            <section id="education" className="pt-24 md:ml-12">
              <Educations educations={educations}></Educations>
            </section>
          )}

          {/* Contact Section */}
          <section
            id="contact"
            className="pt-24 flex justify-center md:h-screen items-center md:pl-12 md:justify-start"
          >
            <Contact className="w-full"></Contact>
          </section>
        </div>
      </main>
    </div>
  );
}
