import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        // If not on the home page, navigate to it first
        navigate("/", { replace: true });
        setTimeout(() => {
          const section = document.querySelector(path);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Scroll directly if already on the home page
        const section = document.querySelector(path);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // External route navigation
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col gap-3 px-8 lg:px-28 py-16 lg:py-28 h-full w-full">
      <div className="w-full flex flex-col border-t border-b border-slate-100/20 py-10 px-0 lg:px-1 h-full gap-10">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg:items-center lg:flex-row lg:w-[50%] w-full text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
            <p
              onClick={() => handleNavClick("#home")}
              className="hover:cursor-pointer hover:text-white"
            >
              Home
            </p>
            <p
              onClick={() => handleNavClick("#aboutUs")}
              className="hover:cursor-pointer hover:text-white"
            >
              About
            </p>
            <p
              onClick={() => handleNavClick("#services")}
              className="hover:cursor-pointer hover:text-white"
            >
              Services
            </p>
            <p
              onClick={() => handleNavClick("#contact")}
              className="hover:cursor-pointer hover:text-white"
            >
              Contact
            </p>
          </div>
          <div className="flex lg:w-[50%] w-full text-[12px] gap-8 font-secondary lg:justify-end">
            <div
              onClick={() => {
                window.open("https://www.instagram.com/gameon_solution");
              }}
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
            >
              <FaInstagram />
            </div>
            <div
              onClick={() => {
                window.open("https://www.youtube.com/@GameonSolution");
              }}
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
            >
              <FaYoutube />
            </div>
            {/* <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
              <FaFacebook />
            </div> */}
            <div
              onClick={() => {
                window.open("https://wa.me/9715131313");
              }}
              className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white"
            >
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-yellow-100/20 px-5 py-5">
          <div className="flex flex-col lg:flex-row gap-10 lg:justify-around">
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdCall className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                  Call
                </p>
                <p className="flex tracking-[1.5px] justify-center items-center gap-1 font-secondary uppercase text-xs font-medium text-white">
                  <span className="flex justify-center items-center gap-1.5">
                    <span className="tracking-[1.5px]">+91 9615737373</span>
                    <span>(or)</span>
                    <span className="tracking-[1.5px]">+91 9715131313</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdEmail className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-xl md:text-2xl text-secondary">
                  Write
                </p>
                <p className="font-secondary uppercase text-xs font-medium text-white tracking-[1.5px]">
                  sales@gameonsolution.in
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[30%] items-center gap-2">
              <MdLocationPin className="text-2xl opacity-80" />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="font-primary uppercase text-2xl text-secondary">
                  Visit
                </p>
                <p className="font-secondary tracking-[1.5px] uppercase text-center text-xs font-medium text-white">
                  Hanifa Nagar, NGO Colony, Dindigul, Tamil Nadu 624005
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p>©2024. All rights reserved.</p>
      </div>
    </div>
  );
};
