import React from "react";
import Navbar from "../companent/navbar";
import ImageCard from "../companent/imagecard";
import Getapi from "../pages/getapi";
import Footer from "../companent/footer";

function search() {
  return (
    <div>
      <Navbar />
      <Getapi />
      <ImageCard />
      <Footer />
    </div>
  );
}

export default search;
