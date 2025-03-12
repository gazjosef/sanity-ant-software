"use client";
import FooterCopyright from "./FooterCopyright";
import Logo from "../../Snippets/Logo/Logo";
import WhiteLogo from "@/app/assets/img/white-logo.png";
import { NavbarLinks } from "../Navbar/Navbar.links";
import { Flex, Wrapper } from "@/app/styles/Layout.styles";
import {
  FooterNavbar,
  FooterNavbarLink,
  FooterNavbarList,
  FooterSection,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterSection>
      <Wrapper>
        <Flex alignItems="items-center" justifyContent="space-between">
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
      </Wrapper>

      <FooterCopyright />
    </FooterSection>
  );
}
