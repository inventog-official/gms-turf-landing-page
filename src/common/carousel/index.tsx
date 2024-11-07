import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

interface Slide {
  title: string;
  description: string;
  image: string;
}

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: Slide[] = [
    {
      title: "Slide title 1",
      description: "Slide description 1",
      image:
        "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg",
    },
    {
      title: "Slide title 2",
      description: "Slide description 2",
      image:
        "https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg",
    },
    {
      title: "Slide title 3",
      description: "Slide description 3",
      image: "https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg",
    },
    {
      title: "Slide title 4",
      description: "Slide description 4",
      image:
        "https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg",
    },
  ];

  const handleNext = (): void => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = (): void => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handlePaginationClick = (index: number): void => {
    setActiveSlide(index);
  };

  return (
    <main className="main-content">
      <section className="slideshow">
        <div className="slideshow-inner">
          <div className="slides">
            <AnimatePresence>
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`slide ${
                    index === activeSlide ? "is-active" : ""
                  }`}
                  initial={{ opacity: 0, x: index < activeSlide ? -150 : 150 }}
                  animate={{
                    opacity: index === activeSlide ? 1 : 0,
                    x:
                      index === activeSlide
                        ? 0
                        : index < activeSlide
                        ? -1500
                        : 1500,
                  }}
                  exit={{
                    opacity: 0,
                    x: index < activeSlide ? -150 : 150,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="slide-content">
                    <div className="caption">
                      <div className="title">{slide.title}</div>
                      <div className="text">
                        <p>{slide.description}</p>
                      </div>
                      <a href="#" className="btn">
                        <span className="btn-inner">Learn More</span>
                      </a>
                    </div>
                  </div>
                  <motion.div
                    className="image-container"
                    initial={{ x: 0 }}
                    animate={{
                      x:
                        index === activeSlide
                          ? 0
                          : index < activeSlide
                          ? -400
                          : 400,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="image"
                      loading="lazy" // Lazy load images for better performance
                    />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="pagination">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`item ${index === activeSlide ? "is-active" : ""}`}
                onClick={() => handlePaginationClick(index)}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
                tabIndex={0} // Make pagination items focusable
              >
                <span className="icon">{index + 1}</span>
              </div>
            ))}
          </div>

          <div className="arrows">
            <div
              className="arrow prev"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <span className="svg svg-arrow-left">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="14px"
                  height="26px"
                  viewBox="0 0 14 26"
                  enableBackground="new 0 0 14 26"
                >
                  <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" />
                </svg>
              </span>
            </div>
            <div
              className="arrow next"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <span className="svg svg-arrow-right">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="14px"
                  height="26px"
                  viewBox="0 0 14 26"
                  enableBackground="new 0 0 14 26"
                >
                  <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Carousel;

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useState } from "react";
// import { AnimatePresence, motion, MotionConfig } from "framer-motion";

// // Use 'const' instead of 'let' since 'images' is not reassigned
// const images: string[] = [
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const Carousel: React.FC = () => {
//   const [index, setIndex] = useState<number>(0); // Type state as number

//   return (
//     <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
//       <div className="h-full bg-black">
//         <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
//           <div className="relative overflow-hidden">
//             <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
//               {images.map((image) => (
//                 <img
//                   key={image}
//                   src={image}
//                   alt="carousel image"
//                   className="aspect-[3/2] object-cover"
//                 />
//               ))}
//             </motion.div>
//             <AnimatePresence initial={false}>
//               {index > 0 && (
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.7 }}
//                   exit={{ opacity: 0, pointerEvents: "none" }}
//                   whileHover={{ opacity: 1 }}
//                   className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
//                   onClick={() => setIndex(index - 1)}
//                 >
//                   <FaChevronLeft className="h-6 w-6" />
//                 </motion.button>
//               )}
//             </AnimatePresence>

//             <AnimatePresence initial={false}>
//               {index + 1 < images.length && (
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0.7 }}
//                   exit={{ opacity: 0, pointerEvents: "none" }}
//                   whileHover={{ opacity: 1 }}
//                   className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
//                   onClick={() => setIndex(index + 1)}
//                 >
//                   <FaChevronRight className="h-6 w-6" />
//                 </motion.button>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </MotionConfig>
//   );
// };

// export default Carousel;
