import React from "react";
import HeroSection from "../components2/HeroSection";
import Trusted from "../components2/Trusted";
import Services from "../components2/Services";
import Footer from "../components2/Footer";
import FeatureProduct from "../components2/FeatureProduct";
const Homepage = () => {
  const data = {
    name:"RX Store",
    images:"Images/Storelogo.png"
  }
  return <>
  <HeroSection myData={data}/>;
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  <Footer/>
  </>
};

export default Homepage;
