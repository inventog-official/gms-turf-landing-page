// import React, { useEffect, useRef, useState } from "react";
// import { useScroll } from "framer-motion";
// import Lenis from "lenis";
// import { useCarousel } from "@/hook/useCarousel";
// import { SlBadge } from "react-icons/sl";
// import TextHoverAnimation from "../textHoverAnimation";
// import FootballAnimation from "../footballAnimation";
// import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
// import Section from "./section";

// const AnimatedSections: React.FC = () => {
//   const container = useRef<HTMLDivElement | null>(null);
//   const headingRef = useRef<HTMLDivElement | null>(null);

//   const [hideHeading, setHideHeading] = useState(false);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//     phoneUrl: string;
//   }[];

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const lenis = new Lenis({
//       smoothWheel: true,
//       touchMultiplier: 1,
//       wheelMultiplier: 1.5, // Adjust to increase or decrease scrolling speed
//       autoResize: true,
//     });

//     function raf(time: any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   // Check if data is available before rendering sections
//   if (!data || data.length === 0) {
//     return (
//       <main ref={container} className="relative h-[100vh]">
//         <div className="flex items-center justify-center text-white text-2xl">
//           No data available for carousel.
//         </div>
//       </main>
//     );
//   }

//   // Dynamically create the sections from the `data` array
//   const sections = data?.map((item, index) => ({
//     imageSrc: item.url,
//     phoneSrc: item.phoneUrl,
//     rotateRange: [0, index % 2 === 0 ? -5 : 5],
//   }));

//   // Detect if last section is near the bottom of the viewport
//   useEffect(() => {
//     const handleScroll = () => {
//       if (container.current) {
//         const containerBottom =
//           container.current.getBoundingClientRect().bottom * 1.25;

//         // When the last section is about to scroll off the screen
//         if (containerBottom <= window.innerHeight) {
//           setHideHeading(true);
//         } else {
//           setHideHeading(false);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [data]);

//   return (
//     <main
//       ref={container}
//       className={`relative h-[${data?.length}00vh] select-none`}
//     >
//       {sections.map((section, index) => (
//         <Section
//           key={index}
//           scrollYProgress={scrollYProgress}
//           imageSrc={section.imageSrc}
//           phoneSrc={section.phoneSrc}
//           rotateRange={section.rotateRange as [number, number]}
//         />
//       ))}
//       <div
//         ref={headingRef}
//         className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
//           hideHeading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight opacity-0 animate-lineUp transition-all duration-300 delay-300">
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
//         <h1 className="text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight transition-all duration-300 opacity-0 animate-lineUp delay-500">
//           <TextHoverAnimation text={"Sports"} />
//           <div className="text-secondary">
//             <TextHoverAnimation text={"infrastructure"} />
//           </div>
//           <span className="">
//             {/* <span className="md:block hidden"> */}
//             <TextHoverAnimation text={"Developer"} />
//           </span>
//         </h1>
//       </div>
//       <div className="border-4 border-red-900 w-full min-h-[40vh] z-10 fixed bottom-[5%] px-20 flex justify-center items-end">
//         {/* Grid Alignment Started */}
//         <div className="w-full lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 grid-rows-1 ">
//           {/** Icon 1 - for image 2 (col-1) */}
//           <div className="gird col-start-1 row-start-1">
//             <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//               <div className="flex flex-col md:items-center items-start  space-y-1">
//                 <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                   <img
//                     src={iconsWithImagesObj[0].imageSrc}
//                     className="h-full w-full  md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                     draggable="false"
//                   />
//                 </div>

//                 <span className="flex w-full  flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                   <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                     {iconsWithImagesObj[0].title}
//                   </h1>

//                   <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                     {iconsWithImagesObj[0].description}
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/** Icon 2 - for image 3 (col-2)*/}
//           <div className="grid col-start-2 row-start-1">
//             <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//               <div className="flex flex-col md:items-center items-start  space-y-1">
//                 <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                   <img
//                     src={iconsWithImagesObj[1].imageSrc}
//                     className="h-full w-full  md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                     draggable="false"
//                   />
//                 </div>
//                 <span className="flex w-full  flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                   <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                     {iconsWithImagesObj[1].title}
//                   </h1>

//                   <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                     {iconsWithImagesObj[1].description}
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/** Football - for image 1 (col-3) (default)*/}
//           <div className="grid col-start-3 row-start-1">
//             <div className="flex justify-center items-end">
//               <FootballAnimation />
//             </div>
//           </div>
//           {/** Icon 3 - for image 4 (col-4) */}
//           <div className="gird col-start-4 row-start-1">
//             <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//               <div className="flex flex-col md:items-center items-start  space-y-1">
//                 <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                   <img
//                     src={iconsWithImagesObj[2].imageSrc}
//                     className="h-full w-full  md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                     draggable="false"
//                   />
//                 </div>

//                 <span className="flex w-full  flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                   <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                     {iconsWithImagesObj[2].title}
//                   </h1>

//                   <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                     {iconsWithImagesObj[2].description}
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/** Icon 4 - for image 5 (col-5) */}
//           <div className="grid col-start-5 row-start-1">
//             <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//               <div className="flex flex-col md:items-center items-start  space-y-1">
//                 <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                   <img
//                     src={iconsWithImagesObj[3].imageSrc}
//                     className="h-full w-full  md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                     draggable="false"
//                   />
//                 </div>

//                 <span className="flex w-full  flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                   <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                     {iconsWithImagesObj[3].title}
//                   </h1>

//                   <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                     {iconsWithImagesObj[3].description}
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AnimatedSections;

// import React, { useEffect, useRef, useState } from "react";
// import { useScroll } from "framer-motion";
// import Lenis from "lenis";
// import { useCarousel } from "@/hook/useCarousel";
// import { SlBadge } from "react-icons/sl";
// import TextHoverAnimation from "../textHoverAnimation";
// import FootballAnimation from "../footballAnimation";
// import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
// import Section from "./section";

// const AnimatedSections: React.FC = () => {
//   const container = useRef<HTMLDivElement | null>(null);
//   const headingRef = useRef<HTMLDivElement | null>(null);

//   const [hideHeading, setHideHeading] = useState(false);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//     phoneUrl: string;
//   }[];

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const lenis = new Lenis({
//       smoothWheel: true,
//       touchMultiplier: 1,
//       wheelMultiplier: 1.5, // Adjust to increase or decrease scrolling speed
//       autoResize: true,
//     });

//     function raf(time: any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   // Check if data is available before rendering sections
//   if (!data || data.length === 0) {
//     return (
//       <main ref={container} className="relative h-[100vh]">
//         <div className="flex items-center justify-center text-white text-2xl">
//           No data available for carousel.
//         </div>
//       </main>
//     );
//   }

//   // Dynamically create the sections from the `data` array
//   const sections = data?.map((item, index) => ({
//     imageSrc: item.url,
//     phoneSrc: item.phoneUrl,
//     rotateRange: [0, index % 2 === 0 ? -5 : 5],
//   }));

//   // Detect if last section is near the bottom of the viewport
//   useEffect(() => {
//     const handleScroll = () => {
//       if (container.current) {
//         const containerBottom =
//           container.current.getBoundingClientRect().bottom * 1.25;

//         // When the last section is about to scroll off the screen
//         if (containerBottom <= window.innerHeight) {
//           setHideHeading(true);
//         } else {
//           setHideHeading(false);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [data]);

//   return (
//     <main
//       ref={container}
//       className={`relative h-[${data?.length}00vh] select-none`}
//     >
//       {sections.map((section, index) => (
//         <Section
//           key={index}
//           scrollYProgress={scrollYProgress}
//           imageSrc={section.imageSrc}
//           phoneSrc={section.phoneSrc}
//           rotateRange={section.rotateRange as [number, number]}
//         />
//       ))}
//       <div
//         ref={headingRef}
//         className={`z-10 fixed text-center top-[15%] w-full transition-all duration-500 ${
//           hideHeading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <h1 className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight opacity-0 animate-lineUp transition-all duration-300 delay-300">
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
//         <h1 className="text-2xl md:text-3xl lg:text-[3rem] xl:text-[3.5rem] flex items-center justify-center gap-2 font-primary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] text-white uppercase leading-tight transition-all duration-300 opacity-0 animate-lineUp delay-500">
//           <TextHoverAnimation text={"Sports"} />
//           <div className="text-secondary">
//             <TextHoverAnimation text={"infrastructure"} />
//           </div>
//           <span className="">
//             {/* <span className="md:block hidden"> */}
//             <TextHoverAnimation text={"Developer"} />
//           </span>
//         </h1>
//       </div>
//       <div className="border-4 border-red-900 w-full min-h-[40vh] z-[1000] fixed bottom-[5%] px-20 flex justify-center items-end">
//         {/* Grid Alignment Started */}
//         <div className="w-full lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 grid-rows-1 ">
//           {iconsWithImagesObj.map((icon, index) => (
//             <div
//               key={index}
//               className={`grid col-start-${icon.col} row-start-1`}
//             >
//               <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
//                 <div className="flex flex-col md:items-center items-start space-y-1">
//                   <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
//                     <img
//                       src={icon.imageSrc}
//                       className="h-full w-full md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
//                       draggable="false"
//                     />
//                   </div>
//                   <span className="flex w-full flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
//                     <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
//                       {icon.title}
//                     </h1>
//                     <p className="text-md md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
//                       {icon.description}
//                     </p>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/** Football - for image 1 (col-3) (default)*/}
//           <div className="grid col-start-3 row-start-1">
//             <div className="flex justify-center items-end">
//               <FootballAnimation />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AnimatedSections;

import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import Lenis from "lenis";
import { useCarousel } from "@/hook/useCarousel";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";
import FootballAnimation from "../footballAnimation";
import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import Section from "./section";

const AnimatedSections: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const [hideHeading, setHideHeading] = useState(false);

  const [visibleIconIndex, setVisibleIconIndex] = useState<number | null>(null);

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

        const { top, height } = container.current.getBoundingClientRect();
        const sectionHeight = height / sections.length;

        // Calculate which section is in view
        const activeIndex = Math.floor(
          (-top + window.innerHeight / 2) / sectionHeight - 1
        );
        setVisibleIconIndex(
          activeIndex >= 0 && activeIndex < sections.length ? activeIndex : null
        );

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
      className={`relative h-[${data?.length}00vh] select-none mb-[5%]`}
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
      <div className="border-4 border-red-900 w-full min-h-[40vh] z-[1000] fixed bottom-[5%] px-20 flex justify-center items-end">
        <div className="grid lg:grid-cols-5 md:grid-cols-5">
          {iconsWithImagesObj.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                visibleIconIndex === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className={`grid col-start-${icon.col} row-start-1`}
            >
              <div className="flex flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center">
                <div className="flex flex-col md:items-center items-start space-y-1">
                  <div className="items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                    <img
                      src={icon.imageSrc}
                      className="h-full w-full md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                      draggable="false"
                    />
                  </div>
                  <span className="flex w-full flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
                    <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
                      {icon.title}
                    </h1>
                    <p className="text-md md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
                      {icon.description}
                    </p>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {/** Football - for image 1 (col-3) (default)*/}
          <div
            className={`z-10 grid col-start-3 row-start-1 transition-all duration-500 ${
              hideHeading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex justify-center items-end">
              <FootballAnimation />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimatedSections;
