import { cn } from "@/lib/utils";
import PageTitle from "../ui/PageTitle";
import ContactForm from "./ContactForm";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function Contact({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const t = uiByLocale[locale];
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle
        firstLine={t.contactFirst.toUpperCase()}
        secondLine={t.contactSecond.toUpperCase()}
      />
      <ContactForm locale={locale}></ContactForm>
    </div>
  );
}
