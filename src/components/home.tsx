import React from "react";
import FootballAnimation from "./footballAnimation";
import TextHoverAnimation from "./textHoverAnimation";
import { SlBadge } from "react-icons/sl";

const Home: React.FC = () => {
  return (
    <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
      {/* Background Image */}
      <img
        src="./bg-image.webp"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Inner Shadow Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./bg-image.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 20px 20px 100px 100px rgba(0, 0, 0, 0.9)", // Inner shadow on all sides
        }}
      />

      {/* Text */}
      <div className="flex flex-col select-none min-h-full w-full z-10 justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-3 md:gap-2">
          <div className="w-full flex justify-start animate-bounce transition-all duration-1000">
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
