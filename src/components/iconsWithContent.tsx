import React from "react";

const IconsWithContent: React.FC = () => {
  return (
    <section
      id="iconsWithContent"
      className="relative flex flex-col bg-primary shadow-inner py-[5rem]"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="flex md:flex-row flex-wrap justify-around p-5">
        <div className="w-full md:w-[50%] lg:w-[18%] rounded-lg flex flex-col justify-center items-center p-5">
          <img src="/1-01.png" className="w-full" />
          <div className="flex flex-col gap-4 text-center">
            <p className="text-white text-2xl font-anton">Quality Products</p>
            <p className="text-center w-full font-outfit text-base">
              Unmatched quality for lasting beauty and resilience.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[18%] rounded-lg flex flex-col justify-center items-center p-5">
          <img src="/1-02.png" className="w-full" />
          <div className="flex flex-col gap-4 text-center">
            <p className="text-white text-2xl font-anton">
              Customer Stratification
            </p>
            <p className="text-center w-full font-outfit text-base">
              Exceeding expectations with tailored solutions for every need.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[18%] rounded-lg flex flex-col justify-center items-center p-5">
          <img src="/1-03.png" className="w-full" />
          <div className="flex flex-col gap-4 text-center">
            <p className="text-white text-2xl font-anton">On Time Delivery</p>
            <p className="text-center w-full font-outfit text-base">
              Punctuality you can trust, quality you can count on.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[18%] rounded-lg flex flex-col justify-center items-center p-5">
          <img src="/1-04.png" className="w-full" />
          <div className="flex flex-col gap-4 text-center">
            <p className="text-white text-2xl font-anton">
              Square Feet Installed
            </p>
            <p className="text-center w-full font-outfit text-base">
              Expansive installations crafted to perfection, down to every
              square foot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsWithContent;
