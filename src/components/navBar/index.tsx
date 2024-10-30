// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa"; // Import the dropdown icon
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false); // Close the dropdown if clicking outside of it
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleOptionClick = () => {
//     setIsDropdownOpen(false); // Close the dropdown when an option is clicked
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${
//         scrolled
//           ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
//           : "bg-transparent h-[15%]"
//       } 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         {/* Logo */}
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a
//             href="#home"
//             className={`transition-all duration-500 ease-out h-full flex justify-center items-center 
//               ${
//                 scrolled
//                   ? "w-[70%] md:w-[90%] lg:w-[80%]"
//                   : "w-[73%] md:w-[93%] lg:w-[83%]"
//               }`}
//           >
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         {/* Nav Links */}
//         <div
//           className={`hidden bg-[#181817] w-[70%] md:w-[60%] lg:w-[60%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out`}
//         >
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             <li>
//               <a
//                 href="#home"
//                 className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#aboutUs"
//                 className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="font-medium uppercase text-[#D2D2D0] transition-all hover:text-secondary"
//               >
//                 Contact
//               </a>
//             </li>
//             {/* Dropdown Trigger */}
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase  ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 // className="flex gap-1 px-5 py-2 rounded-lg items-center font-medium uppercase text-[#D2D2D0] transition-all hover:text-teal-300 backdrop-blur-md bg-white/20"
//                 onClick={() => setIsDropdownOpen((old) => !old)} // Open dropdown on button click
//               >
//                 More
//                 <FaChevronDown className="ml-1" /> {/* Add dropdown icon */}
//               </button>
//               {/* Dropdown Menu */}
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef} // Reference to the dropdown for outside click detection
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     <li>
//                       <a
//                         href="#item1"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick} // Close dropdown when an option is clicked
//                       >
//                         Item 1
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#item2"
//                         className="block font-secondary px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick} // Close dropdown when an option is clicked
//                       >
//                         Item 2
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#item3"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick} // Close dropdown when an option is clicked
//                       >
//                         Item 3
//                       </a>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         {/* Call Us Now Button */}
//         <div className="flex gap-7 h-full w-[50%] md:w-[20%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { useLocation } from "react-router-dom"; // Import useLocation hook
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation(); // Get current location

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleOptionClick = () => {
//     setIsDropdownOpen(false);
//   };

//   const isActive = (path: string) => location.hash === path; // Function to check active tab based on URL hash

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${
//         scrolled
//           ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
//           : "bg-transparent h-[15%]"
//       } 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         {/* Logo */}
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a
//             href="#home"
//             className={`transition-all duration-500 ease-out h-full flex justify-center items-center 
//               ${
//                 scrolled
//                   ? "w-[70%] md:w-[90%] lg:w-[80%]"
//                   : "w-[73%] md:w-[93%] lg:w-[83%]"
//               }`}
//           >
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         {/* Nav Links */}
//         <div
//           className={`hidden bg-[#181817] w-[70%] md:w-[60%] lg:w-[60%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out`}
//         >
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             <li>
//               <a
//                 href="#home"
//                 className={`font-medium uppercase ${
//                   isActive("#home") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#aboutUs"
//                 className={`font-medium uppercase ${
//                   isActive("#aboutUs") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className={`font-medium uppercase ${
//                   isActive("#services") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className={`font-medium uppercase ${
//                   isActive("#contact") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Contact
//               </a>
//             </li>
//             {/* Dropdown Trigger */}
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((old) => !old)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {/* Dropdown Menu */}
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     <li>
//                       <a
//                         href="#item1"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick}
//                       >
//                         Item 1
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#item2"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick}
//                       >
//                         Item 2
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#item3"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={handleOptionClick}
//                       >
//                         Item 3
//                       </a>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         {/* Call Us Now Button */}
//         <div className="flex gap-7 h-full w-[50%] md:w-[20%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation();

//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${
//         scrolled
//           ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
//           : "bg-transparent h-[15%]"
//       } 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <Link to="/#home" className="w-full h-full flex justify-center items-center">
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </Link>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] md:w-[60%] lg:w-[60%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             <li>
//               <Link
//                 to="/#home"
//                 className={`font-medium uppercase ${
//                   isActive("/#home") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/#aboutUs"
//                 className={`font-medium uppercase ${
//                   isActive("/#aboutUs") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/#services"
//                 className={`font-medium uppercase ${
//                   isActive("/#services") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/#contact"
//                 className={`font-medium uppercase ${
//                   isActive("/#contact") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/news"
//                 className={`font-medium uppercase ${
//                   isActive("/news") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 News
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/testimonials"
//                 className={`font-medium uppercase ${
//                   isActive("/testimonials") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Testimonials
//               </Link>
//             </li>
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     <li>
//                       <Link
//                         to="/item1"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 1
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/item2"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 2
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/item3"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 3
//                       </Link>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-7 h-full w-[50%] md:w-[20%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation();

//   // Handle scroll effect for background change
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close dropdown if clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const isActive = (path: string) => location.pathname === path;

//   // Conditionally render Navbar only on specific pages
//   if (location.pathname === "/news" || location.pathname === "/testimonials") {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${
//         scrolled
//           ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]"
//           : "bg-transparent h-[15%]"
//       } 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a href="#home" className="w-full h-full flex justify-center items-center">
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             <li>
//               <a
//                 href="#home"
//                 className={`font-medium uppercase ${
//                   isActive("/#home") || location.pathname === "/" ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#aboutUs"
//                 className={`font-medium uppercase ${
//                   isActive("/#aboutUs") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#services"
//                 className={`font-medium uppercase ${
//                   isActive("/#services") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className={`font-medium uppercase ${
//                   isActive("/#contact") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Contact
//               </a>
//             </li>
//             <li>
//               <Link
//                 to="/news"
//                 className={`font-medium uppercase ${
//                   isActive("/news") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 News
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/testimonials"
//                 className={`font-medium uppercase ${
//                   isActive("/testimonials") ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//               >
//                 Testimonials
//               </Link>
//             </li>
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     <li>
//                       <Link
//                         to="/item1"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 1
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/item2"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 2
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/item3"
//                         className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Item 3
//                       </Link>
//                     </li>
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-7 h-full w-[50%] md:w-[10%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<string | null>(null); // New activeTab state
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation();

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Conditionally render Navbar only on specific pages
//   if (location.pathname === "/news" || location.pathname === "/testimonials") {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${scrolled ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]" : "bg-transparent h-[15%]"} 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a href="#home" className="w-full h-full flex justify-center items-center">
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             {[
//               { path: "#home", label: "Home" },
//               { path: "#aboutUs", label: "About" },
//               { path: "#services", label: "Services" },
//               { path: "#contact", label: "Contact" },
//               { path: "/news", label: "News" },
//               { path: "/testimonials", label: "Testimonials" }
//             ].map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.path}
//                   className={`font-medium uppercase ${
//                     activeTab === item.path ? "text-secondary" : "text-[#D2D2D0]"
//                   } transition-all hover:text-secondary`}
//                   onClick={() => setActiveTab(item.path)} // Update activeTab on click
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     {[
//                       { path: "/item1", label: "Item 1" },
//                       { path: "/item2", label: "Item 2" },
//                       { path: "/item3", label: "Item 3" }
//                     ].map((item) => (
//                       <li key={item.label}>
//                         <Link
//                           to={item.path}
//                           className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                           onClick={() => {
//                             setIsDropdownOpen(false);
//                             setActiveTab(item.path); // Update activeTab when clicking dropdown items
//                           }}
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-7 h-full w-[50%] md:w-[10%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation();

//   // Set initial active tab based on location path
//   useEffect(() => {
//     setActiveTab(location.pathname === "/" ? "#home" : location.pathname);
//   }, [location.pathname]);

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Conditionally render Navbar only on specific pages
//   if (location.pathname === "/news" || location.pathname === "/testimonials") {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${scrolled ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]" : "bg-transparent h-[15%]"} 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a href="#home" className="w-full h-full flex justify-center items-center">
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             {[
//               { path: "#home", label: "Home" },
//               { path: "#aboutUs", label: "About" },
//               { path: "#services", label: "Services" },
//               { path: "#contact", label: "Contact" },
//               { path: "/news", label: "News" },
//               { path: "/testimonials", label: "Testimonials" }
//             ].map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.path}
//                   className={`font-medium uppercase ${
//                     activeTab === item.path ? "text-secondary" : "text-[#D2D2D0]"
//                   } transition-all hover:text-secondary`}
//                   onClick={() => setActiveTab(item.path)}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     {[
//                       { path: "/item1", label: "Item 1" },
//                       { path: "/item2", label: "Item 2" },
//                       { path: "/item3", label: "Item 3" }
//                     ].map((item) => (
//                       <li key={item.label}>
//                         <Link
//                           to={item.path}
//                           className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                           onClick={() => {
//                             setIsDropdownOpen(false);
//                             setActiveTab(item.path);
//                           }}
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-7 h-full w-[50%] md:w-[10%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import HamburgerMenu from "./hamburgar";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Set initial active tab based on location path
//   useEffect(() => {
//     if (location.hash) {
//       setActiveTab(location.hash);
//     } else {
//       setActiveTab(location.pathname);
//     }
//   }, [location.pathname, location.hash]);

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleNavClick = (path: string) => {
//     if (path.startsWith("#")) {
//       // In-page navigation
//       setActiveTab(path);
//       const section = document.querySelector(path);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // External route navigation
//       navigate(path);
//       setActiveTab(path);
//     }
//   };

//   //   // Set initial active tab based on location path
//   useEffect(() => {
//     setActiveTab(location.pathname === "/" ? "#home" : location.pathname);
//   }, [location.pathname]);

//   if (location.pathname === "/news" || location.pathname === "/testimonials") {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ease-out
//       ${scrolled ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]" : "bg-transparent h-[15%]"} 
//       flex items-center justify-center px-8 lg:px-[10rem]`}
//     >
//       <div className="flex items-center w-full h-full">
//         <div className="w-[50%] md:w-[20%] lg:w-[20%] h-full">
//           <a href="#home" className="w-full h-full flex justify-center items-center">
//             <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
//           </a>
//         </div>

//         <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent md:flex h-full items-center justify-center transition-all duration-500 ease-out">
//           <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-16 text-white md:flex-row md:w-auto font-secondary">
//             {[
//               { path: "#home", label: "Home" },
//               { path: "#aboutUs", label: "About" },
//               { path: "#services", label: "Services" },
//               { path: "#contact", label: "Contact" },
//               { path: "/news", label: "News" },
//               { path: "/testimonials", label: "Testimonials" }
//             ].map((item) => (
//               <li key={item.label}>
//                 <button
//                   className={`font-medium uppercase ${
//                     activeTab === item.path ? "text-secondary" : "text-[#D2D2D0]"
//                   } transition-all hover:text-secondary`}
//                   onClick={() => handleNavClick(item.path)}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <li className="relative">
//               <button
//                 className={`flex gap-1 rounded-lg items-center font-medium uppercase ${
//                   isDropdownOpen ? "text-secondary" : "text-[#D2D2D0]"
//                 } transition-all hover:text-secondary`}
//                 onClick={() => setIsDropdownOpen((prev) => !prev)}
//               >
//                 More
//                 <FaChevronDown className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <motion.div
//                   ref={dropdownRef}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute left-0 mt-2 w-48 backdrop-blur-md bg-white/40 rounded-md shadow-lg z-10"
//                 >
//                   <ul className="flex flex-col">
//                     {[
//                       { path: "/item1", label: "Item 1" },
//                       { path: "/item2", label: "Item 2" },
//                       { path: "/item3", label: "Item 3" }
//                     ].map((item) => (
//                       <li key={item.label}>
//                         <button
//                           className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
//                           onClick={() => {
//                             setIsDropdownOpen(false);
//                             handleNavClick(item.path);
//                           }}
//                         >
//                           {item.label}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-7 h-full w-[50%] md:w-[10%] justify-end items-center">
//           <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
//           <HamburgerMenu />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegEnvelope, FaChevronDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import HamburgerMenu from "./hamburgar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Set initial active tab based on location hash or pathname
  useEffect(() => {
    const initialPath = location.hash || (location.pathname === "/" ? "#home" : location.pathname);
    setActiveTab(initialPath);
  }, [location.pathname, location.hash]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      ${scrolled ? "bg-white/5 bg-opacity-70 backdrop-blur-md shadow-lg h-[10%]" : "bg-transparent h-[15%]"} 
      flex items-center justify-center px-8 lg:px-[10rem]`}
    >
      <div className="flex items-center w-full h-full">
        <div className="w-[50%] md:w-[30%] lg:w-[20%] h-full">
          <a href="#home" className="w-full h-full flex justify-center items-center">
            <img src="./game_on_logo.webp" alt="Logo" className="w-full" />
          </a>
        </div>

        <div className="hidden bg-[#181817] w-[70%] lg:w-[70%] md:bg-transparent lg:flex h-full items-center justify-center transition-all duration-500 ease-out">
          <ul className="flex flex-col items-center justify-center w-full gap-8 lg:gap-12 text-white md:flex-row md:w-auto font-secondary">
            {[
              { path: "#home", label: "Home" },
              { path: "#aboutUs", label: "About" },
              { path: "#services", label: "Services" },
              { path: "#contact", label: "Contact" },
              { path: "/news", label: "News" },
              { path: "/testimonials", label: "Testimonials" }
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
                      { path: "/item3", label: "Item 3" }
                    ].map((item) => (
                      <li key={item.label}>
                        <button
                          className="block px-4 py-2 text-white hover:bg-secondary font-medium uppercase rounded-md"
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

        <div className="flex gap-7 h-full w-[50%] md:w-[70%] lg:w-[10%] justify-end items-center">
          <FaRegEnvelope className="text-xl md:text-2xl text-[#D2D2D0]" />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
