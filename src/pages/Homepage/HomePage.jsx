import React from "react";
import Navbar from "../navbar";
import Banner from "./banner";
import Testimonial from "./testimonial";
import Cards from "./cards";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Testimonial />
    </>
  );
};

export default HomePage;
