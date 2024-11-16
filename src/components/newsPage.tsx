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
import YouTube from "react-youtube";
import TextHoverAnimation from "./textHoverAnimation";
import { Footer } from "./footer";
import { RiAwardFill } from "react-icons/ri";
import Preloader from "./preLoading";
import AnimateCard from "./AnimateCard/main";

const News_Page = () => {
  const { queryClient, getNewsFeeds } = useNewsFeed();

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
  return getNewsFeeds.isFetching?(
    <div className="w-screen h-screen bg-primary">
    <Preloader isLoading={getNewsFeeds.isFetching} onComplete={() =>{}} />
  </div>
  ): (
    <div className="  w-full pt-28 ">
      <div className="w-full   px-10 lg:px-48">
        <header className=" pb-10   flex flex-col justify-start items-center  ">
          <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl   font-primary text-secondary uppercase leading-tight flex gap-2">
            <TextHoverAnimation text="news" />{" "}
            <span className="text-white">
              <TextHoverAnimation text="&" />
            </span>{" "}
            <TextHoverAnimation text="awards" />
          </h1>
        </header>
        <div className="flex items-start   border-b border-secondary    border-gray-300 pb-2">
          <p className="font-bold capitalize mr-2">
            {getCurrentDay().day}{" "}
            <span className="text-gray-500 font-light border-r border-secondary pr-2">
              {getCurrentDay().monthWithDate} {getCurrentDay().currentYear}
            </span>
          </p>
          <p className="text-crimson uppercase  text-secondary font-bold">
            Sports
          </p>
        </div>
        <div className="w-full  py-4 px-2 flex flex-col xl:grid md:grid-cols-[2fr_1fr] h-[100%]  gap-6">
          <div className="left flex flex-col gap-2 w-full">
            {data[active]?.fileType == "youtube" ? (
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
                className="xl:h-[70vh] h-[50vh] bg-contain w-full"
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

          <div className="right flex flex-col gap-7">
            <AnimateCard>
            <h3 className=" text-3xl md:text-2xl lg:text-3xl xl:text-3xl font-primary text-secondary uppercase leading-tight flex ">
              <TextHoverAnimation text="Latest" />
              <span className="text-white">
                {" "}
                <TextHoverAnimation text="-" />
              </span>
              <span className="text-white">
                {" "}
                <TextHoverAnimation text="2024" />
              </span>
            </h3>
            </AnimateCard>
            <div className="grid grid-cols-1 gap-5">
              {data?.map((item, index) => (
                <AnimateCard>
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
                      className="w-20 h-full mr-3 object-cover"
                    />
                  )}
                  <div className="">
                    <p className="text-[13px]  text-wrap truncate h-16">{item.details}</p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {new Date(item.date).toDateString()}
                    </p>
                  </div>
                </div>
                </AnimateCard>
               
              ))}
            </div>
          </div>
        </div>
      </div>
     <div className="px-10 lg:px-48">
     <div className=" flex flex-col items-center justify-center border-t border-secondary  ">
        <h3 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl  py-10  font-primary text-secondary uppercase leading-tight flex gap-3">

        <RiAwardFill className="h-10" />

        <TextHoverAnimation text="Awards" />
        <span className="text-white">
            <TextHoverAnimation text="From" />
          </span>
        </h3>
        <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {awards.map((image, index) => (
            <AnimateCard>
   <div
              key={index}
              className="border border-gray-50/10 p-1 transform transition duration-500 ease-in-out hover:scale-105"
            >
          
              <div className="w-full shadow-md overflow-hidden bg-yellow-100/20 flex items-center justify-center">
                <img
                  src={image.icon} // Replace with actual paths
                  alt={`image ${index + 1}`}
                  className="w-32 h-28 object-cover"
                />
              </div>
              <p className="text-lg flex md:text-lg lg:text-lg p-4  font-primary   leading-tight text-wrap  items-center  justify-center text-secondary uppercase text-center ">
                {image.title}
              </p>
            </div>
            </AnimateCard>
         
          ))}
        </div>
      </div>
     </div>

      <Footer/>
    </div>
  );
};

export default News_Page;
