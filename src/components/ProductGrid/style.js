import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

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
  padding: 2rem 2rem;
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

export const Stars = styled.div`
  padding: 0.5rem 0;
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
// --------Final Grid Items-------- //
