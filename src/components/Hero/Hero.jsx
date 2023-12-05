import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={`${classes.heroBG} flex flex-col lg:flex-row md:flex-row justify-center items-center relative text-white  `}>
        <span className={`font-seasons py-4 lg:px-4 md:px-4 text-4xl lg:text-7xl md:text-5xl relative z-10`}>Where</span>
        <span className={`font-seasonsItalics lg:pr-2 md:pr-2 text-5xl lg:text-8xl md:text-6xl relative z-10`}>Design</span>
        <span className={`font-seasons py-4 lg:px-4 md:px-4 text-4xl lg:text-7xl md:text-5xl relative z-10`}>Becomes</span>
        <span className={`font-seasonsItalics lg:pr-2 md:pr-2 text-5xl lg:text-8xl md:text-6xl relative z-10`}>Destiny</span>
      </div>
    </>
  );
};

export default Hero;
