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
//   const { camera } = useThree();
//   const groupRef = useRef<THREE.Group>(null);
//   const characterRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const scrollSpeed = 0.0005;

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 2,
//         y: -2.5,
//         z: 11,
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
//           z: (event.deltaY * 0.0001),
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

//     window.addEventListener('wheel', handleScroll);

//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//       document.body.style.overflow = '';
//     };
//   }, [camera]);

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
//           y: rotationY * 0.3,
//           duration: 1,
//           ease: 'power2.out',
//         });
//       }

//       if (groupRef.current) {
//         groupRef.current.children.forEach((child, idx) => {
//           const positionY = scrollY.current * 2.5 + idx * 2.5;
//           const radius = 7 + Math.sin(positionY * 0.1) * 0.5;
//           const positionX = Math.cos(positionY) * radius;
//           const positionZ = Math.sin(positionY) * radius;

//           // Lower the Y position to bring MediaPlanes closer to the ground
//           const adjustedY = positionY - 1.5; // Decrease Y value to bring planes lower

//           gsap.to(child.position, {
//             x: positionX,
//             y: adjustedY,  // Update Y position here
//             z: positionZ,
//             duration: 1.2,
//             ease: 'power2.out',
//           });

//           // Make each child face away from the character
//           if (characterRef.current) {
//             const characterPosition = new THREE.Vector3();
//             characterRef.current.getWorldPosition(characterPosition);

//             // Calculate the direction from the child to the character
//             const directionToCharacter = new THREE.Vector3()
//               .subVectors(characterPosition, child.position)
//               .normalize();

//             // Reverse the direction to make the plane face away
//             const oppositeDirection = directionToCharacter.multiplyScalar(-1);
//             child.lookAt(child.position.clone().add(oppositeDirection));
//           }
//         });
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(requestAnimationFrame(animate));
//     };
//   }, []);

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.reverse().map((imagePath, index) => {
//             const angle = index * (Math.PI / 3.5);
//             const x = Math.cos(angle) * 2;
//             const z = Math.sin(angle) * 2;
//             const y = index * 4.5;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, y - 3, z]} // Adjusted Y value here
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

  // Handle scroll or touch events
  const handleScroll = (event: WheelEvent | TouchEvent) => {
    let deltaY = 0;

    if (event instanceof WheelEvent) {
      deltaY = event.deltaY;
    } else if (event instanceof TouchEvent) {
      // For touch, calculate the deltaY based on touch movement
      if (event.touches.length > 1) {
        deltaY = event.touches[0].clientY - event.touches[1].clientY;
      } else {
        deltaY = event.touches[0].clientY;
      }
    }

    scrollY.current += deltaY * scrollSpeed;

    // Add camera tilt or rotation
    if (camera) {
      gsap.to(camera.rotation, {
        z: (deltaY * 0.0001),
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      camera.position,
      { x: -50, z: 35 },
      {
        x: 2,
        y: -2.5,
        z: 11,
        duration: 4,
        ease: 'power1.out',
        onComplete: () => setShowMediaPlanes(true),
      }
    );

    // Attach event listeners
    const handleWheel = (e: WheelEvent) => handleScroll(e);
    const handleTouchMove = (e: TouchEvent) => handleScroll(e);

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
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
          y: rotationY * 0.3,
          duration: 1,
          ease: 'power2.out',
        });
      }

      if (groupRef.current) {
        groupRef.current.children.forEach((child, idx) => {
          const positionY = scrollY.current * 2.5 + idx * 2.5;
          const radius = 7 + Math.sin(positionY * 0.1) * 0.5;
          const positionX = Math.cos(positionY) * radius;
          const positionZ = Math.sin(positionY) * radius;

          // Lower the Y position to bring MediaPlanes closer to the ground
          const adjustedY = positionY - 1.5; // Decrease Y value to bring planes lower

          gsap.to(child.position, {
            x: positionX,
            y: adjustedY,  // Update Y position here
            z: positionZ,
            duration: 1.2,
            ease: 'power2.out',
          });

          // Make each child face away from the character
          if (characterRef.current) {
            const characterPosition = new THREE.Vector3();
            characterRef.current.getWorldPosition(characterPosition);

            // Calculate the direction from the child to the character
            const directionToCharacter = new THREE.Vector3()
              .subVectors(characterPosition, child.position)
              .normalize();

            // Reverse the direction to make the plane face away
            const oppositeDirection = directionToCharacter.multiplyScalar(-1);
            child.lookAt(child.position.clone().add(oppositeDirection));
          }
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
            const angle = index * (Math.PI / 3.5);
            const x = Math.cos(angle) * 2;
            const z = Math.sin(angle) * 2;
            const y = index * 4.5;

            return (
              <MediaPlane
                key={imagePath}
                imagePath={imagePath}
                position={[x, y - 3, z]} // Adjusted Y value here
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
//   const { camera } = useThree();
//   const groupRef = useRef<THREE.Group>(null);
//   const characterRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const scrollSpeed = 0.0005;

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 2,
//         y: -2.5,
//         z: 11,
//         duration: 4,
//         ease: 'power1.out',
//         onComplete: () => setShowMediaPlanes(true),
//       }
//     );

//     const handleWheel = (event: WheelEvent) => {
//       scrollY.current += event.deltaY * scrollSpeed;
//       handleScrollTilt(event.deltaY);
//     };

//     const handleTouchStart = (event: TouchEvent) => {
//       scrollY.current = event.touches[0].clientY;
//     };

//     const handleTouchMove = (event: TouchEvent) => {
//       const touchMoveY = event.touches[0].clientY;
//       const deltaY = touchMoveY - scrollY.current;
//       scrollY.current = touchMoveY;
//       handleScrollTilt(deltaY);
//     };

//     const handleScrollTilt = (deltaY: number) => {
//       // Add a slight camera tilt on scroll
//       if (camera) {
//         gsap.to(camera.rotation, {
//           z: (deltaY * 0.0001),
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

//     window.addEventListener('wheel', handleWheel);
//     window.addEventListener('touchstart', handleTouchStart, { passive: true });
//     window.addEventListener('touchmove', handleTouchMove, { passive: true });

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchmove', handleTouchMove);
//       document.body.style.overflow = '';
//     };
//   }, [camera]);

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
//           y: rotationY * 0.3,
//           duration: 1,
//           ease: 'power2.out',
//         });
//       }

//       if (groupRef.current) {
//         groupRef.current.children.forEach((child, idx) => {
//           const positionY = scrollY.current * 2.5 + idx * 2.5;
//           const radius = 7 + Math.sin(positionY * 0.1) * 0.5;
//           const positionX = Math.cos(positionY) * radius;
//           const positionZ = Math.sin(positionY) * radius;

//           // Lower the Y position to bring MediaPlanes closer to the ground
//           const adjustedY = positionY - 1.5; // Decrease Y value to bring planes lower

//           gsap.to(child.position, {
//             x: positionX,
//             y: adjustedY,  // Update Y position here
//             z: positionZ,
//             duration: 1.2,
//             ease: 'power2.out',
//           });

//           // Make each child face away from the character
//           if (characterRef.current) {
//             const characterPosition = new THREE.Vector3();
//             characterRef.current.getWorldPosition(characterPosition);

//             // Calculate the direction from the child to the character
//             const directionToCharacter = new THREE.Vector3()
//               .subVectors(characterPosition, child.position)
//               .normalize();

//             // Reverse the direction to make the plane face away
//             const oppositeDirection = directionToCharacter.multiplyScalar(-1);
//             child.lookAt(child.position.clone().add(oppositeDirection));
//           }
//         });
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(requestAnimationFrame(animate));
//     };
//   }, []);

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.reverse().map((imagePath, index) => {
//             const angle = index * (Math.PI / 3.5);
//             const x = Math.cos(angle) * 2;
//             const z = Math.sin(angle) * 2;
//             const y = index * 4.5;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, y - 3, z]} // Adjusted Y value here
//               />
//             );
//           })}
//         </group>
//       )}
//     </group>
//   );
// };

// export default CharacterScene;
