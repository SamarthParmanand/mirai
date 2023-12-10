"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Josefin_Sans } from "next/font/google";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import Headroom from "react-headroom";
import { Menu } from "lucide-react";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const NavBar = () => {
  const pathname = usePathname();
  const sheetTriggerRef = useRef(null);
  const sheetContentRef = useRef(null);
  useEffect(() => {
    if (pathname === "/") {
      gsap.fromTo(
        "#navbar",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        ".link-elements",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          stagger: { amount: 0.35 },
        }
      );
    }else if (pathname.endsWith("/projects")) {
      gsap.fromTo(
        "#navbar",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
      gsap.fromTo(
        ".link-elements",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: { amount: 0.1 },
        }
      );
    }
    else if (pathname.startsWith("/projects/")) {
      gsap.fromTo(
        "#navbar",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      );
      gsap.fromTo(
        ".link-elements",
        {
          opacity: 0,
          y: -200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.35 },
        }
      );
    }
  }, [pathname]);

  useEffect(() => {
    if (sheetTriggerRef.current) {
      ScrollTrigger.observe({
        target: sheetTriggerRef.current,
        type: "touch,click",
        onClick: () => {
          console.log("clickings");
          gsap.fromTo(
            sheetContentRef.current,
            {
              opacity: 0,
              y: 50,
              duration: 9
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
            }
          );
        },
      });
    }
  }, [sheetTriggerRef]);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <Headroom>
      <nav
        className={`${josefin.className} border-gray-200 px-8 sticky top-0 z-100 backdrop-blur-lg`}
        id="navbar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link href="/" className="flex items-center w-32">
            <span className="self-center text-4xl md:text-6xl sm:text-4xl whitespace-nowrap text-gray-500 font-black -translate-x-2 lg:-translate-x-4 md:-translate-x-4">
              みらい
            </span>
            <span className="self-center text-2xl md:text-4xl sm:text-2xl whitespace-nowrap text-white font-black -translate-x-24 lg:-translate-x-40 md:-translate-x-40  ">
              MIRAI
            </span>
          </Link>
          <Sheet className="flex flex-col md:hidden lg:hidden">
            <SheetTrigger
              id="sheet-trigger"
              ref={sheetTriggerRef}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden md:hidden"
            >
              <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="bg-black w-72" ref={sheetContentRef}>
              <SheetHeader className="text-gray-300 text-xl my-8">
                Quick Links
              </SheetHeader>
              <div >
                <div className="block py-2 px-3 text-white text-xl sheet-links">
                  <Link href="">Home</Link>
                </div>
                <div className="block py-2 px-3 text-white text-xl sheet-links">
                  <Link href="/about">About</Link>
                </div>
                <div className="block py-2 px-3 text-white text-xl sheet-links">
                  <Link href="/projects">Projects</Link>
                </div>
                <div className="block py-2 px-3 text-white text-xl sheet-links">
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="block py-2 px-3 text-white text-xl sheet-links">
                  <Link href="/studio">Sanity</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="link-elements">
                <Link
                  href="/"
                  className="block py-2 px-3 text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="link-elements">
                <Link href="/about" className="block py-2 px-3 text-white">
                  About
                </Link>
              </li>
              <li className="link-elements">
                <Link href="/projects" className="block py-2 px-3 text-white">
                  Projects
                </Link>
              </li>
              <li className="link-elements">
                <Link href="/contact" className="block py-2 px-3 text-white">
                  Contact
                </Link>
              </li>
              <li className="link-elements">
                <Link href="/studio" className="block py-2 px-3 text-white">
                  Sanity
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
