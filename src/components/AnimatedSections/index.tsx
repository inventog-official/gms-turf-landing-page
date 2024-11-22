// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// // Define a SectionData type for better typing
// interface SectionData {
//   id: string;
//   heading: string;
//   backgroundImage: string;
// }
// const AnimatedSections = () => {
//   // Update refs types to accept HTMLElement | null
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const outerRefs = useRef<(HTMLElement | null)[]>([]);
//   const innerRefs = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);
//   const sectionsData: SectionData[] = [
//     {
//       id: "first",
//       heading: "Scroll down",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
//     },
//     {
//       id: "second",
//       heading: "Animated with GSAP",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920",
//     },
//     {
//       id: "third",
//       heading: "GreenSock",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920",
//     },
//     {
//       id: "fourth",
//       heading: "Animation platform",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920",
//     },
//     {
//       id: "fifth",
//       heading: "Keep scrolling",
//       backgroundImage:
//         "https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75&w=1920",
//     },
//   ];
//   useEffect(() => {
//     gsap.registerPlugin(Observer);
//     let currentIndex = 1;
//     const totalSections = sectionsData.length;
//     let animating = false;
//     const gotoSection = (index: number, direction: number) => {
//       // Prevent navigation beyond first and last sections
//       if (index < 0 || index >= totalSections) return;
//       animating = true;
//       const fromTop = direction === -1;
//       const dFactor = fromTop ? -1 : 1;
//       const tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: () => {
//           animating = false;
//         },
//       });
//       if (currentIndex >= 0) {
//         gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
//         tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor }).set(
//           sectionsRef.current[currentIndex],
//           { autoAlpha: 0 }
//         );
//       }
//       gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
//       tl.fromTo(
//         [outerRefs.current[index], innerRefs.current[index]],
//         { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//         { yPercent: 0 },
//         0
//       )
//         .fromTo(
//           imagesRef.current[index],
//           { yPercent: 15 * dFactor },
//           { yPercent: 0 },
//           0
//         )
//         .fromTo(
//           headingsRef.current[index],
//           { autoAlpha: 0, yPercent: 150 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1,
//             ease: "power2",
//             stagger: { each: 0.02, from: "random" },
//           },
//           0.2
//         );
//       currentIndex = index;
//     };
//     Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });
//     gotoSection(0, 1);
//   }, []);
//   return (
//     <div className="min-h-screen">
//       {sectionsData.map((section, index) => (
//         <section
//           key={section.id}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="fixed w-full h-full top-0 invisible"
//         >
//           <div
//             ref={(el) => (outerRefs.current[index] = el)}
//             className="w-full h-full overflow-hidden"
//           >
//             <div
//               ref={(el) => (innerRefs.current[index] = el)}
//               className="w-full h-full overflow-hidden"
//             >
//               <img
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 src={section.backgroundImage}
//                 alt={`Background for ${section.heading}`}
//                 className="absolute h-full w-full top-0 object-cover z-10"
//               />
//               <h2
//                 ref={(el) => (headingsRef.current[index] = el)}
//                 className="z-20 absolute text-center top-[50%]  w-full"
//               >
//                 <div className="w-full  flex text-5xl font-primary text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] justify-center">
//                   {section.heading}
//                 </div>
//               </h2>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };
// export default AnimatedSections;

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import { useCarousel } from "@/hook/useCarousel";

// const AnimatedSections = () => {
//   // Update refs types to accept HTMLElement | null
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const outerRefs = useRef<(HTMLElement | null)[]>([]);
//   const innerRefs = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     gsap.registerPlugin(Observer);
//     let currentIndex = 1;
//     const totalSections = data?.length;
//     // const totalSections = sectionsData.length;
//     let animating = false;

//     const gotoSection = (index: number, direction: number) => {
//       // Prevent navigation beyond first and last sections
//       if (index < 0 || index >= totalSections) return;
//       animating = true;
//       const fromTop = direction === -1;
//       const dFactor = fromTop ? -1 : 1;
//       const tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: () => {
//           animating = false;
//         },
//       });
//       if (currentIndex >= 0) {
//         gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
//         tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor }).set(
//           sectionsRef.current[currentIndex],
//           { autoAlpha: 0 }
//         );
//       }
//       gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
//       tl.fromTo(
//         [outerRefs.current[index], innerRefs.current[index]],
//         { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//         { yPercent: 0 },
//         0
//       )
//         .fromTo(
//           imagesRef.current[index],
//           { yPercent: 15 * dFactor },
//           { yPercent: 0 },
//           0
//         )
//         .fromTo(
//           headingsRef.current[index],
//           { autoAlpha: 0, yPercent: 150 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1,
//             ease: "power2",
//             stagger: { each: 0.02, from: "random" },
//           },
//           0.2
//         );
//       currentIndex = index;
//     };

//     Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });
//     gotoSection(0, 1);
//   }, []);
//   return (
//     <div className="min-h-screen">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="fixed w-full h-full top-0 invisible"
//         >
//           <div
//             ref={(el) => (outerRefs.current[index] = el)}
//             className="w-full h-full overflow-hidden"
//           >
//             <div
//               ref={(el) => (innerRefs.current[index] = el)}
//               className="w-full h-full overflow-hidden"
//             >
//               <img
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 src={section.url}
//                 alt={`Background for ${section.id}`}
//                 className="absolute h-full w-full top-0 object-cover z-10"
//               />
//               <h2
//                 ref={(el) => (headingsRef.current[index] = el)}
//                 className="z-20 absolute text-center top-[50%]  w-full"
//               >
//                 <div className="w-full flex text-5xl font-primary text-secondary [text-shadow:_7px_7px_7px_rgba(10,10,10,0.25)] justify-center">
//                   {section.id}
//                 </div>
//               </h2>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };
// export default AnimatedSections;

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import { useCarousel } from "@/hook/useCarousel";

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const outerRefs = useRef<(HTMLElement | null)[]>([]);
//   const innerRefs = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     gsap.registerPlugin(Observer);

//     let currentIndex = 0;
//     const totalSections = data?.length || 0;
//     let animating = false;

//     const gotoSection = (index: number, direction: number) => {
//       if (index < 0 || index >= totalSections || animating) return;

//       animating = true;
//       const dFactor = direction === -1 ? -1 : 1;

//       const tl = gsap.timeline({
//         defaults: { duration: 1.5, ease: "power3.inOut" },
//         onComplete: () => {
//           animating = false;
//         },
//       });

//       if (currentIndex >= 0) {
//         // Animate out the current section
//         gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
//         tl.to(imagesRef.current[currentIndex], {
//           scale: 1,
//           yPercent: -20 * dFactor,
//           opacity: 1,
//         }).set(sectionsRef.current[currentIndex], { autoAlpha: 0 });
//       }

//       // Animate in the target section
//       gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
//       tl.fromTo(
//         [outerRefs.current[index], innerRefs.current[index]],
//         { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor), opacity: 1 },
//         { yPercent: 0, opacity: 1 },
//         0
//       )
//         .fromTo(
//           imagesRef.current[index],
//           { scale: 1, yPercent: 20 * dFactor, opacity: 1 },
//           { scale: 1, yPercent: 0, opacity: 1 },
//           0
//         )
//         .fromTo(
//           headingsRef.current[index],
//           { autoAlpha: 0, yPercent: 20 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1.2,
//             ease: "power3.out",
//             stagger: { each: 0.03, from: "random" },
//           },
//           0.2
//         );

//       currentIndex = index;
//     };

//     Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 5,
//       preventDefault: true,
//     });

//     // Initial Animation
//     gsap.fromTo(
//       imagesRef.current[0],
//       { scale: 1.2, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       headingsRef.current[0],
//       { autoAlpha: 0, yPercent: 0 },
//       { autoAlpha: 1, yPercent: 0, duration: 1.5, ease: "power3.out" }
//     );
//   }, [data]);

//   return (
//     <div className="min-h-screen">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className={`fixed w-full h-full top-0 ${index === 0 ? "" : "invisible"}`}
//         >
//           <div
//             ref={(el) => (outerRefs.current[index] = el)}
//             className="w-full h-full overflow-hidden"
//           >
//             <div
//               ref={(el) => (innerRefs.current[index] = el)}
//               className="w-full h-full overflow-hidden"
//             >
//               <img
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 src={section.url}
//                 alt={`Background for ${section.id}`}
//                 className="absolute h-full w-full top-0 object-cover z-10"
//               />
//               <h2
//                 ref={(el) => (headingsRef.current[index] = el)}
//                 className="z-20 absolute text-center top-[50%] transform -translate-y-1/2 w-full"
//               >
//                 <div className="w-full flex text-5xl font-primary text-secondary [text-shadow:_5px_5px_10px_rgba(0,0,0,0.5)] justify-center">
//                   {section.id}
//                 </div>
//               </h2>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import { useCarousel } from "@/hook/useCarousel";

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const outerRefs = useRef<(HTMLElement | null)[]>([]);
//   const innerRefs = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     gsap.registerPlugin(Observer);

//     let currentIndex = 0;
//     const totalSections = data?.length || 0;
//     let animating = false;

//     const gotoSection = (index: number, direction: number) => {
//       if (index < 0 || index >= totalSections || animating) return;

//       animating = true;
//       const dFactor = direction === -1 ? -1 : 1;

//       const tl = gsap.timeline({
//         defaults: { duration: 1.5, ease: "power3.inOut" },
//         onComplete: () => {
//           animating = false;
//         },
//       });

//       if (currentIndex >= 0) {
//         // Animate out the current section
//         gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
//         tl.to(imagesRef.current[currentIndex], {
//           scale: 1,
//           yPercent: -20 * dFactor,
//           opacity: 1,
//         }).set(sectionsRef.current[currentIndex], { autoAlpha: 0 });
//       }

//       // Animate in the target section
//       gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
//       tl.fromTo(
//         [outerRefs.current[index], innerRefs.current[index]],
//         { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor), opacity: 1 },
//         { yPercent: 0, opacity: 1 },
//         0
//       )
//         .fromTo(
//           imagesRef.current[index],
//           { scale: 1, yPercent: 20 * dFactor, opacity: 1 },
//           { scale: 1, yPercent: 0, opacity: 1 },
//           0
//         )
//         .fromTo(
//           headingsRef.current[index],
//           { autoAlpha: 0, yPercent: 20 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1.2,
//             ease: "power3.out",
//             stagger: { each: 0.03, from: "random" },
//           },
//           0.2
//         );

//       currentIndex = index;

//       // Enable page scrolling if at the first or last section
//       if (currentIndex === 0 || currentIndex === totalSections - 1) {
//         document.body.style.overflow = "auto";
//       } else {
//         document.body.style.overflow = "hidden";
//       }
//     };

//     const observer = Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 5,
//       preventDefault: true,
//     });

//     // Initial Animation
//     gsap.fromTo(
//       imagesRef.current[0],
//       { scale: 1.2, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       headingsRef.current[0],
//       { autoAlpha: 0, yPercent: 0 },
//       { autoAlpha: 1, yPercent: 0, duration: 1.5, ease: "power3.out" }
//     );

//     // Cleanup on unmount or data change
//     return () => {
//       observer.kill();
//       document.body.style.overflow = "auto"; // Reset page scrolling
//     };
//   }, [data]);

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className={`fixed w-full h-full top-0 ${index === 0 ? "" : "invisible"}`}
//         >
//           <div
//             ref={(el) => (outerRefs.current[index] = el)}
//             className="w-full h-full overflow-hidden"
//           >
//             <div
//               ref={(el) => (innerRefs.current[index] = el)}
//               className="w-full h-full overflow-hidden"
//             >
//               <img
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 src={section.url}
//                 alt={`Background for ${section.id}`}
//                 className="absolute h-full w-full top-0 object-cover z-10"
//               />
//               <h2
//                 ref={(el) => (headingsRef.current[index] = el)}
//                 className="z-20 absolute text-center top-[50%] transform -translate-y-1/2 w-full"
//               >
//                 <div className="w-full flex text-5xl font-primary text-secondary [text-shadow:_5px_5px_10px_rgba(0,0,0,0.5)] justify-center">
//                   {section.id}
//                 </div>
//               </h2>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import { useCarousel } from "@/hook/useCarousel";

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const outerRefs = useRef<(HTMLElement | null)[]>([]);
//   const innerRefs = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     if (!data || data.length === 0) return; // Ensure data is available

//     gsap.registerPlugin(Observer);

//     let currentIndex = 0;
//     const totalSections = data.length;
//     let animating = false;

//     const gotoSection = (index: number, direction: number) => {
//       if (index < 0 || index >= totalSections || animating) return;

//       animating = true;
//       const dFactor = direction === -1 ? -1 : 1;

//       const tl = gsap.timeline({
//         defaults: { duration: 1.5, ease: "power3.inOut" },
//         onComplete: () => {
//           animating = false;

//           // Update visibility for inactive sections
//           sectionsRef.current.forEach((section, i) => {
//             if (section) {
//               section.style.visibility = i === currentIndex ? "visible" : "hidden";
//             }
//           });
//         },
//       });

//       if (currentIndex >= 0 && sectionsRef.current[currentIndex]) {
//         // Animate out the current section
//         gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
//         tl.to(imagesRef.current[currentIndex], {
//           scale: 1,
//           yPercent: -20 * dFactor,
//           opacity: 1,
//         }).set(sectionsRef.current[currentIndex], { autoAlpha: 0 });
//       }

//       if (sectionsRef.current[index]) {
//         // Animate in the target section
//         gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
//         tl.fromTo(
//           [outerRefs.current[index], innerRefs.current[index]],
//           { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor), opacity: 1 },
//           { yPercent: 0, opacity: 1 },
//           0
//         )
//           .fromTo(
//             imagesRef.current[index],
//             { scale: 1, yPercent: 20 * dFactor, opacity: 1 },
//             { scale: 1, yPercent: 0, opacity: 1 },
//             0
//           )
//           .fromTo(
//             headingsRef.current[index],
//             { autoAlpha: 0, yPercent: 20 * dFactor },
//             {
//               autoAlpha: 1,
//               yPercent: 0,
//               duration: 1.2,
//               ease: "power3.out",
//               stagger: { each: 0.03, from: "random" },
//             },
//             0.2
//           );

//         currentIndex = index;

//         // Enable/disable page scrolling
//         if (currentIndex === 0 || currentIndex === totalSections - 1) {
//           document.body.style.overflow = "auto";
//         } else {
//           document.body.style.overflow = "hidden";
//         }
//       }
//     };

//     const observer = Observer.create({
//       type: "wheel,touch,pointer",
//       wheelSpeed: -1,
//       onDown: () => !animating && gotoSection(currentIndex - 1, -1),
//       onUp: () => !animating && gotoSection(currentIndex + 1, 1),
//       tolerance: 10,
//       preventDefault: true,
//     });

//     // Initial Animation
//     if (imagesRef.current[0] && headingsRef.current[0]) {
//       gsap.fromTo(
//         imagesRef.current[0],
//         { scale: 1, opacity: 1 },
//         { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
//       );
//       gsap.fromTo(
//         headingsRef.current[0],
//         { autoAlpha: 0, yPercent: 20 },
//         { autoAlpha: 1, yPercent: 0, duration: 1.5, ease: "power3.out" }
//       );
//     }

//     // Cleanup on unmount
//     return () => {
//       observer.kill();
//       document.body.style.overflow = "auto"; // Reset scroll
//     };
//   }, [data]);

//   return (
//     <div className="min-h-screen">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           style={{ visibility: index === 0 ? "visible" : "hidden" }}
//           className={`fixed w-full h-full top-0`}
//         >
//           <div
//             ref={(el) => (outerRefs.current[index] = el)}
//             className="w-full h-full overflow-hidden"
//           >
//             <div
//               ref={(el) => (innerRefs.current[index] = el)}
//               className="w-full h-full overflow-hidden"
//             >
//               <img
//                 ref={(el) => (imagesRef.current[index] = el)}
//                 src={section.url}
//                 alt={`Background for ${section.id}`}
//                 className="absolute h-full w-full top-0 object-cover z-10"
//               />
//               <h2
//                 ref={(el) => (headingsRef.current[index] = el)}
//                 className="z-20 absolute text-center top-[50%] transform -translate-y-1/2 w-full"
//               >
//                 <div className="w-full flex text-5xl font-primary text-secondary [text-shadow:_5px_5px_10px_rgba(0,0,0,0.5)] justify-center">
//                   {section.id}
//                 </div>
//               </h2>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useCarousel } from "@/hook/useCarousel";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedSections = () => {
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);
//   const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
//   const headingsRef = useRef<(HTMLElement | null)[]>([]);

//   const { queryClient } = useCarousel();
//   const data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     // Initial Animation for the First Section
//     if (imagesRef.current[0]) {
//       gsap.fromTo(
//         imagesRef.current[0],
//         { scale: 1.2, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
//       );
//     }

//     // ScrollTrigger for Each Section
//     sectionsRef.current.forEach((section, index) => {
//       const image = imagesRef.current[index];
//       const heading = headingsRef.current[index];
//       const nextImage = imagesRef.current[index + 1];

//       if (section && image && heading) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1, // Smooth animation during scroll
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // Current Section Animation
//             gsap.to(image, {
//               scale: 1, // Slight scaling effect
//               opacity: 1 - 0.6 * progress, // Fade out
//               yPercent: progress * 100, // Parallax upward
//               ease: "power3.out",
//             });

//             gsap.to(heading, {
//               opacity: 1 - progress, // Fade out
//               yPercent: progress * 30, // Slight upward motion
//               ease: "power3.out",
//             });

//             // Next Section Overlay Animation
//             if (nextImage) {
//               gsap.to(nextImage, {
//                 opacity: progress, // Fade in
//                 scale: 1, // Scale effect
//                 yPercent: -50 + progress * 50, // Parallax downward
//                 ease: "power3.out",
//               });
//             }
//           },
//         });
//       }
//     });
//   }, [data]);

//   return (
//     <div className="relative">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="relative h-screen overflow-hidden"
//         >
//           {/* Background Image */}
//           <img
//             ref={(el) => (imagesRef.current[index] = el)}
//             src={section.url}
//             alt={`Section ${index}`}
//             className="absolute w-full h-full object-cover z-10"
//           />

//           {/* Heading */}
//           <h2
//             ref={(el) => (headingsRef.current[index] = el)}
//             className="z-20 text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           >
//             Section {section.id}
//           </h2>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

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
//   let data = queryClient.getQueryData(["carousels"]) as {
//     id: number;
//     url: string;
//   }[];

//   useEffect(() => {
//     if (!data || data.length === 0) return;

//     // Initial Animation for the First Section
//     if (imagesRef.current[0]) {
//       gsap.fromTo(
//         imagesRef.current[0],
//         { scale: 1.2, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
//       );
//     }

//     const animateSection = (
//       image: HTMLImageElement,
//       heading: HTMLElement,
//       progress: number
//     ) => {
//       gsap.to(image, {
//         scale: 1,
//         opacity: 1 - 0.6 * progress,
//         yPercent: progress * 100,
//         ease: "power3.out",
//       });

//       gsap.to(heading, {
//         opacity: 1 - progress,
//         yPercent: progress * 30,
//         ease: "power3.out",
//       });
//     };

//     const animateNextImage = (
//       nextImage: HTMLImageElement | null,
//       progress: number
//     ) => {
//       if (nextImage) {
//         gsap.to(nextImage, {
//           opacity: progress,
//           scale: 1,
//           yPercent: -50 + progress * 50,
//           ease: "power3.out",
//         });
//       }
//     };

//     // ScrollTrigger for Existing Sections
//     sectionsRef.current.forEach((section, index) => {
//       const image = imagesRef.current[index];
//       const heading = headingsRef.current[index];
//       const nextImage = imagesRef.current[index + 1];

//       if (section && image && heading) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             animateSection(image, heading, progress);
//             animateNextImage(nextImage, progress);
//           },
//         });
//       }
//     });
//   }, [data]);

//   return (
//     <div ref={containerRef} className="relative">
//       {data?.map((section, index) => (
//         <section
//           key={index}
//           ref={(el) => (sectionsRef.current[index] = el)}
//           className="relative h-screen overflow-hidden"
//         >
//           {/* Background Image */}
//           <img
//             ref={(el) => (imagesRef.current[index] = el)}
//             src={section.url}
//             alt={`Section ${index}`}
//             className="absolute w-full h-full object-cover z-10"
//           />

//           {/* Heading */}
//           <h2
//             ref={(el) => (headingsRef.current[index] = el)}
//             className="z-20 text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           >
//             Section {section.id}
//           </h2>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default AnimatedSections;

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCarousel } from "@/hook/useCarousel";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSections = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { queryClient } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Initial Animation for the First Section
    const initialImage = imagesRef.current[0];
    if (initialImage) {
      gsap.fromTo(
        initialImage,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
      );
    }

    const animateSection = (
      image: HTMLImageElement,
      heading: HTMLElement,
      progress: number
    ) => {
      gsap.to(image, {
        scale: 1,
        opacity: 1 - 0.6 * progress,
        yPercent: progress * 100,
        ease: "power3.out",
      });

      gsap.to(heading, {
        opacity: 1 - progress,
        yPercent: progress * 30,
        ease: "power3.out",
      });
    };

    const animateNextImage = (
      nextImage: HTMLImageElement | null,
      progress: number
    ) => {
      if (nextImage) {
        gsap.to(nextImage, {
          opacity: progress,
          scale: 1,
          yPercent: -50 + progress * 50,
          ease: "power3.out",
        });
      }
    };

    // ScrollTrigger for Existing Sections
    sectionsRef.current.forEach((section, index) => {
      const image = imagesRef.current[index];
      const heading = headingsRef.current[index];
      const nextImage = imagesRef.current[index + 1];

      if (section && image && heading) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            animateSection(image, heading, progress);
            animateNextImage(nextImage, progress);
          },
        });
      }
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative">
      {data.map((section, index) => (
        <section
          key={section.id} // Use section.id for better key uniqueness
          ref={(el) => (sectionsRef.current[index] = el)}
          className="relative h-screen overflow-hidden"
        >
          {/* Background Image */}
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            src={section.url}
            alt={`Section ${section.id}`} // Use section.id for alt text
            className="absolute w-full h-full object-cover z-10"
          />

          {/* Heading */}
          <h2
            ref={(el) => (headingsRef.current[index] = el)}
            className="z-20 text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Section {section.id}
          </h2>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;
