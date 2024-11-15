// import React from "react";

// const AboutUs: React.FC = () => {
//   return (
//     <section className="relative flex flex-col lg:flex-row bg-primary min-h-screen md:min-h-[85vh] lg:min-h-[90vh] justify-center items-center gap-10 lg:gap-4 px-6 sm:px-8 md:px-16 lg:px-4 xl:px-10 2xl:px-16 pb-16 select-none">
//       {/* // <section className="relative flex flex-col lg:flex-row w-full min-h-screen justify-center items-center border-4 border-red-900 gap-10 lg:gap-4 bg-primary px-6 sm:px-8 lg:px-4 xl:px-12 2xl:px-16 py-2 lg:py-0"> */}
//       {/* Mobile "About Us" Heading */}
//       <div className="flex flex-col lg:hidden w-full px-2 gap-10">
//         <div className="text-left w-full">
//           <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
//             About Us
//           </p>
//         </div>
//         <div className="text-left">
//           <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
//             Managing <span className="text-secondary">Director</span>
//           </p>
//         </div>
//       </div>

//       {/* Image Section with Enhanced Inner Light Effect */}
//       <div className="relative w-full lg:w-[40%] flex items-center justify-center py-6 lg:py-8">
//         <div className="relative flex items-center">
//           <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div>
//           <div className="w-full h-full overflow-hidden group">
//             <img
//               src="/directorImg.webp"
//               className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
//               alt="Director"
//             />
//             {/* Inner Light Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
//               <div className="absolute inset-0 bg-black/25" />
//               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black" />
//               {/* Text Overlay */}
//               <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
//                 <p className="text-xl  text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
//                   Managing Director
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Text Section */}
//       <div className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-6 lg:gap-16 px-4 lg:px-8">
//         {/* About Us Heading for Larger Screens */}
//         <div className="text-left hidden lg:flex ">
//           <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
//             About Us
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col gap-5 md:gap-6 text-base md:text-lg lg:text-2xl xl:text-3xl text-white font-secondary">
//           <div className="text-left hidden lg:flex">
//             <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
//               Managing <span className="text-secondary">Director</span>
//             </p>
//           </div>
//           <p className="text-lg md:text-xl lg:text-2xl">
//             GameOn Solution specializes in constructing sports grounds,
//             artificial football turf, cricket pitches, volleyball courts,
//             basketball courts, and badminton courts, primarily serving customers
//             in South India. GameOn Solution offers a comprehensive range of
//             services, including building turf grounds, athletic tracks, and
//             sports flooring solutions.
//           </p>
//           <p className="text-lg md:text-xl lg:text-2xl">
//             Their services cover everything from consultancy and planning stages
//             to the construction and execution of sports complexes and grounds.
//             Additionally, GameOn Solution undertakes maintenance, repair, and
//             upgrade projects for existing facilities. With an in-house
//             engineering and project team equipped with state-of-the-art design
//             tools and high-quality materials, they ensure efficient
//             implementation of projects.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import AnimatedCard from "./AnimateCard/main";
import TextHoverAnimation from "./textHoverAnimation";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col gap-24 justify-center items-center select-none min-h-screen bg-primary px-10 md:px-20 lg:px-[7.5rem] pb-16 lg:pb-28">
      <div className="flex flex-col  w-full  text-center    gap-10">
        <AnimatedCard>
          <p className="text-[12px] font-secondary  uppercase tracking-[1px]">
            About Us
          </p>
        </AnimatedCard>

        <div className="flex flex-col gap-5 md:gap-6 text-base md:text-lg lg:text-2xl xl:text-3xl text-white font-secondary">
          <AnimatedCard>
            <p className="text-3xl md:text-4xl flex gap-2 lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
              <TextHoverAnimation text="who" />
              <span className="text-secondary">
                {" "}
                <TextHoverAnimation text="we" />
              </span>{" "}
              <TextHoverAnimation text="are" />
            </p>
          </AnimatedCard>
          <AnimatedCard>
            <p className="md:text-2xl text-lg">
              Sports play a crucial role in helping us make the most of our time
              by staying active, refreshed, and engaged. Recognizing this need,
              Game On Solution has developed high-quality sports turfs across
              South India, specially designed to enhance the playing experience.
              From football fields to outdoor cricket pitches, each turf is
              arranged with precision to support optimal game play and comfort
              for athletes. Notably, Game On Solution is a certified provider of
              FIFA-standard turf, ensuring that players enjoy top-tier
              facilities that meet international standards. With a commitment to
              developing world-class sports infrastructure, the company has
              established itself as South India’s leading sports infrastructure
              developer.
            </p>
          </AnimatedCard>
          <AnimatedCard>
            <p className="md:text-2xl text-lg">
              In just the last two years, Game On Solution’s founder, Ms.
              Dhineshwaran, has set up over 115 sports turfs across South India,
              transforming local communities and inspiring young athletes. This
              expansion has provided countless opportunities for young people to
              pursue careers in sports, turning their passion into a profession.
              Game On Solution has been instrumental in fulfilling these dreams,
              empowering the youth to see sports as a viable and rewarding path.
              Through quality facilities and steadfast dedication, Game On
              Solution is paving the way for a new generation of athletes in
              South India, where sports can thrive both as a passion and as a
              professional journey.
            </p>
          </AnimatedCard>
        </div>
      </div>

      {/* Image Section with Enhanced Inner Light Effect */}
      <div className="flex  md:flex-row flex-col gap-12  ">
        <div className="relative w-full  flex items-center justify-center ">
          <div className="relative flex items-center">
            <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div>
            <AnimatedCard>
              <div className="w-full h-full overflow-hidden group">
                <img
                  src="/directorImg.webp"
                  className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="Director"
                />
                {/* Inner Light Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black" />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">Dhineshwaran</span>

                      <span className="font-sans text-xs">
                        <TextHoverAnimation text="Managing" />
                        <span className="text-secondary">
                          {" "}
                          <TextHoverAnimation text="Director" />
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center lg:text-left text-center lg:items-start gap-8  ">
          <AnimatedCard>
            <p className="text-3xl md:text-4xl flex gap-2 lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
            <TextHoverAnimation text={"Managing"} />
             <span className="text-secondary">            <TextHoverAnimation text={"Director"} />
             </span>
            </p>
          </AnimatedCard>

          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <AnimatedCard>
              <p className="md:text-2xl text-lg">
                GameOn Solution specializes in constructing sports grounds,
                artificial football turf, cricket pitches, volleyball courts,
                basketball courts, and badminton courts, primarily serving
                customers in South India. GameOn Solution offers a comprehensive
                range of services, including building turf grounds, athletic
                tracks, and sports flooring solutions.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <p className="md:text-2xl text-lg">
                Their services cover everything from consultancy and planning
                stages to the construction and execution of sports complexes and
                grounds. Additionally, GameOn Solution undertakes maintenance,
                repair, and upgrade projects for existing facilities. With an
                in-house engineering and project team equipped with
                state-of-the-art design tools and high-quality materials, they
                ensure efficient implementation of projects.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
