import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function FooterSocialMedia() {
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://facebook.com" },
    { Icon: FaTwitter, url: "https://twitter.com" },
    { Icon: FaLinkedinIn, url: "https://linkedin.com" },
    { Icon: FaInstagram, url: "https://instagram.com" },
  ];

  return (
    <div className="mt-8 flex justify-center gap-8 text-white text-2xl">
      {socialLinks.map(({ Icon, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={url.replace("https://", "")}
          className="hover:text-primary-400 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
