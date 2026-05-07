"use client";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button } from "../button";

export default function Header({ locale }: { locale: string }) {
  const basePath = `/${locale}`;
  const links = [
    { label: "Sobre mi", href: `${basePath}#about` },
    { label: "Experiencia", href: `${basePath}#experience` },
    { label: "Proyectos", href: `${basePath}#projects` },
    { label: "Habilidades", href: `${basePath}#skills` },
    { label: "Educación", href: `${basePath}#education` },
    { label: "Contacto", href: `${basePath}#contact` },
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
