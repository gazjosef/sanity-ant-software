"use client";
import { useState } from "react";
import NavbarList from "./NavbarList";
import NavbarToggle from "./NavbarToggle";

export interface LinkItem {
  title: string;
  url: string;
}

const links: LinkItem[] = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Services", url: "#services" },
  { title: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative flex items-center justify-between text-sm uppercase"
      role="navigation"
    >
      <NavbarList links={links} isOpen={isOpen} />
      <NavbarToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </nav>
  );
}
