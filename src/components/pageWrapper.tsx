// import React, { useState, useEffect } from "react";

// interface PageWrapperProps {
//   children: React.ReactNode;
// }

// const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`min-h-screen transition-opacity duration-1000 ease-in-out ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default PageWrapper;

// import React, { useEffect, useState } from "react";

// interface PageWrapperProps {
//   children: React.ReactNode;
// }

import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="animate-fadeIn transform transition duration-1000 ease-in-out opacity-0 translate-y-10">
      {children}
    </div>
  );
};

export default PageWrapper;

// const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger fade-in effect after the component mounts
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100); // Slight delay to ensure smooth transition
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`transition-opacity duration-700 ease-in-out ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default PageWrapper;
