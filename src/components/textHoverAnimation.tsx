// // TextAnimation.tsx
// import { motion } from "framer-motion";
// import React from "react";

// interface TextAnimationProps {
//   text: string;
// }

// const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
//   return (
//     <div className="flex space-x-1">
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           className="inline-block"
//           whileHover={{
//             scale: 1.5, // Increase the size on hover
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 300,
//             damping: 15,
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// export default TextAnimation;

// TextAnimation.tsx
import { motion } from "framer-motion";
import React from "react";

interface TextHoverAnimationProps {
  text: string;
}

const TextHoverAnimation: React.FC<TextHoverAnimationProps> = ({ text }) => {
  return (
    <div className="flex space-x-1">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block origin-bottom" // Set the transform origin to the bottom
          whileHover={{
            scaleY: 1.3, // Increase only the top height on hover
          }}
          transition={{
            type: "smooth",
            stiffness: 300,
            damping: 15,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextHoverAnimation;
