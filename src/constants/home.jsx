import React from "react";
import Navbar from "../companent/navbar";
import Hero from "../companent/hero";
import ImageCard from "../companent/imagecard";
import Footer from "../companent/footer";

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageCard />
      <Footer />
    </div>
  );
}

export default home;
