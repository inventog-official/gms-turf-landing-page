import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface MediaPlaneProps {
  imagePath: string;
  position: [number, number, number];
}

const MediaPlane: React.FC<MediaPlaneProps> = ({ imagePath, position }) => {
  const ref = useRef<THREE.Mesh>(null);
  const overlayRef = useRef<THREE.Mesh>(null);
  const initialRotation = useRef(new THREE.Euler(0, 0, 0));
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const isVideo = imagePath.endsWith('.mp4');
  const [isPlaying, setIsPlaying] = useState(false);

  const [planeSize, setPlaneSize] = useState<[number, number]>([3, 1.7]);
  const [planePosition, setPlanePosition] = useState<[number, number, number]>(position);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setPlaneSize([2, 1.2]);
        setPlanePosition([0, -1, -1]);
      } else if (width < 1024) {
        setPlaneSize([2.5, 1.4]);
        setPlanePosition([0, -2, -1]);
      } else {
        setPlaneSize([3, 1.7]);
        setPlanePosition([0, -3.5, -1]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [position]);

  useEffect(() => {
    let videoElement: HTMLVideoElement | null = null;

    if (isVideo) {
      videoElement = document.createElement('video');
      videoElement.src = imagePath;
      videoElement.loop = true;
      videoElement.muted = true;
      const videoTexture = new THREE.VideoTexture(videoElement);
      setTexture(videoTexture);

      if (isPlaying) videoElement.play();
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
  }, [imagePath, isPlaying]);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        y: planePosition[1] + 0.3,
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
  }, [planePosition]);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (ref.current) {
        if (event.deltaY < 0) {
          const skewAmount = Math.min(Math.abs(event.deltaY) * 9.9, 0.25);

          gsap.to(ref.current.rotation, {
            x: -skewAmount * 100,
            z: skewAmount * 100,
            duration: 9.8,
            ease: 'power1.out',
            onComplete: () => {
              gsap.to(ref.current!.rotation, {
                x: initialRotation.current.x,
                z: -initialRotation.current.z,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)',
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

      const geometry = ref.current.geometry;
      const positions = geometry.attributes.position.array;

      gsap.to({}, {
        duration: 2,
        repeat: -1,
        onUpdate: () => {
          const time = Date.now() * 0.005;
          for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            positions[i + 2] = Math.sin(x * 1 + time) * 0.05;
          }
          geometry.attributes.position.needsUpdate = true;
        }
      });
    }
  }, [planePosition]);

  const handlePlayToggle = () => {
    if (isVideo) {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <mesh ref={ref} position={planePosition} onClick={handlePlayToggle}>
      <planeGeometry args={[planeSize[0], planeSize[1], 50, 10]} />
      <meshPhysicalMaterial
        map={texture}
        side={THREE.DoubleSide}
        opacity={0.9}
        emissiveIntensity={0.9}
        roughness={0.6}
        metalness={0.1}
      />
      
      {/* Conditional Play Button Overlay */}
      {isVideo && !isPlaying && (
        <mesh ref={overlayRef} position={[0, 0, 0.07]}>
          <circleGeometry args={[0.2, 3]} />
          <meshBasicMaterial color="white" opacity={0.9} />
        </mesh>
      )}
    </mesh>
  );
};

export default MediaPlane;