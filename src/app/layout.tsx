import { Inter, Space_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import getCurriculum from "@/services/getCurriculum";

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
    description: curriculum.personalInfo.profession,
    icons: {
      icon: curriculum.page.logo,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceMono.variable} ${openSans.variable}`}
    >
      <body className="bg-black">{children}</body>
    </html>
  );
}
