import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Container } from "./pageAnimation/container";
import { FadeIn } from "./pageAnimation/fade-in";
import { Hero } from "./pageAnimation/hero";
import { VideoCarousel } from "./pageAnimation/video-carousel";
import FooterCard from "./card/footerCard";

const CricketTurf = () => {
  return (
    <div className="">
      <div className="bg-background relative z-10 select-none">
        <Hero
          title={"CRICKET TURF"}
          subtitle={"FINDS ITS MARK"}
          bgImgUrl={
            "https://static.wixstatic.com/media/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png/v1/fill/w_968,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4c43d3_7fc4a48fadee496cb7ac4d59d32dcbc1~mv2.png "
          }
        />
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
          <FadeIn>
            <p>MEASUREMENTS AND SURFACE MATERIAL</p>
          </FadeIn>
          <FadeIn>
            <p>
              Dimensions can be customized depending on land availability,
              ideally requiring a minimum area of 6000 square feet, suitable for
              rectangular or oval layouts. Implement a permanent cricket pitch
              featuring 15mm Multisport grass on a concrete surface,
              supplemented by other areas using dynamic stone bases and premium
              football grass.
            </p>
          </FadeIn>
          <FadeIn>
            <p>SHAPE AND HEIGHT OF THE TURF</p>
          </FadeIn>
          <FadeIn>
            <p>
              Gameon Solution has designed sports grounds reaching heights of up
              to 80 feet, facilitated by fabricated poles, and constructed with
              both circular and box-type turfs.
            </p>
          </FadeIn>
        </Container>
      </div>
      <VideoCarousel title="Cricket Turf" carouselImages={cricketItems} />
     
      <FooterCard
        desc=" A typical cricket pitch is 66 feet (20.12 meters) long and 10 feet
            (3.05 meters) wide, with a total turf area of at least 30 yards
            (27.43 meters) by 15 yards (13.72 meters) to accommodate bowlers and
            fielders. The turf should be created with exact proportions."
        title={"CRICKET TURF DIMENSIONS ACCORDING TO ICC GUIDELINES"}
        image={
          "https://storage.googleapis.com/a1aa/image/QlCBU7weLtWDcapaMWsrh9to1bi0ceL8E0ybMf0Gqmag0TdnA.jpg"
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
export default CricketTurf;
const cricketItems = [
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_ae21e210035347fa8c17e92f7d623b6d~mv2.png/v1/crop/x_167,y_0,w_1751,h_1167/fill/w_488,h_326,fp_0.60_0.31,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-04.png",
    name: "Airplane",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_8177731fb1f44699946bd36ce43c7997~mv2.png/v1/fill/w_488,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-02.png",
    name: "Family man",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_177ae28dd7534c0b9961d0a1957f8f3c~mv2.png/v1/fill/w_420,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-06.png",
    name: "Laboratory",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_1144c12f5a5a4357b6f0617becae9e4b~mv2.png/v1/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-05.png",
    name: "Napoleon",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_26585cf912084d5ab27ee8ae33a06fbd~mv2.png/v1/crop/x_208,y_0,w_1669,h_1167/fill/w_466,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-03.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_484,h_662,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
    name: "Scary Building",
  },
  // {
  //   poster:
  //     "https://static.wixstatic.com/media/4c43d3_62c3430cd87440309a736d2a6aae8a9d~mv2.png/v1/crop/x_29,y_0,w_1714,h_2371/fill/w_411,h_563,fp_0.50_0.54,q_85,usm_0.66_1.00_0.01,enc_auto/Cricket-01.png",
  //   name: "Stars",
  // },
];
