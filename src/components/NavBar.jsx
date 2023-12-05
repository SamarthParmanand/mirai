"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

import {Menu} from 'lucide-react'

const NavBar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <nav className="bg-black border-gray-200 px-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center w-32">
          <span className="self-center text-4xl md:text-6xl sm:text-4xl whitespace-nowrap text-gray-500 font-black -translate-x-2 lg:-translate-x-4 md:-translate-x-4">
            みらい
          </span>
          <span className="self-center text-2xl md:text-4xl sm:text-2xl whitespace-nowrap text-white font-black -translate-x-24 lg:-translate-x-40 md:-translate-x-40  ">
            MIRAI
          </span>
        </Link>
        <Sheet className="flex flex-col md:hidden lg:hidden">
          <SheetTrigger asChild>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <Menu className="text-white"/>
              {/* Add your mobile menu icon here */}
            </button>
          </SheetTrigger>
          <SheetContent className="bg-black w-72" >
            <SheetHeader className='text-gray-300 text-xl my-8'>
            Quick Links
            </SheetHeader>
            <Link
              href="#"
              className="block py-2 px-3 text-white text-xl"
              aria-current="page"
            >
              Home
            </Link>
            <Link href="/about" className="block py-2 px-3 text-white text-xl">
              About
            </Link>
            <Link
              href="/projects"
              className="block py-2 px-3 text-white text-xl"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-3 text-white text-xl"
            >
              Contact
            </Link>
            <Link
              href="/studio"
              className="block py-2 px-3 text-white text-xl"
            >
              Sanity
            </Link>
          </SheetContent>
        </Sheet>
        <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-3 text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/studio" className="block py-2 px-3 text-white">
                Sanity
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
