import React from "react";
import Link from "next/link";

interface FooterListProps {
  children: React.ReactNode;
}

const FooterList = ({ children }: FooterListProps) => {
  return (
    <ul className="flex flex-col gap-4 uppercase font-semibold text-lg">
      {children}
    </ul>
  );
};

interface FooterListLinkProps {
  href: string;
  children: React.ReactNode;
}

FooterList.Link = function FooterListLink({
  href,
  children,
}: FooterListLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="block text-white hover:text-primary-400 focus:outline-none focus:text-primary-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default FooterList;
