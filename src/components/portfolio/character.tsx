// import React from 'react';
// import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three';

// const Character: React.FC = () => {
//   const { scene } = useGLTF('man_player.glb') as { scene: THREE.Group };
//   // const { scene } = useGLTF('https://modelviewer.dev/shared-assets/models/Astronaut.glb') as { scene: THREE.Group };

//   // Add some ambient animation to the character
//   scene.traverse((child) => {
//     if (child instanceof THREE.Mesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   return (
//     <primitive 
//       object={scene} 
//       scale={3.5} 
//       position={[0, -3.5, -1]} 
//       rotation={[0, Math.PI/9, 0]}
//     />
//   );
// };

// export default Character;

import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Character: React.FC = () => {
  const { scene } = useGLTF('/man_player.glb') as { scene: THREE.Group };
  
  // State to hold dynamic scale and position values
  const [scale, setScale] = useState(3.5);
  const [position, setPosition] = useState([0, -3.5, -1]);

  useEffect(() => {
    // Function to handle window resize and adjust scale and position
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust scale based on the window width
      if (width < 768) {
        setScale(2.5); // Smaller scale for mobile
        setPosition([0, -2, -1]); // Adjust position for mobile
      } else if (width < 1024) {
        setScale(3); // Medium scale for tablets
        setPosition([0, -3, -1]); // Adjust position for tablets
      } else {
        setScale(3.5); // Larger scale for desktop
        setPosition([0, -3.5, -1]); // Default position for desktop
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
      scale={scale} 
      position={position} 
      rotation={[0, Math.PI/9, 0]} 
    />
  );
};

export default Character;
