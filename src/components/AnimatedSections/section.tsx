import { useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// Define types for props
interface SectionProps {
    scrollYProgress: MotionValue<number>;
    imageSrc: string;
    phoneSrc: string;
    rotateRange: [number, number]; // Unique rotate range for each section
  }

const Section: React.FC<SectionProps> = ({
    scrollYProgress,
    imageSrc,
    phoneSrc,
    rotateRange,
  }) => {
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [borderVisible, setBorderVisible] = useState(false); // State for border visibility
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
    const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);
  
    // Dynamically select the background image based on screen size
    const backgroundImage = window.matchMedia("(max-width: 768px)").matches
      ? phoneSrc
      : imageSrc;
  
    // Monitor scroll and show border after a certain scroll threshold
    useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (value) => {
        if (value > 0.1) {
          // Adjust the threshold based on your requirement
          setBorderVisible(true);
        } else {
          setBorderVisible(false);
        }
      });
  
      return () => unsubscribe();
    }, [scrollYProgress]);
    // Disable initial animation after it completes
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsInitialRender(false);
      }, 1000); // Match the animation duration
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <motion.div
        // Apply initial animation only on the first render
        style={{ scale: isInitialRender ? undefined : scale, rotate }}
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
          className={`relative min-h-screen w-full ${
            borderVisible ? "border-4 border-yellow-800 border-opacity-40" : ""
          }`}
        />
      </motion.div>
    );
  };

  export default Section;