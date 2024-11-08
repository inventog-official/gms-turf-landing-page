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