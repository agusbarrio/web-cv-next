"use client";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Button } from "../button";

export default function Header() {
  const links = [
    { label: "Sobre mi", href: `${process.env.NEXT_PUBLIC_URL}#about` },
    { label: "Experiencia", href: `${process.env.NEXT_PUBLIC_URL}#experience` },
    { label: "Proyectos", href: `${process.env.NEXT_PUBLIC_URL}#projects` },
    { label: "Habilidades", href: `${process.env.NEXT_PUBLIC_URL}#skills` },
    { label: "Educación", href: `${process.env.NEXT_PUBLIC_URL}#education` },
    { label: "Contacto", href: `${process.env.NEXT_PUBLIC_URL}#contact` },
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
                <Button key={link.href} className="w-32">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
