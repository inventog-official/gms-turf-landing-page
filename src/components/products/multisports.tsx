// const MultiSportsTurf = () => {
//     return(
//         <div className="border border-red-900 p-5">
//             <h1>MultiSports Turf</h1>
//         </div>
//     );
// }
// export default MultiSportsTurf;

import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

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
