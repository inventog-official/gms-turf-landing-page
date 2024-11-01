import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

const CricketTurf = () => {
  return (
    <div className="">
      <div className="bg-background  relative z-10">
        <Hero
          title={"WHERE EVERY SHOT "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>New Apple Originals every month — always ad‑free.</p>
          </FadeIn>
          <FadeIn>
            <p>
              Stream on the Apple TV app on Apple devices, smart TVs, consoles,
              or sticks.
            </p>
          </FadeIn>
          <FadeIn>
            <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
          </FadeIn>
          <FadeIn>
            <p>Share a single subscription with up to five people.</p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="FootBall Turff" carouselImages={cricketItems} />
    </div>
  );
};
export default CricketTurf;

const cricketItems = [
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_824,h_460,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png",
    name: "Airplane",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_416,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Laboratory",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_177ae28dd7534c0b9961d0a1957f8f3c~mv2.png/v1/fill/w_358,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-06.png",
    name: "Napoleon",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_1144c12f5a5a4357b6f0617becae9e4b~mv2.png/v1/fill/w_396,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-05.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_396,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
    name: "Scary Building",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
    name: "Stars",
  },
];
