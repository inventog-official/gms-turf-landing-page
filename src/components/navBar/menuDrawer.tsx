import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface drawerProps {
  isCloseMenu: () => void;
}

const MenuDrawer: React.FC<drawerProps> = ({ isCloseMenu }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        console.log(9);
        // If not on the home page, navigate to it first
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
          setActiveTab(path); // Set the active tab only for the clicked section
        }, 100);
      } else {
        // Scroll directly if already on the home page
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActiveTab(path);
      }
      isCloseMenu();
    } else {
      // External route navigation
      navigate(path);
      // navigate(path, { replace: true });
      setActiveTab(path);
      isCloseMenu();
    }
  };

  return (
    <div className="flex justify-center items-start py-16 h-full w-full px-12">
      <div className="w-full">
        <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-12 text-white md:w-auto font-secondary">
          {[
            { path: "#home", label: "Home" },
            { path: "#aboutUs", label: "About" },
            { path: "#services", label: "Services" },
            { path: "#contact", label: "Contact" },
            { path: "/portfolio", label: "Portfolio" },
            { path: "/news", label: "News" },
            { path: "/testimonials", label: "Testimonials" },
                     { path: "/basket-ball", label: "Basket Ball Court" },
                        { path: "/badminton-court", label: "Badminton Court" },
                        { path: "/360-circle-turf", label: "360 Circle Turf" },
          ].map((item) => (
            <li key={item.label}>
              <button
                className={`font-medium uppercase ${
                  activeTab === item.path ? "text-secondary" : "text-[#D2D2D0]"
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
              Products
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
                    { path: "/football-turf", label: "Football Turf" },
                    { path: "/pickle-turf", label: "Pickle Ball" },
                    { path: "/circle-turf", label: " Mini Cricket Stadium " },
                    { path: "/cricket-turf", label: "Cricket Nets" },
                    { path: "/indoor-turf", label: "Indoor Turf" },
                    { path: "/volleyball-turf", label: "Volleyball Court" },
                    { path: "/multi-sports-turf", label: "MultiSports Turf" },
                    { path: "/basket-ball", label: "Basket Ball Court" },
                    { path: "/badminton-court", label: "Badminton Court" },
                    { path: "/360-circle-turf", label: "360 Circle Turf" },
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
        </ul>
      </div>
    </div>
  );
};

export default MenuDrawer;
