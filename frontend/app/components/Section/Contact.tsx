"use client";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import EmailForm from "../Snippets/EmailForm";
import Image from "next/image";

export default function Contact() {
  const [titleRef, detailsRef] = useGsapFadeIn();

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-center mb-12 text-primary-700"
        >
          Contact
        </h2>

        <div
          ref={detailsRef}
          className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12"
        >
          <div className="max-w-md">
            <Image
              src="/img/illustrations/undraw_programming_2svr.svg"
              alt="Programming illustration"
              width={300}
              height={225}
              priority
            />
          </div>

          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
              We are here to{" "}
              <span className="text-primary-600">help and answer</span> any
              questions you might have.
            </h1>
          </div>
        </div>

        <div>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
