import Link from "next/link";

import styled from "styled-components";

export const FooterSection = styled.footer`
  background: #222;
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

export const FooterNavbar = styled.nav`
  margin: 1rem 0;
`;

export const FooterNavbarList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

export const FooterNavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: var(--font-size-large);
  transition: color 0.3s ease;

  &:hover {
    color: #f4a261;
  }
`;
