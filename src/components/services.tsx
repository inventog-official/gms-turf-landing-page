import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-16 justify-center items-center min-h-[100vh] bg-primary px-[6.5rem] py-[5rem]"
    >
      {/* <h1 className="text-5xl font-extrabold text-gray-800">Our Services</h1> */}
      <div className="text-left w-full">
        <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
          Our Products
        </p>
      </div>
      <div className="w-full h-full flex flex-col gap-10">
        <div className="text-left">
          <p className="text-6xl font-primary text-white/70 font-semibold uppercase">
            <span className="text-secondary">Installation</span>.{" "}
            <span className="text-secondary">Maintenance</span>.{" "}
            <span className="text-secondary">Renovation</span>.
            {/* Installation<span className="text-secondary">.</span> Maintenance<span className="text-secondary">.</span> Renovation<span className="text-secondary">.</span> */}
          </p>
        </div>
        <div className="w-full">
          <div className="w-full h-full flex gap-5 border-t-[0.1px] border-b-[0.1px] border-yellow-500 py-[1.5rem] group">
            <div className="p-5 border-r-0 border-l-0 w-[70%] flex flex-col gap-5">
              <p className="text-3xl font-extrabold uppercase font-primary text-white/70">
                Football
              </p>
              <div className="border-l-[4px] border-secondary">
                <p className="text-base font-secondary px-8">
                  Premium-quality football turf designed for durability and
                  performance, providing a safe, all-weather surface for
                  players. Ideal for both training grounds and professional
                  fields.
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-end">
              <div className="border-2 border-secondary flex flex-col justify-between items-end h-full w-[35%] group-hover:bg-secondary opacity-90 p-5 group">
                <FaArrowRight className="text-4xl text-white/70 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all ease-out duration-150" />
                <p className="text-xl text-white/70 group-hover:text-primary font-primary opacity-90 tracking-[1px] uppercase">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 border-b-[0.1px] border-yellow-500 py-[1.5rem] group">
            <div className="p-5 border-r-0 border-l-0 w-[70%] flex flex-col gap-5">
              <p className="text-3xl font-extrabold uppercase font-primary text-white/70">
                Cricket
              </p>
              <div className="border-l-[4px] border-secondary">
                <p className="text-base font-secondary px-8">
                  Premium-quality football turf designed for durability and
                  performance, providing a safe, all-weather surface for
                  players. Ideal for both training grounds and professional
                  fields.
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-end">
              <div className="border-2 border-secondary flex flex-col justify-between items-end h-full w-[35%] group-hover:bg-secondary opacity-90 p-5 group">
                <FaArrowRight className="text-4xl text-white/70 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all ease-out duration-150" />
                <p className="text-xl text-white/70 group-hover:text-primary font-primary opacity-90 tracking-[1px] uppercase">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 border-b-[0.1px] border-yellow-500 py-[1.5rem] group">
            <div className="p-5 border-r-0 border-l-0 w-[70%] flex flex-col gap-5">
              <p className="text-3xl font-extrabold uppercase font-primary text-white/70">
                Indoor
              </p>
              <div className="border-l-[4px] border-secondary">
                <p className="text-base font-secondary px-8">
                  Premium-quality football turf designed for durability and
                  performance, providing a safe, all-weather surface for
                  players. Ideal for both training grounds and professional
                  fields.
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-end">
              <div className="border-2 border-secondary flex flex-col justify-between items-end h-full w-[35%] group-hover:bg-secondary opacity-90 p-5 group">
                <FaArrowRight className="text-4xl text-white/70 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all ease-out duration-150" />
                <p className="text-xl text-white/70 group-hover:text-primary font-primary opacity-90 tracking-[1px] uppercase">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 border-b-[0.1px] border-yellow-500 py-[1.5rem] group">
            <div className="p-5 border-r-0 border-l-0 w-[70%] flex flex-col gap-5">
              <p className="text-3xl font-extrabold uppercase font-primary text-white/70">
                volleyball
              </p>
              <div className="border-l-[4px] border-secondary">
                <p className="text-base font-secondary px-8">
                  Premium-quality football turf designed for durability and
                  performance, providing a safe, all-weather surface for
                  players. Ideal for both training grounds and professional
                  fields.
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-end">
              <div className="border-2 border-secondary flex flex-col justify-between items-end h-full w-[35%] group-hover:bg-secondary opacity-90 p-5 group">
                <FaArrowRight className="text-4xl text-white/70 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all ease-out duration-150" />
                <p className="text-xl text-white/70 group-hover:text-primary font-primary opacity-90 tracking-[1px] uppercase">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 border-b-[0.1px] border-yellow-500 py-[1.5rem] group">
            <div className="p-5 border-r-0 border-l-0 w-[70%] flex flex-col gap-5">
              <p className="text-3xl font-extrabold uppercase font-primary text-white/70">
                Multi Sports
              </p>
              <div className="border-l-[4px] border-secondary">
                <p className="text-base font-secondary px-8">
                  Premium-quality football turf designed for durability and
                  performance, providing a safe, all-weather surface for
                  players. Ideal for both training grounds and professional
                  fields.
                </p>
              </div>
            </div>
            <div className="w-[30%] flex justify-end">
              <div className="border-2 border-secondary flex flex-col justify-between items-end h-full w-[35%] group-hover:bg-secondary opacity-90 p-5 group">
                <FaArrowRight className="text-4xl text-white/70 group-hover:text-primary -rotate-45 group-hover:rotate-0 transition-all ease-out duration-150" />
                <p className="text-xl text-white/70 group-hover:text-primary font-primary opacity-90 tracking-[1px] uppercase">
                  Read more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
