"use client";
import FeatureBox from "../Snippets/FeatureBox";
import useGsapFadeIn from "../..//hooks/useGsapFadeIn";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";

const features = [
  {
    title: "Custom Business Software",
    description:
      "Custom business software and apps to support growing companies.",
    icon: <FaBriefcase size={70} className="text-primary-500 mb-6 mx-auto" />,
  },
  {
    title: "E-Commerce, Online Store Fronts",
    description:
      "Beautiful online stores and strategically-led shopping experiences.",
    icon: (
      <FaShoppingCart size={70} className="text-primary-500 mb-6 mx-auto" />
    ),
  },
  {
    title: "Web Design",
    description: "Analyse and implement designs that keep users engaged.",
    icon: <FaPalette size={70} className="text-primary-500 mb-6 mx-auto" />,
  },
  {
    title: "SEO",
    description:
      "Improve your online presence to increase exposure and user traffic.",
    icon: <FaSearch size={70} className="text-primary-500 mb-6 mx-auto" />,
  },
  {
    title: "Consulting",
    description:
      "Provide end-to-end digital consulting to help you grow your business today.",
    icon: (
      <FaChalkboardTeacher
        size={70}
        className="text-primary-500 mb-6 mx-auto"
      />
    ),
  },
];

export default function Services() {
  const [titleRef, gridRef] = useGsapFadeIn();

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-2">
            Services
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We provide{" "}
            <span className="text-primary-600">professional IT solutions</span>{" "}
            for your business.
          </h1>
        </div>

        <div
          ref={gridRef}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ title, description, icon }) => (
            <FeatureBox key={title} title={title} description={description}>
              {icon}
            </FeatureBox>
          ))}
        </div>
      </div>
    </section>
  );
}
