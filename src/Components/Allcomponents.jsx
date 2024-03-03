import React from "react";
import Logobar from "./Logobar";
import Navbar from "./Navbar";
import Bottombar from "./Bottombar";
import Carousal from "./Carousal";
import Environment from "./Environment";
import Category from "./Category";
import BestSeller from "./BestSeller";
import Testimonial from "./Testimonial";
import Timeless from "./Timeless";
import Footer from "./Footer ";

const Allcomponents = () => {
  return (
    <div>
      <Logobar />
      <Navbar />
      <Carousal />
      <Environment />
      <Category />
      <BestSeller />
      <Testimonial />
      <Timeless />
      <Footer />
      <Bottombar />
    </div>
  );
};

export default Allcomponents;
