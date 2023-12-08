import React, { useRef } from "react";
import Link from "next/link.js";

import {
  floater1,
  floater2,
  floater3,
  floater4,
  floater5,
  floater6,
  floater7,
  floater8,
  floater9,
  floater10,
} from "../../index.js";

import gsap from "gsap";
import Image from "next/image";

const Projects = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  const handleMouseMove = (e) => {
    const { movementX, movementY } = e;

    gsap.set(plane1.current, {
      x: `+=${movementX * 0.015}`,
      y: `+=${movementY * 0.015}`,
      ease: "power4.in",
    });

    gsap.set(plane2.current, {
      x: `+=${movementX * 0.012}`,
      y: `+=${movementY * 0.012}`,
      ease: "power4.in",
    });

    gsap.set(plane3.current, {
      x: `+=${movementX * 0.02}`,
      y: `+=${movementY * 0.02}`,
      ease: "power4.in",
    });
  };

  return (
    <div
      className="relative h-[80vh] lg:h-[125vh] lg:my-[5%] w-[100vw] z-1 overflow-hidden"
      onMouseMove={(e) => handleMouseMove(e)}
      id="projects"
    >
      <div
        className="w-[100%] h-[100%] z-0 absolute pointer-events-none"
        id="plane1"
        ref={plane1}
      >
        <Image
          src={floater1}
          alt="floater1"
          className="absolute brightness-50 left-[65%] lg:left-[17%] top-[50%] lg:top-[17%] w-[95px] lg:w-[285px]"
        />
        <Image
          src={floater2}
          alt="floater2"
          className="absolute brightness-50 left-[10%] lg:left-[15%] top-[54%] lg:top-[45%] w-[100px] lg:w-[300px] "
        />
        <Image
          src={floater3}
          alt="floater3"
          className="absolute brightness-50 left-[35%] lg:left-[72%] top-[23%] lg:top-[11%] w-[100px] lg:w-[300px]"
        />
        <Image
          src={floater4}
          alt="floater4"
          className="absolute brightness-50 left-[7%] lg:left-[40%] top-[35%] lg:top-[0%] w-[85px] lg:w-[275px]"
        />
      </div>
      <div
        className="w-[100%] h-[100%] z-0 absolute pointer-events-none"
        id="plane2"
        ref={plane2}
      >
        <Image
          src={floater5}
          alt="floater5"
          className="absolute brightness-40 -left-0 lg:left-[28%] top-[20%] lg:top-[51%] w-[110px] lg:w-[325px]"
        />
        <Image
          src={floater6}
          alt="floater6"
          className="absolute brightness-40 left-[62%] lg:left-[55%] top-[30%] lg:top-[7%] w-[100px] lg:w-[280px]"
        />
        <Image
          src={floater7}
          alt="floater7"
          className="absolute brightness-40 left-[27%] lg:left-[46%] top-[58%] lg:top-[45%] w-[100px] lg:w-[300px]"
        />
      </div>
      <div
        className="w-[100%] h-[100%] z-0 absolute pointer-events-none"
        id="plane3"
        ref={plane3}
      >
        <Image
          src={floater8}
          alt="floater8"
          className="absolute brightness-40 left-[40%] lg:left-[63%] top-[53%] lg:top-[53%] w-[95px] lg:w-[285px]"
        />
        <Image
          src={floater9}
          alt="floater9"
          className="absolute brightness-40 left-[15%] lg:left-[65%] top-[10%] lg:top-[35%] w-[100px] lg:w-[300px]"
        />
        <Image
          src={floater10}
          alt="floater10"
          className="absolute brightness-40 left-[59%] lg:left-[28%] top-[13%] lg:top-[5%] w-[90px] lg:w-[275px]"
        />
      </div>
      <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl lg:text-6xl md:text-5xl text-center">
          Project&nbsp;{" "}
          <span className="font-seasonsItalics text-3xl lg:text-7xl md:text-5xl">
            Showcase
          </span>
        </h1>
        <Link href="/projects" className="h-8 w-24 lg:h-16 lg:w-40 text-black bg-white rounded-md m-2 lg:m-5 text-sm lg:text-xl flex justify-center items-center">
            Visit
        </Link>
      </div>
    </div>
  );
};

export default Projects;
