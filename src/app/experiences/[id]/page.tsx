import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import getCurriculum from "@/services/getCurriculum";
import _ from "lodash";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default async function ExperiencePage({
  params,
}: {
  params: { id: string };
}) {
  const { experiences, projects, skills } = await getCurriculum();

  const experience = experiences.find(
    (experience) => experience.id === params.id
  );

  console.log(experience);
  console.log(experience?.url);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 pt-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 border-b border-black">
              {experience.logo && (
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <CardTitle className="text-2xl text-black">
                  {experience.company}
                </CardTitle>
                <p className="text-black">{experience.position}</p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-black mb-4">{`${
                experience.startDate
              } - ${experience.endDate || "Actualidad"}`}</p>
              <p className="text-black mb-6">{experience.description}</p>

              {!_.isEmpty(experience.responsibilities) && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Responsabilidades
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="text-gblack">
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {!_.isEmpty(experience.technologies) && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Tecnologías
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-black border-black/30"
                      >
                        {skills.find((skill) => skill.id === tech)?.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {!_.isEmpty(experience.projects) && (
                <>
                  <h3 className="text-lg font-semibold text-black">
                    Proyectos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.projects.map((projectId) => {
                      const project = projects.find(
                        (project) => project.id === projectId
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
                                    skills.find((skill) => skill.id === tech)
                                      ?.name
                                  }
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Link
                              href={`/projects/${project.id}`}
                              className="mt-4 block"
                            >
                              <Button
                                variant="outline"
                                size="sm"
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

            <CardFooter className="flex justify-end">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                >
                  Visitar empresa
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
