"use client";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button } from "../button";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function Header({ locale }: { locale: Locale }) {
  const basePath = `/${locale}`;
  const t = uiByLocale[locale];
  const links = [
    { label: t.navAbout, href: `${basePath}#about` },
    { label: t.navExperience, href: `${basePath}#experience` },
    { label: t.navProjects, href: `${basePath}#projects` },
    { label: t.navSkills, href: `${basePath}#skills` },
    { label: t.navEducation, href: `${basePath}#education` },
    { label: t.navContact, href: `${basePath}#contact` },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    //difuminar fondo de la imagen de fondo
    <header
      className={`${
        isOpen ? "bg-black" : "bg-transparent"
      } md:bg-transparent fixed w-full top-0 z-50 h-24 `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Desktop Navigation */}
          <nav className="w-full">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden text-white"
              aria-label="ToggleMenu"
            >
              <Hamburger toggled={isOpen} />
            </button>
            <div
              className={`
              bg-black
              md:flex
              md:gap-2
              ${isOpen ? "block" : "hidden"}
              md:relative absolute left-0 right-0
              md:bg-transparent
              md:p-4 p-4
              md:justify-end
            `}
            >
              {links.map((link) => (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-32"
                  key={link.href}
                >
                  <Button className="w-full">{link.label.toUpperCase()}</Button>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
