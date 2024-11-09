// src/App.tsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import CharacterScene from './characterScene'

const Portfolio: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-primary">
      <Canvas camera={{ position: [0, 3, 5], fov: 50 }}>
        <color attach="background" args={['#0f150e']} />
        {/* <color attach="background" args={['#1a2f1a']} /> */}
        <fog attach="fog" args={['#0f150e', 5, 0]} />
        {/* <fog attach="fog" args={['#1a2f1a', 5, 1]} /> */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0f150e" />
        {/* <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ade80" /> */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
        <CharacterScene />
        <OrbitControls 
          enableZoom={false} 
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

export default Portfolio
// <div style={{ width: '100vw', height: '100vh', overflowY: 'scroll' }}>
//   <Canvas camera={{ position: [0, 3, 5], fov: 50 }}>
//     <ambientLight intensity={0.8} />
//     <directionalLight position={[10, 10, 5]} intensity={1.5} />
//     <CharacterScene />
//     <OrbitControls enableZoom={false} enableRotate={true}/>
//   </Canvas>
// </div>
