import { Inter, Space_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import getCurriculum from "@/services/getCurriculum";
import GoogleAnalyticsScript from "@/components/scripts/GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export async function generateMetadata() {
  const curriculum = await getCurriculum();
  return {
    title: curriculum.personalInfo.fullName,
    description: curriculum.page.metaDescription,
    icons: {
      icon: curriculum.page.logo,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const curriculum = await getCurriculum();

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceMono.variable} ${openSans.variable}`}
    >
      {curriculum.page.googleAnalyticsId && (
        <GoogleAnalyticsScript
          googleAnalyticsId={curriculum.page.googleAnalyticsId}
        />
      )}
      <body className="bg-black">{children}</body>
    </html>
  );
}
