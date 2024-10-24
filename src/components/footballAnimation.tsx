// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import { Mesh } from "three";

// // Component to load and render the soccer ball model
// const Football = () => {
//   const ballRef = useRef<Mesh>(null);

//   // Load the GLB model
//   const { scene } = useGLTF("./soccer_ball.glb"); // Adjust the path as needed

//   // Rotate the ball each frame
//   useFrame(() => {
//     if (ballRef.current) {
//       ballRef.current.rotation.y += 0.01; // Rotate around the Y-axis
//     }
//   });

//   return (
//     <primitive ref={ballRef} object={scene} scale={[2, 2, 2]} />
//   );
// };

// const FootballAnimation = () => {
//   return (
//     <div className="w-full h-screen bg-gray-900">
//       <Canvas>
//         <OrbitControls />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         {/* Render the Football component */}
//         <Football />
//       </Canvas>
//     </div>
//   );
// };

// // Load the GLTF model in useGLTF
// useGLTF.preload(".soccer_ball.glb"); // Preload the model

// export default FootballAnimation;

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Mesh } from "three";

const Football = () => {
  const ballRef = useRef<Mesh>(null);
  const { scene } = useGLTF("./soccer_ball.glb"); // Adjust the path as needed

  // Animation variables
  const bounceHeight = 0; // Max height of the bounce
  const bounceSpeed = 0; // Speed of the bounce
  let direction = 1; // Direction of the bounce

  // Animate rotation and bounce
  useFrame(() => {
    if (ballRef.current) {
      // Rotate the ball
      ballRef.current.rotation.y += 0.01; // Rotate around the Y-axis

      // Bounce the ball
      ballRef.current.position.y += direction * bounceSpeed; // Move up/down
      if (ballRef.current.position.y >= bounceHeight) direction = -1; // Reverse direction at max height
      if (ballRef.current.position.y <= 0) {
        direction = 1; // Reset to bounce up again
        ballRef.current.position.y = 0; // Prevent it from going below ground
      }
    }
  });

  return <primitive ref={ballRef} object={scene} scale={[2, 2, 2]} />;
};

const FootballAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.log("WebGL context lost");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored");
      // You may need to re-initialize your scene here
    };

    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost, false);
      canvas.addEventListener(
        "webglcontextrestored",
        handleContextRestored,
        false
      );
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener(
          "webglcontextrestored",
          handleContextRestored
        );
      }
    };
  }, []);
  return (
    <div className="w-full h-full bg-gray-900">
      <Canvas>
        <OrbitControls />
        <ambientLight  intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Render the Football component */}
        <Football />
      </Canvas>
    </div>
  );
};

// Load the GLTF model in useGLTF
useGLTF.preload("./soccer_ball.glb"); // Preload the model

export default FootballAnimation;
