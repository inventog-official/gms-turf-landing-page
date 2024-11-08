// const FootballTurf = () => {
//     return(
//         <div className="border border-red-900 h-full p-5">
//             <h1 className="text-white">Football Turf</h1>
//         </div>
//     );
// }
// export default FootballTurf;

import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import FooterCard from "./card/footerCard";

const FootballTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"UNLEASH YOUR GAME ON GREEN: "}
          subtitle={"FOOTBALL TURF REDEFINED"}
          bgImgUrl={
            "/Football/Football-07.png"
            // "/contactSideImg.webp"
            // "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-10 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>FOOTBALL TURF</p>
          </FadeIn>
          <FadeIn>
            <p>ESSENTIAL CONSIDERATIONS FOR FOOTBALL TURF</p>
          </FadeIn>
          <FadeIn>
            <p>
              Verify Compliance with FIFA and UEFA Standards: Ensure that the
              artificial turf meets the criteria outlined by FIFA (Federation
              Internationale de Football Association) and UEFA(Union of European
              Football Associations).
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              These bodies establish regulations concerning the quality and
              performance of artificial football surfaces, including
              certifications such as FIFA Quality Pro.
            </p>
          </FadeIn>
        </Container>
      </div>

      <VideoCarousel title="Football Turf" carouselImages={cricketItems} />

      <FooterCard
        desc="           The dimensions of football turf must adhere to the Laws of the Game, ensuring a rectangular field of play.
                The length of the touchline must exceed the length of the goal line. For professional 11-a-side football,
                FIFA recommends dimensions ranging from 100-130 yards(90-120m) in length and 50-100 yards(45-90m) in width.
                The penalty area should be positioned 18 yards(16.45m) from the centre of the goal line,
                with the penalty spot set 12 yards(10.9m) from the goal, irrespective of the overall pitch size."
        title={" FOOTBALL TURF DIMENSIONS ACCORDING TO FIFA GUIDELINES"}
        image={
          "https://storage.googleapis.com/a1aa/image/99jLJ4BLRvoxBB39a3VKYTeR6fsfutMIJvWfzpX3Dey2SM1dC.jpg"
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
export default FootballTurf;

const cricketItems = [
  {
    poster: "/Football/Football-01.png",
    //   "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_824,h_460,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png",
    name: "Airplane",
  },
  {
    poster: "/Football/Football-02.png",
    //   "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
  },
  {
    poster: "/Football/Football-03.png",
    //   "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_416,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Laboratory",
  },
  {
    poster: "/Football/Football-04.png",
    name: "Napoleon",
  },
  {
    poster: "/Football/Football-05.png",
    name: "Person in Darkness",
  },
  {
    poster: "/Football/Football-06.png",
    name: "Scary Building",
  },
  {
    poster: "/contactSideImg.webp",
    //   "/Football/Football-07.png",
    name: "Stars",
  },
];
