import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Home from "./components/home";
import Services from "./components/services";
import Contact from "./components/contact";
import CursorFollower from "./components/customCursor";
import Preloader from "./components/preLoading";
import PageWrapper from "./components/pageWrapper";
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
import Carousel from "./common/carousel";
import CircleMiniCricketStadiumTurf from "./components/CircleMiniCricketStadiumTurf";
import PickleTurf from "./components/products/PickleTurf";
import CircleTurf from "./components/products/circleMiniCriketStadium";
import { useNewsFeed } from "./hook/useNewsFeed";
import { useCarousel } from "./hook/useCarousel";
import { useTestimonials } from "./hook/useTestimonials";
import Portfolio from "./components/portfolio";

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
        <div className={`w-screen h-screen  bg-primary no-scrollbar`}>
          <Navbar />
          <CursorFollower />
          <ScrollProgress />
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <div id="home">
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                    {/* <PageWrapper>
                      <div id="iconsWithContent">
                        <IconsWithContent />
                      </div>
                    </PageWrapper> */}
                    <PageWrapper>
                      <div id="CircleMiniCricketStadiumTurf">
                        <CircleMiniCricketStadiumTurf />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="aboutUs">
                        <AboutUs />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="services">
                        <Services />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="whyUs">
                        <WhyUs />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="contact">
                        <Contact />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="homeNewsFeed">
                        <HomeNewsFeed />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="reviews">
                        <ReviewsSection />
                      </div>
                    </PageWrapper>
                    <PageWrapper>
                      <div id="footer">
                        <Footer />
                      </div>
                    </PageWrapper>
                  </div>
                </PageWrapper>
              }
            />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News_Page />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/get-in-touch" element={<ContactsPage />} />
            <Route path="/demo" element={<Carousel />} />
            {/* products pages */}
            CircleTurf
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
