"use client";

import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  })

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
