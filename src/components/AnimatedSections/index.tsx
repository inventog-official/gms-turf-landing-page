// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useCarousel } from "@/hook/useCarousel";
// import { SlBadge } from "react-icons/sl";
// import TextHoverAnimation from "../textHoverAnimation";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//     phoneUrl: string;
//   }[];

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Function to handle screen size changes
//     const handleResize = () => {
//       setIsMobile(window.matchMedia("(max-width: 768px)").matches);
//     };

//     // Initialize the media query check
//     handleResize();

//     // Add a listener for screen size changes
//     window.addEventListener("resize", handleResize);

//     // Cleanup listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (!data || data?.length === 0) return;

//     // Initial Animation for the First Section
//     const initialImage = imagesRef.current[0];
//     if (initialImage) {
//       gsap.fromTo(
//         initialImage,
//         { scale: 1.2, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
//       );
//     }

//     // Set up animations for each section
//     sectionsRef.current.forEach((section, index) => {
//       const image = imagesRef.current[index];
//       if (section && image) {
//         gsap.set(image, { scale: 1, opacity: 1, yPercent: 0 });

//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // Parallax animation for image
//             gsap.to(image, {
//               scale: 1,
//               opacity: 1 - progress * 0.9,
//               yPercent: progress * 60,
//               ease: "power3.out",
//               overwrite: "auto",
//             });
//           },
//           // Add snapping effect to make the section fill the screen
//           snap: {
//             snapTo: 1, // Snapping happens to the start of each section
//             duration: 2, // Duration of the snap effect
//             delay: 0.1, // Delay before snapping
//             ease: "power3.out", // Smooth easing for snapping effect
//             onStart: () => {
//               // Start the overlay transition effect when snapping starts
//               gsap.to(imagesRef.current, {
//                 opacity: 1, // Apply opacity change for overlay effect
//                 duration: 0.1,
//                 delay: 0.001, // Delay
//                 ease: "power3.out",
//               });
//             },
//             onComplete: () => {
//               // Reset the overlay effect once the snap is complete
//               gsap.to(sectionsRef.current, {
//                 opacity: 1,
//                 duration: 0.1,
//                 ease: "power3.out",
//               });
//             },
//           },

//           //           // Set the labels for each section
//           markers: false, // Optionally enable markers for debugging
//         });
//       }
//     });

//     // Handle Heading Animation
//     const heading = headingRef.current;
//     if (heading) {
//       // Static Heading for All Sections Except Last
//       const lastSection = sectionsRef.current[sectionsRef.current.length - 1];

//       if (lastSection) {
//         // Fixed position for all sections except the last
//         gsap.set(heading, { yPercent: 0, opacity: 1 });

//         // Scroll animation for last section
//         ScrollTrigger.create({
//           trigger: lastSection,
//           start: "top top",
//           end: "bottom+=60% bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // Sync heading scroll with last section
//             gsap.to(heading, {
//               yPercent: -progress * 100, // Moves up as last section scrolls
//               opacity: 1 - progress, // Fades out as it moves
//               ease: "power3.out",
//               overwrite: "auto",
//             });
//           },
//         });
//       }
//     }

//     // Cleanup ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [data]);

//   return (
//     <div ref={containerRef} className="relative select-none">
//       {data?.map((section, index) => (
//         <section
//           key={section.id}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="relative min-h-screen overflow-hidden"
//         >
//           <img
//             ref={(el) => (imagesRef.current[index] = el)}
//             src={isMobile ? section.phoneUrl : section.url}
//             // src={section.url}
//             alt={`Background for ${section.id}`}
//             className="absolute h-full w-full object-cover z-0 will-change-transform shadow-white shadow-inner"
//           />
//         </section>
//       ))}
//       <div ref={headingRef} className="z-10 fixed text-center top-[15%] w-full">
//         <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight opacity-0 animate-lineUp transition-all duration-300 delay-300">
//           <span className="text-secondary">
//             <SlBadge />
//           </span>
//           <TextHoverAnimation text={"South"} />
//           <TextHoverAnimation text={"India's"} />
//           <span className="text-secondary">
//             {" "}
//             <TextHoverAnimation text={"No.1"} />
//           </span>
//         </h1>
//         <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight transition-all duration-300 opacity-0 animate-lineUp delay-500">
//           <TextHoverAnimation text={"Sports"} />
//           <div className="text-secondary">
//             <TextHoverAnimation text={"infrastructure"} />
//           </div>
//           <span className="">
//           {/* <span className="md:block hidden"> */}
//             <TextHoverAnimation text={"Builder"} />
//           </span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default AnimatedSections;

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
    const lenis = new Lenis();

    const scrollHandler = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollHandler);
    };

    requestAnimationFrame(scrollHandler);

    return () => {
      lenis.destroy();
    };
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
    rotateRange: [0, index % 2 === 0 ? -6.5 : 6.5],
  }));

  // Detect if last section is near the bottom of the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (container.current) {
        const containerBottom =
          container.current.getBoundingClientRect().bottom * 1.5;

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
      className={`relative h-[${data.length}00vh] select-none`}
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
        <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight opacity-0 animate-lineUp transition-all duration-300 delay-300">
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
        <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight transition-all duration-300 opacity-0 animate-lineUp delay-500">
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

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useCarousel } from "@/hook/useCarousel";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingRef = useRef<HTMLDivElement | null>(null);
//   const lastTextRef = useRef<HTMLDivElement | null>(null);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     if (!data || data?.length === 0) return;

//     const initialImage = imagesRef.current[0];
//     if (initialImage) {
//       gsap.fromTo(
//         initialImage,
//         { scale: 1.2, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
//       );
//     }

//     sectionsRef.current.forEach((section, index) => {
//       const image = imagesRef.current[index];
//       if (section && image) {
//         gsap.set(image, { scale: 1, opacity: 1, yPercent: 0 });

//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             gsap.to(image, {
//               scale: 1,
//               opacity: 1 - progress * 0.9,
//               yPercent: progress * 60,
//               ease: "power3.out",
//               overwrite: "auto",
//             });
//           },
//         });
//       }
//     });

//     const heading = headingRef.current;
//     if (heading) {
//       const lastSection = sectionsRef.current[sectionsRef.current.length - 1];

//       if (lastSection) {
//         gsap.set(heading, { yPercent: 0, opacity: 1 });

//         ScrollTrigger.create({
//           trigger: lastSection,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             gsap.to(heading, {
//               yPercent: -progress * 100,
//               opacity: 1 - progress,
//               ease: "power3.out",
//               overwrite: "auto",
//             });
//           },
//         });

//         const lastText = lastTextRef.current;
//         if (lastText) {
//           gsap.set(lastText, { opacity: 0, y: 50 });

//           ScrollTrigger.create({
//             trigger: lastSection,
//             start: "center center",
//             end: "bottom bottom",
//             scrub: true,
//             onEnter: () => {
//               gsap.to(lastText, {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power3.out",
//               });
//             },
//           });
//         }
//       }
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [data]);

//   return (
//     <div className="relative">
//       {data?.map((section, index) => (
//         <section
//           key={section.id}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="relative min-h-screen overflow-hidden"
//         >
//           <img
//             ref={(el) => (imagesRef.current[index] = el)}
//             src={section.url}
//             alt={`Background for ${section.id}`}
//             className="absolute h-full w-full object-cover z-0 will-change-transform"
//           />
//         </section>
//       ))}
//       <div
//         ref={headingRef}
//         className="z-10 fixed text-center top-[15%] w-full"
//       >
//         <div className="w-full flex text-5xl font-primary uppercase text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] justify-center">
//           South India's No.1
//         </div>
//       </div>
//       <div
//         ref={lastTextRef}
//         className="absolute bottom-10 text-center w-full text-3xl font-bold text-white opacity-0"
//       >
//         Last Section Animated Text
//       </div>
//     </div>
//   );
// };

// export default AnimatedSections;
