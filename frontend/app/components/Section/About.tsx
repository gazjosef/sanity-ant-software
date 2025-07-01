"use client";
import Image from "next/image";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";

export default function About() {
  const [titleRef, imageRef] = useGsapFadeIn();

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-2">
            About Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Web development company that vows your{" "}
            <span className="text-primary-400">success</span>.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center text-left">
          <div ref={imageRef}>
            <Image
              src="/images/illustrations/undraw_developer_activity_bv83.svg"
              alt="Developer at work illustration"
              width={800}
              height={600}
              priority
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Founded in 2016, Ant Software is a web development company that
              helps clients meet the challenges of the digital age. We
              specialise in brand design, web design and development, and custom
              software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
