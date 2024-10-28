// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Accordion from "./accordion";
// import { servicesObj } from "@/common/servicesObj";

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10 border-4 border-red-800">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => (
//             <div
//               key={index}
//               className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 group transition-all duration-300 ease-in-out"
//             >
//               {/* Service Info */}
//               <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <div className="border-l-4 border-secondary pl-4">
//                   <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//                 <Accordion title="Image Gallery" images={service.images} />
//               </div>

//               {/* Call to Action */}
//               <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                 <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary group-hover:bg-secondary group-hover:border-primary shadow-lg transition-all duration-300 ease-out transform group-hover:scale-105">
//                   <FaArrowRight className="text-3xl text-white/80 group-hover:text-primary transition-transform duration-300 ease-out transform group-hover:rotate-45" />
//                   <p className="text-sm md:text-base text-white/80 group-hover:text-primary font-primary tracking-wide uppercase ml-4 transition-colors duration-300">
//                     Read more
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => (
//             <div
//               key={index}
//               className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//             >
//               {/* Service Info */}
//               <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <div className="border-l-4 border-secondary pl-4">
//                   <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                 <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                   <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                   <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
//                     Read more
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => (
//             <div
//               key={index}
//               className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//             >
//               {/* Service Info */}
//               <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <div className="border-l-4 border-secondary pl-4">
//                   <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Image Gallery Grid */}
//                 <div className="grid grid-cols-3 gap-4 mt-6 opacity-0 transform scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
//                   {service.images?.map((img, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={img}
//                       alt={`Service ${index} - Image ${imgIndex}`}
//                       className="w-full h-24 object-cover rounded-md"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                 <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                   <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                   <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
//                     Read more
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => (
//             <div
//               key={index}
//               className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//             >
//               {/* Service Info */}
//               <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                 <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <div className="border-l-4 border-secondary pl-4">
//                   <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Image Gallery Grid (Rectangular Shape) */}
//                 <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-6 w-64 h-40 opacity-0 transform scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
//                   {service.images?.map((img, imgIndex) => (
//                     <img
//                       key={imgIndex}
//                       src={img}
//                       alt={`Service ${index} - Image ${imgIndex}`}
//                       className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ease-out hover:scale-105 ${
//                         imgIndex % 5 === 0
//                           ? "col-span-2 row-span-2"
//                           : imgIndex % 5 === 1
//                           ? "col-span-1 row-span-1"
//                           : imgIndex % 5 === 2
//                           ? "col-span-1 row-span-2"
//                           : "col-span-2 row-span-1"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Call to Action */}
//               <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                 <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                   <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                   <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
//                     Read more
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts for the gallery
// const gridLayouts = [
//   [
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-2 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-2 row-span-1",
//   ],
//   [
//     "col-span-1 row-span-1",
//     "col-span-2 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-2",
//   ],
//   [
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-2",
//     "col-span-2 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-2 row-span-1",
//   ],
// ];

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => {
//             const layout = gridLayouts[index % gridLayouts.length];
//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//               >
//                 {/* Service Info */}
//                 <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4">
//                     <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div className="grid grid-cols-4 gap-4 mt-6 w-full">
//                     {service.images?.map((img, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex % layout.length]}`}
//                       >
//                         <img
//                           src={img}
//                           alt={`Service ${index} - Image ${imgIndex}`}
//                           className="w-full h-full object-cover" // Maintain full width and height
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                   <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                     <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
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


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts based on image count
// const gridLayouts = {
//   1: ["col-span-4"],
//   2: [
//     "col-span-2 row-span-1",
//     "col-span-2 row-span-1",
//   ],
//   3: [
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-2 row-span-1",
//   ],
//   4: [
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//   ],
//   5: [
//     "col-span-1 row-span-2",
//     "col-span-2 row-span-2",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//     "col-span-1 row-span-1",
//   ],
// };

// const Services: React.FC = () => {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => {
//             const imageCount = service.images?.length || 0;
//             //@ts-ignore
//             const layout = gridLayouts[imageCount] || gridLayouts[5]; // Default to 5 layout if count is more than 5

//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//               >
//                 {/* Service Info */}
//                 <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4">
//                     <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div className="grid grid-cols-4 gap-4 mt-6 w-full">
//                     {service.images?.map((img, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
//                       >
//                         <img
//                           src={img}
//                           alt={`Service ${index} - Image ${imgIndex}`}
//                           className="w-full h-full object-cover" // Maintain full width and height
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                   <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                     <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
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


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts based on image count
// const gridLayouts = {
//   1: ["col-span-4"],
//   2: [
//     "col-span-2",
//     "col-span-2",
//   ],
//   3: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-2",
//   ],
//   4: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
//   5: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
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
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => {
//             const imageCount = service.images?.length || 0;
//             //@ts-ignore
//             const layout = gridLayouts[imageCount] || gridLayouts[5]; // Default to layout for more than 5 images

//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//               >
//                 {/* Service Info */}
//                 <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4">
//                     <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div className={`grid grid-cols-4 gap-4 mt-6 w-full`}>
//                     {service.images?.map((img, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
//                       >
//                         <img
//                           src={img}
//                           alt={`Service ${index} - Image ${imgIndex}`}
//                           className="w-full h-full object-cover" // Maintain full width and height
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                   <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                     <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
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


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts based on image count
// const gridLayouts = {
//   1: ["col-span-4"],
//   2: ["col-span-2", "col-span-2"],
//   3: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-2",
//   ],
//   4: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
//   5: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
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
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => {
//             const imageCount = service.images?.length || 0;
//             //@ts-ignore
//             const layout = gridLayouts[imageCount] || gridLayouts[5]; // Default to layout for more than 5 images

//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//               >
//                 {/* Service Info */}
//                 <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4">
//                     <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 w-full`}>
//                     {service.images?.map((img, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
//                       >
//                         <img
//                           src={img}
//                           alt={`Service ${index} - Image ${imgIndex}`}
//                           className="w-full h-full object-cover" // Maintain full width and height
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                   <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                     <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
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


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { servicesObj } from "@/common/servicesObj";

// // Define unique grid layouts based on image count
// const gridLayouts = {
//   1: ["col-span-4"],
//   2: ["col-span-2", "col-span-2"],
//   3: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-2",
//   ],
//   4: [
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
//   5: [
//     "col-span-1",
//     "col-span-2",
//     "col-span-1",
//     "col-span-1",
//     "col-span-1",
//   ],
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
//   return (
//     <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
//       {/* Header */}
//       <div className="w-full text-left">
//         <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
//           Our Products
//         </p>
//       </div>

//       {/* Main Title */}
//       <div className="w-full flex flex-col gap-8 lg:gap-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
//           <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
//         </h2>

//         {/* Services List */}
//         <div className="w-full space-y-10 lg:space-y-14">
//           {servicesObj.map((service, index) => {
//             const imageCount = service.images?.length || 0;
//             //@ts-ignore
//             const layout = gridLayouts[imageCount] || gridLayouts[6]; // Default to layout for more than 6 images

//             return (
//               <div
//                 key={index}
//                 className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out"
//               >
//                 {/* Service Info */}
//                 <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
//                   <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                   <div className="border-l-4 border-secondary pl-4">
//                     <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>

//                   {/* Image Gallery Grid with Unique Layout */}
//                   <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6 w-full`}>
//                     {service.images?.map((img, imgIndex) => (
//                       <div
//                         key={imgIndex}
//                         className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
//                       >
//                         <img
//                           src={img}
//                           alt={`Service ${index} - Image ${imgIndex}`}
//                           className="w-full h-full object-cover rounded-lg" // Maintain full width and height with rounded corners
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="relative w-full lg:w-1/4 flex justify-end items-center lg:items-end lg:justify-start">
//                   <div className="flex items-center justify-end lg:justify-center p-6 lg:p-10 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
//                     <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
//                     <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-4 transition-colors duration-300 group-hover:text-primary">
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


import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { servicesObj } from "@/common/servicesObj";

// Define unique grid layouts based on image count
const gridLayouts = {
  1: ["col-span-4"],
  2: ["col-span-2", "col-span-2"],
  3: ["col-span-1", "col-span-1", "col-span-2"],
  4: ["col-span-1", "col-span-1", "col-span-1", "col-span-1"],
  5: ["col-span-1", "col-span-2", "col-span-1", "col-span-1", "col-span-1"],
  6: ["col-span-1", "col-span-1", "col-span-1", "col-span-1", "col-span-1", "col-span-1"],
};

const Services: React.FC = () => {
  return (
    <section className="flex flex-col gap-16 lg:gap-20 justify-center items-center min-h-screen bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-10">
      {/* Header */}
      <div className="w-full text-left">
        <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px] text-gray-300">
          Our Products
        </p>
      </div>

      {/* Main Title */}
      <div className="w-full flex flex-col gap-8 lg:gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white/90 uppercase leading-tight text-left">
          <span className="text-secondary">Installation</span>, <span className="text-secondary">Maintenance</span>, <span className="text-secondary">Renovation</span>
        </h2>

        {/* Services List */}
        <div className="w-full space-y-10 lg:space-y-14">
          {servicesObj.map((service, index) => {
            const imageCount = service.images?.length || 0;
            //@ts-ignore
            const layout = gridLayouts[imageCount] || gridLayouts[6]; // Default to layout for more than 6 images

            return (
              <div
                key={index}
                className="group w-full flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-yellow-500 py-8 lg:py-12 transition-all duration-300 ease-in-out relative" // Added 'relative' here
              >
                {/* Service Info */}
                <div className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6">
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white/80 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="text-base sm:text-lg md:text-xl font-secondary text-gray-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image Gallery Grid with Unique Layout */}
                  <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-6 w-full`}>
                    {service.images?.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 ${layout[imgIndex]}`}
                      >
                        <img
                          src={img}
                          alt={`Service ${index} - Image ${imgIndex}`}
                          className="w-full h-full object-cover rounded-lg" // Maintain full width and height with rounded corners
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="absolute top-4 right-4"> {/* Positioning the button absolutely */}
                  <div className="flex items-center justify-center p-4 border-2 border-secondary bg-gradient-to-r from-secondary to-primary shadow-lg transform transition-transform duration-300 ease-out group-hover:bg-secondary group-hover:border-primary group-hover:scale-105">
                    <FaArrowRight className="text-3xl text-white/80 transform transition-transform duration-300 ease-out group-hover:text-primary group-hover:rotate-45" />
                    <p className="text-sm md:text-base text-white/80 font-primary tracking-wide uppercase ml-2 transition-colors duration-300 group-hover:text-primary">
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
