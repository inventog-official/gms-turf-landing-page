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
