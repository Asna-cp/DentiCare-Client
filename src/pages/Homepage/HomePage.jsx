import React from "react";
import Navbar from "../navbar";
import Banner from "./banner";
import Testimonial from "./testimonial";
import Cards from "./cards";
import Footer from "../footer";
import Doctors from "../Doctors/doctors";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Doctors /> */}
      <Cards />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
