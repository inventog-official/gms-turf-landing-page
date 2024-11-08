// import React, { useRef, useEffect } from 'react'
// import * as THREE from 'three'
// import { gsap } from 'gsap'

// interface MediaPlaneProps {
//   imagePath: string
//   position: [number, number, number]
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null)
//   const texture = new THREE.TextureLoader().load(imagePath)

//   useEffect(() => {
//     // Create a floating effect using GSAP
//     if (ref.current) {
//       // Animate the floating effect using a sine wave for smooth oscillation
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.5, // Adjust height for floating (increase or decrease)
//         repeat: -1, // Loop infinitely
//         yoyo: true, // Reverse the animation to create a "floating" effect
//         duration: 2.5, // Duration of one up-and-down movement (adjust for speed)
//         ease: 'power2.inOut', // Smooth easing
//       })
//     }
//   }, [position])

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(new THREE.Vector3(0, 0, 0)) // Ensure the image faces the camera
//     }
//   }, [position])

//   return (
//     <mesh ref={ref} position={position}>
//       <planeGeometry args={[2.5, 1.5]} />
//       <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
//     </mesh>
//   )
// }

// export default MediaPlane


// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
//   const texture = new THREE.TextureLoader().load(imagePath);
//   const initialRotation = useRef(new THREE.Euler(0, 0, 0));
//   const targetRotation = useRef(new THREE.Euler(0, 0, 0));

//   useEffect(() => {
//     if (ref.current) {
//       // Base floating animation
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.5,
//         repeat: -1,
//         yoyo: true,
//         duration: 2,
//         ease: 'power1.in',
//       });

//       // Subtle rotation animation
//       gsap.to(ref.current.rotation, {
//         z: 0.05,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'power1.inOut',
//       });

//       // Glow effect
//       gsap.to(ref.current.material, {
//         opacity: 1,
//         repeat: -1,
//         yoyo: true,
//         duration: 2,
//         ease: 'power1.inOut',
//       });
//     }
//   }, [position]);

//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       if (ref.current) {
//         // Calculate skew based on scroll speed
//         const skewAmount = Math.min(Math.abs(event.deltaY) * 0.001, 0.15);
//         const direction = event.deltaY > 0 ? 1 : -1;

//         // Apply skew animation
//         gsap.to(ref.current.rotation, {
//           x: direction * skewAmount,
//           duration: 0.5,
//           ease: 'power2.out',
//           onComplete: () => {
//             // Return to original position
//             gsap.to(ref.current!.rotation, {
//               x: initialRotation.current.x,
//               duration: 1,
//               ease: 'elastic.out(1, 0.5)',
//             });
//           },
//         });

//         // Add a slight twist effect
//         gsap.to(ref.current.rotation, {
//           z: direction * skewAmount * 0.5,
//           duration: 5,
//           ease: 'power2.out',
//           onComplete: () => {
//             gsap.to(ref.current!.rotation, {
//               z: initialRotation.current.z,
//               duration: 1,
//               ease: 'elastic.in(1, 0.5)',
//             });
//           },
//         });

//         // Scale effect on scroll
//         gsap.to(ref.current.scale, {
//           x: 1 + Math.abs(skewAmount),
//           y: 1 - Math.abs(skewAmount) * 0.5,
//           duration: 1,
//           ease: 'power2.out',
//           onComplete: () => {
//             gsap.to(ref.current!.scale, {
//               x: 1,
//               y: 1,
//               duration: 1,
//               ease: 'elastic.out(1, 0.5)',
//             });
//           },
//         });
//       }
//     };

//     window.addEventListener('wheel', handleScroll);
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(new THREE.Vector3(-2, 1, 0));
//       initialRotation.current = ref.current.rotation.clone();
//       targetRotation.current = ref.current.rotation.clone();
//     }
//   }, [position]);

//   return (
//     <mesh ref={ref} position={position}>
//       <planeGeometry args={[2.5, 1.5]} />
//       <meshPhysicalMaterial 
//         map={texture} 
//         side={THREE.DoubleSide} 
//         transparent 
//         opacity={0.9}
//         emissiveIntensity={0.9}
//         roughness={0.6}
//         metalness={0.1}
//       />
//     </mesh>
//   );
// };

// export default MediaPlane;


// import React, { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';

// interface MediaPlaneProps {
//   imagePath: string;
//   position: [number, number, number];
// }

// const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
//   const ref = useRef<THREE.Mesh>(null);
// //   const texture = new THREE.TextureLoader().load(imagePath);
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
//       videoElement.play();

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
//       // Smooth up-and-down floating animation
//       gsap.to(ref.current.position, {
//         y: position[1] + 0.3,  // Adjust amplitude of the float
//         repeat: -1,
//         yoyo: true,
//         duration: 3,           // Slow duration for gentle floating effect
//         ease: 'sine.inOut',    // Smooth sine wave for up and down motion
//       });

//       // Subtle rotation animation for a gentle twist effect
//       gsap.to(ref.current.rotation, {
//         z: 0.05,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: 'power1.inOut',
//       });

//       // Glow effect on the material opacity
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
//         // Calculate skew based on scroll speed
//         const skewAmount = Math.min(Math.abs(event.deltaY) * 0.01, 0.15);
//         const direction = event.deltaY > 0 ? 1 : -1;

//         // Skew effect
//         gsap.to(ref.current.rotation, {
//           x: direction * skewAmount,
//           duration: 2.5,
//           ease: 'power1.out',
//           onComplete: () => {
//             gsap.to(ref.current!.rotation, {
//               x: initialRotation.current.x,
//               duration: 2,
//               ease: 'elastic.inOut(1, 0.5)',
//             });
//           },
//         });

//         // Twist effect
//         gsap.to(ref.current.rotation, {
//           z: direction * skewAmount * 6.5,
//           duration: 2.5,
//           ease: 'power2.out',
//           onComplete: () => {
//             gsap.to(ref.current!.rotation, {
//               z: initialRotation.current.z,
//               duration: 0.01,
//               ease: 'elastic.out(1, 0.5)',
//             });
//           },
//         });

//         // Scale effect on scroll
//         gsap.to(ref.current.scale, {
//           x: 1 + Math.abs(skewAmount),
//           y: 1 - Math.abs(skewAmount) * 0.2,
//           duration: 0.5,
//           ease: 'power2.out',
//           onComplete: () => {
//             gsap.to(ref.current!.scale, {
//               x: 1,
//               y: 1,
//               duration: 1,
//               ease: 'elastic.out(1, 0.5)',
//             });
//           },
//         });
//       }
//     };

//     window.addEventListener('wheel', handleScroll);
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.lookAt(new THREE.Vector3(0, 0, 0));
//       initialRotation.current = ref.current.rotation.clone();
//     }
//   }, [position]);

//   return (
//     <mesh ref={ref} position={position}>
//       <planeGeometry args={[3, 1.7]} />
//       <meshPhysicalMaterial 
//         map={texture} 
//         side={THREE.DoubleSide} 
//         // transparent 
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
// import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(isVideo);

  console.log(isPlaying)

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

  const handlePlayClick = () => {
    if (texture instanceof THREE.VideoTexture) {
      const video = texture.image as HTMLVideoElement;
      video.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  useEffect(() => {
    if (ref.current) {
      // Smooth up-and-down floating animation
      gsap.to(ref.current.position, {
        y: position[1] + 0.3,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });

      // Subtle rotation animation for a gentle twist effect
      gsap.to(ref.current.rotation, {
        z: 0.05,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });

      // Glow effect on the material opacity
      gsap.to(ref.current.material, {
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });
    }
  }, [position]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (ref.current) {
        const skewAmount = Math.min(Math.abs(event.deltaY) * 0.01, 0.15);
        const direction = event.deltaY > 0 ? 1 : -1;

        gsap.to(ref.current.rotation, {
          x: direction * skewAmount,
          duration: 2.5,
          ease: 'power1.out',
          onComplete: () => {
            gsap.to(ref.current!.rotation, {
              x: initialRotation.current.x,
              duration: 2,
              ease: 'elastic.inOut(1, 0.5)',
            });
          },
        });

        gsap.to(ref.current.rotation, {
          z: direction * skewAmount * 6.5,
          duration: 2.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(ref.current!.rotation, {
              z: initialRotation.current.z,
              duration: 0.01,
              ease: 'elastic.out(1, 0.5)',
            });
          },
        });

        gsap.to(ref.current.scale, {
          x: 1 + Math.abs(skewAmount),
          y: 1 - Math.abs(skewAmount) * 0.2,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(ref.current!.scale, {
              x: 1,
              y: 1,
              duration: 1,
              ease: 'elastic.out(1, 0.5)',
            });
          },
        });
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.lookAt(new THREE.Vector3(0, 0, 0));
      initialRotation.current = ref.current.rotation.clone();
    }
  }, [position]);

  return (
    <>
      <mesh ref={ref} position={position}>
        <planeGeometry args={[3, 1.7]} />
        <meshPhysicalMaterial 
          map={texture} 
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.9}
          emissiveIntensity={0.9}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {showPlayButton && (
        <Html position={[0, 0, 0.1]} center>
          <button
            onClick={handlePlayClick}
            style={{
              cursor: 'pointer',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '1rem',
              color: 'white',
              fontSize: '1.5rem',
              border: 'none',
            }}
          >
            ▶️
          </button>
        </Html>
      )}
    </>
  );
};

export default MediaPlane;
