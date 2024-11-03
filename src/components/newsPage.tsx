import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ExpandableCardDemo } from "./news/main";
import TextHoverAnimation from "./textHoverAnimation";

function News_Page() {
  return (
    <div className="flex flex-col justify-start gap-5 select-none items-center min-h-screen w-full pt-36 md:pt-44 lg:pt-40 px-10 lg:px-48 pb-12">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary flex gap-2 text-white uppercase leading-tight">
        <TextHoverAnimation text="News" />
        <span className="text-secondary">
          <TextHoverAnimation text="&" />
        </span>
        <TextHoverAnimation text="awards" />
      </p>
      <div className="border border-secondary"></div>
      {/* <NewsPage /> */}
      <ExpandableCardDemo />
      {/* <BrandsCarousel /> */}
      <div className="w-full">
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
}

export default News_Page;
