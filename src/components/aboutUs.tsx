import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row w-full min-h-[90vh] justify-center items-center gap-10 lg:gap-4 bg-primary px-6 sm:px-8 lg:px-4 xl:px-12 2xl:px-16 py-2 lg:py-0">
      {/* Mobile "About Us" Heading */}
      <div className="flex flex-col lg:hidden w-full px-2 gap-10">
        <div className="text-left w-full">
          <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
            About Us
          </p>
        </div>
        <div className="text-left">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white/70 font-semibold uppercase leading-tight">
            Managing <span className="text-secondary">Director</span>
          </p>
        </div>
      </div>

      {/* Image Section with Enhanced Inner Light Effect */}
      <div className="relative w-full lg:w-[40%] flex items-center justify-center py-6 lg:py-8">
        <div className="relative flex items-center">
          <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div>
          <div className="w-full h-full overflow-hidden group">
            <img
              src="/directorImg.webp"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
              alt="Director"
            />
            {/* Inner Light Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
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
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-6 lg:gap-16 px-4 lg:px-8">
        {/* About Us Heading for Larger Screens */}
        <div className="text-left hidden lg:flex ">
          <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
            About Us
          </p>
        </div>
        {/* Main Content */}
        <div className="flex flex-col gap-6 md:gap-10 text-base md:text-lg lg:text-2xl xl:text-3xl text-white/60 font-primary">
          <div className="text-left hidden lg:flex">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white/70 font-semibold uppercase leading-tight">
              Managing <span className="text-secondary">Director</span>
            </p>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
            GameOn Solution specializes in constructing sports grounds,
            artificial football turf, cricket pitches, volleyball courts,
            basketball courts, and badminton courts, primarily serving customers
            in South India. Similar to Meckavo Sports Infrastructure, GameOn
            Solution offers a comprehensive range of services, including
            building turf grounds, athletic tracks, and sports flooring
            solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
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
