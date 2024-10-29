import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 lg:gap-24 justify-center items-center select-none min-h-[90vh] bg-primary px-10 md:px-20 lg:px-32 lg:py-20">
      {/* <h1 className="text-5xl font-extrabold text-gray-800">Why Us</h1> */}
      {/* Header */}
      <div className="text-left w-full">
        <p className="text-[12px] font-secondary font-semibold uppercase tracking-[1px]">
          Why Us
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-[100%] md:w-[80%] mx-auto gap-4 md:gap-6">
        {/* 100% Quality Products */}
        <div className="flex flex-col gap-2 justify-center items-center text-center py-5 bg-white/85">
          <div className="w-[50%]">
            <img
              src="/whyUs/qualityProductsImg.webp"
              alt="Quality Products"
              className="w-full"
            />
          </div>
          <p className="uppercase text-center font-primary tracking-[1.5px] font-semibold text-[12px] lg:text-base px-4">
            100% Quality Products
          </p>
        </div>

        {/* Skilled Professionals */}
        <div className="flex flex-col gap-5 justify-center items-center text-center bg-white/85">
          <div className="w-[45%]">
            <img
              src="/whyUs/skilledProfessionals.webp"
              alt="Skilled Professionals"
              className="w-full"
            />
          </div>
          <p className="uppercase text-center font-primary tracking-[1.5px] font-semibold text-[12px] lg:text-base px-4">
            Skilled Professionals
          </p>
        </div>

        {/* Resurfacing & Maintenance */}
        <div className="flex flex-col gap-4 justify-center items-center text-center py-5 bg-white/85">
          <div className="w-[35%]">
            <img
              src="/whyUs/resurfing_maintenance.webp"
              alt="Resurfacing & Maintenance"
              className="w-full"
            />
          </div>
          <p className="uppercase text-center font-primary tracking-[1.5px] font-semibold text-[12px] lg:text-base px-2">
            Resurfacing & Maintenance
          </p>
        </div>

        {/* Comprehensive Maintenance Service */}
        <div className="flex flex-col gap-4 justify-center items-center text-center py-5 bg-white/85">
          <div className="w-[30%]">
            <img
              src="/whyUs/maintenanceService.webp"
              alt="Comprehensive Maintenance Service"
              className="w-full"
            />
          </div>
          <p className="uppercase text-center font-primary tracking-[1.5px] font-semibold text-[12px] lg:text-base px-2">
            Comprehensive Maintenance Service
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full font-primary text-white font-semibold leading-relaxed">
        <p className="text-lg lg:text-4xl text-center">
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl"> */}
          We specialize in delivering{" "}
          <span className="text-secondary">high-quality</span> sports systems
          that prioritize top performance and sustainability. Our meticulously
          designed installations are scientifically engineered to prevent
          cartilage injuries, ensuring the well-being of athletes and sports
          <span className="text-secondary"> enthusiasts</span>.
        </p>
        <p className="text-lg lg:text-4xl text-center">
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl"> */}
          Our expertise lies in{" "}
          <span className="text-secondary">FIFA-approved</span> soccer pitches
          and artificial grass football grounds, making us{" "}
          <span className="text-secondary">top-tier turf</span> suppliers and
          manufacturers. As versatile builders and contractors, we excel in
          crafting multi-sport surfaces, including badminton courts. We offer
          Astro Turf and garden grass at competitive prices, with services
          encompassing <span className="text-secondary">transparent cost</span>{" "}
          structures for turf construction and installation.
        </p>
        <p className="text-lg lg:text-4xl text-center">
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl"> */}
          Renowned for our football turf construction, we provide comprehensive
          sports ground construction{" "}
          <span className="text-secondary">services</span>. Moreover, we are
          proud dealers for CC Grass and{" "}
          <span className="text-secondary">Bellinturf</span> in India,
          contributing to football turf business plans and turf investments.
          Whether it's Futsal courts or synthetic{" "}
          <span className="text-secondary">lawn</span> installations, we lead
          the way in gully cricket and football turf manufacturing.˝
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
