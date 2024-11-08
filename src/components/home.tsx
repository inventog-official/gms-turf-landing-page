import React, { useState } from "react";
import FootballAnimation from "./footballAnimation";
import TextHoverAnimation from "./textHoverAnimation";
import { SlBadge } from "react-icons/sl";
import { useCarousel } from "@/hook/useCarousel";
import HomeSliderSection from "./homePageCarousel/main";
import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";

const Home: React.FC = () => {
  const { queryClient } = useCarousel();

  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featureIndex = currentImageIndex > 0 ? currentImageIndex - 1 : 0;

  console.log(featureIndex);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data?.length);
  //   }, 4000); // 4 seconds per slide
  //   return () => clearInterval(interval);
  // }, [data?.length]);

  return (
    <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
      {/* Background Image Slideshow */}
      {/* {data?.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))} */}
      <HomeSliderSection
        images={data?.map((item) => {
          return {
            poster: item.url,
            name: `${item.id}`,
          };
        })}
        loop={true}
        autoPlay={true}
        breakpoints={false}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <div className="  bottom-5 z-20  absolute   animate-bounce  transition-all duration-1000">
        <FootballAnimation />
      </div>
      {currentImageIndex == 0 ? (
        <div className="flex flex-col  py-28 text-center">
          <h1 className="text-md md:text-2xl uppercase  font-primary text-white flex gap-2 items-center justify-center  z-[11] opacity-0 animate-lineUp delay-700">
            <span className="text-secondary">
              <SlBadge />
            </span>
            South india's <span className="text-secondary">no.1</span>
          </h1>
          <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
            <TextHoverAnimation text="Sports" />
            <div className="text-secondary">
              <TextHoverAnimation text="infrastructure" />
            </div>
          </h1>
        </div>
      ) : null}
      {/* {currentImageIndex==featureIndex+1?   <div className="flex flex-col  py-28 text-center">
      
        <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
          <TextHoverAnimation text={`${Features[featureIndex].title}`} />
          <div className="text-secondary text-4xl">
            <TextHoverAnimation text={`${Features[featureIndex].description}`}/>
          </div>
        </h1>
      </div>:null} */}
      {currentImageIndex == 1 ? (
        <div className="flex flex-col  py-28 text-center">
          <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
            <img
              src={iconsWithImagesObj[0].imageSrc}
              className="h-20 w-20 md:h-32 md:w-32 select-none"
              draggable="false"
            />
            <TextHoverAnimation text={`${iconsWithImagesObj[0].title}`} />
            <div className="text-secondary  flex justify-center  text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[70%]">
              <TextHoverAnimation
                text={`${iconsWithImagesObj[0].description}`}
              />
            </div>
          </h1>
        </div>
      ) : null}
      {currentImageIndex == 2 ? (
        <div className="flex flex-col  py-28 text-center">
          <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
            <img
              src={iconsWithImagesObj[1].imageSrc}
              className="h-20 w-20 md:h-32 md:w-32 select-none"
              draggable="false"
            />
            <TextHoverAnimation text={`${iconsWithImagesObj[1].title}`} />
            <div className="text-secondary  flex justify-center  text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[70%]">
              <TextHoverAnimation
                text={`${iconsWithImagesObj[1].description}`}
              />
            </div>
          </h1>
        </div>
      ) : null}
      {currentImageIndex == 3 ? (
        <div className="flex flex-col  py-28 text-center">
          <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
            <img
              src={iconsWithImagesObj[2].imageSrc}
              className="h-20 w-20 md:h-32 md:w-32 select-none"
              draggable="false"
            />
            <TextHoverAnimation text={`${iconsWithImagesObj[2].title}`} />
            <div className="text-secondary  flex justify-center  text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[70%]">
              <TextHoverAnimation
                text={`${iconsWithImagesObj[2].description}`}
              />
            </div>
          </h1>
        </div>
      ) : null}
      {currentImageIndex == 4 ? (
        <div className="flex flex-col w-full  py-28 text-center">
          <h1 className="text-3xl md:text-6xl font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp delay-1000">
            <img
              src={iconsWithImagesObj[3].imageSrc}
              className="h-20 w-20 md:h-32 md:w-32 select-none"
              draggable="false"
            />
            <TextHoverAnimation text={`${iconsWithImagesObj[3].title}`} />
            <div className="text-secondary  flex justify-center  text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[70%]">
              <TextHoverAnimation
                text={`${iconsWithImagesObj[3].description}`}
              />
            </div>
          </h1>
        </div>
      ) : null}
    </section>
  );
};
 
export default Home;
