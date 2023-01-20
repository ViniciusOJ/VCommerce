import React, { useContext } from "react";
import { CartContext } from "../../hooks/cart";
import {
  CPayment,
  CCGeral,
  BottomContainer,
  ColLeft,
  TitleSection,
  InputBox,
  InputBoxCards,
  TextSpan,
  Input,
  Flex,
  Form,
  ContainerForm,
  OptionImg,
  InputBtn,
} from "./style";
import cardOptions from "../../images/card_img.png";
import { TotalPay } from "../Checkout/style";

function Payment() {
  const { productsCart, totalPurchase, calculateTotal, setHiddenCart } =
    useContext(CartContext);

  return (
    <CPayment>
      <CCGeral>
        <ContainerForm>
          <Form action="">
            <BottomContainer>
              <ColLeft>
                <TitleSection>endereço de cobrança</TitleSection>
                <InputBox>
                  <TextSpan>nome completo:</TextSpan>
                  <Input type="text" placeholder="nome completo" />
                </InputBox>
                <InputBox>
                  <TextSpan>email:</TextSpan>
                  <Input type="email" placeholder="email" />
                </InputBox>
                <InputBox>
                  <TextSpan>endereço:</TextSpan>
                  <Input type="text" placeholder="endereço" />
                </InputBox>
                <InputBox>
                  <TextSpan>cidade:</TextSpan>
                  <Input type="text" placeholder="cidade" />
                </InputBox>
                <Flex>
                  <InputBox>
                    <TextSpan>estado:</TextSpan>
                    <Input type="text" placeholder="estado" />
                  </InputBox>
                  <InputBox>
                    <TextSpan>código postal :</TextSpan>
                    <Input type="text" placeholder="123 456" />
                  </InputBox>
                </Flex>
              </ColLeft>

              <ColLeft>
                <TitleSection>forma de pagamento</TitleSection>

                <InputBoxCards>
                  <TextSpan>Cartões aceitos :</TextSpan>
                  <OptionImg src={cardOptions} alt="options card" />
                </InputBoxCards>

                <InputBox>
                  <TextSpan>nome impresso no cartão :</TextSpan>
                  <Input type="text" placeholder="nome no cartão" />
                </InputBox>

                <InputBox>
                  <TextSpan>número do cartão :</TextSpan>
                  <Input type="number" placeholder="número do cartão" />
                </InputBox>
                <InputBox>
                  <TextSpan>mês de validade: </TextSpan>
                  <Input type="text" placeholder="mês de validade" />
                </InputBox>
                <Flex>
                  <InputBox>
                    <TextSpan>ano de validade:</TextSpan>
                    <Input type="number" placeholder="ano de validade" />
                  </InputBox>
                  <InputBox>
                    <TextSpan>CVV :</TextSpan>
                    <Input type="text" placeholder="código de verificação" />
                  </InputBox>
                </Flex>
              </ColLeft>
            </BottomContainer>

            <TotalPay style={{ marginTop: "1rem" }}>
              Total: <span>$</span> {calculateTotal(totalPurchase)}
            </TotalPay>
            <InputBtn
              type="submit"
              value="proceed to checkout"
              className="submit-btn"
            />
          </Form>
        </ContainerForm>
      </CCGeral>
    </CPayment>
  );
}

export default Payment;
