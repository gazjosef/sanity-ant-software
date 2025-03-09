"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import BlackLogo from "@/app/assets/img/black-logo.png";

// Styled Link component
export const StyledLink = styled(Link)`
  display: inline-block; /* To make the link an inline-block */
  text-decoration: none; /* Remove default text decoration */
`;

// Styled Image component
export const LogoImage = styled.img`
  width: 196.88px;
  height: 55.81px;
  object-fit: contain; /* Preserve aspect ratio */
`;

const LogoLinkURL = "";

const Logo = () => {
  return (
    <StyledLink href={"#home"}>
      <Image src={BlackLogo} alt="Ant Software" width={196.88} height={55.81} />
    </StyledLink>
  );
};
export default Logo;
