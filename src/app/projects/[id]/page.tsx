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
import ProjectData from "@/components/dataDisplay/ProjectData";
import { notFound } from "next/navigation";

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
export const dynamicParams = false;

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
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/*  312c8f to 00c4cc*/}
      <Header />
      <main className="px-12 flex flex-col md:flex-row md:gap-4 p-8">
        <section id="project" className="pt-24 md:ml-12">
          <ProjectData project={project} allSkills={skills} />
        </section>
      </main>
    </div>
  );
}
