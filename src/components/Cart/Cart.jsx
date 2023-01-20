import React, { useContext } from "react";
import { CartContext } from "../../hooks/cart";
import {
  ContainerCart,
  ItemClose,
  ItemContainer,
  ItemImagemContainer,
  ItemImagem,
  ItemInfos,
  ItemTitle,
  QuantityC,
  ArrowLeft,
  ArrowRight,
  ItemQuantity,
  ItemValue,
  ContainerConfirmed,
  Confirmed,
  ValueTotal,
  TitleCart,
  TitleCartItem,
  ClearCart,
  ItemClearCart,
} from "./style";

function Cart({ CartOpen, closeCart }) {
  const {
    productsCart,
    removeProductToCart,
    aditionProductToCart,
    clearCart,
    calculateTotal,
    checkOut,
    calculateValue,
  } = useContext(CartContext);

  return (
    <ContainerCart CartOpen={CartOpen}>
      <TitleCart>
        Carrinho <TitleCartItem />
      </TitleCart>
      <ItemClose onClick={closeCart} />

      {productsCart.length > 0 && (
        <>
          <ClearCart onClick={() => clearCart()}>
            Clear Cart <ItemClearCart />
          </ClearCart>
          {productsCart.map((item, index) => (
            <ItemContainer key={index}>
              <ItemImagemContainer>
                <ItemImagem src={item.images} />
              </ItemImagemContainer>
              <ItemInfos>
                <ItemTitle>{item.title}</ItemTitle>
                <QuantityC>
                  <ArrowLeft onClick={() => removeProductToCart(item.id)} />
                  <ItemQuantity>{item.qtd}</ItemQuantity>
                  <ArrowRight onClick={() => aditionProductToCart(item.id)} />
                </QuantityC>
                <ItemValue>$ {calculateValue(item.price * item.qtd)}</ItemValue>
              </ItemInfos>
            </ItemContainer>
          ))}
          <ValueTotal>
            Sub Total: <span>$</span> {calculateTotal()}
          </ValueTotal>
          <ContainerConfirmed to={`/checkout`} onClick={() => checkOut()}>
            <Confirmed /> Finalizar Pedido
          </ContainerConfirmed>
        </>
      )}
      {productsCart.length < 1 && (
        <>
          <p> O seu carrinho está vazio!!</p>
        </>
      )}
    </ContainerCart>
  );
}

export default Cart;
