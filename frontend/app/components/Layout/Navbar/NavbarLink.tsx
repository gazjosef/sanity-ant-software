interface NavbarLinkProps {
  title: string;
  url: string;
}

export default function NavbarLink({ title, url }: NavbarLinkProps) {
  return (
    <li>
      <a
        href={url}
        className="relative text-[#4d4b4b] transition-all duration-300 hover:-mt-1 hover:text-primary-400"
      >
        {title}
      </a>
    </li>
  );
}
