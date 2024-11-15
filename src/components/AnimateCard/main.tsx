// AnimatedCard.tsx
import React, {  useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
    children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
    const cardRef = useRef<HTMLDivElement>(null);


    const {scrollYProgress,} =useScroll({
        target:cardRef,
        offset:['0 3',"0.9 1"]
    })

    const scaleProgress =  useTransform(scrollYProgress,[0,1],[0.5,1])
    // useEffect(() => {
    //     const card = cardRef.current;

    //     if (card) {
    //         gsap.fromTo(card, 
    //             { 
    //                 opacity: 0, 
    //                 y: -20, 
    //                 scale: 1.2 
    //             }, 
    //             { 
    //                 opacity: 1, 
    //                 y: 0, 
    //                 scale: 1, 
    //                 duration: 0.8,  // Increased duration to 1.5 seconds
    //                 ease: "power4.out",  // Changed easing to power4 for a smoother effect
    //                 scrollTrigger: {
    //                     trigger: card,
    //                     start: "top 60%",
    //                     toggleActions: "play none none reverse",
    //                 }
    //             }
    //         );
    //     }
    // }, []);

    return (
        <motion.div
        style={{
            scale:scaleProgress,
            opacity:scrollYProgress
        }}
         ref={cardRef} 
         className="card  flex justify-center duration-800 w-full transform translate-y-5">
            {children}
        </motion.div>
    );
};

export default AnimatedCard;