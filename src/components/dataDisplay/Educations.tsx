import { cn } from "@/lib/utils";
import PageTitle from "../ui/PageTitle";
import EducationType from "@/data/types/education";
import EducationData from "./EducationData";
import { Fragment } from "react";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function Educations({
  educations,
  locale,
  className,
}: {
  educations: EducationType[];
  locale: Locale;
  className?: string;
}) {
  const t = uiByLocale[locale];
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle
        firstLine={t.myEducationFirst.toUpperCase()}
        secondLine={t.myEducationSecond.toUpperCase()}
      />
      <div className="flex flex-col gap-4 max-w-4xl">
        {educations.map((education, index, array) => (
          <Fragment key={education.id}>
            <EducationData education={education} />
            {index !== array.length - 1 && (
              <hr className="w-full border-buttonGray my-4" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
