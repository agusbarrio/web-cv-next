import { Inter } from "next/font/google";
import "./globals.css";
import getCurriculum from "@/services/getCurriculum";
import Header from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const curriculum = await getCurriculum();
  return {
    title: curriculum.personalInfo.fullName,
    description: curriculum.personalInfo.profession,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
