import React, { useContext } from "react";
import { ContainerCheckOut } from "./style";
import { CartContext } from "../../hooks/cart";

function Checkout() {
  const { productsCart, totalPurchase } = useContext(CartContext);

  console.log(productsCart);

  return (
    <>
      <ContainerCheckOut>
        <h1>Checkout</h1>
        <span>{totalPurchase}</span>
      </ContainerCheckOut>
      <h1 style={{ color: "red" }}>OLA MUNDO</h1>
    </>
  );
}

export default Checkout;
