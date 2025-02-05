import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SiGithub, SiLinkedin, SiGmail } from "@icons-pack/react-simple-icons";
import SkillType from "@/data/types/skill";
import { texts } from "../constants/texts";

import * as reactSimpleIcons from "@icons-pack/react-simple-icons";
import * as lucideIcons from "lucide-react";
import { createElement, useState } from "react";
import getCurriculum from "@/services/getCurriculum";
import _ from "lodash";
import Header from "@/components/ui/Header";
import HeroVideo from "@/components/ui/HeroVideo";
import Footer from "@/components/Footer";

function SkillIcon({ skill }: { skill: SkillType }) {
  if (skill.simpleIcon) {
    const simpleIconName = skill.simpleIcon as keyof typeof reactSimpleIcons;
    const lucideIconName = skill.simpleIcon as keyof typeof lucideIcons;

    if (simpleIconName in reactSimpleIcons) {
      const Icon = reactSimpleIcons[simpleIconName] as React.ComponentType<any>;
      return createElement(Icon);
    }

    if (lucideIconName in lucideIcons) {
      const Icon = lucideIcons[lucideIconName] as React.ComponentType<any>;
      return createElement(Icon);
    }
  }
  return null;
}

export default async function Home() {
  const {
    skills,
    experiences,
    projects,
    skillsByCategory,
    personalInfo,
    educations,
  } = await getCurriculum();

  return (
    <div className="min-h-screen bg-black">
      {/*  312c8f to 00c4cc*/}
      <Header />
      <HeroVideo />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Profile Section */}
        <section className="pt-20" id="about">
          <Card className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/yo.jpg"
                  alt={personalInfo.fullName}
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-black"
                />
                <div>
                  <h2 className="text-3xl font-bold text-black">
                    {personalInfo.fullName}
                  </h2>
                  <p className="text-xl text-black">
                    {personalInfo.profession}
                  </p>
                  <p className="mt-2 max-w-2xl text-black">
                    {personalInfo.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    {personalInfo.github && (
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                        >
                          <SiGithub className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                    )}
                    {personalInfo.linkedin && (
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                        >
                          <SiLinkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                    )}
                    <a href={`mailto:${personalInfo.email}`}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                      >
                        <SiGmail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        {!_.isEmpty(experiences) && (
          <section className="pt-20" id="experience">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Experiencia Profesional
            </h2>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <Card
                  key={experience.id}
                  className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg "
                >
                  <CardHeader>
                    <CardTitle className="text-black">
                      {experience.company}
                    </CardTitle>
                    <CardDescription className="text-black">
                      {experience.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">
                      {`${experience.startDate} - ${
                        experience.endDate || "Actualidad"
                      }`}
                    </p>
                    {!_.isEmpty(experience.projects) && (
                      <>
                        <h3 className="text-lg font-semibold text-black mt-4">
                          Proyectos
                        </h3>
                        <br />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {experience.projects.map((projectId) => {
                            const project = projects.find(
                              (p) => p.id === projectId
                            );
                            if (!project) return null;
                            return (
                              <Card
                                key={projectId}
                                className="bg-white/10 backdrop-blur-sm flex flex-col border-black/30 border"
                              >
                                <CardHeader>
                                  <CardTitle className="text-lg font-semibold text-black">
                                    {project.name}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                  <CardDescription className="text-sm text-black">
                                    {project.description}
                                  </CardDescription>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech) => (
                                      <Badge
                                        key={tech}
                                        variant="outline"
                                        className="text-black border-black/30"
                                      >
                                        {
                                          skills.find(
                                            (skill) => skill.id === tech
                                          )?.name
                                        }
                                      </Badge>
                                    ))}
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Link href={`/projects/${project.id}`}>
                                    <Button
                                      variant="outline"
                                      className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                                    >
                                      Ver Detalles
                                    </Button>
                                  </Link>
                                </CardFooter>
                              </Card>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Link href={`/experiences/${experience.id}`}>
                      <Button
                        variant="outline"
                        className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                      >
                        Ver Detalles
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {!_.isEmpty(projects) && (
          <section className="pt-20" id="projects">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Proyectos Personales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((project) => project.type === "PERSONAL")
                .map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="text-black">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-black">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-black border-black/30"
                          >
                            {skills.find((skill) => skill.id === tech)?.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          variant="outline"
                          className="text-black border-black/30 bg-transparent hover:bg-black/10"
                        >
                          Ver Detalles
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {!_.isEmpty(skills) && (
          <section className="pt-20" id="skills">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Habilidades Técnicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <Card
                  key={category}
                  className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="capitalize text-black">
                      {
                        texts.skills.categories[
                          category as keyof typeof texts.skills.categories
                        ]
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill.id}
                          variant="secondary"
                          className="bg-transparent text-black flex items-center gap-2 border-black/30 hover:bg-black/10"
                        >
                          <SkillIcon skill={skill}></SkillIcon>
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {!_.isEmpty(educations) && (
          <section className="pt-20" id="education">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Educación</h2>

            <div className="space-y-8">
              {educations.map((education) => (
                <Card
                  key={education.id}
                  className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-black">
                      {education.program}
                    </CardTitle>
                    <CardDescription className="text-black">
                      {education.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-black">
                      {`${education.startDate} - ${
                        education.endDate || "Actualidad"
                      }`}
                    </CardDescription>
                    <CardDescription className="text-black">
                      {education.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="pt-20" id="contact">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Contactame</h2>
          <Card className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-black"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      className="bg-transparent border-black/30 text-black placeholder:text-black focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      className="bg-transparent border-black/30 text-black placeholder:text-black focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-black"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tu mensaje"
                    rows={4}
                    className="bg-transparent border-black/30 text-black placeholder:text-black focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
