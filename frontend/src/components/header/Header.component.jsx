import { Link } from "react-router-dom";

import {
  HeaderStyles,
  Navigation,
  User,
  Logo,
  NavMenu,
  Cart,
  Language,
  Option,
  Auth,
} from "./Header.styles.jsx";

import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderStyles>
        <Navigation>
          <Link to="/">
            <Logo>TIMES</Logo>
          </Link>
          <Link to="/products">
            <NavMenu>WATCHES</NavMenu>
          </Link>
          <Link to="/about">
            <NavMenu>ABOUT US</NavMenu>
          </Link>
          <Link to="/products">
            <NavMenu>STORE</NavMenu>
          </Link>
        </Navigation>
        <User>
          <Link to="/cart">
            <Cart>
              <span className="material-symbols-outlined">shopping_cart</span>
            </Cart>
          </Link>
          <Language>
            <Option>ENG</Option>
            <Option>ESP</Option>
          </Language>
          <Link to="/login">
            <Auth>LOG IN</Auth>
          </Link>
        </User>
      </HeaderStyles>
      <Outlet />
    </>
  );
}

export default Header;
