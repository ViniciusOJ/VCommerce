import React, { useContext, useState } from "react";
import {
  Container,
  TitleContainer,
  ProductsContainer,
  Product,
  ProductImg,
  ProductName,
  Stars,
  StarInt,
  Price,
} from "./style";
import ProductsPop from "../ProductsPop/ProductsPop";
import { CartContext } from "../../hooks/cart";

function ProductGrid() {
  const { productsData } = useContext(CartContext);

  const [popVisible, setPopVisible] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const activePop = (id) => {
    setPopVisible(true);
    const items = productsData.find((item) => item.id === id);
    setModalItem(items);
  };

  return (
    <>
      <Container id="products">
        <TitleContainer>All Products</TitleContainer>
        <ProductsContainer>
          {productsData.map((item, index) => (
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
              <Price> $ {item.price.toFixed(2)}</Price>
            </Product>
          ))}
        </ProductsContainer>
      </Container>
      <ProductsPop
        popVisible={popVisible}
        closePop={() => setPopVisible(false)}
        item={modalItem}
      />
    </>
  );
}

export default ProductGrid;
