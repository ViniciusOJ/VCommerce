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
  Menu,
} from "./style";

function Navbar() {
  return (
    <Nav>
      <Logo to="/">
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
        <NavActionLinks to={"/login"}>
          <Login /> Login
        </NavActionLinks>
        <NavActionLinks to={"/register"}>
          <Register />
          Register
        </NavActionLinks>
        <NavActionLinks to={"/cart"}>
          <Cart />
          Cart (0)
        </NavActionLinks>      
      </NavMenuAction>
    </Nav>
  );
}

export default Navbar;
