import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  font-size: var(--font-size-large);
`;

// export const NavbarList = styled.ul<{ toggle: boolean }>`
export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
  }
`;

export const NavbarListItem = styled.li`
  position: relative;
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: -2px;
    left: 0;
  }
`;

export const NavbarListLink = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => (
  <NavbarListItem>
    <Link href={url}>{title}</Link>
  </NavbarListItem>
);

export const NavbarToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
