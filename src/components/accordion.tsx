import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDown } from 'react-icons/ai';

type AccordionProps = {
  title: string;
  images: string[];
};

const Accordion: React.FC<AccordionProps> = ({ title, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define grid classes based on the number of images
  const gridClasses = images.length === 3 ? 'grid-cols-3' : 'grid-cols-4';

  // Define span classes for images based on the number of images
  const imageClasses = images.length === 3
    ? [
        'col-span-1 row-span-1 h-[18rem]',
        'col-span-1 row-span-1 h-[18rem]',
        'col-span-1 row-span-1 h-[18rem]',
      ]
    : [
        'col-span-1 row-span-2 h-full', 
        'col-span-1 row-span-1 h-full', 
        'col-span-2 row-span-2 h-full', 
        'col-span-1 row-span-1 h-full', 
        'col-span-1 row-span-1 h-32',
        'col-span-1 row-span-1 h-32', 
        'col-span-1 row-span-1 h-32', 
        'col-span-1 row-span-1 h-32', 
      ];

  return (
    <div className="border border-yellow-600 p-6 rounded-lg">
      <button
        className="w-full py-4 flex justify-between items-center text-lg font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          <AiOutlineDown />
        </motion.span>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className={`grid ${gridClasses} gap-4 p-2`}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${imageClasses[index % imageClasses.length]}`}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-fill"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
