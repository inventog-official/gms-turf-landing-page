// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stars } from '@react-three/drei'
// import CharacterScene from './characterScene'

// const Portfolio: React.FC = () => {
//   return (
//     <div className="w-screen h-screen overflow-y-scroll bg-primary">
//       <Canvas 
//          camera={{ position: [0, 3, 5], fov: 50 }}
//          gl={{antialias: true}}
//       >
//         <color attach="background" args={['#0f150e']} />
//         <fog attach="fog" args={['#0f150e', 5, 0]} />
//         <ambientLight intensity={1} />
//         <directionalLight position={[10, 10, 5]} intensity={3} />
//         <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0f150e" />
//         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
//         <CharacterScene />
//         <OrbitControls 
//           enableZoom={false} 
//           enableRotate={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 3}
//         />
//       </Canvas>
//     </div>
//   )
// }

// export default Portfolio


import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import CharacterScene from './characterScene'

const Portfolio: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    // Add event listener for resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Dynamic camera and star settings based on screen width
  const isMobile = screenWidth <= 768
  const isTablet = screenWidth > 768 && screenWidth <= 1024
  // const isDesktop = screenWidth > 1024

  return (
    <div className="w-screen h-screen overflow-y-scroll bg-primary">
      <Canvas 
         camera={{
           position: isMobile ? [0, 2, 4] : isTablet ? [0, 2.5, 5] : [0, 3, 6], // Adjust camera for mobile, tablet, and desktop
           fov: isMobile ? 60 : isTablet ? 55 : 50, // Adjust FOV for different screen sizes
         }}
         gl={{ antialias: true }}
         style={{ width: '100%', height: '100%' }} // Full screen on all devices
      >
        <color attach="background" args={['#0f150e']} />
        <fog attach="fog" args={['#0f150e', 5, 0]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0f150e" />
        
        {/* Adjust star count for better performance on mobile */}
        <Stars 
          radius={100} 
          depth={50} 
          count={isMobile ? 2000 : isTablet ? 3000 : 5000} // Adjust star count for mobile, tablet, and desktop
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        <CharacterScene />

        <OrbitControls 
          enableZoom={false} 
          enableRotate={!isMobile} // Disable rotation on mobile for easier interaction
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

export default Portfolio
