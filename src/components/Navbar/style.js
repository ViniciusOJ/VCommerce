import styled from "styled-components";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Cart = styled(BsFillCartFill)``;

export const Register = styled(BsFillPersonFill)``;

export const Login = styled(FaSignInAlt)``;

export const Menu = styled(BiMenuAltRight)``;

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  color: #404040;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-style: italic;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: bold;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000;
  }

  @media (max-width: 950px) {
    font-size: 1.2rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const NavMenuAction = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuLinks = styled(Link)`
  padding: 0 1rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #808080;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  transition: 0.3s ease-in-out;

  :hover {
    transform: translateY(-3px);
    color: #000;
  }

  ::after {
    content: "";
    height: 3px;
    width: 0%;
    background-color: #fd1e53;
    display: block;
    transition: 0.3s ease-in-out;

    @media (max-width: 950px) {
      height: 2px;
    }
  }
  :hover::after {
    content: "";
    height: 3px;
    width: 100%;
    background-color: #fd1e53;
    display: block;

    @media (max-width: 950px) {
      height: 2px;
    }
  }

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const NavActionLinks = styled(Link)`
  display: flex;
  color: #393939;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  margin: 0 0.2rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid #393939;
  border-radius: 5px;
  gap: 0.6rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: #fd1e53;
    border: 2px solid #000;
  }

  @media (max-width: 950px) {
    padding: 0.4rem;
    gap: 0.2rem;
  }
`;
