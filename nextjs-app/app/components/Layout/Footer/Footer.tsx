"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FooterCopyright from "./FooterCopyright";

const FooterNavItems = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Services", url: "#services" },
  { title: "Contact", url: "#contact" },
];

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  margin: 1rem 0;
`;

const FooterList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f4a261;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* <FooterWrapper>
        <LogoContainer>
          <Image
            src="/img/white-logo.png"
            // src="/nextjs-app/app/assets/img/white-logo.png"
            // src="src/assets/img/white-logo.png"
            alt="Ant Software"
            height={100}
            width={352}
          />
        </LogoContainer>

        <Nav>
          <FooterList>
            {FooterNavItems.map(({ title, url }) => (
              <li key={title}>
                <FooterLink href={url}>{title}</FooterLink>
              </li>
            ))}
          </FooterList>
        </Nav>
      </FooterWrapper> */}
      <FooterCopyright />
    </FooterContainer>
  );
}
