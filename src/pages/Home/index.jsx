import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NavMobile from "../../components/NavMobile/NavMobile";
import Products from "../../components/Products/Products";
import { SliderData } from "../../data/SliderData";

function Home() {
  return (
    <>
      <Navbar />
      <NavMobile />
      <Hero slides={SliderData} />
      <Products />
    </>
  );
}

export default Home;
