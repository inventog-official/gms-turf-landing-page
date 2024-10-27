import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="aboutUs"
      className="relative flex w-full h-[80vh] justify-center items-center gap-4 bg-primary px-[0.5rem]"
    >
      {/* Image Section with Enhanced Inner Light Effect */}
      <div className="relative w-[40%] h-full flex items-center justify-center">
        <div className="relative flex items-center">
          <div className="absolute border-4 border-yellow-600 w-full h-full -top-7 left-6 bg-black/15 blur-sm"></div>
          <div className="w-full h-full overflow-hidden group">
            <img
              src="/directorImg.webp"
              className="w-[450px] h-full object-cover transition-transform duration-500 ease-out scale-110 transform group-hover:scale-105"
              alt="Director"
            />
            {/* Inner Light Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
              <div className="absolute inset-0 w-full bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-tr h-full from-black/60 via-purple-800/20 to-yellow-500/50" />
              <div className="absolute inset-0 bg-gradient-to-r h-full from-black/15 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black" />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                <p className="text-lg font-semibold text-white bg-transparent p-2 font-special w-full text-center">
                  Managing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-[60%] flex flex-col h-full gap-16 pr-[5rem]">
        <div className="text-left">
          <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
            About Us
          </p>
        </div>
        <div className="flex flex-col gap-10 text-3xl text-white/40 font-primary">
          <div className="text-left">
            <p className="text-6xl font-primary text-white/70 font-semibold uppercase">
              Managing <span className="text-secondary">Director</span>
            </p>
          </div>
          <p className="">
            GameOn Solution specializes in constructing sports grounds,
            artificial football turf, cricket pitches, volleyball courts,
            basketball courts, and badminton courts, primarily serving customers
            in South India. Similar to Meckavo Sports Infrastructure, GameOn
            Solution offers a comprehensive range of services, including
            building turf grounds, athletic tracks, and sports flooring
            solutions.
          </p>
          <p className="">
            Their services cover everything from consultancy and planning stages
            to the construction and execution of sports complexes and grounds.
            Additionally, GameOn Solution undertakes maintenance, repair, and
            upgrade projects for existing facilities. With an in-house
            engineering and project team equipped with state-of-the-art design
            tools and high-quality materials, they ensure efficient
            implementation of projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
// import React from "react";

// const AboutUs: React.FC = () => {
//   return (
//     <section
//       id="aboutUs"
//       className="relative flex w-full min-h-[80vh] justify-center items-center bg-primary px-[4rem] "
//     >
//       {/* Image Section with Enhanced Inner Light Effect */}
//       <div className="relative w-[40%] h-full flex items-center justify-center">
//         <div className="relative flex w-[400px]  rounded-lg ">
//           <div className="absolute border-4 border-yellow-600 w-full h-full -top-7 left-6 bg-black/70 blur-sm"></div>
//           <div className="w-full h-full overflow-hidden group rounded-lg">
//             {/* <div className=""> */}
//             <img
//               src="/directorImg.webp"
//               className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform group-hover:scale-105 hover:opacity-50"
//               alt="Director"
//             />
//             {/* </div> */}
//             {/* Inner Light Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//               <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-yellow-700/5 to-yellow-500/70 blur-lg" />
//               {/* Text Overlay */}
//               <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
//                 {/* <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out p-4"> */}
//                 <p className="text-lg font-semibold text-white bg-black/60 rounded-md p-2 font-special w-full text-center">
//                   Managing Director
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className=" relative w-[60%] pr-4">
//         <div className="absolute top-[5rem] left-[18rem]">
//           <img src="/paintSplatter.png" className="opacity-30" />
//         </div>
//         <div className="flex flex-col gap-16">
//           <div className="text-left w-full">
//             <h1 className="text-6xl font-special">About Us</h1>
//           </div>
//           <div className="flex flex-col gap-5 h-full text-2xl text-white font-secondary">
//             <p className="z-10">
//               Game On Solution specializes in constructing sports grounds,
//               artificial football turf, cricket pitches, volleyball courts,
//               basketball courts, and badminton courts, primarily serving
//               customers in South India. Similar to Meckavo Sports
//               Infrastructure, Game On Solution offers a comprehensive range of
//               services, including building turf grounds, athletic tracks, and
//               sports flooring solutions.
//             </p>
//             <p className="z-10">
//               Their services cover everything from consultancy and planning
//               stages to the construction and execution of sports complexes and
//               grounds. Additionally, Game On Solution undertakes maintenance,
//               repair, and upgrade projects for existing facilities. With an
//               in-house engineering and project team equipped with
//               state-of-the-art design tools and high-quality materials, they
//               ensure efficient implementation of projects.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// import React from "react";

// const AboutUs: React.FC = () => {
//   return (
//     <section
//       id="aboutUs"
//       className="relative flex flex-col lg:flex-row w-full h-full bg-primary px-4 md:px-16 lg:px-24 xl:px-32"
//     >
//       <div className="text-left w-full lg:hidden flex">
//             <h1 className="text-3xl sm:text-5xl md:text-4xl font-special">About Us</h1>
//           </div>
//       {/* Image Section with Enhanced Inner Light Effect */}
//       <div className="relative w-full md:w-[40%] h-full flex items-center justify-center mb-8 md:mb-0">
//         <div className="relative flex w-[300px] sm:w-[350px] md:w-[400px] rounded-lg">
//           <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 sm:-top-7 left-3 sm:left-6 bg-black/70 blur-sm"></div>
//           <div className="w-full h-full overflow-hidden group rounded-lg">
//             <img
//               src="/directorImg.webp"
//               className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform group-hover:scale-105 hover:opacity-50"
//               alt="Director"
//             />
//             {/* Inner Light Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//               <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-yellow-700/5 to-yellow-500/70 blur-lg" />
//               {/* Text Overlay */}
//               <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
//                 <p className="text-lg font-semibold text-white bg-black/60 rounded-md p-2 font-special w-full text-center">
//                   Managing Director
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="relative w-full md:w-[60%] px-4">
//         <div className="absolute top-[3rem] sm:top-[5rem] left-1/4 sm:left-[12rem] md:left-[18rem] opacity-30">
//           <img src="/paintSplatter.png" className="w-20 sm:w-32 md:w-40" />
//         </div>
//         <div className="flex flex-col gap-8 md:gap-16">
//           <div className="text-left w-full hidden lg:flex">
//             <h1 className="text-3xl sm:text-5xl md:text-6xl font-special">About Us</h1>
//           </div>
//           <div className="flex flex-col gap-4 md:gap-5 text-lg sm:text-xl md:text-2xl text-white tfit">
//             <p>
//               Game On Solution specializes in constructing sports grounds,
//               artificial football turf, cricket pitches, volleyball courts,
//               basketball courts, and badminton courts, primarily serving
//               customers in South India. Similar to Meckavo Sports
//               Infrastructure, Game On Solution offers a comprehensive range of
//               services, including building turf grounds, athletic tracks, and
//               sports flooring solutions.
//             </p>
//             <p>
//               Their services cover everything from consultancy and planning
//               stages to the construction and execution of sports complexes and
//               grounds. Additionally, Game On Solution undertakes maintenance,
//               repair, and upgrade projects for existing facilities. With an
//               in-house engineering and project team equipped with
//               state-of-the-art design tools and high-quality materials, they
//               ensure efficient implementation of projects.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
