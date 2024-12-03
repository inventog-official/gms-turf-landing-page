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
import HomeBanners from "./components/homeBanners";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>GameOnSolution | Sports Turf Solutions in India</title>
        {/* Meta Description */}
        <meta
          name="description"
          content="GameOnSolution offers premium sports turf solutions in India. From design to installation, we specialize in creating world-class synthetic and natural turf for football, cricket, and other sports. Top-notch sports turf building and development services for sports facilities. Contact us for expert turf solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="sports turf builder, turf developer services, synthetic turf installation, sports turf, synthetic turf, pickleball, football turf, cricket turf, cricket nets, Mini cricket stadium, 360 circle turf, Basketball court, Volleyball court, Indoor turf, Multi-sports turf, Badminton turf, sports ground installation, India sports turf solutions, india's no.1 turf builders, no.1 turf developers, turf builders in chennai, turf builders in coimbatore"
        />
        {/* <!-- Author --> */}
        <meta name="author" content="GameOnSolution" />

        {/* <!-- Robots --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph Metadata --> */}
        <meta
          property="og:title"
          content="GameOnSolution | Sports Turf Solutions in India"
        />
        <meta
          property="og:description"
          content="Looking for premium sports turf in India? GameOnSolution specializes in synthetic and natural turf for football, cricket, and other sports."
        />
        <meta property="og:image" content="/images/sports-turf.jpg" />
        <meta property="og:url" content="https://gameonsolution.com" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GameOnSolution | Sports Turf Solutions in India"
        />
        <meta
          name="twitter:description"
          content="GameOnSolution offers synthetic and natural turf solutions for sports fields like football and cricket in India. Get premium quality and expert service."
        />
        <meta name="twitter:image" content="/images/sports-turf.jpg" />
      </Helmet>
      <Router>
        {(isLoading ||
          getNewsFeeds.isLoading ||
          getAllTestimonials.isLoading ||
          getCarousels.isLoading) && (
          <div className="w-screen h-screen bg-primary">
            <Preloader
              isLoading={isLoading}
              onComplete={handleLoadingComplete}
            />
          </div>
        )}
        {!isLoading && (
          <div
            className={`w-screen h-screen bg-primary no-scrollbar select-none`}
          >
            <Navbar />
            <CursorFollower />
            <ScrollProgress />
            <Routes>
              <Route
                path="/"
                element={
                  <div id="home">
                    <div id="parallaxBanners">
                      <HomeBanners />
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
    </>
  );
};

export default App;
