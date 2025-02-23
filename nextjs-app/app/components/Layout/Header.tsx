import Image from "next/image";
import Link from "next/link";
// import Navbar from "../Navbar/Navbar";
import LayoutBox from "../UI/Header";

export default function Header() {
  return (
    <LayoutBox>
      <div className="container">
        <Link href="#home">
          <h1>ANT SOFTWARE</h1>
        </Link>

        {/* <Navbar /> */}
      </div>
    </LayoutBox>
  );
}
