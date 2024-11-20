import React, { useEffect, useRef, useState } from "react";
import FootballAnimation from "./footballAnimation";
import TextHoverAnimation from "./textHoverAnimation";
import { SlBadge } from "react-icons/sl";
import { useCarousel } from "@/hook/useCarousel";
import { iconsWithImagesObj } from "@/common/iconsWithImagesObj";
import "swiper/css";
import "swiper/css/pagination";

import VerticalCardSlider from "./snappingAnimation/main";
import { Popup } from "./popup/main";
import ContactForm from "./popup/contactsPopup";

const Home: React.FC = () => {
  const { queryClient } = useCarousel();
  const data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];
  const [isPopupOpen, setIsPopupOpen] = useState(true);
	const popupRef = useRef<HTMLDivElement>(null);

	const PopupState =  JSON.parse( localStorage.getItem("contacts-gms") as any) as {value:boolean}


	const handleClosePopup = () => {
    localStorage.setItem("contacts-gms",JSON.stringify({value:true}))
		setIsPopupOpen(false);
    localStorage.setItem("contacts-gms",JSON.stringify({value:true}))
	};


 const BlurHash =  ["NGBWPd^ODPNHI.Na^n-UkPR+M|Na4?NLxsoboLjF",
 "N44MUytQ4UMyq8kUHce:y,oymtV[8wV[.kt7R7oM",
"N68qWq?H019YO+SRxwRjbXofoLa{01E1?@-q#ss*",
 "N64{6YV^4Uo[.7rxWEbGoen*RkX74Vow?[RUIBXM",
 "N54L{vRQ8z%fpFMyQ;kBtiWBi|kB4VtQ.jIBVux[",]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const featureIndex = currentImageIndex > 0 ? currentImageIndex - 1 : 0;
  // const featureIndex = currentImageIndex > 0 ? currentImageIndex - 1 : 0;

  // console.log(featureIndex);

  const sectionRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "animate-lineUp",
              "translate-y-0"
            );
          } else {
            entry.target.classList.remove(
              "opacity-100",
              "animate-lineUp",
              "translate-y-0"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((text) => {
      if (text) {
        text.classList.add(
          "opacity-0",
          "translate-y-10",
          "transition",
          "duration-700",
          "ease-in-out"
        );
        observer.observe(text);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data?.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [data?.length]);
// Effect to manage body overflow
useEffect(() => {
  if (isPopupOpen&&!PopupState) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'; // or 'scroll' depending on your needs
  }

  // Cleanup function to reset overflow when component unmounts
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isPopupOpen]);
  return (
    <section className="relative flex flex-col animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden">
      {/* Background Image Slideshow */}
      {data?.map((image, index) => (
        <div className=" w-full  md:block lg:block xl:hidden justify-center">
           <img
          key={index}
          src={image.url}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
         <div className="bottom-14   lg:bottom-10 z-30 w-full absolute flex justify-center animate-bounce transition-all duration-1000">
                <FootballAnimation />
              </div>
              <div
              ref={(el) => (sectionRefs.current[0] = el!)}
              className="flex gap-3 top-28  w-full justify-center absolute z-30 flex-col  text-center "
            >
              <h1 className="text-2xl md:text-4xl  uppercase font-primary text-white flex gap-2 items-center justify-center z-[11] opacity-0 animate-lineUp ">
                <span className="text-secondary">
                  <SlBadge />
                </span>
                <TextHoverAnimation text="South India's" />
                <span className="text-secondary">
                  {" "}
                  <TextHoverAnimation text="no.1" />
                </span>
              </h1>
              <h1
                ref={(el) => (sectionRefs.current[1] = el!)}
                className="text-2xl md:text-4xl font-primary uppercase flex gap-3 justify-center items-center text-white z-[11] opacity-0 animate-lineUp "
              >
                <TextHoverAnimation text="Sports" />
                <div className="text-secondary">
                  <TextHoverAnimation text="infrastructure " />
                </div>
                <span className="md:block hidden">
                <TextHoverAnimation text="developer" />
                </span>

              </h1>
              <h1
                ref={(el) => (sectionRefs.current[1] = el!)}
                className="text-2xl   md:hidden md:text-4xl font-primary uppercase flex gap-3 justify-center items-center text-white z-[11] opacity-0 animate-lineUp "
              >
             
                <TextHoverAnimation text="developer" />

              </h1>
            </div>
        </div>
       
      ))}
      {data?.map((item, index) => {
        return (
          <div className="  xl:flex hidden  relative justify-center items-center h-screen">
            
            <VerticalCardSlider index={index} blurHash={BlurHash[index]} images={item.url} />
            {index === 0 && (
              <div className="bottom-14  lg:bottom-10 z-30 w-full absolute flex justify-center animate-bounce transition-all duration-1000">
                <FootballAnimation />
              </div>
            )}
            <div
              ref={(el) => (sectionRefs.current[0] = el!)}
              className="flex gap-3 top-28  absolute z-30 flex-col  text-center "
            >
              <h1 className="text-2xl md:text-4xl  uppercase font-primary text-white flex gap-2 items-center justify-center z-[11] opacity-0 animate-lineUp ">
                <span className="text-secondary">
                  <SlBadge />
                </span>
                <TextHoverAnimation text="South India's" />
                <span className="text-secondary">
                  {" "}
                  <TextHoverAnimation text="no.1" />
                </span>
              </h1>
              <h1
                ref={(el) => (sectionRefs.current[1] = el!)}
                className="text-2xl md:text-4xl font-primary uppercase flex gap-3 justify-center items-center text-white z-[11] opacity-0 animate-lineUp "
              >
                <TextHoverAnimation text="Sports" />
                <div className="text-secondary">
                  <TextHoverAnimation text="infrastructure " />
                </div>
                <span className="md:block hidden">
                <TextHoverAnimation text="developer" />
                </span>

              </h1>
              <h1
                ref={(el) => (sectionRefs.current[1] = el!)}
                className="text-2xl  md:hidden md:text-4xl font-primary uppercase flex gap-3 justify-center items-center text-white z-[11] opacity-0 animate-lineUp "
              >
             
                <TextHoverAnimation text="developer" />

              </h1>
            </div>
            {index === 1 && (
              <div className="w-full   px-3  items- bottom-4 justify-start  absolute lg:grid lg:grid-cols-4 md:grid md:grid-cols-4  ">
                <div
                  ref={(el) => (sectionRefs.current[2] = el!)}
                  className="flex  flex-col md:w-full w-[75%] items-start md:items-center text-left md:text-center"
                >
                  <div className="flex flex-col md:items-center items-start  space-y-1">
                    <div className="  items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                      <img
                        src={iconsWithImagesObj[0].imageSrc}
                        className="h-full w-full  md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                        draggable="false"
                      />
                    </div>

                    <span className="flex w-full  flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
                      <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
                        {iconsWithImagesObj[0].title}
                      </h1>

                      <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
                        {iconsWithImagesObj[0].description}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="w-full   px-3  items- bottom-4 justify-start  absolute lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 ">
                <div
                  // ref={(el) => (sectionRefs.current[3] = el!)}
                  className="flex-col relative  hidden md:flex   justify-center items-center "
                >
                  <img
                    src={iconsWithImagesObj[0].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />

                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl   md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                      text={`${iconsWithImagesObj[0].title}`}
                    /> */}
                      {iconsWithImagesObj[0].title}
                    </h1>

                    <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[0].description}`}
                    </p>
                  </span>
                </div>
                <div
                  ref={(el) => (sectionRefs.current[4] = el!)}
                  className="flex flex-col md:w-full w-[75%] items-start sm:items-center text-left sm:text-center justify-center"
                >
                  <div className="flex flex-col items-start sm:items-center">
                    <div className=" items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                      <img
                        src={iconsWithImagesObj[1].imageSrc}
                        className="h-full w-full sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                        draggable="false"
                      />
                    </div>
                    <span className="flex flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
                      <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
                        {iconsWithImagesObj[1].title}
                      </h1>
                      <p className="text-md md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
                        {iconsWithImagesObj[1].description}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {index === 3 && (
              <div className="w-full   px-3  items- bottom-4 justify-start  absolute lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 ">
                <div
                  // ref={(el) => (sectionRefs.current[5] = el!)}
                  className="flex-col relative  hidden md:flex justify-center items-center    text-center   "
                >
                  <img
                    src={iconsWithImagesObj[0].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />
                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl   md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                      text={`${iconsWithImagesObj[0].title}`}
                    /> */}
                      {iconsWithImagesObj[0].title}
                    </h1>

                    <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[0].description}`}
                    </p>
                  </span>
                </div>
                <div
                  // ref={(el) => (sectionRefs.current[7] = el!)}
                  className="flex-col relative  hidden md:flex  text-center justify-center items-center "
                >
                  <img
                    src={iconsWithImagesObj[1].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />
                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                      text={`${iconsWithImagesObj[1].title}`}
                    /> */}
                      {iconsWithImagesObj[1].title}
                    </h1>

                    <p className="text-md md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[1].description}`}
                    </p>
                  </span>
                </div>
                <div
                  ref={(el) => (sectionRefs.current[10] = el!)}
                  className="flex flex-col md:w-full w-[75%] items-start sm:items-center text-left sm:text-center justify-center"
                >
                  <div className="flex flex-col items-start sm:items-center">
                    <div className=" items-start w-[50%] md:items-center md:justify-center md:w-full flex justify-start ">
                      <img
                        src={iconsWithImagesObj[2].imageSrc}
                        className="h-full w-full sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                        draggable="false"
                      />
                    </div>
                    <span className="flex flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
                      <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
                        {iconsWithImagesObj[2].title}
                      </h1>
                      <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
                        {iconsWithImagesObj[2].description}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {index === 4 && (
              <div className="w-full    px-3  items- bottom-4 justify-start  absolute lg:grid lg:grid-cols-4 md:grid md:grid-cols-4  gap-3">
                <div className="flex-col relative  hidden md:flex   items-center justify-center   text-center   ">
                  <img
                    src={iconsWithImagesObj[0].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />
                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl   md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                      text={`${iconsWithImagesObj[0].title}`}
                    /> */}
                      {`${iconsWithImagesObj[0].title}`}
                    </h1>

                    <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[0].description}`}
                    </p>
                  </span>{" "}
                </div>
                <div className="flex-col relative  hidden md:flex  text-center justify-center items-center ">
                  <img
                    src={iconsWithImagesObj[1].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />
                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                      text={`${iconsWithImagesObj[1].title}`}
                    /> */}
                      {`${iconsWithImagesObj[1].title}`}
                    </h1>

                    <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[1].description}`}
                    </p>
                  </span>
                </div>

                <div className="flex-col   hidden md:flex relative items-center justify-center  text-center">
                  <img
                    src={iconsWithImagesObj[2].imageSrc}
                    className="h-28 w-32 sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                    draggable="false"
                  />
                  <span className="flex flex-col justify-center items-center text-center gap-1 md:gap-3">
                    <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase flex flex-col justify-center items-center text-white z-[11] opacity-0 animate-lineUp">
                      {/* <TextHoverAnimation
                        text={`${iconsWithImagesObj[2].title}`}
                      /> */}
                      {`${iconsWithImagesObj[2].title}`}
                    </h1>

                    <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 text-center w-[80%] break-words">
                      {`${iconsWithImagesObj[2].description}`}
                    </p>
                  </span>
                </div>

                <div
                  ref={(el) => (sectionRefs.current[8] = el!)}
                  className="flex flex-col md:w-full w-[75%] items-start sm:items-center text-left sm:text-center justify-center"
                >
                  <div className="flex flex-col items-start sm:items-center">
                    <div className=" items-start w-[50%]  md:items-center md:justify-center md:w-full flex justify-start ">
                      <img
                        src={iconsWithImagesObj[3].imageSrc}
                        className="h-full w-full sm:h-40 sm:w-52 md:h-52 md:w-52 lg:h-52 lg:w-52 select-none"
                        draggable="false"
                      />
                    </div>
                    <span className="flex flex-col items-start sm:items-center text-left sm:text-center gap-1 md:gap-3">
                      <h1 className="text-xl  md:text-xl lg:text-lg font-primary uppercase text-white z-[11] opacity-0 animate-lineUp">
                        {iconsWithImagesObj[3].title}
                      </h1>
                      <p className="text-md  md:text-[14px] lg:text-[14px] text-gray-300 w-[80%] break-words">
                        {iconsWithImagesObj[3].description}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      {PopupState==undefined&&isPopupOpen?
      
      <Popup
      className="w-full md:w-96"
      ref={popupRef}
					onClose={handleClosePopup}
					closeButton={true}
      >
        <ContactForm setIsPopupOpen={setIsPopupOpen}/>
      </Popup>:null}
    </section>
  );
};

export default Home;
