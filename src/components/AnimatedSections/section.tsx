// import { useTransform, motion, MotionValue } from "framer-motion";
// import { useEffect, useState } from "react";

// // Define types for props
// interface SectionProps {
//   scrollYProgress: MotionValue<number>;
//   imageSrc: string;
//   phoneSrc: string;
//   rotateRange: [number, number]; // Unique rotate range for each section
// }

// const Section: React.FC<SectionProps> = ({
//   scrollYProgress,
//   imageSrc,
//   phoneSrc,
//   rotateRange,
// }) => {
//   const [isInitialRender, setIsInitialRender] = useState(true);
//   const [borderVisible, setBorderVisible] = useState(false); // State for border visibility
//   const [isMobileOrTablet, setIsMobileOrTablet] = useState(false); // Check for screen size

//   // Only apply transformations for laptop and desktop screens
//   const scale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     isMobileOrTablet ? [1, 1] : [1, 0.75]
//   );
//   const rotate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     isMobileOrTablet ? [0, 0] : rotateRange
//   );

//   // Dynamically select the background image based on screen size
//   const backgroundImage = isMobileOrTablet ? phoneSrc : imageSrc;

//   // Monitor scroll and show border after a certain scroll threshold
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (value) => {
//       if (value > 0.1) {
//         // Adjust the threshold based on your requirement
//         setBorderVisible(isMobileOrTablet ? false : true);
//       } else {
//         setBorderVisible(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   useEffect(() => {
//     // Check if the device is mobile or tablet
//     const handleResize = () => {
//       setIsMobileOrTablet(window.matchMedia("(max-width: 1024px)").matches);
//     };

//     handleResize(); // Run on mount
//     window.addEventListener("resize", handleResize); // Update on resize

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Disable initial animation after it completes
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsInitialRender(false);
//     }, 1000); // Match the animation duration

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <motion.div
//       // Apply initial animation only on the first render
//       style={{ scale: isInitialRender ? undefined : scale, rotate }}
//       className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
//       initial={isInitialRender ? { scale: 0.8, opacity: 0 } : {}}
//       animate={isInitialRender ? { scale: 1, opacity: 1 } : {}}
//       transition={isInitialRender ? { duration: 1, ease: "easeOut" } : {}}
//     >
//       <div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//         className={`relative min-h-screen w-full ${
//           borderVisible ? "border-4 border-yellow-800 border-opacity-40" : ""
//         }`}
//       />
//     </motion.div>
//   );
// };

// export default Section;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define types for props
interface SectionProps {
  imageSrc: string;
  phoneSrc: string;
}

const Section: React.FC<SectionProps> = ({ imageSrc, phoneSrc }) => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false); // Check for screen size

  // Dynamically select the background image based on screen size
  const backgroundImage = isMobileOrTablet ? phoneSrc : imageSrc;

  useEffect(() => {
    // Check if the device is mobile or tablet
    const handleResize = () => {
      setIsMobileOrTablet(window.matchMedia("(max-width: 1024px)").matches);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable initial animation after it completes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInitialRender(false);
    }, 1000); // Match the animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="sticky top-0 h-screen flex flex-col items-center justify-center text-white"
      initial={isInitialRender ? { scale: 0.8, opacity: 0 } : {}}
      animate={isInitialRender ? { scale: 1, opacity: 1 } : {}}
      transition={isInitialRender ? { duration: 1, ease: "easeOut" } : {}}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`relative min-h-screen w-full`}
      />
    </motion.div>
  );
};

export default Section;
