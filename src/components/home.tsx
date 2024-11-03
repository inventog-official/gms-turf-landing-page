import React, { useState, useEffect } from "react";
import FootballAnimation from "./footballAnimation";
import TextHoverAnimation from "./textHoverAnimation";
import { SlBadge } from "react-icons/sl";
import { useCarousel } from "@/hook/useCarousel";

const Home: React.FC = () => {
  const { queryClient } = useCarousel();

  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [data?.length]);

  return (
    <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
      {/* Background Image Slideshow */}
      {data?.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Inner Shadow Effect */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 20px 20px 100px 100px rgba(0, 0, 0, 0.9)",
        }}
      /> */}

      {/* Text and Animations */}
      <div className="flex flex-col select-none min-h-full w-full z-10 md:justify-center py-28  items-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-3 md:gap-2">
          <div className="w-full flex md:justify-start justify-end  animate-bounce transition-all duration-1000">
            <FootballAnimation />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="uppercase flex gap-2 text-left items-center text-[8px] md:text-[12px] lg:text-base font-special italic font-extrabold text-white/70 z-[11] opacity-0 animate-lineUp delay-700">
              <span className="text-secondary">
                <SlBadge />
              </span>
              South india's <span className="text-secondary">no.1</span>
            </h1>
            <h1 className="uppercase text-lg sm:text-2xl md:text-3xl lg:text-5xl font-special italic font-extrabold text-white z-[11] opacity-0 animate-lineUp delay-1000">
              <TextHoverAnimation text="Sports" />
              <TextHoverAnimation text="infrastructure" />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import FootballAnimation from "./footballAnimation";
// import TextHoverAnimation from "./textHoverAnimation";
// import { SlBadge } from "react-icons/sl";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Home: React.FC = () => {
//   const images = [
//     "/homepageSlideImages/4.webp",
//     "/homepageSlideImages/1.jpg",
//     "/homepageSlideImages/2.jpg",
//     "/homepageSlideImages/3.jpg",
//     "/homepageSlideImages/5.jpeg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000); // 4 seconds per slide
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // const handlePrev = () => {
//   //   setCurrentImageIndex((prevIndex) =>
//   //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   //   );
//   // };

//   // const handleNext = () => {
//   //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   // };

//   return (
//     <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
//       {/* Background Image Slideshow */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Background ${index + 1}`}
//           className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
//             index === currentImageIndex ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}

//       {/* Inner Shadow Effect */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "inset 20px 20px 100px 100px rgba(0, 0, 0, 0.9)",
//         }}
//       />

//       {/* Navigation Buttons */}
//       {/* <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
//       >
//         <FaArrowLeft />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
//       >
//         <FaArrowRight />
//       </button> */}

//       {/* Text and Animations */}
//       <div className="flex flex-col select-none min-h-full w-full z-10 justify-center items-center">
//         <div className="flex flex-col md:flex-row md:justify-center items-center gap-3 md:gap-2">
//           <div className="w-full flex justify-start animate-bounce transition-all duration-1000">
//             <FootballAnimation />
//           </div>
//           <div className="flex flex-col gap-3">
//             <h1 className="uppercase flex gap-2 text-left items-center text-[8px] md:text-[12px] lg:text-base font-special italic font-extrabold text-white/70 z-[11] opacity-0 animate-lineUp delay-700">
//               <span className="text-secondary">
//                 <SlBadge />
//               </span>
//               South india's <span className="text-secondary">no.1</span>
//             </h1>
//             <h1 className="uppercase text-lg sm:text-2xl md:text-3xl lg:text-5xl font-special italic font-extrabold text-white z-[11] opacity-0 animate-lineUp delay-1000">
//               <TextHoverAnimation text="Sports" />
//               <TextHoverAnimation text="infrastructure" />
//             </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// import React from "react";
// import FootballAnimation from "./footballAnimation";
// import TextHoverAnimation from "./textHoverAnimation";
// import { SlBadge } from "react-icons/sl";

// const Home: React.FC = () => {
//   return (
//     <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="./bg-image.webp"
//         alt="Background"
//         className="absolute inset-0 object-cover w-full h-full"
//       />

//       {/* Inner Shadow Effect */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./bg-image.webp)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           boxShadow: "inset 20px 20px 100px 100px rgba(0, 0, 0, 0.9)", // Inner shadow on all sides
//         }}
//       />

//       {/* Text */}
//       <div className="flex flex-col select-none min-h-full w-full z-10 justify-center items-center">
//         <div className="flex flex-col md:flex-row md:justify-center items-center gap-3 md:gap-2">
//           <div className="w-full flex justify-start animate-bounce transition-all duration-1000">
//             <FootballAnimation />
//           </div>
//           <div className="flex flex-col gap-3">
//             <h1 className="uppercase flex gap-2 text-left items-center text-[8px] md:text-[12px] lg:text-base font-special italic font-extrabold text-white/70 z-[11] opacity-0 animate-lineUp delay-700">
//               <span className="text-secondary">
//                 <SlBadge />
//               </span>
//               South india's <span className="text-secondary">no.1</span>
//             </h1>
//             <h1 className="uppercase text-lg sm:text-2xl md:text-3xl lg:text-5xl font-special italic font-extrabold text-white z-[11] opacity-0 animate-lineUp delay-1000">
//               <TextHoverAnimation text="Sports" />
//               <TextHoverAnimation text="infrastructure" />
//             </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
