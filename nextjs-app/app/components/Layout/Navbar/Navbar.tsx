"use client";
import { useState } from "react";
import { Link, NavbarLinks } from "./Navbar.links";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarList, NavbarListLink, NavbarToggle } from "./Navbar.styles";
import { Flex } from "@/app/styles/Layout.styles";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => setToggle((t) => !t);

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <NavbarList>
        {/* {NavbarLinks.map((item: Link) => (
          <NavbarListLink key={item.title} title={item.title} url={item.url} />
        ))} */}
      </NavbarList>

      <NavbarToggle onClick={handleClick}>
        {toggle ? <FaTimes /> : <FaBars />}
      </NavbarToggle>
    </Flex>
  );
};
export default Navbar;
