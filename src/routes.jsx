import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./components/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import NavMobile from "./components/NavMobile/NavMobile";

import { CartContext } from "./hooks/cart";
import { useContext } from "react";

function RoutesApp() {
  const { CartStatus } = useContext(CartContext);

  return (
    <BrowserRouter>
      <Navbar activeCartOpen={() => CartStatus()} />
      <NavMobile activeCartOpen={() => CartStatus()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
