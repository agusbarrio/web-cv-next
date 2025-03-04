import ProjectType from "@/data/types/project";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  className,
}: {
  project: ProjectType;
  className?: string;
}) {
  return (
    <div
      className={cn("relative group overflow-hidden rounded-2xl", className)}
    >
      <Image
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-opacity duration-300 md:group-hover:opacity-0"
        width={1000}
        height={1000}
      />
      {/* Hover image - hidden on mobile */}
      <Image
        src={project.imageHover || project.image}
        alt={`${project.name} hover`}
        className="hidden md:block w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        width={1000}
        height={1000}
      />
      {/* Overlay content - Fixed on mobile, hover on desktop */}
      <div
        className="absolute top-0 bottom-0 left-0 w-full bg-black/50 text-white p-4 
        md:-bottom-full md:transition-all md:duration-300 md:group-hover:bottom-0 md:top-auto"
      >
        <h3 className="text-2xl font-bold font-inter">
          {project.name?.toUpperCase()}
        </h3>
        <p className="text-sm font-opensans">{project.description}</p>
        <div className="flex gap-4 mt-4">
          <Link href={`/projects/${project.id}`}>
            <Button variant="highlight" className="mt-0 md:mt-4">
              VER MÁS
            </Button>
          </Link>
          <a href={project.link} target="_blank">
            <Button variant="highlight" className="mt-0 md:mt-4">
              PLATAFORMA
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
