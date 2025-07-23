import { cn, getDateString, getSkillsByProject } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import SkillType from "@/data/types/skill";
import Image from "next/image";
import { Button } from "../ui/button";
import { isEmpty } from "lodash";
import SkillIcon from "./SkillIcon";

export default function ProjectData({
  project,
  allSkills,
  className,
}: {
  project: ProjectType;
  allSkills: SkillType[];
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="flex flex-row gap-8 items-center">
        {project.logo && (
          <Image
            src={project.logo}
            alt={project.name}
            className="w-32 h-32 hidden md:block object-contain"
            width={100}
            height={100}
          />
        )}
        <PageTitle
          firstLine="PROYECTO"
          secondLine={project.name?.toUpperCase()}
          element="h1"
        ></PageTitle>
      </div>
      <div
        className={cn("flex flex-col md:flex-row gap-8 md:gap-20", className)}
      >
        <div className={"flex flex-col gap-4"}>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-inter text-white font-bold">
              {project.name?.toUpperCase()}
            </h2>
            <p className="text-sm font-inter text-white">
              {getDateString({
                startDate: project.startDate,
                endDate: project.endDate,
              })?.toUpperCase()}
            </p>
          </div>
          <p className="text-sm font-inter text-card-foreground">
            {project.description?.toUpperCase()}
          </p>
          {!isEmpty(project.responsibilities) && (
            <>
              <hr className="w-full border-buttonGray my-4" />
              <h2 className="text-2xl font-inter text-white font-bold">
                RESPONSABILIDADES
              </h2>
              {project.responsibilities?.map((responsibility) => (
                <p
                  className="text-sm font-inter text-card-foreground"
                  key={responsibility}
                >
                  {responsibility}
                </p>
              ))}
            </>
          )}
          <hr className="w-full border-buttonGray my-4" />
          <h2 className="text-2xl font-inter text-white font-bold">
            TECNOLOGÍAS
          </h2>
          <div className="flex flex-wrap gap-2">
            {getSkillsByProject(project, allSkills).map((skill) => (
              <Button key={skill?.id} variant="icon" className="relative group">
                <span
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                   opacity-0 group-hover:opacity-100 
                   bg-gray-800 text-white text-xs rounded py-1 px-2 
                   pointer-events-none 
                   transition-opacity duration-300 whitespace-nowrap z-10"
                >
                  {skill?.name}
                </span>
                <SkillIcon skill={skill} />
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 md:sticky md:top-24 h-fit">
          <div className="relative w-80 md:w-104 h-52 mx-auto">
            <Image
              src={project.imagePlatform}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
          <a href={project.link} target="_blank">
            <Button variant="highlight" className="mx-auto">
              VISITAR PLATAFORMA
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
