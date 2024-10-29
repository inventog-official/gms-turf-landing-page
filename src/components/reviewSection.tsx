import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Paul Trueman",
      position: "Envato Market",
      review:
        "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work.",
      img: "img/reviews/2.jpg",
    },
    {
      name: "Emma Newman",
      position: "Envato Market",
      review:
        "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive.",
      img: "img/reviews/1.jpg",
    },
    {
      name: "Viktoria Freeman",
      position: "Envato Market",
      review:
        "With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
      img: "img/reviews/3.jpg",
    },
    {
      name: "Oscar Oldman",
      position: "Envato Market",
      review:
        "I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
      img: "img/reviews/4.jpg",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex w-full flex-col items-center select-none min-h-screen bg-primary md:px-10 lg:px-16 py-10 lg:py-20 border border-red-900"
    >
      <div className="text-center">
        <p className="uppercase text-lg font-semibold text-orange-600">
          Reviews
        </p>
        <h2 className="text-4xl font-bold font-primary">
          Customer Voices: <br /> Hear What{" "}
          <span className="text-secondary">They Say</span>!
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative w-full md:w-[70%] lg:w-[50%]">
        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-2 lg:left-4 flex items-center text-secondary z-10">
          <FaChevronLeft className="text-3xl cursor-pointer" id="prevBtn" />
        </div>
        <div className="absolute inset-y-0 right-2 lg:right-4 flex items-center text-secondary z-10">
          <FaChevronRight className="text-3xl cursor-pointer" id="nextBtn" />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.3} // Show parts of neighboring slides
          centeredSlides
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
          pagination={{ clickable: true }}
          speed={800}
          className="mil-reviews-slider"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="transition-transform duration-500 ease-in-out transform scale-95 hover:scale-100 border-2 border-yellow-500"
            >
              <div className="text-center px-6 py-8 rounded-lg transition-all duration-500 ease-in-out">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto bg-orange-500">
                  <img
                    src={review.img}
                    alt="Client"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.position}</p>
                <p className="text-base text-gray-700">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
          /* Style for blurred neighboring slides */
          .mil-reviews-slider .swiper-slide {
            opacity: 0.5;
            filter: blur(5px);
            transform: scale(0.9);
            transition: all 0.5s ease;
          }
          .mil-reviews-slider .swiper-slide-active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }
          /* Enhanced styling for pagination dots */
          .swiper-pagination-bullet {
            background-color: #febc12;
            width: 8px;
            height: 8px;
            opacity: 0.1;
            transition: opacity 0.3s;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: #febc12;
          }
        `}
      </style>
    </section>
  );
};

export default ReviewsSection;
