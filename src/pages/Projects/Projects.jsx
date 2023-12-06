import React, { useRef, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      const { movementX, movementY } = e;
      console.log(movementX, movementY);

      gsap.to(plane1.current, {
        x: `+=${movementX * 0.01}`,
        y: `+=${movementY * 0.01}`,
      });

      gsap.to(plane2.current, {
        x: `+=${movementX * 0.005}`,
        y: `+=${movementY * 0.005}`,
      });

      gsap.to(plane3.current, {
        x: `+=${movementX * 0.0025}`,
        y: `+=${movementY * 0.0025}`,
      });
    };
    const projects = document.querySelector("#projects");
    console.log(projects);
    projects.addEventListener("mousemove", handleMouseMove);
    return () => {
      projects.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative h-[125vh] my-[10%] w-[100vw] z-1"
      // onMouseMove={(e) => handleMouseMove(e)}
      id="projects"
    >
      <div className="w-[100%] h-[100%] z-0 absolute " id="plane1" ref={plane1}>
        <Image
          src={floater1}
          alt="floater1"
          width={285}
          className="absolute brightness-50 left-[90%] top-[70%]"
        />
        <Image
          src={floater2}
          alt="floater2"
          width={300}
          className="absolute brightness-50 left-[5%] top-[45%]"
        />
        <Image
          src={floater3}
          alt="floater3"
          width={300}
          className="absolute brightness-50 left-[80%] top-[15%]"
        />
        <Image
          src={floater4}
          alt="floater4"
          width={275}
          className="absolute brightness-50 left-[25%] top-[0%] "
        />
      </div>
      <div className="w-[100%] h-[100%] z-0 absolute " id="plane2" ref={plane2}>
        <Image
          src={floater5}
          alt="floater5"
          width={325}
          className="absolute brightness-40 left-[10%] top-[80%]"
        />
        <Image
          src={floater6}
          alt="floater6"
          width={280}
          className="absolute brightness-40 left-[50%] top-[7%]"
        />
        <Image
          src={floater7}
          alt="floater7"
          width={300}
          className="absolute brightness-40 left-[35%] top-[60%]"
        />
      </div>
      <div className="w-[100%] h-[100%] z-0 absolute " id="plane3" ref={plane3}>
        <Image
          src={floater8}
          alt="floater8"
          width={285}
          className="absolute brightness-40 left-[65%] top-[70%]"
        />
        <Image
          src={floater9}
          alt="floater9"
          width={300}
          className="absolute brightness-40 left-[70%] top-[35%]"
        />
        <Image
          src={floater10}
          alt="floater10"
          width={275}
          className="absolute brightness-40 left-0 top-[10%]"
        />
      </div>
      <div className="absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl lg:text-6xl md:text-5xl text-center">
          Project&nbsp;{" "}
          <span className="font-seasonsItalics text-3xl lg:text-7xl md:text-5xl">
            Showcase
          </span>
        </h1>
        <button className="h-8 w-24 lg:h-16 lg:w-40 text-black bg-white rounded-md m-2 lg:m-5 text-sm lg:text-xl">
          View More
        </button>
      </div>
    </div>
  );
};

export default Projects;
