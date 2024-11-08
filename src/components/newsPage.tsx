// import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
// import { ExpandableCardDemo } from "./news/main";
// import TextHoverAnimation from "./textHoverAnimation";

// function News_Page() {
//   return (
//     <div className="flex flex-col justify-start gap-5 select-none items-center min-h-screen w-full pt-36 md:pt-44 lg:pt-40 px-10 lg:px-48 pb-12">
//       <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary flex gap-2 text-white uppercase leading-tight">
//         <TextHoverAnimation text="News" />
//         <span className="text-secondary">
//           <TextHoverAnimation text="&" />
//         </span>
//         <TextHoverAnimation text="awards" />
//       </p>
//       <div className="border border-secondary"></div>
//       {/* <NewsPage /> */}
//       <ExpandableCardDemo />
//       {/* <BrandsCarousel /> */}
//       <div className="w-full">
//         <div className="flex flex-col gap-10 mt-10">
//           <div className="w-full flex flex-col lg:flex-row border-t border-b border-slate-100/20">
//             <div className="py-10 lg:py-[3.5rem] px-3 lg:px-1 flex flex-col lg:flex-row w-[60%] text-[12px] gap-5 lg:gap-10 font-secondary  uppercase">
//               <p className="hover:cursor-pointer hover:text-white">Home</p>
//               <p className="hover:cursor-pointer hover:text-white">About</p>
//               <p className="hover:cursor-pointer hover:text-white">Services</p>
//               <p className="hover:cursor-pointer hover:text-white">Contact</p>
//             </div>
//             <div className="pb-10 lg:py-[3.5rem] px-3 lg:px-1 flex w-[40%] text-[12px] gap-8 font-secondary  lg:justify-end">
//               <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//                 <FaInstagram />
//               </div>
//               <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//                 <FaYoutube />
//               </div>
//               <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//                 <FaFacebook />
//               </div>
//               <div className="border p-2 border-slate-100/20 flex justify-center hover:bg-slate-500/20 hover:cursor-pointer hover:text-white hover:border-white">
//                 <FaWhatsapp />
//               </div>
//             </div>
//           </div>
//           <div className="flex py-5">
//             <p>©2024. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News_Page;
import { NewsFeed, useNewsFeed } from "@/hook/useNewsFeed";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

import YouTube from "react-youtube";

const News_Page = () => {
  const { queryClient } = useNewsFeed();

  const data = queryClient.getQueryData(["newsfeeds"]) as NewsFeed[];
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track video play state

  useEffect(() => {
    if (!isPlaying) {
      const timer = setInterval(() => {
        setActive((prev) => (prev + 1) % data?.length);
      }, 10000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isPlaying, data?.length]);

  const handleItemClick = (index: number) => {
    setActive(index);
  };

  const onVideoStateChange = (event: any) => {
    const state = event.data;
    if (state === 1) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };
  function getCurrentDay() {
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayIndex = today.getDay();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const monthName = monthsOfYear[monthIndex];
    const getCurrentYear = today.getFullYear();

    return {
      day: daysOfWeek[dayIndex],
      monthWithDate: `${monthName} ${day}`,
      currentYear: getCurrentYear,
    };
  }
  const awards = [
    {
      icon: "/sunNewsLogo.png",
      date: "2023",
      title: "Best Sportd Infra Solution by",
    },
    {
      icon: "/sitaLogo.png",
      date: "2021-2023",
      title: "South india's best Sports infrastructure Firm Award by  ",
    },
    {
      icon: "/vikadanLogo.png",
      date: "2023",
      title: "Best Sportd Infra Solution by",
    },
  ];
  return (
    <div className="h-full relative w-full">
      <div className="w-full p-3 mx-auto ">
        <div className="h-[10vh]"></div>
        <header className="h-[12vh] px-2 py-3 flex flex-col justify-start items-start border-t border-gray-800  ">
          <h1 className="text-4xl text-[#febc12] uppercase">news & awards</h1>
          <div className="flex items-center mb-8  border-gray-300 pb-2">
            <p className="font-bold capitalize mr-2">
              {getCurrentDay().day}{" "}
              <span className="text-gray-500 font-light border-r border-[#febc12] pr-2">
                {getCurrentDay().monthWithDate} {getCurrentDay().currentYear}
              </span>
            </p>
            <p className="text-crimson uppercase font-light">Sports</p>
          </div>
        </header>

        <div className="w-full  py-4 px-2 flex flex-col xl:grid md:grid-cols-[2fr_1fr] h-[100%]  gap-6">
          <div className="left flex flex-col gap-2 w-full">
            {data[active].fileType == "youtube" ? (
              <YouTube
                className="w-full xl:h-[70vh] h-[50vh] "
                opts={{
                  height: "100%",
                  width: "100%",
                }}
                videoId={data[active].mediaUrl.split("v=")[1]} // Extract video ID
                onStateChange={onVideoStateChange} // Handle video state change
              />
            ) : (
              <img
                src={data[active].mediaUrl}
                className="xl:h-[70vh] h-[50vh] w-full"
              />
            )}{" "}
            <div></div>
            <h2 className="text-2xl md:text-3xl leading-tight mb-2">
              {data[active].details}
            </h2>
            <p className="text-gray-500">
              {new Date(data[active].date).toDateString()}
            </p>
          </div>

          <div className="right flex flex-col">
            <h3 className="text-2xl text-[#febc12] uppercase text-crimson mb-2">
              Latest-2024{" "}
            </h3>
            <div className="grid grid-cols-1 gap-5">
              {data?.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex list transition-transform duration-500 cursor-pointer ${
                    active === index ? "bg-gray-100/10" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                >
                  {item.fileType === "youtube" ? (
                    <img
                      src={`https://img.youtube.com/vi/${
                        item.mediaUrl.split("v=")[1]
                      }/hqdefault.jpg
`}
                      alt={`photo ${item.id}`}
                      className="w-20 h-20 mr-3 object-cover"
                    />
                  ) : (
                    <img
                      src={item.mediaUrl}
                      alt={`photo ${item.id}`}
                      className="w-20 h-20 mr-3 object-cover"
                    />
                  )}
                  <div className="">
                    <p className="text-sm md:text-base">{item.details}</p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {new Date(item.date).toDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {awards.map((image, index) => (
          <div key={index} className="border border-gray-50/10 p-2">
            <p className="text-2xl text-[#febc12] uppercase justify-center h-20 text-center ">
              {image.title}
            </p>
            <div className="w-full shadow-lg overflow-hidden bg-yellow-100/20 flex items-center justify-center">
              <img
                src={image.icon} // Replace with actual paths
                alt={`image ${index + 1}`}
                className="w-72 h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

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

export default News_Page;
