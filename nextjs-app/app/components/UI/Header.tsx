"use client"; // Add this at the top
import styled from "styled-components";

const Header = styled.header`
  background-color: white;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  min-height: 10rem;
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 100;
`;

export default Header;
