import React, { useState, useEffect } from "react";

interface PreloaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, onComplete }) => {
  const [firstSectionComplete, setFirstSectionComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    if (isLoading) {
      // Animate each word
      let wordTimeouts: NodeJS.Timeout[] = [];
      for (let i = 0; i < 2; i++) {
        wordTimeouts.push(
          setTimeout(() => {
            setCurrentWord(i + 1);
          }, i * 1000)
        );
      }

      // Complete first section and start second animation
      setTimeout(() => {
        setFirstSectionComplete(true);
      }, 2000);

      return () => wordTimeouts.forEach(clearTimeout);
    } else {
      setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 1000);
    }
  }, [isLoading]);

  if (isHidden) return null;

  return (
    <div
      className={`top-0 left-0 w-full h-full z-[99999999] bg-gradient-to-b from-primary to-primary/90 duration-500 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative h-full">
        {/* First section: each word appears with blur effect */}
        {!firstSectionComplete && (
          <div className="absolute flex items-center justify-center h-full w-full pb-8 md:pb-16 z-10">
            {["Sports", "Infrastructure"].map((word, index) => (
              <p
                key={index}
                className={`text-4xl md:text-6xl uppercase font-primary mr-4 transition-all duration-700 ${
                  currentWord >= index + 1
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur-[10px] translate-y-10"
                } ${
                  index === 1 ? "text-secondary" : "text-white" // Apply a different color for the first word
                }`}
              >
                {word}
              </p>
            ))}
          </div>
        )}

        {/* Second section: Game On Solutions reveal animation */}
        {firstSectionComplete && (
          <div className="absolute flex items-center justify-center h-full w-full z-10 pb-8 md:pb-16">
            <div className="relative px-8 md:px-[30px] overflow-hidden">
              {/* Sliding box that reveals the text */}
              <div className="absolute h-full w-full bg-secondary z-10 p-5 animate-slideReveal"></div>
              {/* <div className="absolute h-full w-full bg-[#CD512F] z-10 p-5 animate-slideReveal"></div> */}

              {/* Text with reveal effect */}
              <p className="relative text-white text-4xl md:text-6xl uppercase font-primary animate-revealText">
                <span className="text-secondary">GameOn</span> Solutions
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
