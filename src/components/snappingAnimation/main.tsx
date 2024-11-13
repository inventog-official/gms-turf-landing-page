import React from 'react';
import { useInView } from 'react-intersection-observer';

type CardProps = {
  imageUrl: string;
};
interface Props {
  images:string
  index:number
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  const { ref, inView } = useInView({
    delay:1,
    triggerOnce: false,  // Keeps re-triggering as we scroll
    threshold: 0.2,      // Trigger when 50% of the image is in view
  });

  return (
    <section
      ref={ref}
      className={`h-screen flex items-center justify-center transition-transform duration-[2000ms] ease-in-out ${
        inView ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
      }`}
    >
      <div className="h-full relative w-full  top-0">
      <div className="absolute inset-0 bg-black/20 shadow-inner z-10 pointer-events-none"></div>

        <img
          src={imageUrl}
          alt="Nature scene"
          className="h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out"
        />
      </div>
    </section>
  );
};

const VerticalCardSlider: React.FC<Props> = ({images,index}) => {
 

  return (
    <div className="h-screen absolute   w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
        <Card key={index} imageUrl={images} />
    
   
    </div>
  );
};

export default VerticalCardSlider;
