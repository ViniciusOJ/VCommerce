import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import NavMobile from "../../components/NavMobile/NavMobile";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { SliderData } from "../../data/SliderData";

function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const CartStatus = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Navbar activeCartOpen={CartStatus} />
      <NavMobile activeCartOpen={CartStatus} />
      <Hero slides={SliderData} />
      <ProductGrid activePop={() => setPopVisible(true)} />
      <Cart CartOpen={cartOpen} closeCart={CartStatus} />
    </>
  );
}

export default Home;
