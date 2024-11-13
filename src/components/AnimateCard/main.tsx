// AnimatedCard.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
    children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;

        if (card) {
            gsap.fromTo(card, 
                { 
                    opacity: 0, 
                    y: -20, 
                    scale: 1.2 
                }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    duration: 1.5,  // Increased duration to 1.5 seconds
                    ease: "power4.out",  // Changed easing to power4 for a smoother effect
                    scrollTrigger: {
                        trigger: card,
                        start: "top 60%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, []);

    return (
        <div
        //  ref={cardRef} 
         className="card  flex justify-center duration-300 w-full transform translate-y-5">
            {children}
        </div>
    );
};

export default AnimatedCard;