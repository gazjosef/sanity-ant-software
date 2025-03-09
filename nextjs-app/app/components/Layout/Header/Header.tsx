import Link from "next/link";
// Component
import Navbar from "../Navbar/Navbar";
// Styles
import { HeaderContainer } from "./Header.styles";
import { Flex, Wrapper } from "@/app/styles/Layout.styles";
import Logo from "../../Snippets/Logo/Logo";

export default function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between" fullWidth>
          <Logo />
          <Navbar />
        </Flex>
      </Wrapper>
    </HeaderContainer>
  );
}
