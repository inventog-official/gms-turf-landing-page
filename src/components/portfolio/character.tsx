// // import React, { useRef, useEffect, useState } from 'react'
// // import { useGLTF } from '@react-three/drei'
// // import { useThree } from '@react-three/fiber'
// // import * as THREE from 'three'
// // import { gsap } from 'gsap'

// // const mediaPaths: string[] = [
// //   '/Football/1.png',
// //   '/Football/2.png',
// //   '/Football/3.png',
// //   '/Football/Football-01.png',
// //   '/Football/Football-02.png',
// //   '/Football/Football-03.png',
// //   '/Football/Football-04.png',
// //   '/Football/Football-05.png',
// // ]

// // interface MediaPlaneProps {
// //   imagePath: string
// //   position: [number, number, number]
// // }

// // const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
// //   const ref = useRef<THREE.Mesh>(null)
// //   const texture = new THREE.TextureLoader().load(imagePath)

// //   // Ensure the plane always faces the character
// //   useEffect(() => {
// //     if (ref.current) {
// //       ref.current.lookAt(new THREE.Vector3(0, 0, 0)) // Ensure each plane faces the character at the center
// //     }
// //   }, [position])

// //   return (
// //     <mesh ref={ref} position={position}>
// //       <planeGeometry args={[2.5, 1.5]} />
// //       <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
// //     </mesh>
// //   )
// // }

// // const Character: React.FC = () => {
// //   const { scene } = useGLTF('charDemoModel.glb') as { scene: THREE.Group }
// //   return <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
// // }

// // const CharacterScene: React.FC = () => {
// //   const { camera } = useThree()
// //   const groupRef = useRef<THREE.Group>(null)
// //   const characterRef = useRef<THREE.Group>(null)
// //   const scrollY = useRef(0)
// //   const [showMediaPlanes, setShowMediaPlanes] = useState(false)

// //   useEffect(() => {
// //     document.body.style.overflow = 'hidden'

// //     gsap.fromTo(camera.position, { z: 35 }, {
// //       z: 10,
// //       duration: 3,
// //       ease: 'power2.inOut',
// //       onComplete: () => setShowMediaPlanes(true)
// //     })

// //     const handleScroll = (event: WheelEvent) => {
// //       scrollY.current += event.deltaY * 0.01

// //       const verticalOffset = 2.5 // Larger vertical step for each image

// //       if (groupRef.current && characterRef.current) {
// //         gsap.to(characterRef.current.rotation, {
// //           y: characterRef.current.rotation.y + event.deltaY * 0.002,
// //           duration: 0.5,
// //           ease: 'power2.out',
// //         })

// //         groupRef.current.children.forEach((child, idx) => {
// //           // Sequential movement for images
// //           const positionY = scrollY.current * verticalOffset + idx * 2.5 // Adjust height for sequential appearance
// //           const positionX = Math.cos(positionY) * 5.5 // X position based on scroll to simulate movement
// //           const positionZ = Math.sin(positionY) * 5.5 // Z position based on scroll for circular effect

// //           gsap.to(child.position, { x: positionX, y: positionY, z: positionZ, duration: 1, ease: 'power2.out' })
// //           child.lookAt(new THREE.Vector3(0, 0, 0)) // Keep each plane facing the character at the center
// //         })
// //       }
// //     }

// //     window.addEventListener('wheel', handleScroll)

// //     return () => {
// //       window.removeEventListener('wheel', handleScroll)
// //       document.body.style.overflow = ''
// //     }
// //   }, [camera])

// //   // Initial positioning for the first image to come in front and follow the spiral.
// //   useEffect(() => {
// //     if (groupRef.current) {
// //       // Animate the media planes into the spiral layout
// //       groupRef.current.children.forEach((child, idx) => {
// //         const initialY = idx * -5 // Starting height for each image
// //         const angle = idx * (Math.PI / 1) // Circular layout

// //         const x = Math.cos(angle) * 3 // X position for circular layout
// //         const z = Math.sin(angle) * 3 // Z position for circular layout

// //         gsap.fromTo(child.position, 
// //           { x: x, y: initialY, z: z + 1.5 }, 
// //           { x: x, y: initialY, z: z + 1.5, duration: 1, ease: 'power2.out' })
// //       })
// //     }
// //   }, [])

// //   return (
// //     <group>
// //       <group ref={characterRef}>
// //         <Character />
// //       </group>

// //       {showMediaPlanes && (
// //         <group ref={groupRef}>
// //           {mediaPaths.map((imagePath, index) => {
// //             const angle = index * (Math.PI / 5) // Circular layout
// //             const x = Math.cos(angle) * 3
// //             const z = Math.sin(angle) * 3
// //             const y = index * 2 // Vertical placement for each image

// //             return (
// //               <MediaPlane
// //                 key={imagePath}
// //                 imagePath={imagePath}
// //                 position={[x, y, z]}
// //               />
// //             )
// //           })}
// //         </group>
// //       )}
// //     </group>
// //   )
// // }

// // export default CharacterScene


// // import React, { useRef, useEffect, useState } from 'react'
// // import { useGLTF } from '@react-three/drei'
// // import { useThree } from '@react-three/fiber'
// // import * as THREE from 'three'
// // import { gsap } from 'gsap'

// // const mediaPaths: string[] = [
// //   '/Football/1.png',
// //   '/Football/2.png',
// //   '/Football/3.png',
// //   '/Football/Football-01.png',
// //   '/Football/Football-02.png',
// //   '/Football/Football-03.png',
// //   '/Football/Football-04.png',
// //   '/Football/Football-05.png',
// // ]

// // interface MediaPlaneProps {
// //   imagePath: string
// //   position: [number, number, number]
// // }

// // const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
// //   const ref = useRef<THREE.Mesh>(null)
// //   const texture = new THREE.TextureLoader().load(imagePath)

// //   useEffect(() => {
// //     if (ref.current) {
// //       ref.current.lookAt(new THREE.Vector3(0, 0, 0))
// //     }
// //   }, [position])

// //   return (
// //     <mesh ref={ref} position={position}>
// //       <planeGeometry args={[2.5, 1.5]} />
// //       <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
// //     </mesh>
// //   )
// // }

// // const Character: React.FC = () => {
// //   const { scene } = useGLTF('charDemoModel.glb') as { scene: THREE.Group }
// //   return <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
// // }

// // const CharacterScene: React.FC = () => {
// //   const { camera } = useThree()
// //   const groupRef = useRef<THREE.Group>(null)
// //   const characterRef = useRef<THREE.Group>(null)
// //   const scrollY = useRef(0)
// //   const [showMediaPlanes, setShowMediaPlanes] = useState(false)

// //   useEffect(() => {
// //     document.body.style.overflow = 'hidden'

// //     gsap.fromTo(camera.position, { z: 35 }, {
// //       z: 10,
// //       duration: 3,
// //       ease: 'power2.inOut',
// //       onComplete: () => setShowMediaPlanes(true),
// //     })

// //     const handleScroll = (event: WheelEvent) => {
// //       scrollY.current += event.deltaY * 0.01
// //       const verticalOffset = 2.5

// //       if (groupRef.current && characterRef.current) {
// //         gsap.to(characterRef.current.rotation, {
// //           y: characterRef.current.rotation.y + event.deltaY * 0.002,
// //           duration: 1,
// //           ease: 'power2.out',
// //         })

// //         groupRef.current.children.forEach((child, idx) => {
// //           const positionY = scrollY.current * verticalOffset + idx * 2.5
// //           const positionX = Math.cos(positionY) * 5.5
// //           const positionZ = Math.sin(positionY) * 5.5

// //           gsap.to(child.position, {
// //             x: positionX,
// //             y: positionY,
// //             z: positionZ,
// //             duration: 1.2,
// //             ease: 'power2.out',
// //             stagger: 0.1,
// //           })
// //           child.lookAt(new THREE.Vector3(0, 0, 0))
// //         })
// //       }
// //     }

// //     window.addEventListener('wheel', handleScroll)

// //     return () => {
// //       window.removeEventListener('wheel', handleScroll)
// //       document.body.style.overflow = ''
// //     }
// //   }, [camera])

// //   useEffect(() => {
// //     if (groupRef.current) {
// //       groupRef.current.children.forEach((child, idx) => {
// //         const initialY = idx * -5
// //         const angle = idx * (Math.PI / 1)

// //         const x = Math.cos(angle) * 3
// //         const z = Math.sin(angle) * 3

// //         gsap.fromTo(
// //           child.position,
// //           { x: x, y: initialY, z: z + 1.5 },
// //           {
// //             x: x,
// //             y: initialY,
// //             z: z + 1.5,
// //             duration: 1.5,
// //             ease: 'power2.out',
// //             stagger: 0.2,
// //           }
// //         )
// //       })
// //     }
// //   }, [])

// //   return (
// //     <group>
// //       <group ref={characterRef}>
// //         <Character />
// //       </group>

// //       {showMediaPlanes && (
// //         <group ref={groupRef}>
// //           {mediaPaths.map((imagePath, index) => {
// //             const angle = index * (Math.PI / 5)
// //             const x = Math.cos(angle) * 3
// //             const z = Math.sin(angle) * 3
// //             const y = index * 2

// //             return (
// //               <MediaPlane
// //                 key={imagePath}
// //                 imagePath={imagePath}
// //                 position={[x, y, z]}
// //               />
// //             )
// //           })}
// //         </group>
// //       )}
// //     </group>
// //   )
// // }

// // export default CharacterScene



// // import { useGLTF } from '@react-three/drei'
// // import * as THREE from 'three'

// // const Character: React.FC = () => {
// //   const { scene } = useGLTF('man_player.glb') as { scene: THREE.Group }
// //   console.log({scene})
// //   // You can traverse the scene to find all the objects
// //   scene.traverse((child) => {
// //     console.log(child.name) // Log the name of each part
// //   })
// //   return <primitive object={scene} scale={3.5} position={[0, -3.5, 0]} />
// // }

// // export default Character


// import { useGLTF } from '@react-three/drei'
// import * as THREE from 'three'
// import { useEffect } from 'react'

// const Character: React.FC = () => {
//   const { scene } = useGLTF('man_player.glb') as { scene: THREE.Group }

//   useEffect(() => {
//     // After inspecting the model, replace 'LeftArm' and 'RightArm' with the actual names
//     const leftArm = scene.getObjectByName('CC_Base_L_Upperarm_050') as THREE.Bone
//     const rightArm = scene.getObjectByName('CC_Base_R_Upperarm_074') as THREE.Bone
//     const leftForeArm = scene.getObjectByName('CC_Base_L_Forearm_051') as THREE.Bone
//     const rightForeArm = scene.getObjectByName('CC_Base_R_Forearm_077') as THREE.Bone

//     if (leftArm && rightArm) {
//       // Adjust the rotation of the arms to move them downwards
//       leftArm.rotation.x = Math.PI / 5.5 // Adjust the angle as needed
//       rightArm.rotation.x = Math.PI / 5.5 // Adjust the angle as needed
//       leftArm.rotation.y = -Math.PI / 9.5 // Adjust the angle as needed
//       rightArm.rotation.y = Math.PI / 9.5 // Adjust the angle as needed
//       leftArm.rotation.z = -Math.PI / 2.5 // Adjust the angle as needed
//       rightArm.rotation.z = Math.PI / 2.5 // Adjust the angle as needed
//       leftForeArm.rotation.y = -Math.PI / 9 // Adjust the angle as needed
//       rightForeArm.rotation.y = Math.PI / 9 // Adjust the angle as needed
//       leftForeArm.rotation.x = Math.PI /9 // Adjust the angle as needed
//       rightForeArm.rotation.x = Math.PI / 9 // Adjust the angle as needed
//     }
//   }, [scene])

//   return <primitive object={scene} scale={3.5} position={[0, -3.5, 0]} />
// }

// export default Character


import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Character: React.FC = () => {
  const { scene } = useGLTF('man_player.glb') as { scene: THREE.Group };
  // const { scene } = useGLTF('https://modelviewer.dev/shared-assets/models/Astronaut.glb') as { scene: THREE.Group };

  // Add some ambient animation to the character
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive 
      object={scene} 
      scale={3.5} 
      position={[0, -3.5, -1]} 
      rotation={[0, Math.PI/9, 0]}
    />
  );
};

export default Character;