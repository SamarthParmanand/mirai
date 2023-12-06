"use client";

import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
