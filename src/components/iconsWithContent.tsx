import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import React from "react";

const IconsWithContent: React.FC = () => {
  return (
    <section
      id="iconsWithContent"
      className="relative flex flex-col bg-primary shadow-inner min-h-[70vh] lg:min-h-[60vh] py-16 md:py-0 justify-center items-center select-none"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/75 to-transparent pointer-events-none"></div>
      <div className="flex md:flex-row flex-wrap justify-around px-5">
        {iconsWithImagesObj.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-[40%] lg:w-[20%] rounded-lg flex flex-col justify-center items-center px-10 md:px-6 lg:px-5 py-2 lg:py-5"
            >
              <img src={item.imageSrc} className="w-[55%] md:w-[75%] lg:w-full select-none" />
              <div className="flex flex-col gap-4 text-center">
                <p className="text-white text-2xl font-primary">
                  {item.title}
                </p>
                <p className="text-center w-full font-secondary text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IconsWithContent;
