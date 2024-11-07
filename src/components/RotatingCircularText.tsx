import React from "react";
import FootballAnimation from "./footballAnimation";

const RotatingCircularText: React.FC = () => {
  return (
    <div className="w-screen h-screen grid place-items-center relative">
      {/* Replace the static image with FootballAnimation component */}
      <div className="absolute ">
        <FootballAnimation /> {/* Football model replaces the static icon */}
      </div>
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        className="animate-rotate-circle"
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 100, 100
              m -75, 0
              a 75, 75 0 1, 0 150, 0
              a 75, 75 0 1, 0 -150, 0
            "
          />
        </defs>
        <text className="font-kanit font-semibold tracking-wide uppercase text-[15px] fill-current text-gray-900">
          <textPath xlinkHref="#circlePath">
            Drag to Rotate ◉ Drag to Rotate ◉ Drag to Rotate ◉
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default RotatingCircularText;
