import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center animate-zoomIn justify-center min-h-screen bg-primary overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="./bg-image.webp"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Inner Shadow Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
        style={{
          backgroundImage: `./bg-image.webp`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 200px 250px -100px rgba(0, 0, 0, 0.9)",
        }}
      />

      {/* Text */}
      <h1 className="relative text-5xl font-extrabold text-white font-anton z-10">
        Welcome to Our Site
      </h1>
    </section>
  );
};

export default Home;
