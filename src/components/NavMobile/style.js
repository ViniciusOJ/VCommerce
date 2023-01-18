import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  display: none;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  color: #404040;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: bold;

  &:hover {
    color: #000;
  }
`;

export const NavMenuAction = styled.div`
  display: flex;
  position: absolute;
  right: 2rem;
  align-items: center;
  padding: 1rem 0.3rem;
  gap: 1rem;
`;

export const Hamburguer = styled(BiMenuAltRight)`
  color: #393939;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;

export const Cart = styled(BsFillCartFill)`
  color: #393939;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;

export const Close = styled(RiCloseFill)`
  color: #fd1e53;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 1.6rem;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
    color: #b40a32;
  }
`;

export const NavMenu = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  position: absolute;
  right: ${({ isMobile }) => (isMobile ? "0" : "-100%")};
  top: 0;
  width: 70%;
  height: 100vh;
  opacity: ${({ isMobile }) => (isMobile ? "1" : "0")};
  flex-direction: column;
  background: linear-gradient(180deg, #000, #000);
`;

export const NavMenuLinks = styled.div`
  padding: 0 1rem;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  font-weight: 500;
  transition: 0.5s ease-in;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }

  :hover {
    transform: translateY(-3px);
  }

  ::after {
    content: "";
    height: 3px;
    width: 0%;
    background-color: #fd1e53;
    display: block;
    transition: 0.3s ease-in-out;
  }
  :hover::after {
    content: "";
    height: 3px;
    width: 50%;
    background-color: #fd1e53;
    display: block;
  }

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const RegisterC = styled.div`
  display: flex;
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  padding: 0.4rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: #fd1e53;
  color: #fff;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #b40a32;
    transform: translateY(-3px);
  }
`;
export const LoginC = styled.div`
  display: flex;
  position: absolute;
  bottom: 32%;
  left: 0;
  right: 0;
  padding: 0.4rem;
  margin: 0.4rem 0 0.3rem 0;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: #fd1e53;
  color: #fff;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #b40a32;
    transform: translateY(-3px);
  }
`;

export const Register = styled(BsFillPersonFill)``;

export const Login = styled(FaSignInAlt)``;
