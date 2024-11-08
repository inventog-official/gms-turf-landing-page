import SliderSection from "@/components/ProductCarousel/main";
import {
  useScroll,
  // useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import {  useRef, useState } from "react";
// import { useWindowSize } from "react-use";

export type CarouselImage = {
  poster: string;
  name: string;
};

interface VideoCarouselProps {
  carouselImages: CarouselImage[];
  title: string;
}

export const VideoCarousel = ({
  carouselImages,
  // title,
}: VideoCarouselProps) => {
  // const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  // const maximumScale = useMemo(() => {
  //   const windowYRatio = height / width;
  //   const xScale = 1.66667;
  //   const yScale = xScale * (16 / 9) * windowYRatio;
  //   return Math.max(xScale, yScale);
  // }, [width, height]);

  // const scale = useTransform(
  //   scrollYProgress,
  //   [0.3, 0.5, 0.66],
  //   [maximumScale * 1.1, maximumScale, 1]
  // );

  // const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  // const posterTranslateXLeft = useTransform(
  //   scrollYProgress,
  //   [0.64, 0.66],
  //   [-20, 0]
  // );
  // const posterTranslateXRight = useTransform(
  //   scrollYProgress,
  //   [0.64, 0.66],
  //   [20, 0]
  // );

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setCarouselVariant(progress >= 0.67 ? "active" : "inactive");
  });

  const randomcarouselImagesSet1 = carouselImages
    .sort(() => Math.random() - 0.5)
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .concat(carouselImages.sort(() => Math.random() - 0.5));

  const randomcarouselImagesSet2 = carouselImages
    .sort(() => Math.random() - 0.5)
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .concat(carouselImages.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);
   
  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">

      <div
        ref={carouselWrapperRef}
        className="mt-[-100vh] h-[300vh] overflow-clip"
      >
        <div className="sticky top-0 flex h-[40%] w-full  items-center">

          <SliderSection autoPlay={true} images={carouselImages} loop={true} breakpoints={true}/>
          {/* <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={carouselImages[0].poster}
                alt={carouselImages[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={carouselImages[1].poster}
                alt={carouselImages[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>{title}</p> 
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip md:aspect-video md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={carouselImages[2].poster}
                alt={carouselImages[2].name}
              />
            </motion.div>
          </div> */}
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel carouselImages={randomcarouselImagesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel carouselImages={randomcarouselImagesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({
  carouselImages,
}: {
  carouselImages: CarouselImage[];
}) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
        {carouselImages.map((carouselImage, index) => (
          <div
            className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
            key={`${carouselImage.name}-${index}`}
          >
            <img
              className="h-full w-full rounded-xl object-cover"
              src={carouselImage.poster}
              alt={carouselImage.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
