import React, { useState, useEffect } from "react";
import FootballAnimation from "./footballAnimation";
import TextHoverAnimation from "./textHoverAnimation";
import { SlBadge } from "react-icons/sl";
import { useCarousel } from "@/hook/useCarousel";

const Home: React.FC = () => {
  const { queryClient } = useCarousel();

  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [data?.length]);

  return (
    <section className="relative flex animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
      {/* Background Image Slideshow */}
      {data?.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="  bottom-5  absolute   animate-bounce  transition-all duration-1000">
        <FootballAnimation />
      </div>
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
    </section>
  );
};

export default Home;
