import React, { useState, useEffect } from "react";
// import ShimmerButton from "../ui/shimmer-button";
import { FaRegEnvelope } from "react-icons/fa";
// import HamburgerMenu from "./hamburgar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
      ${
        scrolled
          ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
          : "bg-transparent h-[15%] border-t-[0.1px] border-[#181817]"
      } flex items-center justify-center px-8 lg:px-[10rem]`}
    >
      <div className="flex items-center w-full h-full">
        {/* Logo */}
        <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
          <a
            href="#home"
            className={`transition-all duration-500 ease-out h-full flex justify-center items-center 
              ${
                scrolled
                  ? "w-[70%] md:w-[90%] lg:w-[80%]"
                  : "w-[73%] md:w-[93%] lg:w-[83%]"
              }
            `}
          >
            <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
          </a>
        </div>

        {/* Nav Links */}
        <div
          className={`hidden bg-[#181817] w-[70%] md:w-[60%] lg:w-[60%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out`}
        >
          <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-outfit">
            <li>
              <a
                href="#home"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Call Us Now Button */}
        <div className="flex gap-5 h-full w-[50%] md:w-[20%] justify-end items-center">
          <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
          {/* <HamburgerMenu /> */}
        </div>
        {/* <ShimmerButton background="#febc12" className="shadow-2xl">
            <span className="text-sm font-medium leading-none tracking-tight text-center text-white uppercase whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">
              Call Us Now
            </span>
          </ShimmerButton>
          */}
      </div>
    </nav>
  );
};

export default Navbar;
