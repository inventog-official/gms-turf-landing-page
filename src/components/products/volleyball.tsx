// const VolleyballTurf = () => {
//     return(
//         <div className="border border-red-900 p-5">
//             <h1>Volleyball Turf</h1>
//         </div>
//     );
// }
// export default VolleyballTurf;

import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

const VolleyballTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"WHERE EVERY SHOT "}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_108dfb94ec234a17a6d8cdc9026bfc8d~mv2.png/v1/fill/w_466,h_326,fp_0.15_0.48,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-05.png"
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>
              GameOn Solution & infra supply synthetic volley ball court grass,
              which play consistently in all conditions for international and
              national volley ball games, clubs, school and home courts. From
              the global to the national level, our volleyball court turf
              systems will be a suitable choice.
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              We are dedicated to providing the best Volleyball court turf . We
              have an in-house engineering and project team comprising experts
              in the field of Volleyball court construction and management. We
              offer consultation, construction, installation, service and
              maintenance of all types of Volleyball court turf sports fields
              all over India.
            </p>
          </FadeIn>
          {/* <FadeIn>
            <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
          </FadeIn>
          <FadeIn>
            <p>Share a single subscription with up to five people.</p>
          </FadeIn> */}
        </Container>
      </div>
      <VideoCarousel title="Volleyball Turf" carouselImages={cricketItems} />

      <div className="bg-gray-100/10  text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 max-w-5xl mx-auto">
        <img
          alt="Illustration of a volleyball court with players"
          className="w-full md:w-1/4 rounded-lg mb-4 md:mb-0"
          height="200"
          src="https://storage.googleapis.com/a1aa/image/cOI0WQ1AEFLPD1FgjM1Fpj73nvF8e7egZf9KpfjhUGcbml6OB.jpg"
          width="300"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold ">
            VOLLEYBALL COURT DIMENSIONS ACCORDING TO FIVB
          </h1>
          <p className=" mt-4">
            The court should adhere to standard dimensions, which are 18 meters
            (59 feet) in length and 9 meters (29.5 feet) in width. The playing
            area should include an additional free zone of at least 3 meters
            (9.8 feet) on all sides, allowing players ample space to move during
            play. The net, which should be 2.43 meters (7 feet 11 5/8 inches)
            high for men's play and 2.24 meters (7 feet 4 1/8 inches) for
            women's play, must be securely anchored and positioned centrally.
          </p>
        </div>
      </div>
    </div>
  );
};
export default VolleyballTurf;

const cricketItems = [
  {
    poster: "https://www.meckavosports.com//uploads/volleyball_court_1.webp",
    name: "Airplane",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_108dfb94ec234a17a6d8cdc9026bfc8d~mv2.png/v1/fill/w_466,h_326,fp_0.15_0.48,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-05.png",
    name: "Family man",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_14b3e64472704a399f224c9b7999145f~mv2.png/v1/fill/w_488,h_326,fp_0.44_0.52,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-03.png",
    name: "Laboratory",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_cbfa6596676b4692a4f70ba8069553ba~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-04.png",
    name: "Napoleon",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_06ddf9fa58a143e4bcc20f2b25e1ad05~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-02.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_bb5250c3415947e8b6a9d1cdad06f9e7~mv2.png/v1/fill/w_484,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Volleyball%20court-06.png",
    name: "Scary Building",
  },
//   {
//     poster:
//       "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
//     name: "Stars",
//   },
];
