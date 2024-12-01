import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedCard from "./animateCard";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="contact"
      className="flex flex-col gap-10 lg:gap-0 justify-start items-center select-none min-h-[80vh] bg-primary px-12 md:px-20 lg:px-0 pb-16 lg:pb-28"
    >
      {/* Header */}
      <div className="w-full lg:hidden flex justify-center">
        <p className="text-[12px] font-secondary text-center  uppercase tracking-[1px]">
          Contact
        </p>
      </div>
      <div className="w-full flex flex-col h-full justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center w-full gap-5 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:bg-slate-500/5 flex flex-col justify-center items-center">
            <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5 lg:gap-10">
              {/* Header */}
              <AnimatedCard>
                <p className="text-[12px] hidden lg:flex font-secondary lg:mb-8 uppercase tracking-[1px]">
                  Contact
                </p>
              </AnimatedCard>

              <div className="lg:pr-10 w-full flex text-center lg:text-left px-5 lg:px-0 justify-center items-center">
                <AnimatedCard>
                  <p className="text-4xl lg:text-7xl uppercase font-primary text-white">
                    Let's <span className="text-secondary">Make</span> an{" "}
                    <span className="text-secondary">Impact</span> together
                  </p>
                </AnimatedCard>
              </div>
              <div className="lg:border-l-4 lg:border-secondary lg:pl-7 lg:pr-16">
                <AnimatedCard>
                  <p className="text-base text-center lg:text-left font-secondary">
                    where your ideas come to life. We specialize in crafting
                    unique brands, captivating advertising campaigns, and
                    effective digital strategies.
                  </p>
                </AnimatedCard>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/contactSideImg.webp" />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 hidden lg:flex"></div>
          <div className="w-full lg:w-1/2 lg:bg-slate-500/5">
            <div className="bg-secondary p-4 lg:w-[30%] flex justify-center">
              <button
                className="w-[60%] md:w-[40%] lg:w-full border-2 border-primary p-5 rounded-full text-center transform transition-transform duration-300 hover:scale-105"
                onClick={() => navigate("/get-in-touch")}
              >
                <p className="uppercase text-primary font-primary tracking-[1.5px]">
                  Get in Touch
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
