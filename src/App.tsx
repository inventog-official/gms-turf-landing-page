import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Services from "./components/services";
import Contact from "./components/contact";
import CursorFollower from "./components/customCursor";
import Preloader from "./components/preLoading";
import ScrollProgress from "./components/scrollProgress";
import AboutUs from "./components/aboutUs";
import WhyUs from "./components/whyUs";
import ReviewsSection from "./components/reviewSection";
import { Footer } from "./components/footer";
import News_Page from "./components/newsPage";
import Testimonials from "./components/testimonials";
import HomeNewsFeed from "./components/homeNewsFeed";
import { ContactsPage } from "./components/contactsPage";
import FootballTurf from "./components/products/football";
import CricketTurf from "./components/products/cricket";
import VolleyballTurf from "./components/products/volleyball";
import MultiSportsTurf from "./components/products/multisports";
import IndoorTurf from "./components/products/indoor";
import CircleMiniCricketStadiumTurf from "./components/CircleMiniCricketStadiumTurf";
import PickleTurf from "./components/products/PickleTurf";
import CircleTurf from "./components/products/circleMiniCriketStadium";
import { useNewsFeed } from "./hook/useNewsFeed";
import { useCarousel } from "./hook/useCarousel";
import { useTestimonials } from "./hook/useTestimonials";
import Portfolio from "./components/portfolio";
import InstagramEmbed from "./components/instagram";
import CircleTurf360 from "./components/products/360CircleTurf";
import BadmintonCourt from "./components/products/BatimonCourt";
import BasketBallCourt from "./components/products/basketBall";
import IconsWithContent from "./components/iconsWithContent";
import AnimatedSections from "./components/AnimatedSections";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { getNewsFeeds } = useNewsFeed();
  const { getCarousels } = useCarousel();
  const { getAllTestimonials } = useTestimonials();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {(isLoading ||
        getNewsFeeds.isLoading ||
        getAllTestimonials.isLoading ||
        getCarousels.isLoading) && (
        <div className="w-screen h-screen bg-primary">
          <Preloader isLoading={isLoading} onComplete={handleLoadingComplete} />
        </div>
      )}
      {!isLoading && (
        <div className={`w-screen h-screen bg-primary no-scrollbar select-none`}>
          <Navbar />
          <CursorFollower />
          <ScrollProgress />
          <Routes>
            <Route
              path="/"
              element={
                <div id="home">
                  {/* <Home /> */}
                  <div id="parallaxImages">
                    <AnimatedSections />
                  </div>
                  <div className="lg:hidden" id="iconsWithContent">
                    <IconsWithContent />
                  </div>
                  <div id="CircleMiniCricketStadiumTurf">
                    <CircleMiniCricketStadiumTurf />
                  </div>
                  <div id="aboutUs">
                    <AboutUs />
                  </div>
                  <div id="services">
                    <Services />
                  </div>
                  <div id="whyUs">
                    <WhyUs />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                  <div id="homeNewsFeed">
                    <HomeNewsFeed />
                  </div>
                  <div id="reviews">
                    <ReviewsSection />
                  </div>

                  <div id="instagram" className="">
                    <InstagramEmbed />
                  </div>

                  <div id="footer">
                    <Footer />
                  </div>
                </div>
              }
            />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News_Page />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/get-in-touch" element={<ContactsPage />} />
            <Route path="/demo" element={<AnimatedSections />} />

            {/* products pages */}
            <Route path="/360-circle-turf" element={<CircleTurf360 />} />
            <Route path="/basket-ball" element={<BasketBallCourt />} />
            <Route path="/badminton-court" element={<BadmintonCourt />} />
            <Route path="/pickle-turf" element={<PickleTurf />} />
            <Route path="/circle-turf" element={<CircleTurf />} />
            <Route path="/football-turf" element={<FootballTurf />} />
            <Route path="/cricket-turf" element={<CricketTurf />} />
            <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
            <Route path="/indoor-turf" element={<IndoorTurf />} />
            <Route path="/volleyball-turf" element={<VolleyballTurf />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
