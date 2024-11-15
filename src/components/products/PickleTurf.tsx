import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";

const PickleTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"PICKLE TURF"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={" /pickleTurf/pickle-turf-005.jpg"}
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="uppercase font-primary">
              Premium Playing Surface for Pickle ball EnthusiastsL
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Introducing Pickle Turf, an exclusive, top-quality surface
              designed specifically for pickle ball enthusiasts looking for a
              superior playing experience. With precise attention to texture,
              resilience, and court dynamics, Pickle Turf provides a surface
              that complements every aspect of the game. This high-performance
              turf is engineered to ensure consistent ball bounce, excellent
              traction, and comfort, enhancing your play while preserving
              agility and control. Whether for training, friendly matches, or
              competitive play, Pickle Turf transforms any space into a
              professional-grade pickle ball court. Our turf combines advanced
              materials and a specialized design to withstand heavy play and
              varied weather conditions, providing durability and longevity.
              It’s crafted for minimal maintenance, so you can enjoy more
              uninterrupted game time. Pickle Turf's shock-absorbing layer
              reduces impact on joints, making it ideal for players of all ages
              and skill levels. With our exclusive turf, you get a premier
              playing environment that fosters enjoyment, safety, and
              performance.
            </p>
          </FadeIn>
          <FadeIn>
            <p className="uppercase">Features of Pickle Turf </p>
          </FadeIn>
          <FadeIn>
            <p>
              Professional-grade artificial turf tailored for pickle ball
              game play Optimized surface for consistent ball bounce and precise
              movement Weather-resistant materials, suitable for outdoor and
              indoor play Shock-absorbing layer for reduced impact on players'
              joints Low-maintenance design for hassle-free play
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Cricket Turf" carouselImages={cricketItems} />
      <Certificates />

      {/* <div className="bg-gray-100/10  text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 max-w-4xl mx-auto">
        <img
          alt="Illustration of a volleyball court with players"
          className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
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
      </div> */}

      <Footer />
    </div>
  );
};
export default PickleTurf;

const cricketItems = [
  {
    poster: "/pickleTurf/pickle-turf-001.jpg",
    name: "Airplane",
  },
  {
    poster: "/pickleTurf/pickle-turf-002.jpg",
    name: "Family man",
  },
  {
    poster: "/pickleTurf/pickle-turf-003.jpg",
    name: "Family man",
  },
  {
    poster: "/pickleTurf/pickle-turf-004.jpg",
    name: "Laboratory",
  },
  {
    poster: "/pickleTurf/pickle-turf-005.jpg",
    name: "Napoleon",
  },
  {
    poster: "/pickleTurf/pickle-turf-006.jpg",
    name: "Person in Darkness",
  },

  // {
  //   poster:
  //     "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
  //   name: "Stars",
  // },
];
