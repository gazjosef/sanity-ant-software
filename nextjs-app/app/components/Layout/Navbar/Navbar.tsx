// Navbar.tsx
"use client";
import { useState } from "react";
import { NavbarList, NavbarListLink } from "./Navbar.styles";
import { NavbarLinks, Link } from "./Navbar.links"; // Import the static data

// type NavbarProps = {
//   navbarLinks: Link[];
// };

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => setToggle((t) => !t);

  return (
    <div>
      <NavbarList>
        {NavbarLinks.map((item) => (
          <NavbarListLink key={item.url} title={item.title} url={item.url} />
        ))}
      </NavbarList>
    </div>
  );
};

export default Navbar;
