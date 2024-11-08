import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
interface  Props {
    images:{
        poster: string;
        name: string;
      }[]
      loop:boolean,
      autoPlay:boolean,
      breakpoints:boolean
      setCurrentImageIndex:(value:number) => void

}  
const HomeSliderSection: React.FC<Props> = ({images,autoPlay,breakpoints,setCurrentImageIndex}) => {

  return (
    <section className="section slider-sections absolute  w-full flex justify-center items-center">
        
      <div className="h-full w-full mx-auto">
      <Swiper
          modules={autoPlay? [Autoplay, Pagination, Navigation]:[ Pagination, Navigation]}
          centeredSlides
          slidesPerView={1} 
          loop
          autoplay={{
            delay: 9000,
            disableOnInteraction: false
          }}
          
          pagination={{ clickable: true }}
          navigation
          breakpoints={breakpoints?{
            480: { slidesPerView: 1, spaceBetween: 10 }, 
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 } 
          }:{}}
          className="swiper-container"
          allowTouchMove={true}
          allowSlideNext={true}
          allowSlidePrev={true}
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}

        >
          {images?.map((src, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img
                src={src.poster}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover transition-transform duration-300 min-h-screen "
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
};

export default HomeSliderSection;
