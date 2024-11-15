import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CharacterScene from "./characterScene";

const Portfolio: React.FC = () => {
  useEffect(() => {
    const openDevTools = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        // Trigger the built-in browser shortcut to open DevTools
        e.preventDefault();
        window.open("about:blank", "_blank");
      }
    };
    window.addEventListener("keydown", openDevTools);

    return () => {
      window.removeEventListener("keydown", openDevTools);
    };
  }, []);
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-primary relative">
      <Canvas
        camera={{ position: [0, 3, 5], fov: 50 }}
        gl={{ antialias: true }}
        style={{ pointerEvents: "auto", touchAction: "auto" }}
      >
        <color attach="background" args={["#0f150e"]} />
        <fog attach="fog" args={["#0f150e", 5, 0]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0f150e" />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
        <CharacterScene />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      {/* Transparent overlay for inspection */}
      <div
        className="absolute inset-0 z-10 cursor-default"
        style={{ background: "rgba(0, 0, 0, 0)", pointerEvents: "auto" }}
      />
    </div>
  );
};

export default Portfolio;
