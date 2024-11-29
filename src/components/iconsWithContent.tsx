import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import React from "react";
import AnimatedCard from "./AnimateCard/main";

const IconsWithContent: React.FC = () => {
  return (
    <section
      id="iconsWithContent"
      className="relative flex flex-col bg-primary shadow-inner justify-center items-center select-none pb-16"
    >
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/75 to-transparent pointer-events-none"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-5">
        {iconsWithImagesObj.map((item, index) => {
          return (
            <AnimatedCard key={index}>
              <div
                key={index}
                className="w-full rounded-lg flex flex-col justify-center items-center px-10 md:px-6 lg:px-5 py-2 lg:py-5"
              >
                <img
                  src={item.imageSrc}
                  className="w-[55%] md:w-[75%] lg:w-full select-none"
                  draggable="false"
                />
                <div className="flex flex-col gap-4 text-center">
                  <p className="text-white text-2xl font-primary">
                    {item.title}
                  </p>
                  <p className="text-center w-full font-secondary text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
  {iconsWithImagesObj.map((item, index) => {
    return (
      <AnimatedCard key={index}>
         <div 
        key={index} 
        className="rounded-lg flex flex-col justify-between items-center p-4 h-full" // Use h-full for equal height
      >
        <img 
          src={item.imageSrc} 
          className="w-full max-w-[200px] select-none" 
          draggable="false" 
        />
        <div className="flex flex-col gap-4 text-center mt-4 flex-grow"> 
          <p className="text-white text-2xl font-primary">{item.title}</p>
          <p className="text-center w-full font-secondary text-lg">
            {item.description}
          </p>
        </div>
      </div>
      </AnimatedCard>
     
    );
  })}
</div> */}
    </section>
  );
};

export default IconsWithContent;
