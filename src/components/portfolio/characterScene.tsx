// // import React, { useRef, useEffect, useState } from "react";
// // import { useThree } from "@react-three/fiber";
// // import * as THREE from "three";
// // import { gsap } from "gsap";
// // import Character from "./character3d";
// // import MediaPlane from "./mediaPlane";

// // const mediaPaths: string[] = [
// //   "/Football/1.webp",
// //   "/Football/2.webp",
// //   "/videos/football-1.mp4",
// //   "/videos/football-2.mp4",
// //   "/videos/football-3.mp4",
// //   "/Football/Football-06.webp",
// //   "/Football/Football-02.webp",
// //   "/Football/Football-03.webp",
// //   "/Football/Football-04.webp",
// //   "/Football/Football-05.webp",
// //   // "/videos/sample.mp4",
// // ];

// // interface CharacterSceneProps {
// //   onVideoSelect: (url: string) => void; // Callback for video selection
// // }

// // const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
// //   const { camera } = useThree();
// //   const characterRef = useRef<THREE.Group>(null);
// //   const groupRef = useRef<THREE.Group>(null);
// //   const scrollY = useRef(0);
// //   const touchStartY = useRef(0);
// //   const [showMediaPlanes, setShowMediaPlanes] = useState(false);

// //   const isMobile = window.innerWidth <= 768; // Adjust for mobile breakpoint
// //   const scrollSpeed = isMobile ? 0.001 : 0.0005; // Faster on mobile
// //   const rotationSpeed = isMobile ? 0.05 : 0.025; // Faster on mobile

// //   const maxScrollY = mediaPaths.length * 1.75; // Adjust based on number of media planes

// //   useEffect(() => {
// //     // Disable page scrolling
// //     document.body.style.overflow = "hidden";

// //     // Set up smooth camera entry animation
// //     gsap.fromTo(
// //       camera.position,
// //       { x: -50, z: 35 },
// //       {
// //         x: 2,
// //         y: -5,
// //         z: 9.5,
// //         duration: 3.5,
// //         ease: "power1.out",
// //         onComplete: () => setShowMediaPlanes(true),
// //       }
// //     );

// //     const handleScroll = (delta: number) => {
// //       scrollY.current += delta * scrollSpeed;

// //       // Boundary check for scrolling
// //       if (scrollY.current > 0) {
// //         scrollY.current = 0; // Prevent scrolling beyond the last plane
// //       }

// //       // Apply smooth rotation to character model
// //       if (characterRef.current) {
// //         gsap.to(characterRef.current.rotation, {
// //           y: scrollY.current * rotationSpeed,
// //           duration: 1, // Smooth transition
// //           ease: "power2.out",
// //         });
// //       }
// //     };

// //     const handleWheel = (event: WheelEvent) => {
// //       event.preventDefault(); // Prevent default page scroll
// //       handleScroll(-event.deltaY);
// //     };

// //     const handleTouchStart = (event: TouchEvent) => {
// //       touchStartY.current = event.touches[0].clientY;
// //     };

// //     const handleTouchMove = (event: TouchEvent) => {
// //       event.preventDefault(); // Prevent default page scroll
// //       const delta = touchStartY.current - event.touches[0].clientY;
// //       handleScroll(-delta);
// //       touchStartY.current = event.touches[0].clientY; // Update starting touch position
// //     };

// //     window.addEventListener("wheel", handleWheel, { passive: false });
// //     window.addEventListener("touchstart", handleTouchStart, { passive: true });
// //     window.addEventListener("touchmove", handleTouchMove, { passive: false });

// //     return () => {
// //       window.removeEventListener("wheel", handleWheel);
// //       window.removeEventListener("touchstart", handleTouchStart);
// //       window.removeEventListener("touchmove", handleTouchMove);
// //       document.body.style.overflow = ""; // Re-enable scrolling
// //     };
// //   }, [camera, scrollSpeed, rotationSpeed, maxScrollY]);

// //   useEffect(() => {
// //     const animate = () => {
// //       // Update MediaPlane positions
// //       if (groupRef.current) {
// //         groupRef.current.children.forEach((child, idx) => {
// //           const positionY = scrollY.current - 1.35 + idx * 1.75;
// //           const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
// //           const positionX = Math.cos(positionY) * radius;
// //           const positionZ = -Math.sin(positionY) * radius;
// //           const adjustedY = -positionY - 1.5;

// //           gsap.to(child.position, {
// //             x: positionX,
// //             y: adjustedY,
// //             z: positionZ,
// //             duration: 1.2,
// //             ease: "power3.out",
// //           });

// //           if (characterRef.current) {
// //             const characterPosition = new THREE.Vector3();
// //             characterRef.current.getWorldPosition(characterPosition);

// //             const directionToCharacter = new THREE.Vector3()
// //               .subVectors(characterPosition, child.position)
// //               .normalize();
// //             const oppositeDirection = directionToCharacter.multiplyScalar(-1);
// //             child.lookAt(child.position.clone().add(oppositeDirection));
// //           }
// //         });
// //       }

// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     return () => cancelAnimationFrame(requestAnimationFrame(animate));
// //   }, []);

// //   const handleMediaPlaneClick = (path: string) => {
// //     if (path.endsWith(".mp4")) {
// //       onVideoSelect(path); // Trigger callback with video URL
// //     }
// //   };

// //   return (
// //     <group>
// //       <group ref={characterRef}>
// //         <Character />
// //       </group>

// //       {showMediaPlanes && (
// //         <group ref={groupRef}>
// //           {mediaPaths.map((imagePath, index) => {
// //             const angle = index * (Math.PI / 3.5);
// //             const x = Math.cos(angle) * 2;
// //             const z = Math.sin(angle) * 2;
// //             const y = index * 2.5;

// //             return (
// //               <MediaPlane
// //                 key={imagePath}
// //                 imagePath={imagePath}
// //                 position={[x, y - 3, z]} // Adjusted Y for layout
// //                 onClick={() => handleMediaPlaneClick(imagePath)} // Click handler
// //               />
// //             );
// //           })}
// //         </group>
// //       )}
// //     </group>
// //   );
// // };

// // export default CharacterScene;

// // import React, { useRef, useEffect, useState } from "react";
// // import { useThree } from "@react-three/fiber";
// // import * as THREE from "three";
// // import { gsap } from "gsap";
// // import Character from "./character3d";
// // import MediaPlane from "./mediaPlane";

// // const mediaPaths: string[] = [
// //   "/Football/1.webp",
// //   "/Football/2.webp",
// //   "/videos/football-1.mp4",
// //   "/videos/football-2.mp4",
// //   "/videos/football-3.mp4",
// //   "/Football/Football-06.webp",
// //   "/Football/Football-02.webp",
// //   "/Football/Football-03.webp",
// //   "/Football/Football-04.webp",
// //   "/Football/Football-05.webp",
// //   // "/videos/sample.mp4",
// // ];

// // interface CharacterSceneProps {
// //   onVideoSelect: (url: string) => void; // Callback for video selection
// // }

// // const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
// //   const { camera } = useThree();
// //   const characterRef = useRef<THREE.Group>(null);
// //   const groupRef = useRef<THREE.Group>(null);
// //   const scrollY = useRef(0);
// //   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
// //   const dragStartX = useRef(0); // X position for drag start
// //   const isDragging = useRef(false); // Whether the user is dragging

// //   const scrollSpeed = 0.001; // Faster on mobile
// //   const rotationSpeed = 0.025; // Faster on mobile

// //   const maxScrollY = mediaPaths.length * 1.75; // Adjust based on number of media planes

// //   useEffect(() => {
// //     // Disable page scrolling
// //     document.body.style.overflow = "hidden";

// //     // Set up smooth camera entry animation
// //     gsap.fromTo(
// //       camera.position,
// //       { x: -50, z: 35 },
// //       {
// //         x: 2,
// //         y: -5,
// //         z: 9.5,
// //         duration: 3.5,
// //         ease: "power1.out",
// //         onComplete: () => setShowMediaPlanes(true),
// //       }
// //     );

// //     const handleScroll = (delta: number) => {
// //       scrollY.current += delta * scrollSpeed;

// //       // Boundary check for scrolling
// //       if (scrollY.current > 0) {
// //         scrollY.current = 0; // Prevent scrolling beyond the last plane
// //       }

// //       // Apply smooth rotation to character model
// //       if (characterRef.current) {
// //         gsap.to(characterRef.current.rotation, {
// //           y: scrollY.current * rotationSpeed,
// //           duration: 1, // Smooth transition
// //           ease: "power2.out",
// //         });
// //       }
// //     };

// //     const handleWheel = (event: WheelEvent) => {
// //       event.preventDefault(); // Prevent default page scroll
// //       handleScroll(-event.deltaY);
// //     };

// //     const handleDragStart = (event: MouseEvent | TouchEvent) => {
// //       isDragging.current = true;
// //       dragStartX.current =
// //         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
// //     };

// //     const handleDragMove = (event: MouseEvent | TouchEvent) => {
// //       if (!isDragging.current) return;

// //       const currentX =
// //         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
// //       const deltaX = currentX - dragStartX.current;

// //       dragStartX.current = currentX;

// //       // Update scrollY based on drag distance
// //       scrollY.current += deltaX * scrollSpeed;
// //       updateMediaPlanes(); // Apply the movement
// //     };

// //     const handleDragEnd = () => {
// //       isDragging.current = false;
// //     };

// //     window.addEventListener("wheel", handleWheel, { passive: false });
// //     window.addEventListener("mousedown", handleDragStart);
// //     window.addEventListener("mousemove", handleDragMove);
// //     window.addEventListener("mouseup", handleDragEnd);
// //     window.addEventListener("touchstart", handleDragStart, { passive: true });
// //     window.addEventListener("touchmove", handleDragMove, { passive: false });
// //     window.addEventListener("touchend", handleDragEnd);

// //     return () => {
// //       window.removeEventListener("wheel", handleWheel);
// //       window.removeEventListener("mousedown", handleDragStart);
// //       window.removeEventListener("mousemove", handleDragMove);
// //       window.removeEventListener("mouseup", handleDragEnd);
// //       window.removeEventListener("touchstart", handleDragStart);
// //       window.removeEventListener("touchmove", handleDragMove);
// //       window.removeEventListener("touchend", handleDragEnd);
// //       document.body.style.overflow = ""; // Re-enable scrolling
// //     };
// //   }, [camera, scrollSpeed, rotationSpeed, maxScrollY]);

// //   useEffect(() => {
// //     const animate = () => {
// //       // Update MediaPlane positions
// //       if (groupRef.current) {
// //         groupRef.current.children.forEach((child, idx) => {
// //           const positionY = scrollY.current - 1.35 + idx * 1.75;
// //           const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
// //           const positionX = Math.cos(positionY) * radius;
// //           const positionZ = -Math.sin(positionY) * radius;
// //           const adjustedY = -positionY - 1.5;

// //           gsap.to(child.position, {
// //             x: positionX,
// //             y: adjustedY,
// //             z: positionZ,
// //             duration: 1.2,
// //             ease: "power3.out",
// //           });

// //           if (characterRef.current) {
// //             const characterPosition = new THREE.Vector3();
// //             characterRef.current.getWorldPosition(characterPosition);

// //             const directionToCharacter = new THREE.Vector3()
// //               .subVectors(characterPosition, child.position)
// //               .normalize();
// //             const oppositeDirection = directionToCharacter.multiplyScalar(-1);
// //             child.lookAt(child.position.clone().add(oppositeDirection));
// //           }
// //         });
// //       }

// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     return () => cancelAnimationFrame(requestAnimationFrame(animate));
// //   }, []);

// //   const updateMediaPlanes = () => {
// //     if (!groupRef.current) return;

// //     groupRef.current.children.forEach((child, idx) => {
// //       const positionY = scrollY.current - 1.35 + idx * 1.75;
// //       const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
// //       const positionX = Math.cos(positionY) * radius;
// //       const positionZ = -Math.sin(positionY) * radius;
// //       const adjustedY = -positionY - 1.5;

// //       // Update positions
// //       child.position.set(positionX, adjustedY, positionZ);

// //       // Ensure planes face the camera
// //       if (characterRef.current) {
// //         const characterPosition = new THREE.Vector3();
// //         characterRef.current.getWorldPosition(characterPosition);

// //         const directionToCharacter = new THREE.Vector3()
// //           .subVectors(characterPosition, child.position)
// //           .normalize();
// //         const oppositeDirection = directionToCharacter.multiplyScalar(-1);
// //         child.lookAt(child.position.clone().add(oppositeDirection));
// //       }
// //     });
// //   };

// //   const handleMediaPlaneClick = (path: string) => {
// //     if (path.endsWith(".mp4")) {
// //       onVideoSelect(path); // Trigger callback with video URL
// //     }
// //   };

// //   return (
// //     <group>
// //       <group ref={characterRef}>
// //         <Character />
// //       </group>

// //       {showMediaPlanes && (
// //         <group ref={groupRef}>
// //           {mediaPaths.map((imagePath, index) => {
// //             const angle = index * (Math.PI / 3.5);
// //             const x = Math.cos(angle) * 2;
// //             const z = Math.sin(angle) * 2;
// //             const y = index * 2.5;

// //             return (
// //               <MediaPlane
// //                 key={imagePath}
// //                 imagePath={imagePath}
// //                 position={[x, y - 3, z]} // Adjusted Y for layout
// //                 onClick={() => handleMediaPlaneClick(imagePath)} // Click handler
// //               />
// //             );
// //           })}
// //         </group>
// //       )}
// //     </group>
// //   );
// // };

// // export default CharacterScene;


// // import React, { useRef, useEffect, useState } from "react";
// // import { useThree } from "@react-three/fiber";
// // import * as THREE from "three";
// // import { gsap } from "gsap";
// // import Character from "./character3d";
// // import MediaPlane from "./mediaPlane";

// // const mediaPaths: string[] = [
// //   "/Football/1.webp",
// //   "/Football/2.webp",
// //   "/videos/football-1.mp4",
// //   "/videos/football-2.mp4",
// //   "/videos/football-3.mp4",
// //   "/Football/Football-06.webp",
// //   "/Football/Football-02.webp",
// //   "/Football/Football-03.webp",
// //   "/Football/Football-04.webp",
// //   "/Football/Football-05.webp",
// // ];

// // interface CharacterSceneProps {
// //   onVideoSelect: (url: string) => void;
// // }

// // const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
// //   const { camera } = useThree();
// //   const characterRef = useRef<THREE.Group>(null);
// //   const groupRef = useRef<THREE.Group>(null);
// //   const scrollY = useRef(0);
// //   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
// //   const dragStartX = useRef(0);
// //   const isDragging = useRef(false);

// //   const scrollSpeed = 0.001;
// //   const rotationSpeed = 0.025; // Character rotation speed
// //   const maxScrollY = mediaPaths.length * 1.75; // Maximum scroll distance

// //   // Function to update media planes and character rotation
// //   const updateMediaPlanes = () => {
// //     if (!groupRef.current) return;

// //     groupRef.current.children.forEach((child, idx) => {
// //       const positionY = scrollY.current - 1.35 + idx * 1.75;
// //       const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
// //       const positionX = Math.cos(positionY) * radius;
// //       const positionZ = -Math.sin(positionY) * radius;
// //       const adjustedY = -positionY - 1.5;

// //       // Update positions
// //       child.position.set(positionX, adjustedY, positionZ);

// //       // Make planes face the character
// //       if (characterRef.current) {
// //         const characterPosition = new THREE.Vector3();
// //         characterRef.current.getWorldPosition(characterPosition);

// //         const directionToCharacter = new THREE.Vector3()
// //           .subVectors(characterPosition, child.position)
// //           .normalize();
// //         const oppositeDirection = directionToCharacter.multiplyScalar(-1);
// //         child.lookAt(child.position.clone().add(oppositeDirection));
// //       }
// //     });

// //     // Update character rotation based on scroll
// //     if (characterRef.current) {
// //       gsap.to(characterRef.current.rotation, {
// //         y: scrollY.current * rotationSpeed,
// //         duration: 1,
// //         ease: "power2.out",
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     document.body.style.overflow = "hidden";

// //     // Camera entry animation
// //     gsap.fromTo(
// //       camera.position,
// //       { x: -50, z: 35 },
// //       {
// //         x: 2,
// //         y: -5,
// //         z: 9.5,
// //         duration: 3.5,
// //         ease: "power1.out",
// //         onComplete: () => setShowMediaPlanes(true),
// //       }
// //     );

// //     // Handle scrolling logic
// //     const handleScroll = (delta: number) => {
// //       scrollY.current += delta * scrollSpeed;

// //       // Constrain scrollY to valid range
// //       if (scrollY.current > 0) scrollY.current = 0; // Prevent scrolling above the first plane
// //       if (scrollY.current < -maxScrollY) scrollY.current = -maxScrollY; // Prevent scrolling below the last plane

// //       updateMediaPlanes(); // Update media planes and character rotation
// //     };

// //     // Event handlers for scrolling and dragging
// //     const handleWheel = (event: WheelEvent) => {
// //       event.preventDefault();
// //       handleScroll(-event.deltaY);
// //     };

// //     const handleDragStart = (event: MouseEvent | TouchEvent) => {
// //       isDragging.current = true;
// //       dragStartX.current =
// //         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
// //     };

// //     const handleDragMove = (event: MouseEvent | TouchEvent) => {
// //       if (!isDragging.current) return;

// //       const currentX =
// //         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
// //       const deltaX = currentX - dragStartX.current;

// //       dragStartX.current = currentX;

// //       // Update scrollY based on drag distance
// //       scrollY.current += deltaX * scrollSpeed;

// //       // Constrain scrollY to valid range
// //       if (scrollY.current > 0) scrollY.current = 0;
// //       if (scrollY.current < -maxScrollY) scrollY.current = -maxScrollY;

// //       updateMediaPlanes(); // Apply updates
// //     };

// //     const handleDragEnd = () => {
// //       isDragging.current = false;
// //     };

// //     window.addEventListener("wheel", handleWheel, { passive: false });
// //     window.addEventListener("mousedown", handleDragStart);
// //     window.addEventListener("mousemove", handleDragMove);
// //     window.addEventListener("mouseup", handleDragEnd);
// //     window.addEventListener("touchstart", handleDragStart, { passive: true });
// //     window.addEventListener("touchmove", handleDragMove, { passive: false });
// //     window.addEventListener("touchend", handleDragEnd);

// //     return () => {
// //       window.removeEventListener("wheel", handleWheel);
// //       window.removeEventListener("mousedown", handleDragStart);
// //       window.removeEventListener("mousemove", handleDragMove);
// //       window.removeEventListener("mouseup", handleDragEnd);
// //       window.removeEventListener("touchstart", handleDragStart);
// //       window.removeEventListener("touchmove", handleDragMove);
// //       window.removeEventListener("touchend", handleDragEnd);
// //       document.body.style.overflow = "";
// //     };
// //   }, [camera]);

// //   useEffect(() => {
// //     const animate = () => {
// //       updateMediaPlanes();
// //       requestAnimationFrame(animate);
// //     };

// //     animate();

// //     return () => cancelAnimationFrame(requestAnimationFrame(animate));
// //   }, []);

// //   const handleMediaPlaneClick = (path: string) => {
// //     if (path.endsWith(".mp4")) {
// //       onVideoSelect(path);
// //     }
// //   };

// //   return (
// //     <group>
// //       <group ref={characterRef}>
// //         <Character />
// //       </group>

// //       {showMediaPlanes && (
// //         <group ref={groupRef}>
// //           {mediaPaths.map((imagePath, index) => {
// //             const angle = index * (Math.PI / 3.5);
// //             const x = Math.cos(angle) * 2;
// //             const z = Math.sin(angle) * 2;
// //             const y = index * 2.5;

// //             return (
// //               <MediaPlane
// //                 key={imagePath}
// //                 imagePath={imagePath}
// //                 position={[x, y - 3, z]}
// //                 onClick={() => handleMediaPlaneClick(imagePath)}
// //               />
// //             );
// //           })}
// //         </group>
// //       )}
// //     </group>
// //   );
// // };

// // export default CharacterScene;


// import React, { useRef, useEffect, useState } from "react";
// import { useThree } from "@react-three/fiber";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import Character from "./character3d";
// import MediaPlane from "./mediaPlane";

// const mediaPaths: string[] = [
//   "/Football/1.webp",
//   "/Football/2.webp",
//   "/videos/football-1.mp4",
//   "/videos/football-2.mp4",
//   "/videos/football-3.mp4",
//   "/Football/Football-06.webp",
//   "/Football/Football-02.webp",
//   "/Football/Football-03.webp",
//   "/Football/Football-04.webp",
//   "/Football/Football-05.webp",
// ];

// interface CharacterSceneProps {
//   onVideoSelect: (url: string) => void;
// }

// const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
//   const { camera } = useThree();
//   const characterRef = useRef<THREE.Group>(null);
//   const groupRef = useRef<THREE.Group>(null);
//   const scrollY = useRef(0);
//   const targetScrollY = useRef(0); // Smooth scrolling target
//   const [showMediaPlanes, setShowMediaPlanes] = useState(false);
//   const dragStartX = useRef(0);
//   const isDragging = useRef(false);

//   const scrollSpeed = 0.001;
//   const rotationSpeed = 0.025; // Character rotation speed
//   const maxScrollY = mediaPaths.length * 1.75; // Maximum scroll distance
//   const dampingFactor = 0.1; // Damping for smooth scrolling

//   // Function to update media planes and character rotation
//   const updateMediaPlanes = () => {
//     if (!groupRef.current) return;

//     // Interpolate scrollY toward targetScrollY
//     scrollY.current += (targetScrollY.current - scrollY.current) * dampingFactor;

//     groupRef.current.children.forEach((child, idx) => {
//       const positionY = scrollY.current - 1.35 + idx * 1.75;
//       const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
//       const positionX = Math.cos(positionY) * radius;
//       const positionZ = -Math.sin(positionY) * radius;
//       const adjustedY = -positionY - 1.5;

//       // Update positions
//       child.position.set(positionX, adjustedY, positionZ);

//       // Make planes face the character
//       if (characterRef.current) {
//         const characterPosition = new THREE.Vector3();
//         characterRef.current.getWorldPosition(characterPosition);

//         const directionToCharacter = new THREE.Vector3()
//           .subVectors(characterPosition, child.position)
//           .normalize();
//         const oppositeDirection = directionToCharacter.multiplyScalar(-1);
//         child.lookAt(child.position.clone().add(oppositeDirection));
//       }
//     });

//     // Update character rotation based on scroll
//     if (characterRef.current) {
//       gsap.to(characterRef.current.rotation, {
//         y: scrollY.current * rotationSpeed,
//         duration: 1,
//         ease: "power2.out",
//       });
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     // Camera entry animation
//     gsap.fromTo(
//       camera.position,
//       { x: -50, z: 35 },
//       {
//         x: 2,
//         y: -5,
//         z: 9.5,
//         duration: 3.5,
//         ease: "power1.out",
//         onComplete: () => setShowMediaPlanes(true),
//       }
//     );

//     // Handle scrolling logic
//     const handleScroll = (delta: number) => {
//       targetScrollY.current += delta * scrollSpeed;

//       // Constrain targetScrollY to valid range
//       if (targetScrollY.current > 0) targetScrollY.current = 0; // Prevent scrolling above the first plane
//       if (targetScrollY.current < -maxScrollY) targetScrollY.current = -maxScrollY; // Prevent scrolling below the last plane
//     };

//     // Event handlers for scrolling and dragging
//     const handleWheel = (event: WheelEvent) => {
//       event.preventDefault();
//       handleScroll(-event.deltaY);
//     };

//     const handleDragStart = (event: MouseEvent | TouchEvent) => {
//       isDragging.current = true;
//       dragStartX.current =
//         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
//     };

//     const handleDragMove = (event: MouseEvent | TouchEvent) => {
//       if (!isDragging.current) return;

//       const currentX =
//         event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
//       const deltaX = currentX - dragStartX.current;

//       dragStartX.current = currentX;

//       // Update targetScrollY based on drag distance
//       targetScrollY.current += deltaX * scrollSpeed;

//       // Constrain targetScrollY to valid range
//       if (targetScrollY.current > 0) targetScrollY.current = 0;
//       if (targetScrollY.current < -maxScrollY) targetScrollY.current = -maxScrollY;
//     };

//     const handleDragEnd = () => {
//       isDragging.current = false;
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     window.addEventListener("mousedown", handleDragStart);
//     window.addEventListener("mousemove", handleDragMove);
//     window.addEventListener("mouseup", handleDragEnd);
//     window.addEventListener("touchstart", handleDragStart, { passive: true });
//     window.addEventListener("touchmove", handleDragMove, { passive: false });
//     window.addEventListener("touchend", handleDragEnd);

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("mousedown", handleDragStart);
//       window.removeEventListener("mousemove", handleDragMove);
//       window.removeEventListener("mouseup", handleDragEnd);
//       window.removeEventListener("touchstart", handleDragStart);
//       window.removeEventListener("touchmove", handleDragMove);
//       window.removeEventListener("touchend", handleDragEnd);
//       document.body.style.overflow = "";
//     };
//   }, [camera]);

//   useEffect(() => {
//     const animate = () => {
//       updateMediaPlanes();
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => cancelAnimationFrame(requestAnimationFrame(animate));
//   }, []);

//   const handleMediaPlaneClick = (path: string) => {
//     if (path.endsWith(".mp4")) {
//       onVideoSelect(path);
//     }
//   };

//   return (
//     <group>
//       <group ref={characterRef}>
//         <Character />
//       </group>

//       {showMediaPlanes && (
//         <group ref={groupRef}>
//           {mediaPaths.map((imagePath, index) => {
//             const angle = index * (Math.PI / 3.5);
//             const x = Math.cos(angle) * 2;
//             const z = Math.sin(angle) * 2;
//             const y = index * 2.5;

//             return (
//               <MediaPlane
//                 key={imagePath}
//                 imagePath={imagePath}
//                 position={[x, y - 3, z]}
//                 onClick={() => handleMediaPlaneClick(imagePath)}
//               />
//             );
//           })}
//         </group>
//       )}
//     </group>
//   );
// };

// export default CharacterScene;


import React, { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import Character from "./character3d";
import MediaPlane from "./mediaPlane";

const mediaPaths: string[] = [
  "/Football/1.webp",
  "/Football/2.webp",
  "/videos/football-1.mp4",
  "/videos/football-2.mp4",
  "/videos/football-3.mp4",
  "/Football/Football-06.webp",
  "/Football/Football-02.webp",
  "/Football/Football-03.webp",
  "/Football/Football-04.webp",
  "/Football/Football-05.webp",
];

interface CharacterSceneProps {
  onVideoSelect: (url: string) => void;
}

const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
  const { camera } = useThree();
  const characterRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);
  const [showMediaPlanes, setShowMediaPlanes] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const baseScrollSpeed = 0.001;
  const dragScrollMultiplier = 0.005; // Adjusted for smoother drag speed
  const rotationSpeed = 0.025; // Character rotation speed
  const maxScrollY = mediaPaths.length * 1.75; // Max scroll distance
  const dampingFactor = 0.1; // Smoothing factor for scroll interpolation

  // Smoothly update positions of media planes and character rotation
  const updateMediaPlanes = () => {
    if (!groupRef.current) return;

    // Interpolate scrollY toward targetScrollY
    scrollY.current += (targetScrollY.current - scrollY.current) * dampingFactor;

    groupRef.current.children.forEach((child, idx) => {
      const positionY = scrollY.current - 1.35 + idx * 1.75;
      const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
      const positionX = Math.cos(positionY) * radius;
      const positionZ = -Math.sin(positionY) * radius;
      const adjustedY = -positionY - 1.5;

      child.position.set(positionX, adjustedY, positionZ);

      if (characterRef.current) {
        const characterPosition = new THREE.Vector3();
        characterRef.current.getWorldPosition(characterPosition);

        const directionToCharacter = new THREE.Vector3()
          .subVectors(characterPosition, child.position)
          .normalize();
        const oppositeDirection = directionToCharacter.multiplyScalar(-1);
        child.lookAt(child.position.clone().add(oppositeDirection));
      }
    });

    if (characterRef.current) {
      gsap.to(characterRef.current.rotation, {
        y: scrollY.current * rotationSpeed,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      camera.position,
      { x: -50, z: 35 },
      {
        x: 2,
        y: -5,
        z: 9.5,
        duration: 3.5,
        ease: "power1.out",
        onComplete: () => setShowMediaPlanes(true),
      }
    );

    const handleScroll = (delta: number) => {
      targetScrollY.current += delta * baseScrollSpeed;
      targetScrollY.current = Math.max(-maxScrollY, Math.min(0, targetScrollY.current));
    };

    const handleDragStart = (event: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      dragStartX.current =
        event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    };

    const handleDragMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const currentX =
        event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      const deltaX = currentX - dragStartX.current;

      dragStartX.current = currentX;

      targetScrollY.current += deltaX * dragScrollMultiplier;
      targetScrollY.current = Math.max(-maxScrollY, Math.min(0, targetScrollY.current));
    };

    const handleDragEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener("wheel", (event) => handleScroll(-event.deltaY), {
      passive: false,
    });
    window.addEventListener("mousedown", handleDragStart);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchstart", handleDragStart, { passive: true });
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("wheel", (event) => handleScroll(-event.deltaY));
      window.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
      document.body.style.overflow = "";
    };
  }, [camera]);

  useEffect(() => {
    const animate = () => {
      updateMediaPlanes();
      requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, []);

  const handleMediaPlaneClick = (path: string) => {
    if (path.endsWith(".mp4")) {
      onVideoSelect(path);
    }
  };

  return (
    <group>
      <group ref={characterRef}>
        <Character />
      </group>

      {showMediaPlanes && (
        <group ref={groupRef}>
          {mediaPaths.map((imagePath, index) => (
            <MediaPlane
              key={imagePath}
              imagePath={imagePath}
              position={[
                Math.cos(index * (Math.PI / 3.5)) * 2,
                index * 2.5 - 3,
                Math.sin(index * (Math.PI / 3.5)) * 2,
              ]}
              onClick={() => handleMediaPlaneClick(imagePath)}
            />
          ))}
        </group>
      )}
    </group>
  );
};

export default CharacterScene;
