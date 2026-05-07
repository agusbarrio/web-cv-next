import { redirect } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}#about`);
}
