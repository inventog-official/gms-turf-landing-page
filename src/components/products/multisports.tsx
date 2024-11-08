// const MultiSportsTurf = () => {
//     return(
//         <div className="border border-red-900 p-5">
//             <h1>MultiSports Turf</h1>
//         </div>
//     );
// }
// export default MultiSportsTurf;

import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import FooterCard from "./card/footerCard";

const MultiSportsTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"MULTI SPORT TURF "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={"/Football/Football-03.png"}
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>New Apple Originals every month — always ad‑free.</p>
          </FadeIn>
          <FadeIn>
            <p>
              Our multi-sport turf ground is one of our most popular offerings,
              and for good reason. We understand that every client has unique
              requirements, which is why we offer a completely customizable
              solution.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Whether you have a limited budget or a small space, we can create
              a multi-sport turf ground that meets your needs both Indoor and
              Outdoor.
            </p>
          </FadeIn>
          {/* <FadeIn>
            <p>Share a single subscription with up to five people.</p>
          </FadeIn> */}
        </Container>
      </div>
      <VideoCarousel title="Multi-sports Turf" carouselImages={cricketItems} />
      <div className="bg-gray-100/10  text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 max-w-5xl mx-auto">
        <img
          alt="Illustration of a volleyball court with players"
          className="w-full md:w-1/4 rounded-lg mb-4 md:mb-0"
          height="200"
          src=""
          width="300"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#febc12]">
          </h1>
          <p className=" mt-4">
          
          </p>
        </div>
      </div>


      <FooterCard
        desc="  The turf should be designed with customizable dimensions to
            accommodate multiple activities, typically ranging from 20 meters
            (65.6 feet) to 40 meters (131 feet) in length and 10 meters (32.8
            feet) to 20 meters (65.6 feet) in width, depending on the specific
            sports it will host."
        title={"ESSENTIAL CONSIDERATIONS FOR MULTI-SPORT TURF"}
        image={
          "https://storage.googleapis.com/a1aa/image/9FeWw1HWmeg2WkAUfZBmvn8eZTSzLKm82E1PA3z0jo4AYm6OB.jpg"
        }
      />
      <div className="w-full p-10">
        <div className="flex flex-col gap-10 mt-10">
          <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20">
            <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary  uppercase">
              <p className="hover:cursor-pointer hover:text-white">Home</p>
              <p className="hover:cursor-pointer hover:text-white">About</p>
              <p className="hover:cursor-pointer hover:text-white">Services</p>
              <p className="hover:cursor-pointer hover:text-white">Contact</p>
            </div>
            <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary  lg:justify-end">
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaInstagram />
              </div>
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaYoutube />
              </div>
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaFacebook />
              </div>
              <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
                <FaWhatsapp />
              </div>
            </div>
          </div>
          <div className="flex py-5">
            <p>©2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultiSportsTurf;

const cricketItems = [
  {
    poster: "/Football/Football-01.png",
    name: "Airplane",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
  },
  {
    poster: "/Football/Football-02.png",
    name: "Laboratory",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
    name: "Napoleon",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_cbfa6596676b4692a4f70ba8069553ba~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-04.png",
    name: "Scary Building",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
    name: "Stars",
  },
];
