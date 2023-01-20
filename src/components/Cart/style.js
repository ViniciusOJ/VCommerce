import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineClear } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ContainerCart = styled.div`
  transition: all 0.2s ease-in-out;
  position: fixed;
  top: 0;
  right: ${({ CartOpen }) => (CartOpen ? "0" : "-100%")};
  min-width: 15rem;
  height: 100vh;
  overflow-y: scroll;
  background: #fff;
  z-index: 10;
  -webkit-box-shadow: -5px -4px 48px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px -4px 48px 5px rgba(0, 0, 0, 0.75);
  box-shadow: -5px -4px 48px 5px rgba(0, 0, 0, 0.75);
  border-left: 1px solid rgba(0, 0, 0, 0.35);
  padding: 1rem;
  font-family: "Roboto", sans-serif;

  p {
    padding: 1rem;
    margin-top: 3rem;
    font-size: 1.2rem;
    top: 5rem;
    color: #444;
    word-wrap: break-word;
    text-align: center;
    text-decoration: underline;
  }
`;

export const TitleCart = styled.h2`
  text-align: center;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
`;

export const TitleCartItem = styled(AiOutlineShoppingCart)``;

export const ItemClose = styled(IoClose)`
  font-size: 1.5rem;
  position: absolute;
  top: 0.6rem;
  padding: 0.2rem;
  right: 1rem;
  color: #444;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #000;
  }
`;

export const ClearCart = styled.button`
  margin: 1rem auto;
  height: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #bf0000;
  border-radius: 8px;
  background: none;
  color: #bf0000;
  gap: 0.6rem;
  cursor: pointer;
`;
export const ItemClearCart = styled(AiOutlineClear)`
  font-size: 1rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 7rem;
  border: 1px solid #222;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.8rem;
  border-radius: 0.5rem;
  padding: 1rem;
  z-index: 1;
`;

export const ItemImagemContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 200, 0, 0.1);
  border-radius: 50%;
  padding: 0.5rem;
`;

export const ItemImagem = styled.img`
  height: 80%;
  object-fit: cover;
  opacity: 1 !important;
`;

export const ItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 11rem;
  gap: 0.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
`;

export const ItemTitle = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  color: #444;
`;

export const QuantityC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const arrows = css`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ArrowLeft = styled(BsFillCaretLeftFill)`
  ${arrows}
  &:hover {
    color: #800000;
  }
`;
export const ArrowRight = styled(BsFillCaretRightFill)`
  ${arrows}
  &:hover {
    color: #2dc26e;
  }
`;
export const ItemQuantity = styled.span`
  font-weight: 400;
`;
export const ItemValue = styled.span`
  color: #2dc26e;
  font-weight: 600;
`;

export const ContainerConfirmed = styled(Link)`
  height: 3rem;
  margin: 2rem 0;
  border: 1px solid #2dc26e;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #2dc26e;
  gap: 0.5rem;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2dc26e;
  }
`;

export const ValueTotal = styled.div`
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

export const Confirmed = styled(GiConfirmed)``;
