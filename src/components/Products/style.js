import styled, { css } from "styled-components";
import { IoMdClose } from "react-icons/io";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

export const TitleContainer = styled.h3`
  font-size: 2rem;
  color: #444;
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-align: center;
  font-family: "Poppins", sans-serif;
  text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.3);
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const Product = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
  outline: 0.1rem solid #ccc;
  outline-offset: -1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  transition: all 0.2s linear;

  &:hover {
    outline: 0.2rem solid #222;
    outline-offset: 0;

    h3 {
      color: #fd1e53;
    }
  }
`;

export const ProductImg = styled.img`
  height: 9rem;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    height: 6.5rem;
  }
`;
export const ProductName = styled.h3`
  padding: 0.5rem 0;
  font-size: 1.5rem;
  color: #444;
  transition: all 0.2s linear;
`;
export const Price = styled.div`
  font-size: 1rem;
  color: #444;
  font-family: "Poppins", sans-serif;
`;

export const ProductPopUp = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ popVisible }) => (popVisible ? "block" : "none")};
  opacity: ${({ popVisible }) => (popVisible ? "1" : "0")};
  z-index: 4;
`;

export const PopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
export const PopCase = styled.div`
  width: 40rem;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  h3 {
    color: #444;
    padding: 0.5rem 0;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 550px){
    
  }
  }
`;

export const Close = styled(IoMdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const Stars = styled.div`
  padding: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding: 5px;
  }

  span {
    color: #fd1e53;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const Star = styled(BsStarHalf)`
  color: #fd1e53;
  padding: 2px;
`;
export const StarInt = styled(BsStarFill)`
  color: #fd1e53;
  padding: 2px;
`;

export const Descrip = styled.p`
  line-height: 1.5;
  padding: .5rem 0;
  font-size: .9rem;
  color: #777;
  font-family: "Roboto", sans-serif;
  text-align: center;

  @media (max-width: 550px) {
    font-size: .7rem;
    padding: 0;
  }
`;

export const Value = styled.div`
  padding: 1rem 0;
  font-size: 2rem;
  color: #fd1e53;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 550px){
    margin-top: .2rem;
  }
`;

export const SButtons = css`
  padding: 0.7rem 1.6rem;
  text-decoration: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  transition: all 0.1s linear;

  &:hover {
    transform: translateY(-3px);
    -webkit-box-shadow: -1px 11px 17px -12px rgba(0, 0, 0, 1);
    -moz-box-shadow: -1px 11px 17px -12px rgba(0, 0, 0, 1);
    box-shadow: -1px 11px 17px -12px rgba(0, 0, 0, 1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

export const BuyP = styled(Link)`
  ${SButtons};
  background-color: transparent;
  border: 1px solid #444;
  color: #444;
`;

export const CartP = styled(Link)`
  ${SButtons};
  background-color: #444;
  color: #fff;
`;
