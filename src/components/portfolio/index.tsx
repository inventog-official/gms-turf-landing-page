// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import CharacterScene from "./characterScene";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// const Portfolio: React.FC = () => {
//   const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

//   const [videoUrl, setVideoUrl] = useState<string | null>(null); // For video URL
//   const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isMobile = screenWidth <= 768;
//   const isTablet = screenWidth > 768 && screenWidth <= 1024;
//   // const isDesktop = screenWidth > 1024

//   const handleVideoSelect = (url: string) => {
//     setVideoUrl(url);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     console.log(111111);
//     setIsModalOpen(false);
//     setVideoUrl(null);
//   };

//   return (
//     <>
//       <div className="w-screen h-screen overflow-y-scroll bg-primary">
//         {/* <div className="w-screen h-screen overflow-y-scroll bg-primary relative"> */}
//         <Canvas
//           camera={{
//             position: isMobile ? [0, 2, 4] : isTablet ? [0, 2.5, 5] : [0, 3, 6],
//             fov: isMobile ? 60 : isTablet ? 55 : 50,
//           }}
//           gl={{ antialias: true }}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <color attach="background" args={["#0f150e"]} />
//           <fog attach="fog" args={["#0f150e", 5, 0]} />
//           <ambientLight intensity={1} />
//           <directionalLight position={[10, 10, 5]} intensity={3} />
//           <pointLight
//             position={[-10, -10, -5]}
//             intensity={0.5}
//             color="#0f150e"
//           />

//           <Stars
//             radius={100}
//             depth={50}
//             count={isMobile ? 2000 : isTablet ? 3000 : 5000}
//             factor={4}
//             saturation={0}
//             fade
//             speed={0.5}
//           />

//           <OrbitControls
//             enableZoom={false} // Enable zoom on all devices
//             enableRotate={false} // Ensure rotation is enabled for mobile
//             enablePan={false} // Enable panning if needed on mobile
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 3}
//           />
//           <CharacterScene onVideoSelect={handleVideoSelect} />
//         </Canvas>
//       </div>
//       {/* Modal for video */}
//       {isModalOpen && videoUrl && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col gap-5 justify-center items-center z-[10000]">
//           <div className="text-white text-xl p-2" onClick={closeModal}>
//             <AiOutlineCloseCircle className="text-3xl" />
//           </div>
//           <div className="">
//             <video
//               src={videoUrl}
//               controls
//               autoPlay
//               className="w-[70vw] max-h-screen"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import CharacterScene from "./characterScene";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// const Portfolio: React.FC = () => {
//   const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
//   const [videoUrl, setVideoUrl] = useState<string | null>(null); // For video URL
//   const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isMobile = screenWidth <= 768;
//   const isTablet = screenWidth > 768 && screenWidth <= 1024;

//   const handleVideoSelect = (url: string) => {
//     setVideoUrl(url);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoUrl(null);
//   };

//   return (
//     <>
//       <div className="w-screen h-screen overflow-y-scroll bg-primary">
//         <Canvas
//           camera={{
//             position: isMobile ? [0, 2, 4] : isTablet ? [0, 2.5, 5] : [0, 3, 6],
//             fov: isMobile ? 60 : isTablet ? 55 : 50,
//           }}
//           gl={{ antialias: true }}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <color attach="background" args={["#0f150e"]} />
//           <fog attach="fog" args={["#0f150e", 5, 0]} />
//           <ambientLight intensity={1} />
//           <directionalLight position={[10, 10, 5]} intensity={3} />
//           <pointLight
//             position={[-10, -10, -5]}
//             intensity={0.5}
//             color="#0f150e"
//           />

//           <Stars
//             radius={100}
//             depth={50}
//             count={isMobile ? 2000 : isTablet ? 3000 : 5000}
//             factor={4}
//             saturation={0}
//             fade
//             speed={0.5}
//           />

//           <OrbitControls
//             enableZoom={false}
//             enableRotate={false}
//             enablePan={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 3}
//           />
//           <CharacterScene onVideoSelect={handleVideoSelect} />
//         </Canvas>
//       </div>
//       {/* Modal for video */}
//       {isModalOpen && videoUrl && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col gap-5 justify-center items-center z-[10000]">
//           <button
//             className="text-white hover:text-red-500 transition"
//             onClick={closeModal}
//             aria-label="Close"
//           >
//             <AiOutlineCloseCircle className="text-4xl" />
//           </button>
//           <video
//             src={videoUrl}
//             controls
//             autoPlay
//             className={`${
//               isMobile
//                 ? "w-[90vw] h-auto"
//                 : isTablet
//                 ? "w-[80vw] h-auto"
//                 : "w-[60vw] h-auto"
//             } shadow-lg border-4 border-gray-800`}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CharacterScene from "./characterScene";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Portfolio: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // For video URL
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [showModal, setShowModal] = useState(false); // For animation visibility

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
    setTimeout(() => setShowModal(true), 10); // Allow animation to trigger
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setVideoUrl(null);
    }, 300); // Match animation duration
  };

  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll bg-primary">
        <Canvas
          camera={{
            position: isMobile ? [0, 2, 4] : isTablet ? [0, 2.5, 5] : [0, 3, 6],
            fov: isMobile ? 60 : isTablet ? 55 : 50,
          }}
          gl={{ antialias: true }}
          style={{ width: "100%", height: "100%" }}
        >
          <color attach="background" args={["#0f150e"]} />
          <fog attach="fog" args={["#0f150e", 5, 0]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={3} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#0f150e"
          />

          <Stars
            radius={100}
            depth={50}
            count={isMobile ? 2000 : isTablet ? 3000 : 5000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />

          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          <CharacterScene onVideoSelect={handleVideoSelect} />
        </Canvas>
      </div>
      {/* Modal for video */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 flex flex-col gap-5 justify-center items-center z-[10000] transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="text-white hover:text-red-500 transition"
            onClick={closeModal}
            aria-label="Close"
          >
            <AiOutlineCloseCircle className="text-4xl" />
          </button>
          <video
            src={videoUrl as string}
            controls
            autoPlay
            className={`${
              isMobile
                ? "w-[90vw] h-auto"
                : isTablet
                ? "w-[80vw] h-auto"
                : "w-[60vw] h-auto"
            } shadow-lg border-4 border-gray-800 transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-95"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;
