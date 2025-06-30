import NavbarLink from "./NavbarLink";
import { LinkItem } from "./Navbar";

interface NavbarListProps {
  links: LinkItem[];
  isOpen: boolean;
}

export default function NavbarList({ links, isOpen }: NavbarListProps) {
  return (
    <ul
      id="primary-navigation"
      aria-hidden={!isOpen}
      className={`
        fixed top-0 right-0 w-full h-[40vh] p-20 flex-col bg-[steelblue]
        transition-transform duration-500 ease-in transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        sm:static sm:flex sm:flex-row sm:gap-4 sm:h-auto sm:p-0 sm:bg-transparent sm:translate-x-0
        flex items-center gap-6
      `}
    >
      {links.map((link) => (
        <NavbarLink key={link.title} title={link.title} url={link.url} />
      ))}
    </ul>
  );
}
