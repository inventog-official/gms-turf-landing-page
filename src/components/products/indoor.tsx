// const IndoorTurf = () => {
//     return(
//         <div className="border border-red-900 p-5">
//             <h1>Indoor Turf</h1>
//         </div>
//     );
// }
// export default IndoorTurf;

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import FooterCard from "./card/footerCard";

const IndoorTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"INDOOR TURF "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>INDOOR TURF</p>
          </FadeIn>
          <FadeIn>
            <p>ESSENTIAL CONSIDERATIONS FOR INDOOR TURF</p>
          </FadeIn>
          <FadeIn>
            <p>
              When constructing an indoor turf, key considerations must be
              addressed to ensure functionality, durability, and player safety.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Organizations like FIFA, FIBA, FIH provide recommended dimensions
              and specifications to ensure that indoor facilities meet the
              requirements for professional or competitive play. However, for
              multi-purpose or recreational indoor turfs, the dimensions are
              often customized based on the intended use, available space, and
              client requirements.
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Indoor Turf" carouselImages={cricketItems} />

      <FooterCard
        desc="            Depending on the intended purpose, the grass should be constructed
            with precise measurements to meet the particular interior space.
            Typically, these measurements range from 60 feet (18.29 meters) to
            120 feet (36.58 meters) in length and 30 feet (9.14 meters) to 60
            feet (18.29 meters) in width."
        title={"             ESSENTIAL CONSIDERATIONS FOR INDOOR TURF"}
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
export default IndoorTurf;

const cricketItems = [
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8ab1c9e8f0124f4fb1c6ceba1e12190e~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-02.png",
    name: "Airplane",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_7a36342e36ce4cd1b256127ac1ad3722~mv2.png/v1/fill/w_488,h_326,fp_0.50_0.47,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-05.png",
    name: "Family man",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_93db6e485dbf44e58148ef38aa5db9d1~mv2.png/v1/fill/w_420,h_662,fp_0.52_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-06.png",
    name: "Laboratory",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8b0f7a8bdede406a807d77ea75a3210a~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-04.png",
    name: "Napoleon",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_a42f5b921efb4985b64fa716c98ed47b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-03.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_69ceaf7ade584f05b07cf0600f5aa741~mv2.png/v1/crop/x_61,y_95,w_1569,h_2105/fill/w_478,h_662,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Indoor-01.pngg",
    name: "Scary Building",
  },
  //   {
  //     poster:
  //       "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
  //     name: "Stars",
  //   },
];
