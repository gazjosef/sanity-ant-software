import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-white shadow-md min-h-[10rem] grid place-items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#home" className="block">
          <Image
            src="/images/black-logo.png"
            alt="Ant Software"
            width={196.88}
            height={55.81}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
