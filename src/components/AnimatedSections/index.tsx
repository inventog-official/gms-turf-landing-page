import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCarousel } from "@/hook/useCarousel";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSections = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const headingsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { queryClient } = useCarousel();
  let data = queryClient.getQueryData(["carousels"]) as {
    id: number;
    url: string;
  }[];

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Initial Animation for the First Section
    if (imagesRef.current[0]) {
      gsap.fromTo(
        imagesRef.current[0],
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
      );
    }

    const animateSection = (
      image: HTMLImageElement,
      heading: HTMLElement,
      progress: number
    ) => {
      gsap.to(image, {
        scale: 1,
        opacity: 1,
        yPercent: progress * 100,
        ease: "power3.out",
      });

      gsap.to(heading, {
        opacity: 1 - progress,
        yPercent: progress * 30,
        ease: "power3.out",
      });
    };

    const animateNextImage = (
      nextImage: HTMLImageElement | null,
      progress: number
    ) => {
      if (nextImage) {
        gsap.to(nextImage, {
          opacity: progress,
          scale: 1,
          ease: "power3.out",
        });
      }
    };

    // ScrollTrigger for Existing Sections
    sectionsRef.current.forEach((section, index) => {
      const isLastSection = index === sectionsRef.current.length - 1; // Identify the last section
      if (isLastSection) return; // Skip ScrollTrigger for the last section
    //   if (isLastSection) return; // Skip ScrollTrigger for the last section

      const image = imagesRef.current[index];
      const heading = headingsRef.current[index];
      const nextImage = imagesRef.current[index + 1];
      const nextSection = sectionsRef.current[index + 1];

      if (section && image && heading) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
          snap: {
            snapTo: 1, // Snap to sections
            duration: 1,
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;

            // Adjust z-index dynamically
            if (nextSection && progress > 0.1) {
              nextSection.style.zIndex = "2";
              section.style.zIndex = "1";
            } else {
              nextSection && (nextSection.style.zIndex = "1");
              section.style.zIndex = "2";
            }

            animateSection(image, heading, progress);
            animateNextImage(nextImage, progress);
          },
        });
      }
    });
  }, [data]);

  return (
    <div ref={containerRef} className="relative">
      {data?.map((section, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="hero-section relative h-screen overflow-hidden"
        >
          {/* Background Image */}
          <img
            ref={(el) => (imagesRef.current[index] = el)}
            src={section.url}
            alt={`Section ${index}`}
            className="absolute w-full h-full object-cover z-10"
          />

          {/* Heading */}
          <h2
            ref={(el) => (headingsRef.current[index] = el)}
            className="z-20 text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            Section {section.id}
          </h2>
        </section>
      ))}
    </div>
  );
};

export default AnimatedSections;
