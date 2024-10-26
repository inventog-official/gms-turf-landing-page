import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegEnvelope, FaChevronDown } from "react-icons/fa"; // Import the dropdown icon
import HamburgerMenu from "./hamburgar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Close the dropdown if clicking outside of it
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = () => {
    setIsDropdownOpen(false); // Close the dropdown when an option is clicked
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
      ${
        scrolled
          ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
          : "bg-transparent h-[15%]"
      } 
      flex items-center justify-center px-8 lg:px-[10rem]`}
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
              }`}
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
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
              >
                Contact
              </a>
            </li>
            {/* Dropdown Trigger */}
            <li className="relative">
              <button
                className={`flex gap-1 rounded-lg items-center font-medium uppercase  ${
                  isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
                } transition-all hover:text-secondary`}
                // className="flex gap-1 px-5 py-2 rounded-lg items-center font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300 backdrop-blur-md bg-white/20"
                onClick={() => setIsDropdownOpen((old) => !old)} // Open dropdown on button click
              >
                More
                <FaChevronDown className="ml-1" /> {/* Add dropdown icon */}
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  ref={dropdownRef} // Reference to the dropdown for outside click detection
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
                >
                  <ul className="flex flex-col">
                    <li>
                      <a
                        href="#item1"
                        className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                        onClick={handleOptionClick} // Close dropdown when an option is clicked
                      >
                        Item 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#item2"
                        className="block font-outfit px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                        onClick={handleOptionClick} // Close dropdown when an option is clicked
                      >
                        Item 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#item3"
                        className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                        onClick={handleOptionClick} // Close dropdown when an option is clicked
                      >
                        Item 3
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </li>
          </ul>
        </div>

        {/* Call Us Now Button */}
        <div className="flex gap-7 h-full w-[50%] md:w-[20%] justify-end items-center">
          <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
          <HamburgerMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
