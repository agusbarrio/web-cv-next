import PersonalInfoType from "@/data/types/personalInfo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Briefcase, BriefcaseBusiness, Download } from "lucide-react";

export default function AboutMe({
  personalInfo,
  className,
}: {
  personalInfo: PersonalInfoType;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl  text-white text-spacemono">HOLA SOY</h2>
        <h1 className="text-6xl text-white font-spacemono">
          {personalInfo.fullName.toUpperCase()}
        </h1>
        <h2 className="text-2xl text-white font-spacemono">
          {personalInfo.profession.toUpperCase()}
        </h2>
        <p className="text-2xs text-card-foreground my-8 max-w-120">
          {personalInfo.description.toUpperCase()}
        </p>
        <div>
          <a href={personalInfo.curriculumFileUrl} target="_blank">
            <Button variant="highlight" endIcon={<Download size={12} />}>
              DESCARGAR CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
