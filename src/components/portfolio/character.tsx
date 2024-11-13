import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Character: React.FC = () => {
  const { scene } = useGLTF('/player.glb') as { scene: THREE.Group };
  
  // State to hold dynamic scale and position values
  const [scale, setScale] = useState(0.03);
  const [position, setPosition] = useState([0, -0.03, 0]);

  useEffect(() => {
    // Function to handle window resize and adjust scale and position
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust scale based on the window width
      if (width < 768) {
        setScale(0.03); // Smaller scale for mobile
        setPosition([0, -3.75, 0]); // Adjust position for mobile
      } else if (width < 1024) {
        setScale(0.03); // Medium scale for tablets
        setPosition([0, -3.8, 0]); // Adjust position for tablets
      } else {
        setScale(0.035); // Larger scale for desktop
        setPosition([0, -3.9 , 0]); // Default position for desktop
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

  useEffect(() => {
    // Traverse through each mesh in the model and apply metallic material
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Set up silver material properties
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.metalness = 0.45; // Full metal effect
          child.material.roughness = 0.35; // Low roughness for shiny silver
          child.material.color = new THREE.Color(0xc0c0c0); // Silver color
        }
        
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      rotation={[0, -6.9, 0]} 
    />
  );
};

export default Character;
