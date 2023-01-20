import React, { useContext } from "react";
import {
  ContainerCheckOut,
  ContainerDualGrid,
  LeftContainer,
  RightContainer,
  Payment,
  TitleYouOrder,
  ItensContainer,
  ContainerImageTitle,
  ContainerImage,
  Image,
  Left,
  TitleProduct,
  Quantity,
  QuantityNumber,
  Value,
  TotalPay,
  ValueNumber,
  TextClear,
} from "./style";
import { CartContext } from "../../hooks/cart";
import { ArrowLeft, ArrowRight } from "../../components/Cart/style";

function Checkout() {
  const {
    productsCart,
    totalPurchase,
    calculateValue,
    calculateTotal,
    removeProductToCart,
    aditionProductToCart,
    checkOut,
  } = useContext(CartContext);

  return (
    <>
      <ContainerCheckOut>
        {productsCart.length > 0 && (
          <ContainerDualGrid>
            <LeftContainer>
              <TitleYouOrder>Your Order</TitleYouOrder>
              <ItensContainer>
                {productsCart.map((product, index) => (
                  <ContainerImageTitle key={index}>
                    <Left>
                      <ContainerImage>
                        <Image src={product.images} />
                      </ContainerImage>
                      <TitleProduct>{product.title}</TitleProduct>
                    </Left>
                    <Quantity>
                      <span>Quant.</span>
                      <QuantityNumber>
                        <ArrowLeft
                          onClick={() => removeProductToCart(product.id)}
                        />
                        {product.qtd}
                        <ArrowRight
                          onClick={() => aditionProductToCart(product.id)}
                        />
                      </QuantityNumber>
                    </Quantity>
                    <Value>
                      <span>Preço a vista no Pix</span>
                      <ValueNumber>
                        $ {calculateValue(product.price * product.qtd)}
                      </ValueNumber>
                    </Value>
                  </ContainerImageTitle>
                ))}
              </ItensContainer>
            </LeftContainer>
            <RightContainer>
              <TotalPay>
                Total: <span>$</span> {calculateTotal(totalPurchase)}
              </TotalPay>
              <Payment to={`/payment`} onClick={checkOut}>
                Ir para o pagamento
              </Payment>
            </RightContainer>
          </ContainerDualGrid>
        )}
        {productsCart < 1 && (
          <>
            <TextClear>Seu carrinho está vazio!!</TextClear>
          </>
        )}
      </ContainerCheckOut>
    </>
  );
}

export default Checkout;
