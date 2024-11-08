// import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col gap-10 mt-10 px-10 lg:px-48">
//       <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20">
//         <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary  uppercase">
//           <p className="hover:cursor-pointer hover:text-white">Home</p>
//           <p className="hover:cursor-pointer hover:text-white">About</p>
//           <p className="hover:cursor-pointer hover:text-white">Services</p>
//           <p className="hover:cursor-pointer hover:text-white">Contact</p>
//         </div>
//         <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary  lg:justify-end">
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaInstagram />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaYoutube />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaFacebook />
//           </div>
//           <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//             <FaWhatsapp />
//           </div>
//         </div>
//       </div>
//       <div className="flex py-5">
//         <p>©2024. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 mt-10 px-10 lg:px-48">
      <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20">
        <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary uppercase">
          <p
            onClick={() => navigate("#home")}
            className="hover:cursor-pointer hover:text-white"
          >
            Home
          </p>
          <p
            onClick={() => navigate("#aboutUs")}
            className="hover:cursor-pointer hover:text-white"
          >
            About
          </p>
          <p
            onClick={() => navigate("#services")}
            className="hover:cursor-pointer hover:text-white"
          >
            Services
          </p>
          <p
            onClick={() => navigate("#contact")}
            className="hover:cursor-pointer hover:text-white"
          >
            Contact
          </p>
        </div>
        <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary lg:justify-end">
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
