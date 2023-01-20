import React, { useContext } from "react";
import {
  ProductPopUp,
  PopUpContainer,
  PopCase,
  Close,
  ProductImg,
  Stars,
  StarInt,
  Descrip,
  Value,
  Buttons,
  BuyP,
  CartP,
} from "./style";
import { CartContext } from "../../hooks/cart";

function ProductsPop({ popVisible, closePop, item }) {
  const { addProductToCart, calculateValue } = useContext(CartContext);

  return (
    <ProductPopUp popVisible={popVisible}>
      <PopUpContainer>
        <PopCase>
          <Close onClick={closePop} />
          <ProductImg src={item.images} />
          <h3>{item.title}</h3>
          <Stars>
            {[...Array(Math.round(item.rating > 0 ? item.rating : 1))].map(
              (_, key) => (
                <div key={key}>
                  <StarInt />
                </div>
              )
            )}
            <span>{Math.round(item.rating > 0 ? item.rating : 1)}</span>
          </Stars>
          <Descrip>{item.description}</Descrip>
          <Value>$ {calculateValue(item?.price)}</Value>
          <Buttons>
            <BuyP>Buy Now</BuyP>
            <CartP onClick={() => addProductToCart(item)}>Add to cart</CartP>
          </Buttons>
        </PopCase>
      </PopUpContainer>
    </ProductPopUp>
  );
}

export default ProductsPop;
