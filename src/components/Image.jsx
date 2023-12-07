/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import gsap from "gsap";
import { urlForImage } from "@sanity/lib/image";
import { useLayoutEffect } from "react";

const Image = ({ img }) => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".anim-images",
      { x: -250, y: 150, opacity: 0 },
      { x: 0, y: 0, opacity: 1, stagger: 0.35 }
    );
  });

  return (
    <img
      src={urlForImage(img).url()}
      alt="Project Showcase Image"
      className="w-full h-full object-cover anim-images"
    />
  );
};

export default Image;
