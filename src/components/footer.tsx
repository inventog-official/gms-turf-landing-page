import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-10 md:px-20 lg:px-[7.5rem] flex flex-col gap-16 pb-28">
      <div className="w-full flex border-t border-b border-slate-100/20">
        <div className="py-[3.5rem] flex w-[60%] text-[12px] gap-10 font-secondary font-semibold uppercase">
          <p className="hover:cursor-pointer hover:text-white">Home</p>
          <p className="hover:cursor-pointer hover:text-white">About</p>
          <p className="hover:cursor-pointer hover:text-white">Services</p>
          <p className="hover:cursor-pointer hover:text-white">Contact</p>
        </div>
        <div className="py-[3.5rem] flex w-[40%] text-[12px] gap-8 font-secondary font-semibold justify-end">
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
  );
};
