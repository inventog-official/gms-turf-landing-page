// import React, { useRef, useEffect, useState } from "react";
// import { useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import Character from "./character";
// import MediaPlane from "./mediaPlane";

// const mediaPaths: string[] = [
//   "/Football/1.png",
//   "/Football/2.png",
//   "/Football/3.png",
//   "/Football/Football-01.png",
//   "/Football/Football-02.png",
//   "/Football/Football-03.png",
//   "/Football/Football-04.png",
//   "/Football/Football-05.png",
// ];

// const CharacterScene: React.FC = () => {
//   const { camera } = useThree();
//   const groupRef = useRef<THREE.Group>(null);
//   const characterRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const scrollSpeed = 0.0005; // Adjust this value for smoother or faster scrolling

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 0,
//         z: 10,
//         duration: 4,
//         ease: "power1.out",
//         onComplete: () => setShowMediaPlanes(true),
//       }
//     );

//     const handleScroll = (event: WheelEvent) => {
//       scrollY.current += event.deltaY * scrollSpeed;
//     };

//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//       document.body.style.overflow = "";
//     };
//   }, []);

//   useEffect(() => {
//     if (groupRef.current) {
//       groupRef.current.children.forEach((child, idx) => {
//         const initialY = idx * -2.5;
//         const angle = idx * (Math.PI / 5);

//         const x = Math.cos(angle) * 3;
//         const z = Math.sin(angle) * 3;

//         gsap.fromTo(
//           child.position,
//           { x: x, y: initialY, z: z + 1.5 },
//           {
//             x: x,
//             y: initialY,
//             z: z + 1.5,
//             duration: 1.5,
//             ease: "power2.out",
//             stagger: 0.2,
//           }
//         );
//       });
//     }
//   }, []);

//   const smoothRotate = (
//     target: number,
//     current: number,
//     lerpAmount: number
//   ): number => {
//     return current + (target - current) * lerpAmount;
//   };

//   useEffect(() => {
//     let rotationY = 0;
//     let lastScrollY = 0;
//     const lerpAmount = 4; // Smoothness of rotation, adjust this value for more or less smoothness
//     // const lerpAmount = 0.1 // Smoothness of rotation, adjust this value for more or less smoothness

//     const animate = () => {
//       // Smooth scroll and rotation
//       const delta = scrollY.current - lastScrollY;
//       lastScrollY = scrollY.current;

//       rotationY = smoothRotate(rotationY, rotationY + delta * 0.06, lerpAmount);

//       if (characterRef.current) {
//         // Smoothly rotate the character
//         gsap.to(characterRef.current.rotation, {
//           y: rotationY,
//           duration: 1,
//           ease: "power2.out",
//         });
//       }

//       if (groupRef.current) {
//         groupRef.current.children.forEach((child, idx) => {
//           const positionY = scrollY.current * 2.5 + idx * 2.5;
//           const positionX = Math.cos(positionY) * 5;
//           const positionZ = Math.sin(positionY) * 5;

//           // Smoothly move the child elements
//           gsap.to(child.position, {
//             x: positionX,
//             y: positionY,
//             z: positionZ,
//             duration: 1.2,
//             ease: "power2.out",
//             stagger: 0.1,
//           });

//           // Smoothly rotate the child elements (images)
//           gsap.to(child.rotation, {
//             y: rotationY,
//             duration: 1.2,
//             ease: "power2.out",
//           });

//           child.lookAt(new THREE.Vector3(0, 0, 0));
//         });
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, [scrollY.current]);

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.reverse().map((imagePath, index) => {
//             const angle = index * (Math.PI / 2);
//             const x = Math.cos(angle) * 3;
//             const z = Math.sin(angle) * 3;
//             const y = index * 2;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, y, z]}
//               />
//             );
//           })}
//         </group>
//       )}
//     </group>
//   );
// };

// export default CharacterScene;

// import React, { useRef, useEffect, useState } from "react";
// import { useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import Character from "./character";
// import MediaPlane from "./mediaPlane";

// const mediaPaths: string[] = [
//   "/Football/1.png",
//   "/Football/2.png",
//   "/Football/3.png",
//   "/Football/Football-01.png",
//   "/Football/Football-02.png",
//   "/Football/Football-03.png",
//   "/Football/Football-04.png",
//   "/Football/Football-05.png",
// ];

// const CharacterScene: React.FC = () => {
//   const { camera } = useThree();
//   const groupRef = useRef<THREE.Group>(null);
//   const characterRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const scrollSpeed = 0.0005;

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 0,
//         z: 10,
//         duration: 4,
//         ease: "power1.out",
//         onComplete: () => setShowMediaPlanes(true),
//       }
//     );

//     const handleScroll = (event: WheelEvent) => {
//       scrollY.current += event.deltaY * scrollSpeed;
//     };

//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//       document.body.style.overflow = "";
//     };
//   }, []);

//   const smoothRotate = (
//     target: number,
//     current: number,
//     lerpAmount: number
//   ): number => {
//     return current + (target - current) * lerpAmount;
//   };

//   useEffect(() => {
//     let rotationY = 0;
//     let lastScrollY = 0;
//     const lerpAmount = 4;

//     const animate = () => {
//       const delta = scrollY.current - lastScrollY;
//       lastScrollY = scrollY.current;

//       rotationY = smoothRotate(rotationY, rotationY + delta * 0.06, lerpAmount);

//       if (characterRef.current) {
//         gsap.to(characterRef.current.rotation, {
//           y: rotationY,
//           duration: 1,
//           ease: "power2.out",
//         });
//       }

//       if (groupRef.current) {
//         groupRef.current.children.forEach((child, idx) => {
//           const positionY = scrollY.current * 2.5 + idx * 2.5;
//           const positionX = Math.cos(positionY) * 5;
//           const positionZ = Math.sin(positionY) * 5;

//           gsap.to(child.position, {
//             x: positionX,
//             y: positionY,
//             z: positionZ,
//             duration: 1.2,
//             ease: "power2.out",
//             stagger: 0.1,
//           });

//           gsap.to(child.rotation, {
//             y: rotationY,
//             duration: 1.2,
//             ease: "power2.out",
//           });

//           child.lookAt(new THREE.Vector3(0, 0, 0));
//         });
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, [scrollY.current]);

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.reverse().map((imagePath, index) => {
//             const angle = index * (Math.PI / 2);
//             const x = Math.cos(angle) * 3;
//             const z = Math.sin(angle) * 3;
//             const y = index * 2;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, y, z]}
//               />
//             );
//           })}
//         </group>
//       )}
//     </group>
//   );
// };

// export default CharacterScene;


import React, { useRef, useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import Character from './character';
import MediaPlane from './mediaPlane';

const mediaPaths: string[] = [
  "/Football/1.jpg",
  "/Football/2.jpg",
  "/Football/3.jpg",
  "/videos/football-1.mp4",
  "/videos/football-2.mp4",
  "/videos/football-3.mp4",
  "/Football/Football-06.png",
  "/Football/Football-02.png",
  "/Football/Football-03.png",
  "/Football/Football-04.png",
  "/Football/Football-05.png",
];

const CharacterScene: React.FC = () => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const characterRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);
  const [showMediaPlanes, setShowMediaPlanes] = useState(false);
  const scrollSpeed = 0.0005;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      camera.position,
      { x: -50, z: 35 },
      {
        x: 0,
        z: 10,
        duration: 4,
        ease: 'power1.out',
        onComplete: () => setShowMediaPlanes(true),
      }
    );

    const handleScroll = (event: WheelEvent) => {
      scrollY.current += event.deltaY * scrollSpeed;
      
      // Add a slight camera tilt on scroll
      if (camera) {
        gsap.to(camera.rotation, {
          z: (event.deltaY * 0.0001),
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(camera.rotation, {
              z: 0,
              duration: 1,
              ease: 'elastic.out(1, 0.5)',
            });
          },
        });
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      document.body.style.overflow = '';
    };
  }, [camera]);

  useEffect(() => {
    let rotationY = 0;
    let lastScrollY = 0;
    const lerpAmount = 4;

    const animate = () => {
      const delta = scrollY.current - lastScrollY;
      lastScrollY = scrollY.current;

      rotationY += (delta * 0.06 - rotationY) / lerpAmount;

      if (characterRef.current) {
        gsap.to(characterRef.current.rotation, {
          y: rotationY,
          duration: 1,
          ease: 'power2.out',
        });
      }

      if (groupRef.current) {
        groupRef.current.children.forEach((child, idx) => {
          const positionY = scrollY.current * 2.5 + idx * 2.5;
          const radius = 5 + Math.sin(positionY * 0.1) * 0.5;
          const positionX = Math.cos(positionY) * radius;
          const positionZ = Math.sin(positionY) * radius;

          gsap.to(child.position, {
            x: positionX,
            y: positionY,
            z: positionZ,
            duration: 1.2,
            ease: 'power2.out',
          });

          child.lookAt(new THREE.Vector3(0, 0, 0));
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(requestAnimationFrame(animate));
    };
  }, []);

  return (
    <group>
      <group ref={characterRef}>
        <Character />
      </group>

      {showMediaPlanes && (
        <group ref={groupRef}>
          {mediaPaths.reverse().map((imagePath, index) => {
            const angle = index * (Math.PI / 2);
            const x = Math.cos(angle) * 3;
            const z = Math.sin(angle) * 3;
            const y = index * 2;

            return (
              <MediaPlane
                key={imagePath}
                imagePath={imagePath}
                position={[x, y, z]}
              />
            );
          })}
        </group>
      )}
    </group>
  );
};

export default CharacterScene;