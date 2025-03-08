import Link from "next/link";
// Component
import Navbar from "../Navbar/Navbar";
// Styles
import { HeaderContainer } from "./Header.styles";
import { Container, Flex, FlexColumn } from "@/app/styles/Layout.styles";

export default function Header() {
  return (
    <HeaderContainer>
      {/* <Container fluid>
        <Flex alignItems="center" justifyContent="space-between" fullWidth>
          <Link href="#home">
            <h1>ANT SOFTWARE</h1>
          </Link>
          <Navbar />
        </Flex>
      </Container> */}
      <Link href="#home">
        <h1>ANT SOFTWARE</h1>
      </Link>
      <Navbar />
    </HeaderContainer>
  );
}
