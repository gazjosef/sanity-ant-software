"use client";
import Image from "next/image";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import CtaBtn from "../Snippets/Btns/CTA";

export default function Hero() {
  const [imgRef, textRef] = useGsapFadeIn();

  return (
    <section id="home" className="bg-primary-50 py-24 md:py-32">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 px-4">
        <div ref={imgRef}>
          <Image
            src="/images/illustrations/undraw_responsive_6c8s.svg"
            alt="Responsive design illustration"
            width={500}
            height={350}
            priority
          />
        </div>

        <div
          ref={textRef}
          className="flex flex-col justify-center text-left md:text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Get scalable, modern and reliable{" "}
            <span className="text-primary-700">custom software</span>.
          </h1>
          <p className="text-lg mb-4">
            We develop web, mobile and custom software that’s tailor-made to
            capture all your unique and essential requirements.
          </p>
          <div>
            <CtaBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
