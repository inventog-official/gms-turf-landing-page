import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import HamburgerMenu from "./hamburgar";
import MenuDrawer from "./menuDrawer";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuClick, setIsMenuClick] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Set initial active tab based on location hash or pathname
  useEffect(() => {
    const initialPath =
      location.hash ||
      (location.pathname === "/" ? "#home" : location.pathname);
    setActiveTab(initialPath);
  }, [location.pathname, location.hash]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const isClicked = () => {
    setIsMenuClick((old) => !old);
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
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      // In-page navigation
      setActiveTab(path);
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External route navigation
      navigate(path);
      setActiveTab(path);
    }
  };

  if (location.pathname === "/news" || location.pathname === "/testimonials") {
    return null;
  }

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
      ${
        scrolled && !isMenuClick
          ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
          : `h-[15%] ${isMenuClick ? 'bg-primary' : 'bg-transparent'}`
      } 
      flex items-center justify-center px-8 lg:px-[10rem]`}
    >
      <div className="flex items-center w-full h-full">
        <div className="w-[50%] md:w-[30%] lg:w-[20%] h-full">
          <a
            href="#home"
            className="w-full h-full flex justify-center items-center"
          >
            <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
          </a>
        </div>

        <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent lg:flex h-full items-center justify-center transition-all duration-500 ease-out">
          {!isMenuClick ? <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-12 text-white md:flex-row md:w-auto font-secondary">
            {[
              { path: "#home", label: "Home" },
              { path: "#aboutUs", label: "About" },
              { path: "#services", label: "Services" },
              { path: "#contact", label: "Contact" },
              { path: "/news", label: "News" },
              { path: "/testimonials", label: "Testimonials" },
            ].map((item) => (
              <li key={item.label}>
                <button
                  className={`font-medium uppercase ${
                    activeTab === item.path
                      ? "text-secondary"
                      : "text-[#D2D2D0]"
                  } transition-all hover:text-secondary`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="relative">
              <button
                className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
                  isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
                } transition-all hover:text-secondary`}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                More
                <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
                >
                  <ul className="flex flex-col">
                    {[
                      { path: "/item1", label: "Item 1" },
                      { path: "/item2", label: "Item 2" },
                      { path: "/item3", label: "Item 3" },
                    ].map((item) => (
                      <li key={item.label}>
                        <button
                          className="block px-4 w-full py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            handleNavClick(item.path);
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </li>
          </ul> : null}
        </div>

        <div className="flex gap-7 h-full w-[50%] md:w-[70%] lg:w-[10%] lg:hidden  justify-end items-center">
          <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
          <HamburgerMenu isClicked={isClicked} isOpen={isMenuClick} />
        </div>
        <div className="hidden gap-7 h-full w-[50%] md:w-[70%] lg:flex lg:w-[10%] justify-end items-center">
          <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
          {/* <HamburgerMenu isClicked={isClicked} isOpen={isMenuClick} /> */}
        </div>
      </div>
      {isMenuClick && (
        <div className="fixed inset-y-24 md:inset-y-32 w-full h-full bg-primary z-[1000] transition-all duration-700 animate-zoomIn">
          <MenuDrawer isCloseMenu={()=>setIsMenuClick(false)}/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
