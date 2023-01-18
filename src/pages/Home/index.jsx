import React, { useContext } from "react";
import Cart from "../../components/Cart/Cart";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { SliderData } from "../../data/SliderData";
import { CartContext } from "../../hooks/cart";

function Home() {
  const { cartOpen, CartStatus } = useContext(CartContext);

  return (
    <>
      <Hero slides={SliderData} />
      <ProductGrid activePop={() => setPopVisible(true)} />
      <Cart CartOpen={cartOpen} closeCart={() => CartStatus()} />
    </>
  );
}

export default Home;
