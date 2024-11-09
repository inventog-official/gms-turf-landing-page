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

          child.lookAt(new THREE.Vector3(0, 0.8, 0));
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
            const angle = -index * (Math.PI / 3.5);
            const x = Math.cos(angle) * 2;
            const z = Math.sin(angle) * 2;
            const y = index * 4.5;

            return (
              <MediaPlane
                key={imagePath}
                imagePath={imagePath}
                position={[x, -y, z]}
              />
            );
          })}
        </group>
      )}
    </group>
  );
};

export default CharacterScene;

// import React, { useRef, useEffect, useState } from 'react';
// import { useThree } from '@react-three/fiber';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import Character from './character';
// import MediaPlane from './mediaPlane';

// const mediaPaths: string[] = [
//   "/Football/1.jpg",
//   "/Football/2.jpg",
//   "/Football/3.jpg",
//   "/videos/football-1.mp4",
//   "/videos/football-2.mp4",
//   "/videos/football-3.mp4",
//   "/Football/Football-06.png",
//   "/Football/Football-02.png",
//   "/Football/Football-03.png",
//   "/Football/Football-04.png",
//   "/Football/Football-05.png",
// ];

// const CharacterScene: React.FC = () => {
//   const { camera, gl } = useThree();
//   const groupRef = useRef<THREE.Group>(null);
//   const characterRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const scrollSpeed = 0.0005;

//   useEffect(() => {
//     // Prevent body scrolling
//     document.body.style.overflow = 'hidden';

//     // Initialize camera animation
//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 0,
//         z: 10,
//         duration: 4,
//         ease: 'power1.out',
//         onComplete: () => setShowMediaPlanes(true),
//       }
//     );

//     const handleScroll = (event: WheelEvent) => {
//       scrollY.current += event.deltaY * scrollSpeed;

//       // Add a slight camera tilt on scroll
//       if (camera) {
//         gsap.to(camera.rotation, {
//           z: event.deltaY * 0.0001,
//           duration: 0.5,
//           ease: 'power2.out',
//           onComplete: () => {
//             gsap.to(camera.rotation, {
//               z: 0,
//               duration: 1,
//               ease: 'elastic.out(1, 0.5)',
//             });
//           },
//         });
//       }
//     };

//     // Add scroll event listener to the canvas
//     gl.domElement.addEventListener('wheel', handleScroll);

//     return () => {
//       // Clean up scroll event listener and restore body overflow
//       gl.domElement.removeEventListener('wheel', handleScroll);
//       document.body.style.overflow = '';
//     };
//   }, [camera, gl]);

//   useEffect(() => {
//     let rotationY = 0;
//     let lastScrollY = 0;
//     const lerpAmount = 4;

//     const animate = () => {
//       const delta = scrollY.current - lastScrollY;
//       lastScrollY = scrollY.current;

//       rotationY += (delta * 0.06 - rotationY) / lerpAmount;

//       if (characterRef.current) {
//         gsap.to(characterRef.current.rotation, {
//           y: rotationY,
//           duration: 1,
//           ease: 'power2.out',
//         });
//       }

//       if (groupRef.current) {
//         groupRef.current.children.forEach((child, idx) => {
//           const positionY = scrollY.current * 2.5 + idx * 2.5;
//           const radius = 5 + Math.sin(positionY * 0.1) * 0.5;
//           const positionX = Math.cos(positionY) * radius;
//           const positionZ = Math.sin(positionY) * radius;

//           gsap.to(child.position, {
//             x: positionX,
//             y: positionY,
//             z: positionZ,
//             duration: 1.2,
//             ease: 'power2.out',
//           });

//           child.lookAt(new THREE.Vector3(0, 0.8, 0));
//         });
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => cancelAnimationFrame(requestAnimationFrame(animate));
//   }, []);

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.reverse().map((imagePath, index) => {
//             const angle = -index * (Math.PI / 3.5);
//             const x = Math.cos(angle) * 2;
//             const z = Math.sin(angle) * 2;
//             const y = index * 4.5;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, -y, z]}
//               />
//             );
//           })}
//         </group>
//       )}
//     </group>
//   );
// };

// export default CharacterScene;
