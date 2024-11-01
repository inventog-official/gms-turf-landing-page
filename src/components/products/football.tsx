// const FootballTurf = () => {
//     return(
//         <div className="border border-red-900 h-full p-5">
//             <h1 className="text-white">Football Turf</h1>
//         </div>
//     );
// }
// export default FootballTurf;

import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

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
    </div>
  );
};
export default FootballTurf;

const cricketItems = [
  {
    poster:
      "/Football/Football-01.png",
    //   "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_824,h_460,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png",
    name: "Airplane",
  },
  {
    poster:
      "/Football/Football-02.png",
    //   "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
  },
  {
    poster:
      "/Football/Football-03.png",
    //   "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_416,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Laboratory",
  },
  {
    poster:
      "/Football/Football-04.png",
    name: "Napoleon",
  },
  {
    poster:
      "/Football/Football-05.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "/Football/Football-06.png",
    name: "Scary Building",
  },
  {
    poster:
      "/contactSideImg.webp",
    //   "/Football/Football-07.png",
    name: "Stars",
  },
];
