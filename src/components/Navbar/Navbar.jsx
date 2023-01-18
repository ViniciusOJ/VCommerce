import React from "react";
import { menuData } from "../../data/MenuData";
import {
  Nav,
  Logo,
  NavMenu,
  NavMenuAction,
  NavMenuLinks,
  NavActionLinks,
  Cart,
  Register,
  Login,
} from "./style";

function Navbar({ activeCartOpen }) {
  return (
    <Nav>
      <Logo to={`/`}>
        <span style={{ color: "#FD1E53" }}>V</span> Commerce
      </Logo>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavMenuAction>
        <NavActionLinks>
          <Login /> Login
        </NavActionLinks>
        <NavActionLinks>
          <Register />
          Register
        </NavActionLinks>
        <NavActionLinks onClick={activeCartOpen}>
          <Cart />
          Cart
        </NavActionLinks>
      </NavMenuAction>
    </Nav>
  );
}

export default Navbar;
