import React, { useEffect, useState } from "react";
import Navbar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import CursorFollower from "./components/customCursor";
import Preloader from "./components/preLoading";
const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulate a loading duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} onComplete={handleLoadingComplete} />
      {!isLoading && (
        <div className={`w-screen h-screen bg-primary`}>
          <Navbar />
          <CursorFollower />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
