"use client";
import styled from "styled-components";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Styled Link component
export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

interface LogoProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt = "Ant Software",
  width = 196.88,
  height = 55.81,
}) => {
  return (
    <StyledLink href="#home">
      <Image src={src} alt={alt} width={width} height={height} />
    </StyledLink>
  );
};

export default Logo;
