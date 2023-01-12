import React, { useState } from "react";
import { productsData } from "../../data/ProductsData";
import {
  Container,
  TitleContainer,
  Product,
  ProductsContainer,
  ProductImg,
  ProductName,
  Price,
  ProductPopUp,
  PopUpContainer,
  PopCase,
  Close,
  Star,
  StarInt,
  Stars,
  Descrip,
  Value,
  Buttons,
  BuyP,
  CartP,
} from "./style";

function Products() {
  const [pop, setPop] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [modalItem, setModalItem] = useState({});

  const activePop = (id) => {
    setPop(true);
    const items = products.find((item) => item.id === id);
    setModalItem(items);
  };

  const closePop = () => {
    setPop(false);
  };

  return (
    <>
      <Container>
        <TitleContainer>All Products</TitleContainer>
        <ProductsContainer>
          {products.map((item, index) => (
            <Product id={index} key={index} onClick={() => activePop(item.id)}>
              <ProductImg src={item.images} />
              <ProductName>{item.title}</ProductName>
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
              <Price> $ {item.price}</Price>
            </Product>
          ))}
        </ProductsContainer>
      </Container>
      <ProductPopUp popVisible={pop}>
        <PopUpContainer>
          <PopCase>
            <Close onClick={closePop} />
            <ProductImg src={modalItem.images} />
            <h3>{modalItem.title}</h3>
            <Stars>
                {[...Array(Math.round(modalItem.rating > 0 ? modalItem.rating : 1))].map(
                  (_, key) => (
                    <div key={key}>
                      <StarInt />
                    </div>
                  )
                )}
                <span>{Math.round(modalItem.rating > 0 ? modalItem.rating : 1)}</span>
              </Stars>
            <Descrip>{modalItem.description}</Descrip>
            <Value>$ {modalItem.price}</Value>
            <Buttons>
              <BuyP>Buy Now</BuyP>
              <CartP>Add to cart</CartP>
            </Buttons>
          </PopCase>
        </PopUpContainer>
      </ProductPopUp>
    </>
  );
}

export default Products;
