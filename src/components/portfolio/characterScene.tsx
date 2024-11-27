import React, { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import Character from "./character";
import MediaPlane from "./mediaPlane";

const mediaPaths: string[] = [
  "/Football/1.jpg",
  "/Football/2.jpg",
  "/videos/football-1.mp4",
  "/videos/football-2.mp4",
  "/videos/football-3.mp4",
  "/Football/Football-06.webp",
  "/Football/Football-02.webp",
  "/Football/Football-03.webp",
  "/Football/Football-04.webp",
  "/Football/Football-05.webp",
  // "/videos/sample.mp4",
];

interface CharacterSceneProps {
  onVideoSelect: (url: string) => void; // Callback for video selection
}

const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
  const { camera } = useThree();
  const characterRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);
  const touchStartY = useRef(0);
  const [showMediaPlanes, setShowMediaPlanes] = useState(false);

  const isMobile = window.innerWidth <= 768; // Adjust for mobile breakpoint
  const scrollSpeed = isMobile ? 0.001 : 0.0005; // Faster on mobile
  const rotationSpeed = isMobile ? 0.05 : 0.025; // Faster on mobile

  const maxScrollY = mediaPaths.length * 1.75; // Adjust based on number of media planes

  useEffect(() => {
    // Disable page scrolling
    document.body.style.overflow = "hidden";

    // Set up smooth camera entry animation
    gsap.fromTo(
      camera.position,
      { x: -50, z: 35 },
      {
        x: 2,
        y: -5,
        z: 9.5,
        duration: 3.5,
        ease: "power1.out",
        onComplete: () => setShowMediaPlanes(true),
      }
    );

    const handleScroll = (delta: number) => {
      scrollY.current += delta * scrollSpeed;

      // Boundary check for scrolling
      if (scrollY.current > 0) {
        scrollY.current = 0; // Prevent scrolling beyond the last plane
      }

      // Apply smooth rotation to character model
      if (characterRef.current) {
        gsap.to(characterRef.current.rotation, {
          y: scrollY.current * rotationSpeed,
          duration: 1, // Smooth transition
          ease: "power2.out",
        });
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default page scroll
      handleScroll(-event.deltaY);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault(); // Prevent default page scroll
      const delta = touchStartY.current - event.touches[0].clientY;
      handleScroll(-delta);
      touchStartY.current = event.touches[0].clientY; // Update starting touch position
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.style.overflow = ""; // Re-enable scrolling
    };
  }, [camera, scrollSpeed, rotationSpeed, maxScrollY]);

  useEffect(() => {
    const animate = () => {
      // Update MediaPlane positions
      if (groupRef.current) {
        groupRef.current.children.forEach((child, idx) => {
          const positionY = scrollY.current - 1.35 + idx * 1.75;
          const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
          const positionX = Math.cos(positionY) * radius;
          const positionZ = -Math.sin(positionY) * radius;
          const adjustedY = -positionY - 1.5;

          gsap.to(child.position, {
            x: positionX,
            y: adjustedY,
            z: positionZ,
            duration: 1.2,
            ease: "power3.out",
          });

          if (characterRef.current) {
            const characterPosition = new THREE.Vector3();
            characterRef.current.getWorldPosition(characterPosition);

            const directionToCharacter = new THREE.Vector3()
              .subVectors(characterPosition, child.position)
              .normalize();
            const oppositeDirection = directionToCharacter.multiplyScalar(-1);
            child.lookAt(child.position.clone().add(oppositeDirection));
          }
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, []);

  const handleMediaPlaneClick = (path: string) => {
    if (path.endsWith(".mp4")) {
      onVideoSelect(path); // Trigger callback with video URL
    }
  };

  return (
    <group>
      <group ref={characterRef}>
        <Character />
      </group>

      {showMediaPlanes && (
        <group ref={groupRef}>
          {mediaPaths.map((imagePath, index) => {
            const angle = index * (Math.PI / 3.5);
            const x = Math.cos(angle) * 2;
            const z = Math.sin(angle) * 2;
            const y = index * 2.5;

            return (
              <MediaPlane
                key={imagePath}
                imagePath={imagePath}
                position={[x, y - 3, z]} // Adjusted Y for layout
                onClick={() => handleMediaPlaneClick(imagePath)} // Click handler
              />
            );
          })}
        </group>
      )}
    </group>
  );
};

export default CharacterScene;
