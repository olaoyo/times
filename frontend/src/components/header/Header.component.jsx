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

function Header() {
  return (
    <HeaderStyles>
      <Navigation>
        <Logo>TIMES</Logo>
        <NavMenu>WATCHES</NavMenu>
        <NavMenu>ABOUT</NavMenu>
        <NavMenu>STORE</NavMenu>
      </Navigation>
      <User>
        <Cart>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Cart>
        <Language>
          <Option>ENG</Option>
          <Option>ESP</Option>
        </Language>
        <Auth>LOG IN</Auth>
      </User>
    </HeaderStyles>
  );
}

export default Header;
