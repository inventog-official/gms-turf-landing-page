import { useState } from "react";
import { Blurhash } from "react-blurhash";
import {
  
  LazyLoadImage,
} from "react-lazy-load-image-component";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  
`;

const StyledBlurhash = styled(Blurhash)`
  z-index: 20;
  position: absolute !important;
  top: 0;
  left: 0;
`;

interface IOptimizedImageProps {
  image: { name: string; blurhash: string };
}

function OptimizedImage(props: IOptimizedImageProps) {
  const { image } = props;

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };


  return (
    <ImageWrapper>
      <LazyLoadImage
        key={image.name}
        src={image.name}
        className="h-full w-full object-cover transition-transform duration-[2000ms] ease-in-out"
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <StyledBlurhash
          hash={image.blurhash}
          width={1500}
          height={800}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        // </LazyLoadComponent>
      )}
    </ImageWrapper>
  );

  // return; // <LazyLoadImage
  //   key={image.name}
  //   src={`http://localhost:9000/${image.name}`}
  //   effect="blur"
  //   height={500}
  //   width={333}
  //   placeholderSrc={`http://localhost:9000/${image.name}`}
  // />
  // <Blurhash
  //   hash={image.blurhash}
  //   width={333}
  //   height={500}
  //   resolutionX={32}
  //   resolutionY={32}
  //   punch={1}
  // />;
}

export { OptimizedImage };
