import Image from "next/image";
import FooterList from "./FooterList";
import FooterCopyright from "./FooterCopyright";
import FooterSocialMedia from "./FooterSocialMedia";

const footerNavItems = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Services", url: "#services" },
  { title: "Contact", url: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16 text-center">
      <div className="container mx-auto grid grid-cols-2 gap-8 phone:grid-cols-1">
        <div className="flex justify-center items-center">
          <Image
            src="/images/white-logo.png"
            alt="Ant Software"
            width={352}
            height={100}
            priority
          />
        </div>

        <div className="mx-auto w-full max-w-xl">
          <nav aria-label="Footer Navigation">
            <FooterList>
              {footerNavItems.map(({ title, url }) => (
                <FooterList.Link key={title} href={url}>
                  {title}
                </FooterList.Link>
              ))}
            </FooterList>
          </nav>

          <FooterSocialMedia />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
