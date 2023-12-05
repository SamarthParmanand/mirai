"use client";

import { useEffect } from "react";
import classes from "./Hero.module.css";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      "#hero-section",
      { opacity: 0, scale: 0.75, y: -10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.75 }
    );
    gsap.fromTo(
      ".hero-text",
      { x: -100 },
      { x: 0, duration: 1, stagger: { amount: 0.25, from: "end" } }
    );
  }, []);

  return (
    <>
      <div
        id="hero-section"
        className={`${classes.heroBG} flex flex-col lg:flex-row md:flex-row justify-center items-center relative text-white `}
      >
        <span
          id="where"
          className={`font-seasons py-4 lg:px-4 md:px-4 text-4xl lg:text-7xl md:text-5xl relative z-10 hero-text`}
        >
          Where
        </span>
        <span
          id="design"
          className={`font-seasonsItalics lg:pr-2 md:pr-2 text-5xl lg:text-8xl md:text-6xl relative z-10 hero-text`}
        >
          Design
        </span>
        <span
          id="becomes"
          className={`font-seasons py-4 lg:px-4 md:px-4 text-4xl lg:text-7xl md:text-5xl relative z-10 hero-text`}
        >
          Becomes
        </span>
        <span
          id="destiny"
          className={`font-seasonsItalics lg:pr-2 md:pr-2 text-5xl lg:text-8xl md:text-6xl relative z-10 hero-text`}
        >
          Destiny
        </span>
      </div>
    </>
  );
};

export default Hero;
