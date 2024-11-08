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

const CircleTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"UNLEASH YOUR GAME ON GREEN: "}
          subtitle={"Circle Mini Cricket Stadium Turf"}
          bgImgUrl={
            "/public/CircleMiniCricketStadiumTurff/PLT_00017.jpg"
            // "/contactSideImg.webp"
            // "https://static.wixstatic.com/media/4c43d3_f327577b6eca48acb7752d3d746c1a58~mv2.jpeg/v1/fill/w_1216,h_257,al_c,q_80,enc_auto/bg.jpeg "
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-10 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="uppercase">Circle Mini Cricket Stadium Turf</p>
          </FadeIn>
          <FadeIn>
            <p className="uppercase">
              ESSENTIAL CONSIDERATIONS FOR Circle Mini Cricket Stadium Turf
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Welcome to the Circle Mini Cricket Stadium Turf, where passion for
              cricket meets high-quality, exclusive playing surfaces. Designed
              with the perfect blend of aesthetics and functionality, our turf
              offers an unmatched experience for players of all skill levels.
              The turf’s professional-grade quality ensures optimal ball bounce,
              pace, and spin, bringing a true stadium feel to every game.
              Whether you’re looking to play a friendly match or host a
              competitive tournament, Circle Mini Stadium is crafted to offer a
              first-rate cricketing experience in a compact setting. Our
              exclusive turf has been meticulously engineered to provide
              durability and safety, allowing players to focus solely on their
              game. With shock-absorbing materials, the surface minimizes impact
              on joints, making it ideal for extended play sessions. At Circle
              Mini Stadium, every aspect has been designed to create an
              environment that brings out the best in every cricketer, from
              beginners to seasoned professionals.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="uppercase">
              Features of the Circle Mini Cricket Stadium Turf:{" "}
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Professional-grade artificial turf for realistic ball behavior and
              play Durable, weather-resistant surface ideal for all seasons
              Shock-absorbing layers for player safety and comfort Compact
              design perfect for mini-cricket formats and casual games Low
              maintenance requirements, allowing more time for play
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Circle Mini Cricket Turf" carouselImages={cricketItems} />
    </div>
  );
};
export default CircleTurf;

const cricketItems = [
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00002.jpg",
    //   "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_824,h_460,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png",
    name: "Airplane",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00006.jpg",
    //   "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_416,h_278,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Family man",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00010.jpg",
    //   "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_416,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Laboratory",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00011.jpg",
    name: "Napoleon",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00013.jpg",
    name: "Person in Darkness",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00013.jpg",
    name: "Scary Building",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00017.jpg",
    //   "/Football/Football-07.png",
    name: "Stars",
  },
  {
    poster: "/public/CircleMiniCricketStadiumTurff/PLT_00022.jpg",
    //   "/Football/Football-07.png",
    name: "Stars",
  },
];
