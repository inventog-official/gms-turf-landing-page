import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lenis from "lenis";
import { useCarousel } from "@/hook/useCarousel";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";

// Define types for props
interface SectionProps {
  scrollYProgress: MotionValue<number>;
  imageSrc: string;
  phoneSrc: string;
  rotateRange: [number, number]; // Unique rotate range for each section
}

const AnimatedSections: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const [hideHeading, setHideHeading] = useState(false);

  const { queryClient } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
    phoneUrl: string;
  }[];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // const lenis = new Lenis();
    const lenis = new Lenis({
      smoothWheel: true,
      touchMultiplier: 1,
      wheelMultiplier: 1.5, // Adjust to increase or decrease scrolling speed
      autoResize: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Check if data is available before rendering sections
  if (!data || data.length === 0) {
    return (
      <main ref={container} className="relative h-[100vh]">
        <div className="flex items-center justify-center text-white text-2xl">
          No data available for carousel.
        </div>
      </main>
    );
  }

  // Dynamically create the sections from the `data` array
  const sections = data?.map((item, index) => ({
    imageSrc: item.url,
    phoneSrc: item.phoneUrl,
    rotateRange: [0, index % 2 === 0 ? -5 : 5],
  }));

  // Detect if last section is near the bottom of the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (container.current) {
        const containerBottom =
          container.current.getBoundingClientRect().bottom * 1.25;

        // When the last section is about to scroll off the screen
        if (containerBottom <= window.innerHeight) {
          setHideHeading(true);
        } else {
          setHideHeading(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <main
      ref={container}
      // className={`relative h-[500vh] select-none`}
      className={`relative h-[${data?.length}00vh] select-none`}
    >
      {sections.map((section, index) => (
        <Section
          key={index}
          scrollYProgress={scrollYProgress}
          imageSrc={section.imageSrc}
          phoneSrc={section.phoneSrc}
          rotateRange={section.rotateRange as [number, number]}
        />
      ))}
      <div
        ref={headingRef}
        className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
          hideHeading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight opacity-0 animate-lineUp transition-all duration-300 delay-300">
          <span className="text-secondary">
            <SlBadge />
          </span>
          <TextHoverAnimation text={"South"} />
          <TextHoverAnimation text={"India's"} />
          <span className="text-secondary">
            {" "}
            <TextHoverAnimation text={"No.1"} />
          </span>
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight transition-all duration-300 opacity-0 animate-lineUp delay-500">
          <TextHoverAnimation text={"Sports"} />
          <div className="text-secondary">
            <TextHoverAnimation text={"infrastructure"} />
          </div>
          <span className="">
            {/* <span className="md:block hidden"> */}
            <TextHoverAnimation text={"Developer"} />
          </span>
        </h1>
      </div>
    </main>
  );
};

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

export default AnimatedSections;
