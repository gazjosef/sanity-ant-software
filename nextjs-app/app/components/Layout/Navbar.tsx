import Image from "next/image";
import Link from "next/link";
// import Navbar from "../Navbar/Navbar";
import HeaderLayout from "../UI/Header";

export default function Header() {
  return (
    <HeaderLayout>
      <div className="container">
        <Link href="#home">
          <h1>ANT SOFTWARE</h1>
        </Link>

        {/* <Navbar /> */}
      </div>
    </HeaderLayout>
  );
}
