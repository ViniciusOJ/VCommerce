import React, {useContext} from "react";
import { menuData } from "../../data/MenuData";
import { CartContext } from "../../hooks/cart";
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

function Navbar({ activeCartOpen }) {
  const { productsCart } = useContext(CartContext);

  return (
    <Nav>
      <Logo to="/">
        <span style={{ color: "#FD1E53" }}>V</span> Commerce
      </Logo>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} href={item.id} key={index}>
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
