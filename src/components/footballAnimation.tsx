// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useEffect, useRef } from "react";
// import { Mesh } from "three";

// const Football = () => {
//   const ballRef = useRef<Mesh>(null);
//   const { scene } = useGLTF("./soccer_ball.glb"); // Adjust the path as needed

//   // Animation variables
//   const bounceHeight = 0; // Max height of the bounce
//   const bounceSpeed = 0; // Speed of the bounce
//   let direction = 1; // Direction of the bounce

//   // Animate rotation and bounce
//   useFrame(() => {
//     if (ballRef.current) {
//       // Rotate the ball
//       ballRef.current.rotation.y += 0.01; // Rotate around the Y-axis

//       // Bounce the ball
//       ballRef.current.position.y += direction * bounceSpeed; // Move up/down
//       if (ballRef.current.position.y >= bounceHeight) direction = -1; // Reverse direction at max height
//       if (ballRef.current.position.y <= 0) {
//         direction = 1; // Reset to bounce up again
//         ballRef.current.position.y = 0; // Prevent it from going below ground
//       }
//     }
//   });

//   return <primitive ref={ballRef} object={scene} scale={[2, 2, 2]} />;
// };

// const FootballAnimation = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;

//     const handleContextLost = (event: Event) => {
//       event.preventDefault();
//       console.log("WebGL context lost");
//     };

//     const handleContextRestored = () => {
//       console.log("WebGL context restored");
//       // You may need to re-initialize your scene here
//     };

//     if (canvas) {
//       canvas.addEventListener("webglcontextlost", handleContextLost, false);
//       canvas.addEventListener(
//         "webglcontextrestored",
//         handleContextRestored,
//         false
//       );
//     }

//     return () => {
//       if (canvas) {
//         canvas.removeEventListener("webglcontextlost", handleContextLost);
//         canvas.removeEventListener(
//           "webglcontextrestored",
//           handleContextRestored
//         );
//       }
//     };
//   }, []);
//   return (
//     <div className="h-full w-full bg-transparent">
//       <Canvas>
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={true}/>
//         <ambientLight  intensity={0.3} />
//         <directionalLight isLight intensity={3} />
//         {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
//         {/* Render the Football component */}
//         <Football />
//       </Canvas>
//     </div>
//   );
// };

// // Load the GLTF model in useGLTF
// useGLTF.preload("./soccer_ball.glb"); // Preload the model

// export default FootballAnimation;

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const Football = () => {
  const ballRef = useRef<Mesh>(null);
  const { scene } = useGLTF("./soccer_ball.glb"); // Adjust the path as needed

  // Bounce animation variables
  const bounceHeight =0; // Maximum height for the bounce
  const bounceSpeed = 0; // Speed of the bounce (higher = faster)

  useFrame(({ clock }) => {
    if (ballRef.current) {
      // Rotate the ball around both X and Y axes
      ballRef.current.rotation.y += 0; // Spin on Y-axis
      ballRef.current.rotation.x += 0.005; // Spin on X-axis for realistic effect

      // Apply smooth bounce using sine wave
      const time = clock.getElapsedTime();
      ballRef.current.position.y = Math.abs(Math.sin(time * bounceSpeed)) * bounceHeight;
    }
  });

  return <primitive ref={ballRef} object={scene} scale={[3, 3, 3]} />;
};

const FootballAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-transparent"> {/* Adjust width and height as needed */}
      <Canvas ref={canvasRef}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <Football />
      </Canvas>
    </div>
    // <div className="bg-transparent">
    //   <Canvas ref={canvasRef}>
    //     <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    //     <ambientLight intensity={0.5} />
    //     <directionalLight position={[10, 10, 5]} intensity={1} />
    //     <directionalLight position={[-10, 10, 5]} intensity={1} />
    //     <Football />
    //   </Canvas>
    // </div>
  );
};

// Preload the GLTF model
useGLTF.preload("./soccer_ball.glb");

export default FootballAnimation;


// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import { Mesh } from "three";

// const Football = () => {
//   const ballRef = useRef<Mesh>(null);
//   const { scene } = useGLTF("./soccer_ball.glb"); // Adjust the path as needed

//   useFrame(() => {
//     if (ballRef.current) {
//       // Rotate the ball on a single axis
//       ballRef.current.rotation.x += 0.01; // Rotate only along the Y-axis for a single-axis view
//     }
//   });

//   return <primitive ref={ballRef} object={scene} scale={[3, 3, 3]} />;
// };

// const FootballAnimation = () => {
//   return (
//     <div className="bg-transparent">
//       <Canvas>
//         {/* Disable rotation, panning, and zoom */}
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        
//         {/* Set a fixed ambient and directional light */}
//         <ambientLight intensity={0.3} /> {/* Soft overall light */}
//         <directionalLight
//           position={[2, 2, 2]} // Fixed position for consistent lighting
//           // position={[5, 5, 5]} // Fixed position for consistent lighting
//           intensity={1}
//           castShadow={true} // Ensure shadows remain consistent as ball rotates
//         />
        
//         <Football />
//       </Canvas>
//     </div>
//   );
// };

// // Preload the GLTF model
// useGLTF.preload("./soccer_ball.glb");

// export default FootballAnimation;
