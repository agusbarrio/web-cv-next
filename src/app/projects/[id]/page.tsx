import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import getCurriculum from "@/services/getCurriculum";
import { ProjectStatus } from "@/data/types/project";
import _ from "lodash";
import Header from "@/components/ui/Header";

const getStatusText = (status: ProjectStatus) => {
  switch (status) {
    case "PRODUCTION":
      return "Producción";
    case "DEVELOPMENT":
      return "Desarrollo";
    case "ARCHIVED":
      return "Archivado";
  }
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { projects } = await getCurriculum();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { projects, skills } = await getCurriculum();
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 pt-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-blue-800 to-sky-400 shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 border-b border-black">
              {project.logo && (
                <Image
                  src="/yo.jpg"
                  alt={project.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <CardTitle className="text-2xl text-black">
                {project.name}
              </CardTitle>
              <Badge
                variant="secondary"
                className="bg-transparent text-black border border-black"
              >
                {getStatusText(project.status)}
              </Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-black mb-6">
                {project.startDate} - {project.endDate ?? "Actualidad"}
              </p>
              <p className="text-black mb-6">{project.description}</p>
              {!_.isEmpty(project.features) && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Características
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-black">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!_.isEmpty(project.technologies) && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Tecnologías
                  </h3>
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
                </div>
              )}
              {!_.isEmpty(project.responsibilities) && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Responsabilidades
                  </h3>
                  {project.responsibilities.map((responsibility, index) => (
                    <p key={index} className="text-black">
                      {responsibility}
                    </p>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-black border-black/30 hover:bg-black/10 bg-transparent"
                >
                  Visitar proyecto
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
