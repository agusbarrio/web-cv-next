"use client";
//header responsivo.
//mobile muestra el logo que navega a la home y un menu hamburguesa
//desktop muestra el logo y el menu de navegacion
//tiene fondo negro y texto azul
import Image from "next/image";

import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

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
    <header className="bg-black text-blue-600 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#3B82F6" />
            {isOpen && (
              <nav className="absolute top-16 left-0 right-0 bg-black p-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
