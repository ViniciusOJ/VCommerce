import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCheckOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;

  h1 {
    text-transform: uppercase;
  }
`;

export const TextClear = styled.h1`
  color: #4f4f4f;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const ContainerDualGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: #ebebeb;
`;

export const LeftContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleYouOrder = styled.h4`
  color: #444;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
`;
export const ItensContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const ContainerImageTitle = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid #444;
  border-radius: 0.65rem;
  margin: 0.45rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-around;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
  padding: 1rem;
  background-color: #fff;

  @media (max-width: 650px) {
    flex-direction: column;
    height: 22rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;

  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  width: 7rem;
  height: 7rem;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const TitleProduct = styled.h5`
  text-transform: uppercase;
  font-weight: bold;
  color: #161616;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  gap: 0.65rem;
  width: 100%;
  span {
    color: #161616;
  }
`;
export const QuantityNumber = styled.span`
  color: #010101 !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0.65rem;
  width: 100%;

  span {
    color: #161616;
    word-wrap: break-word;
    font-size: 0.8rem;
  }
`;

export const ValueNumber = styled.span`
  color: #e73353 !important;
  font-weight: 600;
`;

export const RightContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  flex-direction: column;
  gap: 0.4rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 2rem 0;
`;

export const TotalPay = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  border: 1px solid #444;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #000;
  gap: 0.5rem;

  span {
    color: #2dc26e;
  }
`;

export const Payment = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #2dc26e;
  color: #2dc26e;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #2dc26e;
  }

  :hover {
    transform: scale(1.01);
  }
`;
