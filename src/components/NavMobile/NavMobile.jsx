import React, { useContext, useState } from "react";
import {
  Logo,
  Nav,
  Hamburguer,
  Cart,
  NavMenuAction,
  NavMenuLinks,
  NavMenu,
  Close,
  RegisterC,
  Register,
  LoginC,
  Login,
} from "./style";
import { menuData } from "../../data/MenuData";
import { CartContext } from "../../hooks/cart";

function NavMobile({ activeCartOpen }) {
  const [isMobile, setIsMobile] = useState(false);
  const { hiddenCart } = useContext(CartContext);
  const toggle = () => setIsMobile(!isMobile);
  return (
    <Nav>
      <Logo to="/">
        <span style={{ color: "#FD1E53" }}>V</span> Commerce
      </Logo>
      <NavMenuAction>
        {hiddenCart ? (
          <Cart onClick={activeCartOpen} style={{ display: "none" }} />
        ) : (
          <Cart onClick={activeCartOpen} />
        )}

        <Hamburguer onClick={toggle} />
      </NavMenuAction>
      <NavMenu isMobile={isMobile}>
        <Close onClick={toggle} />
        {menuData.map((item, index) => (
          <NavMenuLinks key={index}>
            <a href={item.link}>{item.title}</a>
          </NavMenuLinks>
        ))}
        <RegisterC>
          <Register /> Register
        </RegisterC>
        <LoginC>
          <Login /> Login
        </LoginC>
      </NavMenu>
    </Nav>
  );
}

export default NavMobile;
