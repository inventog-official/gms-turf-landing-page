import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { servicesObj } from "@/common/servicesObj";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
      {/* Header */}
      <div className="text-left w-full">
        <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
          Our Products
        </p>
      </div>

      {/* Main Title */}
      <div className="w-full flex flex-col gap-8 lg:gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white uppercase leading-tight text-left">
          Installation<span className="text-secondary">,</span> Maintenance
          <span className="text-secondary">,</span> Renovation
          <span className="text-secondary"></span>
        </h2>
      </div>
      {/* Services List */}
      <div className="w-full select-none">
        {servicesObj.map((service, index) => {
          return (
            <div
              key={index}
              className={`group w-full flex flex-col gap-5 lg:flex-row ${index===0 ? "lg:border-t-[0.5px] lg:border-b-[0.5px]" : "lg:border-b-[0.5px]"} lg:border-secondary py-5 lg:py-10 transition-all duration-300 ease-in-out relative`}
              // className={`group w-full flex flex-col lg:flex-row ${index===0 ? "border-t-[0.5px] border-b-[0.5px]" : "border-b-[0.5px]"} border-secondary py-5 transition-all duration-300 ease-in-out relative`}
            >
              {/* Service Info */}
              <div
                className={`w-full lg:w-[70%] flex flex-col gap-4 lg:gap-6 transition-all duration-300 ease-in-out`}
              >
                <h3 className="text-lg font-bold font-primary tracking-[1.5px] uppercase text-secondary">
                  {service.title}
                </h3>
                <div className="border-l-4 border-secondary pl-4 pr-2">
                  <p className="text-sm md:text-base font-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="w-full lg:w-[30%] flex justify-start lg:justify-end">
                <div className="flex flex-row-reverse lg:flex-col h-full w-[35%] md:w-[20%] lg:w-[30%] gap-3 lg:gap-5 lg:justify-end lg:items-end justify-center items-center p-2 lg:p-4 border-2 border-secondary opacity-80 shadow-lg transform transition-transform duration-300 ease-out hover:cursor-pointer group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
                  <FaArrowRight className="text-lg lg:text-3xl text-white/80 transform transition-transform duration-300 -rotate-45 ease-out group-hover:-rotate-0" />
                  <p className="text-[12px] md:text-base text-white/80 font-primary tracking-wide uppercase transition-colors duration-300 group-hover:text-primary">
                    Read more
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts based on image count
// const gridLayouts = {
//   1: ["col-span-4"],
//   2: ["col-span-2", "col-span-2"],
//   3: ["col-span-1", "col-span-1", "col-span-2"],
//   4: ["col-span-1", "col-span-1", "col-span-1", "col-span-1"],
//   5: ["col-span-1", "col-span-2", "col-span-1", "col-span-1", "col-span-1"],
//   6: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
// };

// const Services: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="flex flex-col gap-10 justify-center items-center select-none min-h-screen bg-primary px-12 md:px-20 lg:px-32 py-20 md:py-10">
//       {/* Header */}
//       <div className="text-left w-full">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/70 uppercase leading-tight text-left">
//           Installation<span className="text-secondary">,</span> Maintenance
//           <span className="text-secondary">,</span> Renovation
//           <span className="text-secondary"></span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14 select-none">
//           {servicesObj.map((service, index) => {
//             const imageCount = service.images?.length || 0;
//             //@ts-ignore
//             const layout = gridLayouts[imageCount] || gridLayouts[6]; // Default to layout for more than 6 images

//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 border-t-[0.5px] border-secondary py-5 lg:gap-12 transition-all duration-300 ease-in-out relative"
//                 onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
//                 onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
//               >
//                 {/* Service Info */}
//                 <div
//                   className={`w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6 transition-all duration-300 ease-in-out ${
//                     hoveredIndex === index ? "h-auto" : "h-24"
//                   }`}
//                 >
//                   <h3 className="text-lg font-bold font-primary tracking-[1.5px] uppercase text-secondary">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4 pr-2">
//                     <p className="text-sm md:text-base font-secondary leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div
//                     className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6 w-full transition-all duration-300 ease-in-out overflow-hidden ${
//                       hoveredIndex === index
//                         ? "max-h-screen opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     {hoveredIndex === index &&
//                       service.images?.map((img, imgIndex) => (
//                         <div
//                           key={imgIndex}
//                           className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
//                         >
//                           <img
//                             src={img}
//                             alt={`Service ${index} - Image ${imgIndex}`}
//                             className="w-full h-full object-cover rounded-lg"
//                           />
//                         </div>
//                       ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="absolute top-4 right-4">
//                   <div className="flex flex-row-reverse lg:flex-col h-full w-full gap-3 lg:gap-5 lg:justify-end lg:items-end justify-center items-center p-1.5 lg:p-4 border-2 border-secondary opacity-80 shadow-lg transform transition-transform duration-300 ease-out hover:cursor-pointer group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-lg lg:text-3xl text-white/80 transform transition-transform duration-300 -rotate-45 ease-out group-hover:-rotate-0" />
//                     <p className="text-[12px] md:text-base text-white/80 font-primary tracking-wide uppercase ml-2 transition-colors duration-300 group-hover:text-primary">
//                       Read more
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
