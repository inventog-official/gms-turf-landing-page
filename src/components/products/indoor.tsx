// const IndoorTurf = () => {
//     return(
//         <div className="border border-red-900 p-5">
//             <h1>Indoor Turf</h1>
//         </div>
//     );
// }
// export default IndoorTurf;

import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

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
            <p className="text-secondary font-primary">INDOOR TURF</p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
            </p>
          </FadeIn>
          <FadeIn>
            <p>
            When constructing an indoor turf, key considerations must be
              Addressed to ensure functionality, durability, and player safety.
              Organizations like FIFA, FIBA, FIH provide recommended dimensions
              And specifications to ensure that indoor facilities meet the
              Requirements for professional or competitive play. However, for
              multi-purpose or recreational indoor turfs, the dimensions are
              often customized based on the intended use, available space, and
              client requirements.
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Indoor Turf" carouselImages={cricketItems} />

      <Certificates />

      <div className="flex gap-10  flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              {/* <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div> */}
              <div className="w-full h-full overflow-hidden group">
                <img
                  src="https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
                  className="   h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
                  alt="Director"
                />
                {/* Inner Light Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />

                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" /> */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black/50" />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex  items-end justify-center duration-500 ease-out p-4">
                    <p className="lg:text-xl flex-col flex text-white bg-transparent p-2 font-primary tracking-[3px] w-full text-center">
                      <span className="text-secondary">INDOOR TURF</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8  ">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
            ESSENTIAL CONSIDERATIONS FOR INDOOR TURF
            <span className="text-secondary"> INDOOR TURF</span>
          </p>
          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <p className="md:text-2xl text-lg">
            Depending on the intended purpose, the grass should be constructed
              With precise measurements to meet the particular interior space.
              Typically, these measurements range from 60 feet (18.29 meters) to
              120 feet (36.58 meters) in length and 30 feet (9.14 meters) to 60
              Feet (18.29 meters) in width.
            </p>
          </div>
        </div>
      </div>
      <Footer />
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
