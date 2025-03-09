"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FooterCopyright from "./FooterCopyright";
import { Flex } from "@/app/styles/Layout.styles";
import Logo from "../../Snippets/Logo/Logo";
import WhiteLogo from "@/app/assets/img/white-logo.png";
import { NavbarLinks } from "../Navbar/Navbar.links";

const FooterNavItems = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Services", url: "#services" },
  { title: "Contact", url: "#contact" },
];

const FooterSection = styled.footer`
  background: #222;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const FooterWrapper = styled.div`
  max-width: var(--max-width);
  margin-inline: auto;
`;

const FooterNavbar = styled.nav`
  margin: 1rem 0;
`;

const FooterNavbarList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const FooterNavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: var(--font-size-large);
  transition: color 0.3s ease;

  &:hover {
    color: #f4a261;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <Flex
          alignItems="items-center"
          justifyContent="space-between"
          fullWidth
        >
          <Logo src={WhiteLogo} />

          <FooterNavbar>
            <FooterNavbarList>
              {NavbarLinks.map(({ title, url }) => (
                <li key={title}>
                  <FooterNavbarLink href={url}>{title}</FooterNavbarLink>
                </li>
              ))}
            </FooterNavbarList>
          </FooterNavbar>
        </Flex>
      </FooterWrapper>

      <FooterCopyright />
    </FooterSection>
  );
}
