import getCurriculum from "@/services/getCurriculum";
import GoogleAnalyticsScript from "@/components/scripts/GoogleAnalyticsScript";
import { isLocale, SUPPORTED_LOCALES } from "@/i18n/locales";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const curriculum = await getCurriculum(locale);

  return {
    title: curriculum.personalInfo.fullName,
    description: curriculum.page.metaDescription,
    icons: {
      icon: curriculum.page.logo,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const curriculum = await getCurriculum(locale);

  return (
    <>
      {curriculum.page.googleAnalyticsId && (
        <GoogleAnalyticsScript
          googleAnalyticsId={curriculum.page.googleAnalyticsId}
        />
      )}
      {children}
    </>
  );
}
