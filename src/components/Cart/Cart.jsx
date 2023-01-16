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
} from "./style";

function Cart({ CartOpen, closeCart }) {
  const { productsCart, removeProductToCart, aditionProductToCart } =
    useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    let options = {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    productsCart.forEach((item) => {
      total += item.price * item.qtd;
    });
    return new Intl.NumberFormat("pt-BR", options).format(total);
  };

  return (
    <ContainerCart CartOpen={CartOpen}>
      <TitleCart>
        Carrinho <TitleCartItem />
      </TitleCart>
      <ItemClose onClick={closeCart} />

      {productsCart.length > 0 && (
        <>
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
                <ItemValue>$ {(item.price * item.qtd).toFixed(2)}</ItemValue>
              </ItemInfos>
            </ItemContainer>
          ))}
          <ValueTotal>
            Sub Total: <span>$</span> {calculateTotal()}
          </ValueTotal>
          <ContainerConfirmed>
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
