import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const GrassGround: React.FC = () => {
  const { scene } = useGLTF('/grass.glb') as { scene: THREE.Group };
  
  // State to hold dynamic scale and position values
  const [scale, setScale] = useState(3.5);
  const [position, setPosition] = useState([0, -0.03, 0]);

  useEffect(() => {
    // Function to handle window resize and adjust scale and position
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust scale based on the window width
      if (width < 768) {
        setScale(0.5); // Smaller scale for mobile
        setPosition([-0.5, -3.8, 0]); // Adjust position for mobile
      } else if (width < 1024) {
        setScale(0.55); // Medium scale for tablets
        setPosition([0, -3.8, 0]); // Adjust position for tablets
      } else {
        setScale(0.7); // Larger scale for desktop
        setPosition([-0.02, -4 , 0]); // Default position for desktop
      }
    };

    // Call the resize handler on initial load and window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      rotation={[0, -9, 0]} 
    />
  );
};

export default GrassGround;


// import React, { useEffect, useState } from 'react';
// import { useLoader } from '@react-three/fiber';
// import * as THREE from 'three';
// import { OBJLoader } from 'three-stdlib';

// const GrassGround: React.FC = () => {
//   // Load the .obj file using OBJLoader
//   const scene = useLoader(OBJLoader, '/grass.obj') as THREE.Group;

//   // State to hold dynamic scale and position values
//   const [scale, setScale] = useState(3.5);
//   const [position, setPosition] = useState([0, -0.03, 0]);

//   useEffect(() => {
//     // Traverse through the model and apply colors based on mesh names or other properties
//     scene.traverse((child) => {
//         if (child instanceof THREE.Mesh) {
//           if (child.name.toLowerCase().includes("grass")) {
//             // Apply green color to the grass part
//             child.material = new THREE.MeshStandardMaterial({
//               color: '#4f5e34', // Forest green
//               roughness: 0.8,
//               metalness: 0.1,
//             });
//           } else if (child.name.toLowerCase().includes("circle")) {
//             // Apply silver color to the circle part
//             child.material = new THREE.MeshStandardMaterial({
//               color: '#ded9d9', // Silver color
//             //   color: '#C0C0C0', // Silver color
//               roughness: 0.5,
//               metalness: 0.7,
//             });
//           }
//         }
//       });
//     // Apply a grass-like color to each mesh in the .obj model
//     // scene.traverse((child) => {
//     //     if (child instanceof THREE.Mesh) {
//     //       child.material = new THREE.MeshStandardMaterial({ color: '#4f5e34' }); // Grass green color
//     //     //   child.material = new THREE.MeshStandardMaterial({ color: '#61753c' }); // Grass green color
//     //     //   child.material = new THREE.MeshStandardMaterial({ color: '#228B22' }); // Grass green color
//     //     }
//     //   });
//     // Function to handle window resize and adjust scale and position
//     const handleResize = () => {
//       const width = window.innerWidth;

//       // Adjust scale based on the window width
//       if (width < 768) {
//         setScale(0.5); // Smaller scale for mobile
//         setPosition([-0.5, -3.8, 0]); // Adjust position for mobile
//       } else if (width < 1024) {
//         setScale(0.55); // Medium scale for tablets
//         setPosition([0, -3.8, 0]); // Adjust position for tablets
//       } else {
//         setScale(0.03); // Larger scale for desktop
//         setPosition([0, -3.95, 0]); // Default position for desktop
//       }
//     };

//     // Call the resize handler on initial load and window resize
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // Clean up event listener on unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <primitive 
//       object={scene} 
//       scale={scale} 
//       position={position} 
//       rotation={[-1.5, 0, 0]} 
//     />
//   );
// };

// export default GrassGround;
