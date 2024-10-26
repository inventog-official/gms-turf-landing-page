import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="aboutUs"
      className="relative flex w-full h-full bg-primary px-[4rem]"
    >
      {/* Image Section with Enhanced Inner Light Effect */}
      <div className="relative w-[40%] h-full flex items-center justify-center">
        <div className="relative flex w-[400px]  rounded-lg ">
          <div className="absolute border-4 border-yellow-600 w-full h-full -top-7 left-6 bg-black/70 blur-sm"></div>
          <div className="w-full h-full overflow-hidden group rounded-lg">
            {/* <div className=""> */}
            <img
              src="/directorImg.webp"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform group-hover:scale-105 hover:opacity-50"
              alt="Director"
            />
            {/* </div> */}
            {/* Inner Light Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-yellow-700/5 to-yellow-500/70 blur-lg" />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end justify-center duration-500 ease-out p-4">
                {/* <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out p-4"> */}
                <p className="text-lg font-semibold text-white bg-black/60 rounded-md p-2 font-ethnocentric w-full text-center">
                  Managing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className=" relative w-[60%] pr-4">
        <div className="absolute top-[5rem] left-[18rem]">
          <img src="/eeee.png" className="opacity-30" />
        </div>
        <div className="flex flex-col gap-16">
          <div className="text-left w-full">
            <h1 className="text-6xl font-ethnocentric">About Us</h1>
          </div>
          <div className="flex flex-col gap-5 h-full text-2xl text-white font-outfit">
            <p className="z-10">
              Game On Solution specializes in constructing sports grounds,
              artificial football turf, cricket pitches, volleyball courts,
              basketball courts, and badminton courts, primarily serving
              customers in South India. Similar to Meckavo Sports
              Infrastructure, Game On Solution offers a comprehensive range of
              services, including building turf grounds, athletic tracks, and
              sports flooring solutions.
            </p>
            <p className="z-10">
              Their services cover everything from consultancy and planning
              stages to the construction and execution of sports complexes and
              grounds. Additionally, Game On Solution undertakes maintenance,
              repair, and upgrade projects for existing facilities. With an
              in-house engineering and project team equipped with
              state-of-the-art design tools and high-quality materials, they
              ensure efficient implementation of projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
