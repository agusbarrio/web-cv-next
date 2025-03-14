import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import PersonalInfoType from "@/data/types/personalInfo";
import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PersonalInfoCard({
  personalInfo,
  className,
}: {
  personalInfo: PersonalInfoType;
  className?: string;
}) {
  return (
    <Card className={cn("px-10 py-6", className)}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={personalInfo.logo}
            alt={"logo"}
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h2 className="text-white font-spacemono text-xl">
              {personalInfo.fullName.toUpperCase()}
            </h2>
          </div>
        </div>
        <div className="w-full bg-gradient-to-tl to-sky-400 from-blue-800 rounded-2xl">
          <Image
            src={personalInfo.image}
            alt={personalInfo.fullName}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* descripcion */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-opensans text-sm">Descripción:</h3>
          <p className="text-card-foreground font-opensans text-2xs">
            {personalInfo.shortDescription}
          </p>
        </div>
        {/* especializacion */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-opensans text-sm">Especialización:</h3>
          <p className="text-card-foreground font-opensans text-2xs">
            {personalInfo.specialization}
          </p>
        </div>
        {/* contacto */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4">
            <a href={personalInfo.github} target="_blank">
              <Button variant="icon">
                <SiGithub />
              </Button>
            </a>
            <a href={personalInfo.linkedin} target="_blank">
              <Button variant="icon">
                <SiLinkedin />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`} target="_blank">
              <Button variant="icon">
                <SiGmail />
              </Button>
            </a>
          </div>
        </div>
        <Link href="/#contact" className="w-full">
          <Button variant="highlight" className="w-full">
            TRABAJEMOS JUNTOS
          </Button>
        </Link>
      </div>
    </Card>
  );
}
