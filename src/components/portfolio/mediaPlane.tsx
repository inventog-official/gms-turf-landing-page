import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface MediaPlaneProps {
  imagePath: string;
  position: [number, number, number];
}

const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
  const ref = useRef<THREE.Mesh>(null);
  const initialRotation = useRef(new THREE.Euler(0, 0, 0));
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const isVideo = imagePath.endsWith('.mp4');

  useEffect(() => {
    let videoElement: HTMLVideoElement | null = null;

    if (isVideo) {
      videoElement = document.createElement('video');
      videoElement.src = imagePath;
      videoElement.loop = true;
      videoElement.muted = true;

      const videoTexture = new THREE.VideoTexture(videoElement);
      setTexture(videoTexture);
    } else {
      const imageTexture = new THREE.TextureLoader().load(imagePath);
      setTexture(imageTexture);
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.remove();
      }
    };
  }, [imagePath]);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        y: position[1] + 0.3,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });

      gsap.to(ref.current.rotation, {
        z: 0.05,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });

      gsap.to(ref.current.material, {
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });
    }
  }, [position]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (ref.current) {
        // Only apply skew when scrolling up (event.deltaY < 0)
        if (event.deltaY < 0) {
          const skewAmount = Math.min(Math.abs(event.deltaY) * 9.9, 0.25); // Adjust skew factor as needed

          gsap.to(ref.current.rotation, {
            x: -skewAmount * 100, // Skew on X axis (top-left corner)
            z: skewAmount * 100, // Skew on Z axis (bottom-right corner)
            duration: 9.8, // Duration of the skew effect
            ease: 'power1.out', // Smooth ease for skewing
            onComplete: () => {
              // After skew, apply an elastic return to normal shape
              gsap.to(ref.current!.rotation, {
                x: initialRotation.current.x,
                z: -initialRotation.current.z,
                duration: 1.5, // Duration for elastic return
                ease: 'elastic.out(1, 0.5)', // Elastic easing to return to normal
              });
            },
          });
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.lookAt(new THREE.Vector3(0, 0, 0));
      initialRotation.current = ref.current.rotation.clone();

      // Adding flag animation using GSAP and sine wave transformation
      const geometry = ref.current.geometry;
      const positions = geometry.attributes.position.array;

      gsap.to({}, {
        duration: 2,
        repeat: -1,
        onUpdate: () => {
          const time = Date.now() * 0.005;
          for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            positions[i + 2] = Math.sin(x * 1 + time) * 0.05; // Wave effect in Z-axis
          }
          geometry.attributes.position.needsUpdate = true;
        }
      });
    }
  }, [position]);

  return (
    <>
      <mesh ref={ref} position={position}>
        <planeGeometry args={[3, 1.7, 50, 10]} />
        <meshPhysicalMaterial 
          map={texture} 
          side={THREE.DoubleSide} 
          opacity={0.9}
          emissiveIntensity={0.9}
          roughness={0.6}
          metalness={0.1}
          color={new THREE.Color(0.2, 0.2, 0.2)} // Gray color for grayscale effect
          emissive={new THREE.Color(0.1, 0.1, 0.1)} // Slight emissive for black and white look
        />
      </mesh>
    </>
  );
};

export default MediaPlane;
