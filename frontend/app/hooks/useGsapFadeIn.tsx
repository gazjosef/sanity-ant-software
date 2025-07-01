"use client";
import { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapFadeIn = (): [
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
] => {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (ref: RefObject<HTMLDivElement>, delay = 0.1) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    };

    animate(imgRef, 0.1);
    animate(textRef, 0.3);
  }, []);

  return [imgRef, textRef];
};

export default useGsapFadeIn;
