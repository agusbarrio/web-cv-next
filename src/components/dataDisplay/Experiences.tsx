import { cn } from "@/lib/utils";
import ProjectType from "@/data/types/project";
import PageTitle from "../ui/PageTitle";
import ExperienceType from "@/data/types/experience";
import ExperienceData from "./ExperienceData";
import { Fragment } from "react";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function Experiences({
  experiences,
  projects,
  locale,
  className,
}: {
  experiences: ExperienceType[];
  projects: ProjectType[];
  locale: Locale;
  className?: string;
}) {
  const t = uiByLocale[locale];
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle
        firstLine={t.myExperienceFirst.toUpperCase()}
        secondLine={t.myExperienceSecond.toUpperCase()}
      />
      <div className="flex flex-col gap-4 max-w-4xl">
        {experiences.map((experience, index, array) => (
          <Fragment key={experience.id}>
            <ExperienceData
              experience={experience}
              projects={projects}
              locale={locale}
              className="w-full"
            />
            {index !== array.length - 1 && (
              <hr className="w-full border-buttonGray my-4" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
