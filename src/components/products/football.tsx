import { Footer } from "../footer";
import Certificates from "./pageAnimation/certificates";
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
          bgImgUrl={"/Football/Football-07.png"}
        />
        <Container className="relative z-10 max-w-[692px] space-y-10 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p className="text-secondary font-primary">FOOTBALL TURF</p>
          </FadeIn>
          <FadeIn>
            <p className="text-secondary">
              ESSENTIAL CONSIDERATIONS FOR FOOTBALL TURF
            </p>
          </FadeIn>
          <FadeIn>
            <p>
            Verify Compliance with FIFA and UEFA Standards: Ensure that the
              Artificial turf meets the criteria outlined by FIFA (Federation
              Internationale de Football Association) and UEFA (Union of European
              Football Associations).
            </p>
          </FadeIn>
          <FadeIn>
            <p>
            These bodies establish regulations concerning the quality and
              Performance of artificial football surfaces, including
              Certifications such as FIFA Quality Pro.
            </p>
          </FadeIn>
        </Container>
      </div>


      <VideoCarousel title="Football Turf" carouselImages={cricketItems} />

      <Certificates />

      <div className="flex gap-10 lg:flex-row flex-col px-10 md:px-20 lg:px-[7.5rem] py-20">
        <div className="flex  md:flex-row flex-col gap-12 ">
          <div className="relative w-full  flex items-center justify-center ">
            <div className="relative flex items-center">
              {/* <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div> */}
              <div className="w-full h-full overflow-hidden group">
                <img
                  src="https://storage.googleapis.com/a1aa/image/99jLJ4BLRvoxBB39a3VKYTeR6fsfutMIJvWfzpX3Dey2SM1dC.jpg"
                  className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
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
                      <span className="text-secondary"> FOOTBALL TURF</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-8  ">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
            FOOTBALL TURF DIMENSIONS ACCORDING TO FIFA GUIDELINES
            <span className="text-secondary"> FIFA GUIDELINES</span>
          </p>
          {/* Main Content */}
          <div className="flex flex-col gap-10   text-white font-secondary">
            <p className="md:text-2xl text-lg">
              The dimensions of football turf must adhere to the Laws of the
              Game, ensuring a rectangular field of play. The length of the
              touchline must exceed the length of the goal line. For
              professional 11-a-side football, FIFA recommends dimensions
              ranging from 100-130 yards(90-120m) in length and 50-100
              yards(45-90m) in width. The penalty area should be positioned 18
              yards(16.45m) from the centre of the goal line, with the penalty
              spot set 12 yards(10.9m) from the goal, irrespective of the
              overall pitch size.
            </p>
          </div>
        </div>
      </div>
      <Footer />
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
