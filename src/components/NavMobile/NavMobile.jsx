import React, { useState } from "react";
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

function NavMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Nav>
      <Logo to="/">
        <span style={{ color: "#FD1E53" }}>V</span> Commerce
      </Logo>
      <NavMenuAction>
        <Cart />
        <Hamburguer onClick={toggle} />
      </NavMenuAction>
      <NavMenu isMobile={isMobile}>
        <Close onClick={toggle} />
        {menuData.map((item, index) => (
          <NavMenuLinks key={index} to={item.link}>
            {item.title}
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
