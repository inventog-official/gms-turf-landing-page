// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
//   const initialRotation = useRef(new THREE.Euler(0, 0, 0));
//   const [texture, setTexture] = useState<THREE.Texture | null>(null);
//   const isVideo = imagePath.endsWith('.mp4');

//   useEffect(() => {
//     let videoElement: HTMLVideoElement | null = null;

//     if (isVideo) {
//       videoElement = document.createElement('video');
//       videoElement.src = imagePath;
//       videoElement.loop = true;
//       videoElement.muted = true;

//       const videoTexture = new THREE.VideoTexture(videoElement);
//       setTexture(videoTexture);
//     } else {
//       const imageTexture = new THREE.TextureLoader().load(imagePath);
//       setTexture(imageTexture);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.pause();
//         videoElement.remove();
//       }
//     };
//   }, [imagePath]);

//   useEffect(() => {
//     if (ref.current) {
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.3,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'sine.inOut',
//       });

//       gsap.to(ref.current.rotation, {
//         z: 0.05,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'power1.inOut',
//       });

//       gsap.to(ref.current.material, {
//         opacity: 0.9,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'power1.inOut',
//       });
//     }
//   }, [position]);

//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       if (ref.current) {
//         // Only apply skew when scrolling up (event.deltaY < 0)
//         if (event.deltaY < 0) {
//           const skewAmount = Math.min(Math.abs(event.deltaY) * 9.9, 0.25); // Adjust skew factor as needed

//           gsap.to(ref.current.rotation, {
//             x: -skewAmount * 100, // Skew on X axis (top-left corner)
//             z: skewAmount * 100, // Skew on Z axis (bottom-right corner)
//             duration: 9.8, // Duration of the skew effect
//             ease: 'power1.out', // Smooth ease for skewing
//             onComplete: () => {
//               // After skew, apply an elastic return to normal shape
//               gsap.to(ref.current!.rotation, {
//                 x: initialRotation.current.x,
//                 z: -initialRotation.current.z,
//                 duration: 1.5, // Duration for elastic return
//                 ease: 'elastic.out(1, 0.5)', // Elastic easing to return to normal
//               });
//             },
//           });
//         }
//       }
//     };

//     window.addEventListener('wheel', handleScroll);
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(new THREE.Vector3(0, 0, 0));
//       initialRotation.current = ref.current.rotation.clone();

//       // Adding flag animation using GSAP and sine wave transformation
//       const geometry = ref.current.geometry;
//       const positions = geometry.attributes.position.array;

//       gsap.to({}, {
//         duration: 2,
//         repeat: -1,
//         onUpdate: () => {
//           const time = Date.now() * 0.005;
//           for (let i = 0; i < positions.length; i += 3) {
//             const x = positions[i];
//             positions[i + 2] = Math.sin(x * 1 + time) * 0.05; // Wave effect in Z-axis
//           }
//           geometry.attributes.position.needsUpdate = true;
//         }
//       });
//     }
//   }, [position]);

//   return (
//     <>
//       <mesh ref={ref} position={position}>
//         <planeGeometry args={[3, 1.7, 50, 10]} />
//         <meshPhysicalMaterial
//           map={texture}
//           side={THREE.DoubleSide}
//           opacity={0.9}
//           emissiveIntensity={0.9}
//           roughness={0.6}
//           metalness={0.1}
//           color={new THREE.Color(0.2, 0.2, 0.2)} // Gray color for grayscale effect
//           emissive={new THREE.Color(0.1, 0.1, 0.1)} // Slight emissive for black and white look
//         />
//       </mesh>
//     </>
//   );
// };

// export default MediaPlane;

// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import { useFrame, useThree } from '@react-three/fiber';

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
//   const overlayRef = useRef<THREE.Mesh>(null);
//   const initialRotation = useRef(new THREE.Euler(0, 0, 0));
//   const [texture, setTexture] = useState<THREE.Texture | null>(null);
//   const isVideo = imagePath.endsWith('.mp4');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const { raycaster, camera, mouse } = useThree();

//   useEffect(() => {
//     let videoElement: HTMLVideoElement | null = null;

//     if (isVideo) {
//       videoElement = document.createElement('video');
//       videoElement.src = imagePath;
//       videoElement.loop = true;
//       videoElement.muted = true;

//       const videoTexture = new THREE.VideoTexture(videoElement);
//       setTexture(videoTexture);
//       videoRef.current = videoElement;
//     } else {
//       const imageTexture = new THREE.TextureLoader().load(imagePath);
//       setTexture(imageTexture);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.pause();
//         videoElement.remove();
//       }
//     };
//   }, [imagePath]);

//   const handlePlayClick = () => {
//     if (videoRef.current && !isPlaying) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   useEffect(() => {
//     if (ref.current) {
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.3,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'sine.inOut',
//       });
//     }
//   }, [position]);

//   // Raycast and detect click on play button
//   useFrame(() => {
//     if (overlayRef.current && !isPlaying) {
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObject(overlayRef.current);
//       if (intersects.length > 0) {
//         overlayRef.current.scale.set(1.1, 1.1, 1.1); // Slightly enlarge on hover
//         window.addEventListener('click', handlePlayClick);
//       } else {
//         overlayRef.current.scale.set(1, 1, 1); // Reset scale if not hovering
//         window.removeEventListener('click', handlePlayClick);
//       }
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       {/* Main plane for image or video */}
//       <planeGeometry args={[3, 1.7, 50, 10]} />
//       <meshPhysicalMaterial
//         map={texture}
//         side={THREE.DoubleSide}
//         opacity={0.9}
//         emissiveIntensity={0.9}
//         roughness={0.6}
//         metalness={0.1}
//         // color={new THREE.Color(0.2, 0.2, 0.2)}
//         // emissive={new THREE.Color(0.1, 0.1, 0.1)}
//       />

//       {/* Conditional Play Button Overlay */}
//       {isVideo && !isPlaying && (
//         <mesh ref={overlayRef} position={[0, 0, 0.1]}>
//           <circleGeometry args={[0.25, 3]} />
//           <meshBasicMaterial color="white" opacity={0.5} />
//         </mesh>
//       )}
//     </mesh>
//   );
// };

// export default MediaPlane;

// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import { useFrame, useThree } from '@react-three/fiber';

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
//   const overlayRef = useRef<THREE.Mesh>(null);
//   const [texture, setTexture] = useState<THREE.Texture | null>(null);
//   const isVideo = imagePath.endsWith('.mp4');
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const { raycaster, camera, mouse } = useThree();

//   useEffect(() => {
//     let videoElement: HTMLVideoElement | null = null;

//     if (isVideo) {
//       videoElement = document.createElement('video');
//       videoElement.src = imagePath;
//       videoElement.loop = true;
//       videoElement.muted = true;

//       const videoTexture = new THREE.VideoTexture(videoElement);
//       setTexture(videoTexture);
//       videoRef.current = videoElement;
//     } else {
//       const imageTexture = new THREE.TextureLoader().load(imagePath);
//       setTexture(imageTexture);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.pause();
//         videoElement.remove();
//       }
//     };
//   }, [imagePath]);

//   const handlePlayClick = () => {
//     if (videoRef.current && !isPlaying) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   useEffect(() => {
//     if (ref.current) {
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.3,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'sine.inOut',
//       });
//     }
//   }, [position]);

//   // Raycast and detect click on play button
//   useFrame(() => {
//     if (overlayRef.current && !isPlaying) {
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObject(overlayRef.current);

//       if (intersects.length > 0) {
//         overlayRef.current.scale.set(1.1, 1.1, 1.1); // Slightly enlarge on hover
//         document.body.style.cursor = 'pointer';

//         // Handle play click on hover
//         if (!isPlaying) {
//           document.addEventListener('click', handlePlayClick);
//         }
//       } else {
//         overlayRef.current.scale.set(1, 1, 1); // Reset scale if not hovering
//         document.body.style.cursor = 'default';
//         document.removeEventListener('click', handlePlayClick);
//       }
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       {/* Main plane for image or video */}
//       <planeGeometry args={[3, 1.7, 50, 10]} />
//       <meshPhysicalMaterial
//         map={texture}
//         side={THREE.DoubleSide}
//         opacity={0.9}
//         emissiveIntensity={0.9}
//         roughness={0.6}
//         metalness={0.1}
//       />

//       {/* Conditional Play Button Overlay */}
//       {isVideo && !isPlaying && (
//         <mesh ref={overlayRef} position={[0, 0, -0.2]}> {/* Moved slightly forward */}
//           <circleGeometry args={[0.25, 32]} />
//           <meshBasicMaterial color="white" opacity={0.9} />
//         </mesh>
//       )}
//     </mesh>
//   );
// };

// export default MediaPlane;

// import React, { useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import { useFrame, useThree } from "@react-three/fiber";

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
//   const overlayRef = useRef<THREE.Mesh>(null);
//   const [texture, setTexture] = useState<THREE.Texture | null>(null);
//   const isVideo = imagePath.endsWith(".mp4");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const { raycaster, camera, mouse } = useThree();

//   useEffect(() => {
//     let videoElement: HTMLVideoElement | null = null;

//     if (isVideo) {
//       videoElement = document.createElement("video");
//       videoElement.src = imagePath;
//       videoElement.loop = true;
//       videoElement.muted = true;

//       const videoTexture = new THREE.VideoTexture(videoElement);
//       setTexture(videoTexture);
//       videoRef.current = videoElement;
//     } else {
//       const imageTexture = new THREE.TextureLoader().load(imagePath);
//       setTexture(imageTexture);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.pause();
//         videoElement.remove();
//       }
//     };
//   }, [imagePath]);

//   const handlePlayClick = () => {
//     if (videoRef.current && !isPlaying) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   useEffect(() => {
//     if (ref.current) {
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.3,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: "sine.inOut",
//       });
//     }
//   }, [position]);

//   // Raycast and detect click on play button
//   useFrame(() => {
//     if (overlayRef.current && !isPlaying) {
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObject(overlayRef.current);

//       if (intersects.length > 0) {
//         overlayRef.current.scale.set(1.1, 1.1, 1.1); // Slightly enlarge on hover
//         document.body.style.cursor = "pointer";

//         // Handle play click on hover
//         if (!isPlaying) {
//           document.addEventListener("click", handlePlayClick);
//         }
//       } else {
//         overlayRef.current.scale.set(1, 1, 1); // Reset scale if not hovering
//         document.body.style.cursor = "default";
//         document.removeEventListener("click", handlePlayClick);
//       }
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       {/* Conditional Play Button Overlay */}
//       {isVideo && !isPlaying && (
//         <mesh ref={overlayRef} position={[0, 0, 0.1]}>
//           {" "}
//           {/* Adjust z position to 0.1 */}
//           <meshBasicMaterial color="white" opacity={0.9} />
//           <circleGeometry args={[0.25, 32]} />
//         </mesh>
//       )}
//       {/* Main plane for image or video */}
//       <planeGeometry args={[3, 1.7, 50, 10]} />
//       <meshPhysicalMaterial
//         map={texture}
//         side={THREE.DoubleSide}
//         opacity={0.9}
//         emissiveIntensity={0.9}
//         roughness={0.6}
//         metalness={0.1}
//       />
//     </mesh>
//   );
// };

// export default MediaPlane;



import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface MediaPlaneProps {
  imagePath: string;
  position: [number, number, number];
}

const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
  const ref = useRef<THREE.Mesh>(null);
  const initialRotation = useRef(new THREE.Euler(0, 0, 0));
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const isVideo = imagePath.endsWith('.mp4');

  // State for responsive scale and position
  const [planeSize, setPlaneSize] = useState<[number, number]>([3, 1.7]);
  const [planePosition, setPlanePosition] = useState<[number, number, number]>(position);

  // Adjust size and position based on window size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // const height = window.innerHeight;

      // Adjust the plane size and position based on the screen size
      if (width < 768) {
        setPlaneSize([2, 1.2]); // Smaller size for mobile
        setPlanePosition([0, -1, -1]); // Adjust position for mobile
      } else if (width < 1024) {
        setPlaneSize([2.5, 1.4]); // Medium size for tablets
        setPlanePosition([0, -2, -1]); // Adjust position for tablets
      } else {
        setPlaneSize([3, 1.7]); // Larger size for desktop
        setPlanePosition([0, -3.5, -1]); // Default position for desktop
      }
    };

    // Call handleResize on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [position]);

  useEffect(() => {
    let videoElement: HTMLVideoElement | null = null;

    if (isVideo) {
      videoElement = document.createElement('video');
      videoElement.src = imagePath;
      videoElement.loop = true;
      videoElement.muted = true;

      const videoTexture = new THREE.VideoTexture(videoElement);
      setTexture(videoTexture);
    } else {
      const imageTexture = new THREE.TextureLoader().load(imagePath);
      setTexture(imageTexture);
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.remove();
      }
    };
  }, [imagePath]);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        y: planePosition[1] + 0.3,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });

      gsap.to(ref.current.rotation, {
        z: 0.05,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });

      gsap.to(ref.current.material, {
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });
    }
  }, [planePosition]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (ref.current) {
        // Only apply skew when scrolling up (event.deltaY < 0)
        if (event.deltaY < 0) {
          const skewAmount = Math.min(Math.abs(event.deltaY) * 9.9, 0.25); // Adjust skew factor as needed

          gsap.to(ref.current.rotation, {
            x: -skewAmount * 100, // Skew on X axis (top-left corner)
            z: skewAmount * 100, // Skew on Z axis (bottom-right corner)
            duration: 9.8, // Duration of the skew effect
            ease: 'power1.out', // Smooth ease for skewing
            onComplete: () => {
              // After skew, apply an elastic return to normal shape
              gsap.to(ref.current!.rotation, {
                x: initialRotation.current.x,
                z: -initialRotation.current.z,
                duration: 1.5, // Duration for elastic return
                ease: 'elastic.out(1, 0.5)', // Elastic easing to return to normal
              });
            },
          });
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.lookAt(new THREE.Vector3(0, 0, 0));
      initialRotation.current = ref.current.rotation.clone();

      // Adding flag animation using GSAP and sine wave transformation
      const geometry = ref.current.geometry;
      const positions = geometry.attributes.position.array;

      gsap.to({}, {
        duration: 2,
        repeat: -1,
        onUpdate: () => {
          const time = Date.now() * 0.005;
          for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            positions[i + 2] = Math.sin(x * 1 + time) * 0.05; // Wave effect in Z-axis
          }
          geometry.attributes.position.needsUpdate = true;
        }
      });
    }
  }, [planePosition]);

  return (
    <mesh ref={ref} position={planePosition}>
      <planeGeometry args={[planeSize[0], planeSize[1], 50, 10]} />
      <meshPhysicalMaterial
        map={texture}
        side={THREE.DoubleSide}
        opacity={0.9}
        emissiveIntensity={0.9}
        roughness={0.6}
        metalness={0.1}
        color={new THREE.Color(0.2, 0.2, 0.2)} // Gray color for grayscale effect
        emissive={new THREE.Color(0.1, 0.1, 0.1)} // Slight emissive for black and white look
      />
    </mesh>
  );
};

export default MediaPlane;
