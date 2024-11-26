import React,{useState} from 'react';
import { useInView } from 'react-intersection-observer';
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Blurhash } from "react-blurhash";
import {
  
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";



const StyledBlurhash = styled(Blurhash)<{ isVisible: boolean }>`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
  height:100vh
  width:100vw
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;


type CardProps = {
  imageUrl: string;
  blurHash:string
};
interface Props {
  images:string
  blurHash:string
  index:number
}

const Card: React.FC<CardProps> = ({ imageUrl,  blurHash}) => {
  const { ref, inView } = useInView({
    delay:1,
    triggerOnce: false,  // Keeps re-triggering as we scroll
    threshold: 0.2,      // Trigger when 50% of the image is in view
  });

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    // console.log("Started: ");
    setLoadStarted(true);
  };
// console.log(imageUrl,"its coming")
  return (
    <section
      ref={ref}
      className={`h-screen flex items-center justify-center transition-transform duration-[2000ms] ease-in-out ${
        inView ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
      }`}
    >
      <div className="h-full relative w-full  top-0">
      <div className="absolute inset-0 bg-black/20 shadow-inner z-10 pointer-events-none"></div>
      {/* <LazyLoadImage
          src={imageUrl}
          effect="blur"
          className='h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out  '
        //   wrapperProps={{
        //     style: {transitionDelay: "0.1s"},
        // }}
        /> */}
        
<LazyLoadImage
        src={imageUrl}
        className="h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out"
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}

      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <StyledBlurhash
        className='transition-transform duration-[2000ms] ease-in-out'
          hash={blurHash}
          width={1400}
          height={1200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          isVisible={!isLoaded}

        />
        // </LazyLoadComponent>
      )}
        {/* <OptimizedImage image={{
          name: imageUrl,
          blurhash: 'LBAKjiWB8yt6uPaen3oz$TofTcWC'
        }}/> */}
        {/* <img
          src={imageUrl}
          alt="Nature scene"
          className="h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out"
        /> */}
      </div>
    </section>
  );
};

const VerticalCardSlider: React.FC<Props> = ({images,index,blurHash}) => {
 

  return (
    <div className="h-screen absolute   w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
        <Card key={index} imageUrl={images} blurHash={blurHash} />
    
   
    </div>
  );
};

export default VerticalCardSlider;
// NGBWPd^ODPNHI.Na^n-UkPR+M|Na4?NLxsoboLjF
// N44MUytQ4UMyq8kUHce:y,oymtV[8wV[.kt7R7oM
// N68qWq?H019YO+SRxwRjbXofoLa{01E1?@-q#ss*
// N64{6YV^4Uo[.7rxWEbGoen*RkX74Vow?[RUIBXM
// N54L{vRQ8z%fpFMyQ;kBtiWBi|kB4VtQ.jIBVux[