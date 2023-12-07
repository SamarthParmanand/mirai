"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 50%",
        end: "bottom 95%",
        scrub: 2,
        once: true,
        // markers: true,
      },
    });
    tl.fromTo(
      ".scrub-div",
      {
        y: 100,
        opacity: 0,
        ease: "ease.out",
      },
      {
        y: 50,
        opacity: 1,
        stagger: 0.1,
      }
    );
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        end: "bottom 99%",
        scrub: 2,
        once: true,
        // markers: true,
      },
    });
    aboutTl.fromTo(
      "#about-mirai",
      {
        y: 150,
        ease: "ease.out",
        delay: 1,
        scale: 0.7,
        opacity: 0,
      },
      {
        y: 50,
        scale: 1,
        opacity: 1,
        stagger: 0.1,
      }
    );
    aboutTl.fromTo(
      "#about-img",
      {
        y: 100,
        delay: 1,
        opacity: 0.7,
        ease: "ease.out",
      },
      {
        y: 50,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div
      className="h-[100%] my-12 about-section flex flex-col justify-center"
      ref={aboutRef}
    >
      <div
        id="about-mirai"
        className="w-100vw flex justify-center text-white lg:mt-12 md:mt-8"
      >
        <span className="text-2xl lg:text-5xl md:text-4xl mx-4">About</span>{" "}
        <span className="font-seasonsItalics text-3xl lg:text-6xl md:text-5xl">
          Mirai
        </span>
      </div>
      <div className="mx-[10%] h-[100%] text-white flex flex-col-reverse lg:flex-row md:flex-row items-center justify-start overflow-clip">
        <div className="w-[80%] lg:w-[70%] md:w-[70%] h-[100%] my-8 text-md lg:text-3xl md:text-2xl leading-loose lg:leading-loose md:leading-loose tracking-wider">
          <div className="my-6 lg:my-8 md:my-6 scrub-div">
            <span className="font-seasonsItalics text-xl lg:text-4xl md:text-3xl px-1 lg:px-4 md:px-4">
              Mirai
            </span>{" "}
            is a design studio originating from Nagpur, Maharashtra.
          </div>
          <div className="my-6 lg:my-8 md:my-6 scrub-div">
            The face behind{" "}
            <span className="font-seasonsItalics text-xl lg:text-4xl md:text-3xl px-1 lg:px-4 md:px-4">
              Mirai
            </span>{" "}
            is &nbsp; <u> Ar. Harshal Thaware.</u>
          </div>
          <div className="my-6 lg:my-8 md:my-6 scrub-div">
            At{" "}
            <span className="font-seasonsItalics text-xl lg:text-4xl md:text-3xl px-1 lg:px-4 md:px-4">
              Mirai,
            </span>{" "}
            We believe in crafting masterpieces for everyone.
          </div>
          <div className="my-6 lg:my-8 md:my-6 scrub-div">
            A few more points will be added here soon.
          </div>
          <div className="my-6 lg:my-8 md:my-6 scrub-div">
            A few more points will be added here soon.
          </div>
        </div>
        <div
          className="w-[70%] lg:w-[30%] md:w-[30%] h-[100%] pt-10 flex items-start lg:p-6 md:p-6"
          id="about-img"
        >
          <Image
            src="/Images/harshal.jpg"
            alt="harshal bhaiya portrait"
            width={600}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
