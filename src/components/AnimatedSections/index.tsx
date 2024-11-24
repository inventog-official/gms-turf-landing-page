// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useCarousel } from "@/hook/useCarousel";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

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
//       const heading = headingsRef.current[index];

//       // Skip animations for the last section
//       if (index === sectionsRef.current.length - 1) return;

//       if (section && image && heading) {
//         // Set static initial properties to prevent layout shifts
//         gsap.set(image, { scale: 1, opacity: 1, yPercent: 0 });
//         gsap.set(heading, { opacity: 1, yPercent: 0 });

//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: "bottom top",
//           scrub: false,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // Animate image
//             gsap.to(image, {
//               scale: 1,
//               opacity: 1 - progress * 0.9,
//               yPercent: progress * 60,
//               blur: progress * 20, // Adding blur effect, the value can be adjusted
//               ease: "power3.out",
//               overwrite: "auto", // Prevent conflicting animations
//               willChange: "transform, opacity, filter", // Enable will-change optimization
//               zIndex: progress > 0.5 ? 10 : 0, // Ensure z-index is higher for overlay sections
//             });

//             // Animate heading
//             gsap.to(heading, {
//               opacity: 1 - progress,
//               yPercent: progress * 50,
//               blur: progress * 10, // Adding blur effect, the value can be adjusted
//               ease: "power3.out",
//               overwrite: "auto", // Prevent conflicting animations
//               willChange: "transform, opacity, filter", // Enable will-change optimization
//               zIndex: progress > 0.5 ? 10 : 0, // Ensure z-index is higher for overlay sections
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

//           // Set the labels for each section
//           markers: false, // Optionally enable markers for debugging
//         });
//       }
//     });

//     // Cleanup ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [data]);

//   return (
//     <div ref={containerRef} className="relative">
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
//             className="absolute h-full w-full object-cover z-0 will-change-transform shadow-white shadow-inner"
//           />
//           <h2
//             ref={(el) => (headingsRef.current[index] = el)}
//             className="z-10 absolute text-center top-[50%] w-full"
//           >
//             <div className="w-full flex text-5xl font-primary text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] justify-center">
//               Section
//             </div>
//           </h2>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

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

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCarousel } from "@/hook/useCarousel";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSections = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { queryClient } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
    phoneUrl: string;
  }[];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initialize the media query check
    handleResize();

    // Add a listener for screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!data || data?.length === 0) return;

    // Initial Animation for the First Section
    const initialImage = imagesRef.current[0];
    if (initialImage) {
      gsap.fromTo(
        initialImage,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
      );
    }

    // Set up animations for each section
    sectionsRef.current.forEach((section, index) => {
      // Skip animations for the last section
      if (index === sectionsRef.current.length - 1) return;
      
      const image = imagesRef.current[index];
      if (section && image) {
        gsap.set(image, { scale: 1, opacity: 1, yPercent: 0 });

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Animate current image to fade out and move up
            gsap.to(image, {
              scale: 1 + progress * 0.2, // Slightly zoom in
              opacity: 1 - progress * 0.7, // Fade out as you scroll
              yPercent: progress * 60, // Parallax effect
              ease: "power3.out",
              overwrite: "auto",
            });

            // Reveal the next image with fade-in and upward movement
            const nextImage = imagesRef.current[index + 1];
            if (nextImage) {
              gsap.to(nextImage, {
                opacity: progress * 0.7, // Fade in
                yPercent: 0, // Parallax effect for next image
                scale: 1 + progress * 0.1, // Slight zoom-in effect for the next image
                ease: "power3.out",
                overwrite: "auto",
              });
            }
          },
          snap: {
            snapTo: 1,
            duration: 2,
            delay: 0.1,
            ease: "power3.out",
            onStart: () => {
              gsap.to(imagesRef.current, {
                opacity: 1,
                duration: 0.1,
                delay: 0.001,
                ease: "power3.out",
              });
            },
            onComplete: () => {
              gsap.to(sectionsRef.current, {
                opacity: 1,
                duration: 0.1,
                ease: "power3.out",
              });
            },
          },
          markers: false, // Disable markers
        });
      }
    });

    // Handle Heading Animation
    const heading = headingRef.current;
    if (heading) {
      const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
      if (lastSection) {
        gsap.set(heading, { yPercent: 0, opacity: 1 });

        ScrollTrigger.create({
          trigger: lastSection,
          start: "top top",
          end: "bottom+=60% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(heading, {
              yPercent: -progress * 100,
              opacity: 1 - progress,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      }
    }

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative select-none">
      {data?.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="relative min-h-screen overflow-hidden"
        >
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            src={isMobile ? section.phoneUrl : section.url}
            alt={`Background for ${section.id}`}
            className="absolute h-full w-full object-cover z-0 will-change-transform shadow-white shadow-inner"
          />
        </section>
      ))}
      <div ref={headingRef} className="z-10 fixed text-center top-[15%] w-full">
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
            <TextHoverAnimation text={"Builder"} />
          </span>
        </h1>
      </div>
    </div>
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
