import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import NavMobile from "./components/NavMobile/NavMobile";
import Payment from "./pages/Payment/Payment";

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
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
